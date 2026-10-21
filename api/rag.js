import { PrismaClient } from '@prisma/client';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Resolver URL da base de datos (Prioriza EDUGALICIA_DATABASE_URL para evitar conflitos de integracións en Vercel)
const dbUrl = process.env.EDUGALICIA_DATABASE_URL || process.env.DATABASE_URL;

// Singleton de Prisma para reutilizar conexiones en Serverless / Vite dev
let prisma;
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient({
    datasources: dbUrl ? { db: { url: dbUrl } } : undefined
  });
} else {
  if (!global.__prisma) {
    global.__prisma = new PrismaClient({
      datasources: dbUrl ? { db: { url: dbUrl } } : undefined
    });
  }
  prisma = global.__prisma;
}

// Normalización de Materia según la nomenclatura de KnowledgeDocument en Neon DB
function normalizeMateria(rawMateria) {
  if (!rawMateria) return '%';
  const m = String(rawMateria).toLowerCase();
  if (m.includes('natur') || m.includes('medio')) return '%Natureza%';
  if (m.includes('socia')) return '%Sociais%';
  if (m.includes('mate')) return '%Matemáticas%';
  if (m.includes('galeg')) return '%Galega%';
  if (m.includes('castel') || m.includes('espanol') || m.includes('español')) return '%Castel%';
  if (m.includes('ingl') || m.includes('english')) return '%Inglés%';
  if (m.includes('art') || m.includes('plast')) return '%Artística%';
  if (m.includes('fisi') || m.includes('ef')) return '%Física%';
  if (m.includes('valore') || m.includes('etic')) return '%Valores%';
  return `%${rawMateria}%`;
}

// Normalización de Ciclo según la nomenclatura de KnowledgeDocument en Neon DB
function normalizeCiclo(rawCiclo) {
  if (!rawCiclo) return '%';
  const c = String(rawCiclo).toLowerCase();
  if (c.includes('1') || c.includes('primero') || c.includes('primeiro')) return '%1º Ciclo%';
  if (c.includes('2') || c.includes('segundo')) return '%2º Ciclo%';
  if (c.includes('3') || c.includes('terceiro') || c.includes('tercero')) return '%3º Ciclo%';
  return `%${rawCiclo}%`;
}

// Generación de embedding con modelos de última generación y fallback transparente
async function generateQueryEmbedding(queryText, apiKey) {
  const genAI = new GoogleGenerativeAI(apiKey);
  const candidateModels = [
    'gemini-embedding-2',
    'gemini-embedding-2-preview',
    'gemini-embedding-001'
  ];

  let lastErr = null;
  for (const modelName of candidateModels) {
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.embedContent({
        content: { parts: [{ text: queryText.slice(0, 1000) }] },
        outputDimensionality: 768
      });
      const values = result?.embedding?.values;
      if (values && values.length === 768) {
        return values;
      }
    } catch (err) {
      lastErr = err;
      console.warn(`[RAG] Fallo temporal con ${modelName}:`, err.message);
    }
  }
  throw new Error(`Non se puido xerar o vector de embedding (${lastErr?.message || 'Quota/API error'})`);
}

/**
 * Handler HTTP principal para Vercel Serverless Functions y Vite Middleware
 * Recibe: { materia, ciclo, query }
 * Devuelve: { success: true, chunks, count } con filtrado estricto de calidad anti-ruido
 */
export default async function handler(req, res) {
  // Configuración de cabeceras CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Método non permitido. Use POST con { materia, ciclo, query }'
    });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const { materia, ciclo, query } = body;

    const cleanQuery = (query || '').trim();
    if (!cleanQuery) {
      return res.status(400).json({
        error: 'O parámetro "query" é obrigatorio para a busca vectorial RAG.'
      });
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      console.error('[RAG] Falta GEMINI_API_KEY no servidor.');
      return res.status(500).json({
        error: 'GEMINI_API_KEY non configurada no backend.'
      });
    }

    const materiaPattern = normalizeMateria(materia);
    const cicloPattern = normalizeCiclo(ciclo);

    console.log(`[RAG] Busca vectorial: Query="${cleanQuery}", Materia="${materiaPattern}", Ciclo="${cicloPattern}"`);

    // 1. Generar embedding vectorial de 768 dimensiones
    const queryVector = await generateQueryEmbedding(cleanQuery, apiKey);
    const vectorStr = `[${queryVector.join(',')}]`;

    // 2. Consulta cruda $queryRaw con pgvector (<=>), filtro estricto y PURGA de ruido SCORM / eXeLearning
    let rawChunks = await prisma.$queryRaw`
      SELECT 
        dc.id,
        dc."documentId",
        dc.heading,
        dc.content,
        dc."tokenCount",
        kd.materia,
        kd.ciclo,
        kd."temaOficial",
        (dc.embedding <=> ${vectorStr}::vector) AS distance
      FROM "DocumentChunk" dc
      JOIN "KnowledgeDocument" kd ON dc."documentId" = kd.id
      WHERE kd.materia ILIKE ${materiaPattern}
        AND kd.ciclo ILIKE ${cicloPattern}
        AND dc.content NOT LIKE '%showMinimize%'
        AND dc.content NOT LIKE '%Enter an answer option%'
        AND dc.content NOT LIKE '%Click on the <Add%'
        AND dc.content NOT LIKE '%Type in the feedback%'
        AND dc.content NOT LIKE '%percentageClue%'
        AND length(dc.content) > 50
      ORDER BY dc.embedding <=> ${vectorStr}::vector ASC
      LIMIT 8;
    `;

    // 3. Fallback a materia si no hay chunks con el ciclo estricto
    if (!rawChunks || rawChunks.length === 0) {
      console.log(`[RAG] 0 chunks con filtro estricto. Ampliando busca á materia completa: ${materiaPattern}`);
      rawChunks = await prisma.$queryRaw`
        SELECT 
          dc.id,
          dc."documentId",
          dc.heading,
          dc.content,
          dc."tokenCount",
          kd.materia,
          kd.ciclo,
          kd."temaOficial",
          (dc.embedding <=> ${vectorStr}::vector) AS distance
        FROM "DocumentChunk" dc
        JOIN "KnowledgeDocument" kd ON dc."documentId" = kd.id
        WHERE kd.materia ILIKE ${materiaPattern}
          AND dc.content NOT LIKE '%showMinimize%'
          AND dc.content NOT LIKE '%Enter an answer option%'
          AND dc.content NOT LIKE '%Click on the <Add%'
          AND dc.content NOT LIKE '%Type in the feedback%'
          AND dc.content NOT LIKE '%percentageClue%'
          AND length(dc.content) > 50
        ORDER BY dc.embedding <=> ${vectorStr}::vector ASC
        LIMIT 8;
      `;
    }

    // 4. Umbral de calidad estricta (Score Threshold):
    // Descartar fragmentos con distancia excesiva (distancia > 0.82) o cadenas residuales de JSON
    const validChunks = (rawChunks || [])
      .filter(chunk => {
        const text = (chunk.content || '').trim();
        // Si la distancia es muy grande, no hay coincidencia semántica real
        if (Number(chunk.distance) > 0.82) return false;
        // Evitar chunks que comiencen por sintaxis de código
        if (text.startsWith('{"') || text.startsWith(',"') || text.startsWith('}') || text.startsWith(']')) return false;
        if (text.startsWith('audio/mpeg') && text.length < 120) return false;
        return true;
      })
      .slice(0, 4)
      .map(chunk => ({
        id: chunk.id,
        documentId: chunk.documentId,
        heading: chunk.heading || chunk.temaOficial || '',
        content: chunk.content.replace(/\r/g, '').trim(),
        tokenCount: chunk.tokenCount,
        materia: chunk.materia,
        ciclo: chunk.ciclo,
        temaOficial: chunk.temaOficial,
        distance: Number(chunk.distance),
        similarity: Number((1 - chunk.distance).toFixed(4))
      }));

    return res.status(200).json({
      success: true,
      query: cleanQuery,
      filter: {
        materiaOriginal: materia,
        cicloOriginal: ciclo,
        materiaPattern,
        cicloPattern
      },
      count: validChunks.length,
      chunks: validChunks
    });

  } catch (error) {
    console.error('[RAG] Erro ao procesar a busca vectorial:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Erro interno na busca vectorial RAG',
      chunks: []
    });
  }
}
