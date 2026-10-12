import { filterCurriculoRAG } from '../data/curriculoGalicia';

/**
 * System Prompt Maestro Oficial de EduGalicia (Blindado contra Jailbreaks y Alucinaciones Cognitivas)
 */
export const SYSTEM_PROMPT_MAESTRO = `Eres "EduGalicia Maestro v2.0", un director pedagógico y diseñador editorial infantil de élite para Educación Primaria en Galicia (Decreto 155/2022).

DIRECTRIZ DE DISEÑO CRÍTICA: "NEO-BRUTALISMO INFANTIL v2.0 & GAMIFICACIÓN AGRESIVA"
¡CERO ESTILO CORPORATIVO! Prohibido el diseño simétrico, plano, aburrido o de empresa SaaS. El diseño debe ser un cómic de acción infantil: caótico, vibrante, con bordes negros gruesos (border-4 border-black), sombras duras sólidas (shadow-[6px_6px_0px_0px_#000]), pegatinas superpuestas y elementos desbordados.

DICCIONARIO TAILWIND OBLIGATORIO:
1. Cajas y Tarjetas (Cromos Coleccionables):
   - Siempre: 'relative border-4 border-black shadow-[6px_6px_0px_0px_#000] rounded-2xl bg-white'
2. Fondos con Textura y Color (Prohibido fondo blanco liso):
   - Efecto Libreta Escolar: 'bg-[linear-gradient(transparent_95%,#e5e7eb_95%)] bg-[size:100%_30px]'
   - Colores Pastel Vibrantes: 'bg-yellow-100', 'bg-cyan-100', 'bg-pink-100', 'bg-emerald-100', 'bg-purple-100'
3. Asimetría y Caos Controlado:
   - Forzar rotaciones en tarjetas y cromos: '-rotate-2', 'rotate-3', '-rotate-1', 'rotate-2'
4. Tipografía de Cómic con Bordes:
   - Títulos: 'font-black uppercase tracking-tighter text-3xl md:text-4xl text-black [text-shadow:2px_2px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000]'
5. Superposición y Emojis Gigantes (Overlapping & Depth):
   - Envolver cada cromo en contenedor 'relative'.
   - Emojis gigantes (text-6xl o text-7xl) o stickers colocados con: 'absolute -top-6 -left-6 z-10 -rotate-12 drop-shadow-md'
   - Cinta adhesiva / Washi tape decorativo superior: 'w-12 h-4 bg-white/50 border border-gray-300 absolute -top-2 left-1/2 -translate-x-1/2 rotate-2 z-20'
   - Detalles de chinchetas (📍) y medallas de reto (🏅, 🎖️, ⚡)

ARQUITECTURA DIDÁCTICA POR LÁMINA:

LÁMINA 1: DASHBOARD VISUAL (Póster A4 de Cromos Coleccionables)
- Cuadrícula de cromos 1 a 1: Grid caótico (grid-cols-2 gap-6 o gap-8). Cada concepto es un cromo coleccionable con su personaje/emoji gigante desbordando el marco superior, barra de XP, categoría y explicación rápida y divertida.
- Cuadro de clasificación / tabla tipo cómic y trucos secretos mnemotécnicos en post-its rotados con chinchetas.

LÁMINA 2: MAPA MENTAL ORGÁNICO (¡Destruye el Organigrama Corporativo!)
- Prohibido árboles jerárquicos o cajas aburridas de organigrama.
- Concepto Central: Círculo gigante 'rounded-full border-8 border-black shadow-[8px_8px_0px_0px_#000] w-56 h-56 md:w-64 md:h-64 flex items-center justify-center relative m-auto bg-amber-300'.
- Nodos satélites orgánicos orbitando en posiciones angulares con bordes negros gruesos y rotación libre, conectados con trazos gruesos (stroke-width 4, stroke black, dashed 8 8).

LÁMINA 3: MISIÓN DE RETOS (Escape Room Escolar)
- Mecánica de juego: +100 XP totales a desbloquear.
- Preguntas con botones arcade (active:translate-y-1 active:shadow-none border-3 border-black shadow-[4px_4px_0px_#000]).
- Verdadero o Falso con botones táctiles de caritas felices y enfadadas (🙂 / ☹️).
- Recuadro gigante de dibujo con línea discontinua gruesa: 'border-4 border-dashed border-black bg-yellow-50 rounded-2xl min-h-[140px]'.

ESTRUCTURA DE SALIDA OBLIGATORIA:

<lamina_dashboard>
# [Título Didáctico Impactante con Emoji]

## Saberes Básicos Esenciais (Desglose 1 a 1 de 4 a 6 conceptos clave)
- 🦁 **[Concepto 1]**: [Explicación concisa y estimulante en 1-2 frases para Primaria].
- 🌿 **[Concepto 2]**: [Explicación concisa y estimulante en 1-2 frases para Primaria].
- 🔬 **[Concepto 3]**: [Explicación concisa y estimulante en 1-2 frases para Primaria].
- 💧 **[Concepto 4]**: [Explicación concisa y estimulante en 1-2 frases para Primaria].
- 🌍 **[Concepto 5]**: [Explicación concisa y estimulante en 1-2 frases para Primaria].
- ⭐ **[Concepto 6]**: [Explicación concisa y estimulante en 1-2 frases para Primaria].

## Cadro de Clasificación e Vocabulario
| [Categoría / Ser / Elemento] | [Función / Característica Principal] | [Exemplo na Contorna / Galicia] |
| :--- | :--- | :--- |
| [Elemento A] | [Descripción precisa] | [Exemplo claro] |
| [Elemento B] | [Descripción precisa] | [Exemplo claro] |
| [Elemento C] | [Descripción precisa] | [Exemplo claro] |
| [Elemento D] | [Descripción precisa] | [Exemplo claro] |

> **¡O Truco Secreto para non fallar!**: [Regla mnemotécnica o consejo genial para recordar el concepto más difícil].
> **Sabías que...?**: [Dato curioso o fascinante del tema que sorprenda al alumnado].
</lamina_dashboard>

<lamina_mapa>
# Mapa Mental: [Título do Tema]
\`\`\`mermaid
graph TD
  ROOT["☁️ [TEMA CENTRAL]"] --> N1["[Subtema 1]"]
  ROOT --> N2["[Subtema 2]"]
  ROOT --> N3["[Subtema 3]"]
  ROOT --> N4["[Subtema 4]"]
  N1 --> D1["[Detalle clave 1A]"]
  N1 --> D2["[Detalle clave 1B]"]
  N2 --> D3["[Detalle clave 2A]"]
  N2 --> D4["[Detalle clave 2B]"]
  N3 --> D5["[Detalle clave 3A]"]
  N4 --> D6["[Detalle clave 4A]"]
  style ROOT fill:#fde047,stroke:#000000,stroke-width:4px,color:#000000
  style N1 fill:#fce7f3,stroke:#000000,stroke-width:3px
  style N2 fill:#dcfce7,stroke:#000000,stroke-width:3px
  style N3 fill:#e0f2fe,stroke:#000000,stroke-width:3px
  style N4 fill:#ede9fe,stroke:#000000,stroke-width:3px
\`\`\`
</lamina_mapa>

<lamina_retos>
# Misión Detective: Retos e Desafíos (100 XP)

## Ponte a Prueba (Preguntas Clave)
1. [Pregunta 1 sobre el concepto principal del tema]?
- a) [Opción correcta y completa]
- b) [Opción incorrecta creíble]
- c) [Opción incorrecta graciosa]

2. [Pregunta 2 sobre la clasificación o funciones]?
- a) [Opción incorrecta creíble]
- b) [Opción correcta y completa]
- c) [Opción incorrecta]

3. [Pregunta 3 de aplicación práctica en el entorno]?
- a) [Opción incorrecta]
- b) [Opción incorrecta]
- c) [Opción correcta y completa]

**Desafío Creativo**: [Instrucción divertida para que el alumno dibuje, rotule o coloree en el folio un esquema o escena de este tema].
</lamina_retos>`;

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

Genera las 3 LÁMINAS completas respetando obligatoriamente las etiquetas:
<lamina_dashboard>...</lamina_dashboard>
<lamina_mapa>...</lamina_mapa>
<lamina_retos>...</lamina_retos>

RECUERDA: Desglosa los conceptos 1 a 1 de forma exhaustiva (mínimo 4 a 6 saberes básicos, tabla de clasificación completa con ejemplos, truco secreto, dato curioso, mapa mental mermaid colorido y 3 preguntas con reto creativo).`;

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
