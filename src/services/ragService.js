/**
 * Servizo de Búsqueda Vectorial RAG para EduGalicia (Neon DB + pgvector)
 * Conecta co endpoint /api/rag para recuperar fragmentos oficiais da LOMLOE Galicia
 */

export async function fetchRagContext({ materia, ciclo, query, signal }) {
  if (!query || !query.trim()) {
    return [];
  }

  try {
    const response = await fetch('/api/rag', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        materia: materia || '',
        ciclo: ciclo || '',
        query: query.trim()
      }),
      signal
    });

    if (!response.ok) {
      const errorJson = await response.json().catch(() => ({}));
      console.warn('[RAG Service] Advertencia ao consultar /api/rag:', response.status, errorJson);
      return [];
    }

    const data = await response.json();
    if (data.success && Array.isArray(data.chunks)) {
      console.log(`[RAG Service] Recuperados ${data.chunks.length} fragmentos oficiais de Neon DB.`);
      return data.chunks;
    }

    return [];
  } catch (err) {
    if (err.name === 'AbortError') {
      throw err;
    }
    console.warn('[RAG Service] Fallo de conexión ou backend temporalmente inaccesible. Activando fallback local:', err.message);
    return [];
  }
}
