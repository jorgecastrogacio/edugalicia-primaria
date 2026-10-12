/**
 * Plantillas Didácticas Oficiales y Parser de Salida IA para EduGalicia
 */

export const DEFAULT_TEMPLATES = {
  ecosistemas: {
    curso: "4º de Educación Primaria",
    materia: "Coñecemento do Medio Natural, Social e Cultural",
    tema: "Os Ecosistemas de Galicia",
    formato: "Dashboard Visual (1 página)",
    data: {
      titulo: "Os Ecosistemas de Galicia: Fragas e Rías",
      conceptosClave: [
        {
          emoji: "🌳",
          concepto: "Biotopo e Biocenose",
          descripcion: "O biotopo é o medio físico (rochas, auga, temperatura) e a biocenose son os seres vivos (fauna e flora) que conviven nel."
        },
        {
          emoji: "🐟",
          concepto: "As Rías e a Marisma",
          descripcion: "Ecosistemas acuáticos mixtos de Galicia onde se mestura a auga doce dos ríos coa salgada do océano Atlántico ou Cantábrico."
        },
        {
          emoji: "🦉",
          concepto: "Fragas Autóctonas",
          descripcion: "Bosques atlánticos densos con gran biodiversidade arbórea (carballos, castiñeiros) e fauna como o moucho, o esquío e o xabaril."
        },
        {
          emoji: "🔄",
          concepto: "Cadea Trófica Galega",
          descripcion: "Produtores (herba e algas) ➔ Consumidores primarios (corzo ou mexillón) ➔ Consumidores secundarios (lobo ou gaivota)."
        }
      ],
      mermaidCode: `graph TD
  ECO["Ecosistemas de Galicia"] --> FRAGA["Fragas Atlánticas"]
  ECO --> RIA["As Rías Galegas"]
  FRAGA --> CARBALLO["Flora: Carballo e Castiñeiro"]
  FRAGA --> FAUNA_T["Fauna: Lobo e Teixugo"]
  RIA --> ALGAS["Produtores: Fitoplancto"]
  RIA --> MARISCO["Consumidores: Mexillón e Choco"]
  style ECO fill:#dbeafe,stroke:#1d4ed8,stroke-width:2px
  style FRAGA fill:#dcfce7,stroke:#15803d
  style RIA fill:#e0f2fe,stroke:#0284c7`,
      tablaEsquema: {
        columnas: ["Nivel Trófico", "Función no Ecosistema", "Exemplo en Galicia"],
        filas: [
          ["Produtores", "Fabrican o seu propio alimento (fotosíntese)", "Fento, Carballo, Algas mariñas"],
          ["Consumidores 1º", "Herbívoros que se alimentan de plantas", "Corzo, Coello, Mexillón"],
          ["Consumidores 2º/3º", "Carnívoros ou omnívoros cazadores", "Lobo ibérico, Raposo, Gaivota"],
          ["Descompoñedores", "Reciclan a materia orgánica morta", "Fungos, Lombrices de terra"]
        ]
      },
      trucoExamen: "Non confundas: O mexillón é un consumidor primario porque se alimenta filtrando pequenos organismos vexetais (fitoplancto), non un produtor!",
      preguntasTrivial: [
        {
          pregunta: "Que dúas árbores son as protagonistas indiscutibles dunha fraga atlántica galega?",
          opciones: ["Carballo e Castiñeiro", "Eucalipto e Palmeira", "Piñeiro e Oliveira", "Ciprés e Naranxeiro"]
        },
        {
          pregunta: "Nunha batea das rías galegas, de que se alimentan principalmente os mexillóns?",
          opciones: ["Filtran fitoplancto da auga", "Comen pequenos peixes", "Comen algas xigantes", "Non necesitan alimento"]
        },
        {
          pregunta: "Se desaparecen os descompoñedores dun bosque galego, que ocorrería?",
          opciones: ["A materia orgánica morta acumularíase sen reciclarse", "As árbores crecerían máis rápido", "Non pasaría nada", "Chovería moito máis"]
        }
      ]
    }
  },

  fracciones: {
    curso: "3º de Educación Primaria",
    materia: "Matemáticas",
    tema: "As Fraccións e os seus Segredos",
    formato: "Dashboard Visual (1 página)",
    data: {
      titulo: "Mundo Fracciones: Partes de un Todo",
      conceptosClave: [
        {
          emoji: "🍕",
          concepto: "¿Qué es una Fracción?",
          descripcion: "Es un número que representa una o varias partes iguales en las que se divide una unidad o grupo completo (ej: trozos de empanada)."
        },
        {
          emoji: "⬆️",
          concepto: "El Numerador",
          descripcion: "El número de arriba. Indica cuántas partes seleccionamos, comemos o coloreamos."
        },
        {
          emoji: "⬇️",
          concepto: "El Denominador",
          descripcion: "El número de abajo. Indica en cuántas partes IGUALES se ha cortado la unidad en total."
        },
        {
          emoji: "⚖️",
          concepto: "Fracciones Básicas",
          descripcion: "1/2 se lee un medio (la mitad). 1/3 se lee un tercio. 1/4 se lee un cuarto."
        }
      ],
      mermaidCode: `graph TD
  F["Partes de una Fracción"] --> N["NUMERADOR (Arriba)"]
  F --> D["DENOMINADOR (Abajo)"]
  N --> N_DESC["Partes que tomo o pinto"]
  D --> D_DESC["Partes totales del reparto"]
  style F fill:#fef3c7,stroke:#d97706,stroke-width:2px
  style N fill:#e0f2fe,stroke:#0284c7
  style D fill:#fce7f3,stroke:#db2777`,
      tablaEsquema: {
        columnas: ["Fracción", "Cómo se lee", "Ejemplo en merienda"],
        filas: [
          ["1/2", "Un medio", "Media manzana cortada exactamente al centro"],
          ["1/4", "Un cuarto", "Una porción de una pizza cortada en 4 partes"],
          ["3/4", "Tres cuartos", "Tres trozos de una empanada de 4 pedazos"],
          ["4/4", "Cuatro cuartos (La unidad)", "La empanada entera (4/4 = 1)"]
        ]
      },
      trucoExamen: "¡Ojo al corte!: Para que sea fracción matemática, las partes SIEMPRE deben ser del mismo tamaño exacto.",
      preguntasTrivial: [
        {
          pregunta: "En la fracción 3/5, ¿cuál es el denominador y qué significa?",
          opciones: ["El 5: partes totales divididas", "El 3: partes que tomamos", "El 5: partes que sobran", "El 8: la suma de ambos"]
        },
        {
          pregunta: "¿Cómo se llama la fracción que representa la mitad exacta de una tarta?",
          opciones: ["1/2 (un medio)", "1/3 (un tercio)", "2/1 (dos enteros)", "1/4 (un cuarto)"]
        },
        {
          pregunta: "Si una pizza está cortada en 4 trozos y te comes los 4 trozos, ¿cuánta pizza has comido?",
          opciones: ["La pizza entera (4/4 = 1)", "Media pizza", "Dos pizzas", "Ninguna pizza"]
        }
      ]
    }
  },

  englishAdventure: {
    curso: "3º de Educación Primaria",
    materia: "Lingua Estranxeira (Inglés)",
    tema: "Numbers 1-20, Months & Prepositions",
    formato: "Dashboard Visual (1 página)",
    data: {
      titulo: "¡Super English Adventure! Numbers, Months & Prepositions 🚀",
      conceptosClave: [
        {
          emoji: "🔢",
          concepto: "Numbers (1 to 20)",
          descripcion: "Count from 1 to 20: one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty!"
        },
        {
          emoji: "📅",
          concepto: "Months of the Year",
          descripcion: "12 months: January, February, March, April, May, June, July, August, September, October, November, December."
        },
        {
          emoji: "📍",
          concepto: "Prepositions of Place",
          descripcion: "Tell us where things are: on (encima), under (debajo), behind (detrás), between (en medio), next to (al lado)."
        },
        {
          emoji: "⭐",
          concepto: "Capital Letters Rule",
          descripcion: "Remember: Months in English ALWAYS start with a CAPITAL letter (January, not january)."
        }
      ],
      mermaidCode: `graph TD
  ROOT["☁️ English Level 3 ☁️"] --> N["🔢 Numbers 1-20"]
  ROOT --> M["📅 Months of the Year"]
  ROOT --> P["📍 Prepositions of Place"]
  N --> N1["1 to 10: one... ten"]
  N --> N2["11 to 20: eleven... twenty"]
  M --> M1["Winter: Dec, Jan, Feb"]
  M --> M2["Spring: Mar, Apr, May"]
  M --> M3["Summer: Jun, Jul, Aug"]
  M --> M4["Autumn: Sep, Oct, Nov"]
  P --> P1["on & under"]
  P --> P2["behind & between"]
  P --> P3["next to"]
  style ROOT fill:#fef08a,stroke:#ca8a04,stroke-width:3px
  style N fill:#dbeafe,stroke:#1d4ed8
  style M fill:#dcfce7,stroke:#15803d
  style P fill:#fce7f3,stroke:#be185d`,
      tablaEsquema: {
        columnas: ["Preposition", "Meaning (Significado)", "Example Sentence (Exemplo)"],
        filas: [
          ["on", "encima de / sobre", "The book is on the table."],
          ["under", "debajo de", "The cat is under the table."],
          ["behind", "detrás de", "The bear is behind the chair."],
          ["between", "en medio de dos", "The book is between the apple and orange."],
          ["next to", "al lado de", "The bag is next to the desk."]
        ]
      },
      trucoExamen: "Para lembrar onde está o gato, pensa: o gato está *ON* (ON = encendido / encima) da mesa!",
      preguntasTrivial: [
        {
          pregunta: "Where is the cat in 'The cat is under the table'?",
          opciones: ["Debajo de la mesa", "Encima de la mesa", "Detrás de la mesa", "Al lado de la mesa"]
        },
        {
          pregunta: "Which month comes right after April?",
          opciones: ["May (Mayo)", "March (Marzo)", "June (Junio)", "July (Julio)"]
        },
        {
          pregunta: "How do you write the number 12 in English words?",
          opciones: ["Twelve", "Twenty", "Ten", "Two"]
        }
      ],
      retoCreativo: "Dibuja una mesa y coloca una manzana ON the table y una pelota UNDER the table. ¡Colorea y ponles su nombre en inglés!"
    }
  },

  universo: {
    curso: "5º de Educación Primaria",
    materia: "Ciencias da Natureza",
    tema: "O Universo, a Terra e os seus Movementos",
    formato: "Dashboard Visual (1 página)",
    data: {
      titulo: "O Universo, o Sistema Solar e a Terra 🌍✨",
      conceptosClave: [
        {
          emoji: "🪐",
          concepto: "O Sistema Solar (8 Planetas)",
          descripcion: "Mercurio, Venus, Terra, Marte, Xúpiter, Saturno, Urano e Neptuno orbitando arredor do Sol."
        },
        {
          emoji: "🔄",
          concepto: "Movementos da Terra",
          descripcion: "Rotación (24h sobre o seu eixo = día e noite) e Traslación (365 días e 6 horas arredor do Sol = as 4 estacións)."
        },
        {
          emoji: "🌍",
          concepto: "Os Catro Sistemas da Terra",
          descripcion: "Xeosfera (rochas e minerais), Hidrosfera (toda a auga), Atmosfera (capa gasosa con osíxeno) e Biosfera (todos os seres vivos)."
        },
        {
          emoji: "☁️",
          concepto: "As 5 Capas da Atmosfera",
          descripcion: "Troposfera (onde vivimos e hai nubes), Estratosfera (capa de ozono), Mesosfera, Termosfera e Exosfera (contacto co espazo)."
        }
      ],
      mermaidCode: `graph TD
  ROOT["☁️ O UNIVERSO ☁️"] --> GAL["✨ As Galaxias"]
  ROOT --> SOL["☀️ Sistema Solar"]
  ROOT --> TER["🌍 A Terra"]
  ROOT --> ATM["💨 A Atmosfera"]
  ROOT --> BIO["🌱 A Biosfera"]
  SOL --> PLAN["8 Planetas: Mercurio a Neptuno"]
  TER --> ROT["Rotación: 24h (Día e Noite)"]
  TER --> TRA["Traslación: 365d (Estacións)"]
  ATM --> CAP["5 Capas: Troposfera a Exosfera"]
  style ROOT fill:#fef08a,stroke:#ca8a04,stroke-width:3px
  style SOL fill:#fed7aa,stroke:#ea580c
  style TER fill:#bbf7d0,stroke:#16a34a
  style ATM fill:#bfdbfe,stroke:#2563eb
  style BIO fill:#fbcfe8,stroke:#db2777`,
      tablaEsquema: {
        columnas: ["Sistema Terrestre", "Composición", "Importancia en Galicia"],
        filas: [
          ["Xeosfera", "Rochas, solo e minerais", "Granito galego e relevo das serras"],
          ["Hidrosfera", "Océano, ríos, rías e choiva", "As rías, a pesca e a auga doce dos ríos"],
          ["Atmosfera", "Nitróxeno, osíxeno e ozono", "Clima oceánico húmido e protección solar"],
          ["Biosfera", "Seres vivos (plantas e animais)", "Fragas atlánticas, fauna e biodiversidade"]
        ]
      },
      trucoExamen: "Lembra a regra dos movementos: *Ro-tación* ten 'o' de 24 horas (un día); *Tras-lación* 'trae' todo o ano con estacións!",
      preguntasTrivial: [
        {
          pregunta: "Canto dura o movemento de rotación da Terra e que provoca?",
          opciones: ["24 horas (un día completo) e provoca o día e a noite", "365 días e provoca o verán", "Un mes e provoca a lúa chea", "12 horas e provoca só a mañá"]
        },
        {
          pregunta: "Cal é a capa da atmosfera máis próxima á superficie onde ocorren a choiva e o vento?",
          opciones: ["A Troposfera", "A Exosfera", "A Termosfera", "A Mesosfera"]
        },
        {
          pregunta: "Que catro sistemas compoñen o noso planeta Terra?",
          opciones: ["Biosfera, Atmosfera, Hidrosfera e Xeosfera", "Sol, Lúa, Estrelas e Cometas", "Litosfera, Mar, Nubes e Vento", "Europa, Asia, América e África"]
        }
      ],
      retoCreativo: "Debuxa a Terra co seu eixo inclinado e sinala o lado de DÍA (iluminado polo Sol) e o lado de NOITE (escuro). ¡Colorea e escribe o teu nome!"
    }
  }
};

function cleanGenerativeHtml(htmlSnippet) {
  if (!htmlSnippet) return null;
  const clean = htmlSnippet
    .replace(/```html/gi, '')
    .replace(/```/g, '')
    .replace(/<!DOCTYPE[^>]*>/gi, '')
    .replace(/<\/?(?:html|head|body)[^>]*>/gi, '')
    .trim();
  return clean.length > 20 ? clean : null;
}

/**
 * Parser inteligente de Markdown y XML a estructura de las 3 Láminas Didácticas
 * Extrae bloques específicos para Dashboard, Mapa Conceptual y Retos/Preguntas
 */
export function parseAiOutputToSheet(rawText, tema, curso, materia) {
  if (!rawText) return null;

  // 0. Extraer bloques HTML Generativos con limpieza de envoltorios y tolerancia a truncado
  const extractTag = (tag) => {
    const strictMatch = rawText.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`, 'i'));
    if (strictMatch && strictMatch[1]) return cleanGenerativeHtml(strictMatch[1]);
    const openMatch = rawText.match(new RegExp(`<${tag}>([\\s\\S]*?)(?:<lamina_|$|$)`, 'i'));
    if (openMatch && openMatch[1]) return cleanGenerativeHtml(openMatch[1]);
    return null;
  };

  const dashboardHtml = extractTag('lamina_dashboard_html');
  const mapaHtml = extractTag('lamina_mapa_html');
  const retosHtml = extractTag('lamina_retos_html');

  // Extraer secciones XML o Markdown anteriores si están presentes (fallback)
  const dashboardBlockMatch = rawText.match(/<lamina_dashboard>([\s\S]*?)<\/lamina_dashboard>/i);
  const dashboardText = dashboardBlockMatch ? dashboardBlockMatch[1] : (dashboardHtml || rawText);

  const mapaBlockMatch = rawText.match(/<lamina_mapa>([\s\S]*?)<\/lamina_mapa>/i);
  const mapaText = mapaBlockMatch ? mapaBlockMatch[1] : (mapaHtml || rawText);

  const retosBlockMatch = rawText.match(/<lamina_retos>([\s\S]*?)<\/lamina_retos>/i);
  const retosText = retosBlockMatch ? retosBlockMatch[1] : (retosHtml || rawText);

  // 1. Extraer bloque Mermaid desde lamina_mapa o rawText
  const mermaidMatch = mapaText.match(/```mermaid([\s\S]*?)```/i) || rawText.match(/```mermaid([\s\S]*?)```/i);
  let mermaidCode = mermaidMatch ? mermaidMatch[1].trim() : null;

  if (!mermaidCode) {
    const cleanTopic = (tema || "Aprendizaxe").replace(/["']/g, '');
    mermaidCode = `graph TD
  ROOT["${cleanTopic}"] --> C1["Saberes Fundamentais"]
  ROOT --> C2["Práctica e Contorna"]
  C1 --> D1["Conceptos Clave de Galicia"]
  C1 --> D2["Aplicación LOMLOE"]
  C2 --> D3["Investigación Activa"]
  C2 --> D4["Resolución de Retos"]
  style ROOT fill:#dbeafe,stroke:#1d4ed8,stroke-width:2px
  style C1 fill:#dcfce7,stroke:#15803d
  style C2 fill:#fef3c7,stroke:#d97706`;
  }

  // 2. Extraer Título (primer encabezado # o ## o etiqueta <titulo>)
  const titleTagMatch = dashboardText.match(/<titulo>([\s\S]*?)<\/titulo>/i);
  const titleHeaderMatch = dashboardText.match(/^#+ (.+)$/m) || rawText.match(/^#+ (.+)$/m);
  const rawTitle = titleTagMatch ? titleTagMatch[1] : (titleHeaderMatch ? titleHeaderMatch[1] : tema);
  const titulo = String(rawTitle).replace(/^[#*\s]+|[#*\s]+$/g, '').trim() || tema;

  // 3. Extraer Tabla Markdown desde dashboardText
  let tablaEsquema = null;
  const tableRegex = /\|(.+)\|[\r\n]+\|[-:| ]+\|[\r\n]+((?:\|.+\|[\r\n]*)+)/;
  const tableMatch = dashboardText.match(tableRegex) || rawText.match(tableRegex);

  if (tableMatch) {
    const headerLine = tableMatch[1];
    const bodyLines = tableMatch[2].trim().split('\n');

    const columnas = headerLine.split('|').map(s => s.trim()).filter(Boolean);
    const filas = bodyLines.map(line =>
      line.split('|').map(s => s.trim()).filter(Boolean)
    ).filter(row => row.length === columnas.length);

    if (columnas.length > 0 && filas.length > 0) {
      tablaEsquema = { columnas, filas };
    }
  }

  // Fallback si no hay tabla explícita
  if (!tablaEsquema) {
    tablaEsquema = {
      columnas: ["Aspecto Clave", "Descrición", "Exemplo en Galicia"],
      filas: [
        ["Identificación", "Elementos e seres esenciais", "Fragas, ríos ou fórmulas"],
        ["Función", "Papel na nosa vida cotiá", "Equilibrio e utilidade"],
        ["Coidado", "Respecto e aplicación práctica", "Sostibilidade e aprendizaxe"]
      ]
    };
  }

  // 4. Extraer Conceptos Clave ("Lo que tienes que saber sí o sí")
  const conceptosClave = [];
  const lines = (dashboardText || rawText).split('\n');
  for (const line of lines) {
    const cleanLine = line.trim();
    if (/^[-*•]/.test(cleanLine)) {
      const match = cleanLine.match(/^[-*•]\s*(?:([^\w\s\*\#]+)\s*)?\*?\*?([^*\:\n]{2,40})\*?\*?:\s*(.+)$/);
      if (match && conceptosClave.length < 6) {
        const emoji = match[1] || "💡";
        const concepto = match[2].replace(/[*_]/g, '').trim();
        const descripcion = match[3].replace(/[*_]/g, '').trim();
        if (concepto && descripcion) {
          conceptosClave.push({ emoji: emoji.trim() || "💡", concepto, descripcion });
        }
      }
    }
  }

  if (conceptosClave.length === 0) {
    conceptosClave.push(
      { emoji: "🌳", concepto: "Fundamentos do Tema", descripcion: `Saberes básicos oficiais segundo o Decreto 155/2022 para ${tema}.` },
      { emoji: "🔍", concepto: "Observación e Análise", descripcion: "Descobre como interactúan os elementos na contorna e no noso día a día." },
      { emoji: "🌟", concepto: "Conexión Práctica", descripcion: "Aplica o aprendido resolvendo os retos e actividades propostas." },
      { emoji: "🎯", concepto: "Meta de Aprendizaxe", descripcion: "Comprender e valorar o patrimonio natural e científico de Galicia." }
    );
  }

  // 5. Extraer Truco de Examen / Consejo Secreto
  const quoteMatch = dashboardText.match(/>\s*(?:\*\*(?:Truco[^*]*|Consejo[^*]*)\*\*:\s*)?([^\n\r]+)/i) || rawText.match(/>\s*(?:\*\*(?:Truco[^*]*|Consejo[^*]*)\*\*:\s*)?([^\n\r]+)/i);
  const trucoExamen = quoteMatch ? quoteMatch[1].replace(/^\*\*(?:Truco|Consejo)[^*]*\*\*:\s*/i, '').trim() : "¡Revisa siempre la relación entre las causas y las consecuencias!";

  // 5b. Extraer Curiosidad / Sabías que
  const curiosidadMatch = (dashboardText || rawText).match(/>\s*(?:\*\*(?:Sabías que[^*]*|Curiosidade[^*]*|Dato[^*]*)\*\*:\s*)?([^\n\r]+)/i);
  const curiosidad = curiosidadMatch ? curiosidadMatch[1].replace(/^\*\*(?:Sabías que|Curiosidade|Dato)[^*]*\*\*:\s*/i, '').trim() : null;

  // 6. Extraer Preguntas ("Ponte a prueba") desde retosText
  const preguntasTrivial = [];
  const quizRegex = /(\d+[\.\)]\s*[^\n\?]+\?)([\s\S]*?)(?=(?:\d+[\.\)]|##|$))/g;
  const quizSectionMatch = retosText.match(/(?:Ponte a prueba|Preguntas|Trivial|Misión)[\s\S]*$/i) || rawText.match(/(?:Ponte a prueba|Preguntas|Trivial|Misión)[\s\S]*$/i);

  if (quizSectionMatch) {
    const quizMatches = quizSectionMatch[0].matchAll(quizRegex);
    for (const q of quizMatches) {
      if (preguntasTrivial.length < 3) {
        const preguntaTexto = q[1].replace(/^\d+[\.\)]\s*/, '').trim();
        const opcionesTexto = q[2];
        const opciones = [];
        const optMatches = opcionesTexto.matchAll(/[-*a-dA-D\)]\s*([^\n\r]+)/g);
        for (const opt of optMatches) {
          const cleanOpt = opt[1].replace(/^[a-dA-D][\.\)]\s*/, '').trim();
          if (cleanOpt && opciones.length < 4) {
            opciones.push(cleanOpt);
          }
        }
        if (preguntaTexto && opciones.length >= 2) {
          preguntasTrivial.push({ pregunta: preguntaTexto, opciones });
        }
      }
    }
  }

  if (preguntasTrivial.length === 0) {
    preguntasTrivial.push(
      {
        pregunta: `¿Cuál es la idea principal aprendida sobre ${tema}?`,
        opciones: ["Es el concepto fundamental del bloque", "Es un detalle secundario", "No tiene relación con el temario", "Solo se aplica en secundaria"]
      },
      {
        pregunta: "¿Cómo podemos comprobar este aprendizaje en nuestro entorno gallego?",
        opciones: ["Observando nuestro medio natural y social", "Únicamente en el libro de texto", "No es aplicable", "Depende de la estación"]
      }
    );
  }

  // 7. Extraer Reto Creativo de Misión
  const desafioMatch = retosText.match(/(?:Desafío|Reto Creativo)[^:]*:\s*([^\n\r]+)/i);
  const retoCreativo = desafioMatch ? desafioMatch[1].trim() : "Dibuja en el recuadro inferior un ejemplo práctico de este tema y compártelo con tu clase o familia.";

  return {
    titulo,
    conceptosClave,
    mermaidCode,
    tablaEsquema,
    trucoExamen,
    curiosidad,
    preguntasTrivial,
    retoCreativo
  };
}
