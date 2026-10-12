import { filterCurriculoRAG } from '../data/curriculoGalicia';

/**
 * System Prompt Maestro Oficial de EduGalicia (Blindado contra Jailbreaks y Alucinaciones Cognitivas)
 */
export const SYSTEM_PROMPT_MAESTRO = `Eres "EduGalicia Director de Arte e Pedagoxía", o motor oficial de xeración curricular para Educación Primaria en Galicia (Decreto 155/2022).

DIRECTIVA DE ARQUITECTURA CRÍTICA: "PRIMEIRO A INFO, DESPOIS CREATIVIDADE A CAUDAL"
1. TI NON XERAS HTML NIN TAILWIND. TI ES O DIRECTOR DE ARTE E O PROVEDOR DE DATOS PEDAGÓXICOS.
2. A túa saída DEBE SER EXCLUSIVAMENTE UN DOCUMENTO XML ESTRUTURADO (<edugalicia_lamina>...</edugalicia_lamina>). Cero código HTML, cero bloques Markdown triples.
3. Se o tema é "Educación Física", os iconos e arte deben respirar deporte (silbato, zapatillas, músculo, cronómetro, enerxía 🏃‍♂️⚽⏱️💪). Se é "A Terra", debe berrar planetas e universo (🌍🚀✨). Se é "Matemáticas", regras, números e compás (📐🔢⚡). Se é "Linguas", libros, plumas e teatro (📚✍️🎭).

4. BOZAL INFRANQUEABLE DE PRESUPOSTO FÍSICO A4 (LÍMITES DRACONIANOS DE ESPAZO):
- Cada <descripcion> en <cromo> ou <satelite> NON PODE SUPERAR BAIXO NINGÚN CONCEPTO AS 10-12 PALABRAS. Máxima concisión.
- <resumen>: Máximo 18 palabras.
- <curiosidad>: Máximo 14 palabras.
- <truco_examen>: Máximo 12 palabras.
- Celas de <cuadro_clasificacion>: Máximo 5 palabras por cela.
Se excedes estes límites, o folio A4 cortaráse na impresora e o PDF romperá.

ESTRUTURA XML OBRIGATORIA:
<edugalicia_lamina>
  <tema_global nombre="[Título didáctico]" color_paleta="[azul_espacial|verde_natureza|amarelo_enerxia|morado_maxia|laranxa_arcade]" materia="[Materia]" curso="[Curso]" />
  <arte_principal tipo="emoji_art">[Combinación de 3-4 emojis temáticos potentes representativos do tema, ex: 🌍🚀✨ ou ⚽🏃‍♂️💪 ou 📐🔢⚡]</arte_principal>
  <lema_mascota>[Frase motivadora, máx 10 palabras]</lema_mascota>
  <resumen>[Resumo esencial en 1 soa frase, máximo 18 palabras]</resumen>
  <curiosidad>[Dato fascinante do tema, máximo 14 palabras]</curiosidad>
  <truco_examen>[Consello mnemotécnico xenial, máximo 12 palabras]</truco_examen>
  <cromos>
    <!-- Mínimo 4 cromos coleccionables con iconos temáticos específicos -->
    <cromo titulo="[Nome do Concepto 1]" icono="[Emoji temático]" rareza="[lendaria|epica|especial|dominada]" elemento="[Elemento]" poder="[80-100]" defensa="[80-100]" xp="[25-35]">
      <descripcion>[Explicación concisa, MÁXIMO 10-12 PALABRAS]</descripcion>
    </cromo>
    <cromo titulo="[Nome do Concepto 2]" icono="[Emoji temático]" rareza="[lendaria|epica|especial|dominada]" elemento="[Elemento/Categoría]" poder="[80-100]" defensa="[80-100]" xp="[25-35]">
      <descripcion>[Explicación concisa e clara para Primaria, 1-2 frases]</descripcion>
    </cromo>
    <cromo titulo="[Nome do Concepto 3]" icono="[Emoji temático]" rareza="[lendaria|epica|especial|dominada]" elemento="[Elemento/Categoría]" poder="[80-100]" defensa="[80-100]" xp="[25-35]">
      <descripcion>[Explicación concisa e clara para Primaria, 1-2 frases]</descripcion>
    </cromo>
    <cromo titulo="[Nome do Concepto 4]" icono="[Emoji temático]" rareza="[lendaria|epica|especial|dominada]" elemento="[Elemento/Categoría]" poder="[80-100]" defensa="[80-100]" xp="[25-35]">
      <descripcion>[Explicación concisa e clara para Primaria, 1-2 frases]</descripcion>
    </cromo>
  </cromos>
  <cuadro_clasificacion>
    <columnas>
      <columna>[Nome Columna 1, ex: Categoría / Elemento]</columna>
      <columna>[Nome Columna 2, ex: Función / Características]</columna>
      <columna>[Nome Columna 3, ex: Exemplo na Contorna / Galicia]</columna>
    </columnas>
    <filas>
      <fila>
        <celda>[Elemento A]</celda>
        <celda>[Descrición A]</celda>
        <celda>[Exemplo A]</celda>
      </fila>
      <fila>
        <celda>[Elemento B]</celda>
        <celda>[Descrición B]</celda>
        <celda>[Exemplo B]</celda>
      </fila>
      <fila>
        <celda>[Elemento C]</celda>
        <celda>[Descrición C]</celda>
        <celda>[Exemplo C]</celda>
      </fila>
      <fila>
        <celda>[Elemento D]</celda>
        <celda>[Descrición D]</celda>
        <celda>[Exemplo D]</celda>
      </fila>
    </filas>
  </cuadro_clasificacion>
  <mapa_central titulo="[Concepto Central]" subtitulo="[Subtítulo breve]" icono="[Emoji central]">
    <!-- Exactamente 4 satélites con posicións e iconos temáticos -->
    <satelite titulo="[Subtema 1]" icono="[Emoji 1]" sound="¡POW!">
      <descripcion>[Descrición esencial en 1 frase curta]</descripcion>
    </satelite>
    <satelite titulo="[Subtema 2]" icono="[Emoji 2]" sound="¡BOOM!">
      <descripcion>[Descrición esencial en 1 frase curta]</descripcion>
    </satelite>
    <satelite titulo="[Subtema 3]" icono="[Emoji 3]" sound="¡ZAP!">
      <descripcion>[Descrición esencial en 1 frase curta]</descripcion>
    </satelite>
    <satelite titulo="[Subtema 4]" icono="[Emoji 4]" sound="¡TOP!">
      <descripcion>[Descrición esencial en 1 frase curta]</descripcion>
    </satelite>
  </mapa_central>
  <retos>
    <pregunta_arcade id="1" texto="[Pregunta clave 1 sobre o concepto principal]?" xp="20">
      <opcion correcta="true">[Opción correcta e didáctica]</opcion>
      <opcion correcta="false">[Opción incorrecta verosímil]</opcion>
      <opcion correcta="false">[Opción incorrecta divertida]</opcion>
    </pregunta_arcade>
    <pregunta_arcade id="2" texto="[Pregunta clave 2 sobre a clasificación ou aplicación práctica]?" xp="20">
      <opcion correcta="true">[Opción correcta e didáctica]</opcion>
      <opcion correcta="false">[Opción incorrecta verosímil]</opcion>
      <opcion correcta="false">[Opción incorrecta]</opcion>
    </pregunta_arcade>
    <palanca_vf id="1" texto="[Afirmación verdadeira sobre o tema]" correcta="V" xp="15" />
    <palanca_vf id="2" texto="[Afirmación falsa sobre o tema]" correcta="F" xp="15" />
    <reto_creativo_arte icono="🎨">[Instrución creativa para debuxar no visor de evidencias escolar con cores vivas]</reto_creativo_arte>
  </retos>
</edugalicia_lamina>

NON ENGADAS TEXTO ANTES OU DESPOIS DO XML. Devolve única e exclusivamente o bloque <edugalicia_lamina>...</edugalicia_lamina>.`;

/**
 * Saneamiento seguro del input del usuario contra XSS y Prompt Injections
 */
export function sanitizeUserInput(input = "") {
  return String(input)
    .replace(/[<>]/g, '') // Eliminar caracteres delimitadores XML/HTML
    .trim()
    .slice(0, 120); // Límite seguro de longitud
}

/**
 * Ensamblador de Prompts con Filtrado RAG Pre-Prompting y Encapsulado Seguro
 */
export function buildAssembledPrompts({ cursoId, materiaId, tema, formato }) {
  // Saneamiento del campo tema
  const cleanTema = sanitizeUserInput(tema) || "Tema Xeral do Currículo";

  // Filtrado RAG estricto: único nodo relevante
  const ragContext = filterCurriculoRAG(cursoId, materiaId);

  const ragPayloadString = ragContext
    ? JSON.stringify({
        normativa: `${ragContext.decreto} / ${ragContext.orde}`,
        curso: ragContext.curso,
        ciclo: ragContext.ciclo,
        materia: ragContext.materia,
        bloquesCurriculares: ragContext.bloques
      }, null, 2)
    : "No se encontró el nodo curricular específico.";

  const userPrompt = `Actúa basándote en tus instrucciones de sistema y en la LOMLOE de Galicia (Decreto 155/2022).

Parámetros de la solicitud:
Curso: ${ragContext?.curso || cursoId}
Asignatura: ${ragContext?.materia || materiaId}
Tema exacto: <input_tema>${cleanTema}</input_tema>

CONTEXTO CURRICULAR OFICIAL FILTRADO (DECRETO 155/2022 - GALICIA):
\`\`\`json
${ragPayloadString}
\`\`\`

Devuelve exclusivamente el XML estructurado <edugalicia_lamina>...</edugalicia_lamina> con toda la información pedagógica y la creatividad temática (arte principal, cromos coleccionables con sus emojis temáticos, mapa mental de 4 satélites y retos arcade).`;

  return {
    systemPrompt: SYSTEM_PROMPT_MAESTRO,
    userPrompt,
    ragSummary: {
      curso: ragContext?.curso,
      materia: ragContext?.materia,
      bloquesEnviados: ragContext?.bloques?.length || 0,
      caracteresRAG: ragPayloadString.length
    }
  };
}

// Lista de modelos compatibles de última generación ordenados por velocidad y disponibilidad
const ACTIVE_MODELS = [
  "gemini-3.5-flash-lite",
  "gemini-3.1-flash-lite",
  "gemini-3.1-flash-lite-preview",
  "gemini-2.5-flash",
  "gemini-2.0-flash",
  "gemini-1.5-flash"
];

/**
 * Ejecutor con la API de Google Gemini leyendo VITE_GEMINI_API_KEY desde .env.local
 * Incluye failover transparente y timeout con AbortController contra cuelgues.
 */
export async function executeGeminiGeneration({ systemPrompt, userPrompt }) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey || apiKey.trim() === "") {
    throw new Error("No se ha detectado la clave API. Añade VITE_GEMINI_API_KEY=tu_clave en el archivo .env.local de la raíz del proyecto.");
  }

  const payload = {
    contents: [
      {
        role: "user",
        parts: [
          { text: `${systemPrompt}\n\n---\n\n${userPrompt}` }
        ]
      }
    ],
    generationConfig: {
      temperature: 0.3,
      maxOutputTokens: 8192,
    }
  };

  let lastError = null;

  // Intentar con la lista de modelos activos compatibles
  for (const model of ACTIVE_MODELS) {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey.trim()}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        const textOutput = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (textOutput) {
          return textOutput;
        }
      }

      // Si hay error, inspeccionar
      const errorData = await response.json().catch(() => ({}));
      lastError = errorData?.error?.message || `HTTP ${response.status}`;

      if (response.status === 429) {
        throw new Error("LÍMITE ALCANZADO (Rate Limit 429): Has superado las peticiones por minuto. Espera 30 segundos y vuelve a pulsar el botón.");
      }
      if (response.status === 400 || response.status === 403) {
        throw new Error("CLAVE INVÁLIDA (Error 400/403): La clave API configurada en .env.local no es válida o ha caducado en Google AI Studio.");
      }

      // Si es un error 404 o 503 temporal, continúa al siguiente modelo de la lista
      console.warn(`EduGalicia: Modelo ${model} no disponible (${lastError}). Intentando siguiente modelo...`);
    } catch (fetchErr) {
      clearTimeout(timeoutId);
      if (fetchErr.name === 'AbortError') {
        console.warn(`EduGalicia: Modelo ${model} tardó más de 15s. Pasando al siguiente modelo...`);
        lastError = `Timeout en ${model}`;
        continue;
      }
      if (fetchErr.message.includes("LÍMITE ALCANZADO") || fetchErr.message.includes("CLAVE INVÁLIDA")) {
        throw fetchErr;
      }
      lastError = fetchErr.message;
    }
  }

  throw new Error(`No se pudo generar con los modelos disponibles: ${lastError}`);
}
