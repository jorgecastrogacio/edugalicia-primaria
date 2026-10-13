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
      artePrincipal: "🌳🦊🍃",
      colorPaleta: "verde_natureza",
      lemaMascota: "¡Coidemos as fragas e rías que fan único o noso fogar galego!",
      resumen: "Descobre como conviven e se alimentan os seres vivos nos bosques atlánticos e nas rías de Galicia nun equilibrio natural perfecto.",
      curiosidad: "Nas Fragas do Eume consérvanse fentos xigantes da época dos dinosauros que levan millóns de anos respirando en Galicia!",
      trucoExamen: "Non confundas: O mexillón é un consumidor primario porque se alimenta filtrando pequenos organismos vexetais (fitoplancto), non un produtor!",
      conceptosClave: [
        {
          emoji: "🌳",
          icono: "🌳",
          concepto: "Biotopo e Biocenose",
          rareza: "epica",
          elemento: "Ecosistema",
          poder: 95,
          defensa: 90,
          xp: 30,
          descripcion: "O biotopo é o medio físico (rochas, auga, temperatura) e a biocenose son os seres vivos (fauna e flora) que conviven nel."
        },
        {
          emoji: "🐟",
          icono: "🐟",
          concepto: "As Rías e a Marisma",
          rareza: "lendaria",
          elemento: "Auga Mixta",
          poder: 90,
          defensa: 95,
          xp: 35,
          descripcion: "Ecosistemas acuáticos mixtos de Galicia onde se mestura a auga doce dos ríos coa salgada do océano Atlántico ou Cantábrico."
        },
        {
          emoji: "🦉",
          icono: "🦉",
          concepto: "Fragas Autóctonas",
          rareza: "especial",
          elemento: "Fraga Viva",
          poder: 85,
          defensa: 88,
          xp: 25,
          descripcion: "Bosques atlánticos densos con gran biodiversidade arbórea (carballos, castiñeiros) e fauna como o moucho, o esquío e o xabaril."
        },
        {
          emoji: "🔄",
          icono: "🔄",
          concepto: "Cadea Trófica Galega",
          rareza: "dominada",
          elemento: "Equilibrio",
          poder: 100,
          defensa: 85,
          xp: 30,
          descripcion: "Produtores (herba e algas) ➔ Consumidores primarios (corzo ou mexillón) ➔ Consumidores secundarios (lobo ou gaivota)."
        }
      ],
      tablaEsquema: {
        columnas: ["Nivel Trófico", "Función no Ecosistema", "Exemplo en Galicia"],
        filas: [
          ["Produtores", "Fabrican o seu propio alimento (fotosíntese)", "Fento, Carballo, Algas mariñas"],
          ["Consumidores 1º", "Herbívoros que se alimentan de plantas", "Corzo, Coello, Mexillón"],
          ["Consumidores 2º/3º", "Carnívoros ou omnívoros cazadores", "Lobo ibérico, Raposo, Gaivota"],
          ["Descompoñedores", "Reciclan a materia orgánica morta", "Fungos, Lombrices de terra"]
        ]
      },
      mapaCentral: {
        titulo: "Ecosistemas Galegos",
        subtitulo: "Rede da Vida",
        icono: "🌳",
        satelites: [
          { titulo: "Fragas Atlánticas", icono: "🌲", sound: "¡POW!", descripcion: "Carballos, castiñeiros e fauna autóctona en harmonía." },
          { titulo: "As Rías Galegas", icono: "🌊", sound: "¡BOOM!", descripcion: "Mestura rica de auga doce e salgada con fitoplancto e batea." },
          { titulo: "Cadea Trófica", icono: "🔄", sound: "¡ZAP!", descripcion: "Produtores vexetais, herbívoros filtradores e depredadores." },
          { titulo: "Descompoñedores", icono: "🍄", sound: "¡TOP!", descripcion: "Fungos e bacterias que reciclan os nutrientes na terra." }
        ]
      },
      preguntasTrivial: [
        {
          pregunta: "Que dúas árbores son as protagonistas indiscutibles dunha fraga atlántica galega?",
          opciones: ["Carballo e Castiñeiro", "Eucalipto e Palmeira", "Piñeiro e Oliveira", "Ciprés e Naranxeiro"]
        },
        {
          pregunta: "Nunha batea das rías galegas, de que se alimentan principalmente os mexillóns?",
          opciones: ["Filtran fitoplancto da auga", "Comen pequenos peixes", "Comen algas xigantes", "Non necesitan alimento"]
        }
      ],
      palancasVF: [
        { id: 1, texto: "Os produtores fabrican o seu propio alimento grazas á enerxía da luz solar.", correcta: "V", xp: 15 },
        { id: 2, texto: "Se desaparecen os descompoñedores, as follas e restos recíclanse máis rápido.", correcta: "F", xp: 15 }
      ],
      retoCreativo: "Debuxa unha árbore centenaria dunha fraga galega, con caritas felices nas súas follas e un pequeno esquío no seu tronco!"
    }
  },

  fracciones: {
    curso: "3º de Educación Primaria",
    materia: "Matemáticas",
    tema: "As Fraccións e os seus Segredos",
    formato: "Dashboard Visual (1 página)",
    data: {
      titulo: "Mundo Fracciones: Partes de un Todo",
      artePrincipal: "🍕📐⚡",
      colorPaleta: "amarelo_enerxia",
      lemaMascota: "¡Corta, reparte en partes iguais e convértete en campión dos números!",
      resumen: "Unha fracción é a forma máis sinxela de expresar partes iguais nas que dividimos calquera obxecto, comida ou grupo.",
      curiosidad: "Os antigos exipcios só utilizaban fraccións que tiñan o número 1 arriba (como 1/2, 1/3 ou 1/4) para construír as súas grandes pirámides!",
      trucoExamen: "¡Ojo al corte!: Para que sea fracción matemática, las partes SIEMPRE deben ser del mismo tamaño exacto.",
      conceptosClave: [
        {
          emoji: "🍕",
          icono: "🍕",
          concepto: "¿Qué es una Fracción?",
          rareza: "lendaria",
          elemento: "Número",
          poder: 95,
          defensa: 90,
          xp: 30,
          descripcion: "Es un número que representa una o varias partes iguales en las que se divide una unidad o grupo completo (ej: trozos de empanada)."
        },
        {
          emoji: "⬆️",
          icono: "⬆️",
          concepto: "El Numerador",
          rareza: "epica",
          elemento: "Arriba",
          poder: 90,
          defensa: 95,
          xp: 30,
          descripcion: "El número de arriba. Indica cuántas partes seleccionamos, comemos o coloreamos."
        },
        {
          emoji: "⬇️",
          icono: "⬇️",
          concepto: "El Denominador",
          rareza: "especial",
          elemento: "Abajo",
          poder: 85,
          defensa: 90,
          xp: 25,
          descripcion: "El número de abajo. Indica en cuántas partes IGUALES se ha cortado la unidad en total."
        },
        {
          emoji: "⚖️",
          icono: "⚖️",
          concepto: "Fracciones Básicas",
          rareza: "dominada",
          elemento: "Regla",
          poder: 100,
          defensa: 85,
          xp: 30,
          descripcion: "1/2 se lee un medio (la mitad). 1/3 se lee un tercio. 1/4 se lee un cuarto de la unidad."
        }
      ],
      tablaEsquema: {
        columnas: ["Fracción", "Cómo se lee", "Ejemplo en merienda"],
        filas: [
          ["1/2", "Un medio", "Media manzana cortada exactamente al centro"],
          ["1/4", "Un cuarto", "Una porción de una pizza cortada en 4 partes"],
          ["3/4", "Tres cuartos", "Tres trozos de una empanada de 4 pedazos"],
          ["4/4", "Cuatro cuartos (La unidad)", "La empanada entera (4/4 = 1)"]
        ]
      },
      mapaCentral: {
        titulo: "Fracción Matemática",
        subtitulo: "Reparto Xusto",
        icono: "🍕",
        satelites: [
          { titulo: "Numerador (Arriba)", icono: "⬆️", sound: "¡POW!", descripcion: "Partes que tomo, como ou pinto da unidade." },
          { titulo: "Denominador (Abaixo)", icono: "⬇️", sound: "¡BOOM!", descripcion: "Número total de partes iguais en que corto o obxecto." },
          { titulo: "Un Medio (1/2)", icono: "🌓", sound: "¡ZAP!", descripcion: "A metade exacta de calquera figura ou comida." },
          { titulo: "A Unidade Completa", icono: "🥧", sound: "¡TOP!", descripcion: "Cando o numerador e o denominador son iguais (4/4 = 1)." }
        ]
      },
      preguntasTrivial: [
        {
          pregunta: "En la fracción 3/5, ¿cuál es el denominador y qué significa?",
          opciones: ["El 5: partes totales divididas", "El 3: partes que tomamos", "El 5: partes que sobran", "El 8: la suma de ambos"]
        },
        {
          pregunta: "¿Cómo se llama la fracción que representa la mitad exacta de una tarta?",
          opciones: ["1/2 (un medio)", "1/3 (un tercio)", "2/1 (dos enteros)", "1/4 (un cuarto)"]
        }
      ],
      palancasVF: [
        { id: 1, texto: "Nunha fracción, todas as partes deben medir exactamente o mesmo tamaño.", correcta: "V", xp: 15 },
        { id: 2, texto: "Na fracción 1/4, comemos catro cachos e deixamos un.", correcta: "F", xp: 15 }
      ],
      retoCreativo: "Debuxa unha pizza redonda cortada en 4 partes iguais. Pinta 3 partes de queixo e escribe en letras grandes '3/4'!"
    }
  },

  englishAdventure: {
    curso: "3º de Educación Primaria",
    materia: "Lingua Estranxeira (Inglés)",
    tema: "Numbers 1-20, Months & Prepositions",
    formato: "Dashboard Visual (1 página)",
    data: {
      titulo: "Super English Adventure: Numbers & Prepositions",
      artePrincipal: "🇬🇧🎒⭐",
      colorPaleta: "azul_espacial",
      lemaMascota: "¡Learn English words, numbers and calendar with maximum energy!",
      resumen: "Master counting from 1 to 20, the 12 calendar months and the essential prepositions of place for your daily routine.",
      curiosidad: "In English, all the months of the year always start with a capital letter, even in the middle of a sentence!",
      trucoExamen: "Para lembrar onde está o gato, pensa: o gato está *ON* (ON = encendido / encima) da mesa!",
      conceptosClave: [
        {
          emoji: "🔢",
          icono: "🔢",
          concepto: "Numbers (1 to 20)",
          rareza: "lendaria",
          elemento: "Counting",
          poder: 95,
          defensa: 90,
          xp: 30,
          descripcion: "Count from 1 to 20: one, two, three, four, five, six, seven, eight, nine, ten... all the way to twenty!"
        },
        {
          emoji: "📅",
          icono: "📅",
          concepto: "Months of the Year",
          rareza: "epica",
          elemento: "Calendar",
          poder: 90,
          defensa: 95,
          xp: 30,
          descripcion: "12 calendar months starting with January, passing through sunny July, and finishing with December."
        },
        {
          emoji: "📍",
          icono: "📍",
          concepto: "Prepositions of Place",
          rareza: "especial",
          elemento: "Grammar",
          poder: 85,
          defensa: 88,
          xp: 25,
          descripcion: "Tell us where things are: on (encima), under (debajo), behind (detrás), between (en medio), next to (al lado)."
        },
        {
          emoji: "⭐",
          icono: "⭐",
          concepto: "Capital Letters Rule",
          rareza: "dominada",
          elemento: "Rule",
          poder: 100,
          defensa: 85,
          xp: 30,
          descripcion: "Months in English ALWAYS begin with a CAPITAL letter: January, February, March, April, May..."
        }
      ],
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
      mapaCentral: {
        titulo: "English Quest",
        subtitulo: "Key Vocabulary",
        icono: "🇬🇧",
        satelites: [
          { titulo: "Numbers 1-20", icono: "🔢", sound: "¡POW!", descripcion: "Count from one to twenty with accurate spelling." },
          { titulo: "The 12 Months", icono: "📅", sound: "¡BOOM!", descripcion: "Four seasons from snowy January to sunny August." },
          { titulo: "On & Under", icono: "📦", sound: "¡ZAP!", descripcion: "On top of the box or underneath the chair." },
          { titulo: "Behind & Next to", icono: "🧸", sound: "¡TOP!", descripcion: "Positioning objects accurately in the classroom." }
        ]
      },
      preguntasTrivial: [
        {
          pregunta: "Where is the cat in 'The cat is under the table'?",
          opciones: ["Debajo de la mesa", "Encima de la mesa", "Detrás de la mesa", "Al lado de la mesa"]
        },
        {
          pregunta: "Which month comes right after April?",
          opciones: ["May (Mayo)", "March (Marzo)", "June (Junio)", "July (Julio)"]
        }
      ],
      palancasVF: [
        { id: 1, texto: "In English, the months of the year always start with a capital letter.", correcta: "V", xp: 15 },
        { id: 2, texto: "The preposition 'under' means that an object is sitting on top of a table.", correcta: "F", xp: 15 }
      ],
      retoCreativo: "Draw a big table: put an apple ON the table and a pencil UNDER the table with comic signs!"
    }
  },

  universo: {
    curso: "5º de Educación Primaria",
    materia: "Ciencias da Natureza",
    tema: "O Universo, a Terra e os seus Movementos",
    formato: "Dashboard Visual (1 página)",
    data: {
      titulo: "O Universo, o Sistema Solar e a Terra",
      artePrincipal: "🌍🚀✨",
      colorPaleta: "azul_espacial",
      lemaMascota: "¡Abróchate o cinto cósmico e viaxa polos 8 planetas do noso Sol!",
      resumen: "O noso planeta viaxa polo cosmos realizando movementos que crean o día, a noite e as catro estacións do ano.",
      curiosidad: "Aínda que non o sintamos, a Terra viaxa arredor do Sol a máis de 107.000 quilómetros por hora polo espazo!",
      trucoExamen: "Lembra a regra dos movementos: *Ro-tación* ten 'o' de 24 horas (un día); *Tras-lación* 'trae' todo o ano con estacións!",
      conceptosClave: [
        {
          emoji: "🪐",
          icono: "🪐",
          concepto: "O Sistema Solar (8 Planetas)",
          rareza: "lendaria",
          elemento: "Cosmos",
          poder: 100,
          defensa: 92,
          xp: 35,
          descripcion: "Mercurio, Venus, Terra, Marte, Xúpiter, Saturno, Urano e Neptuno orbitando arredor do Sol."
        },
        {
          emoji: "🔄",
          icono: "🔄",
          concepto: "Movementos da Terra",
          rareza: "epica",
          elemento: "Movemento",
          poder: 95,
          defensa: 90,
          xp: 30,
          descripcion: "Rotación (24h sobre o seu eixo = día e noite) e Traslación (365 días e 6 horas arredor do Sol = as 4 estacións)."
        },
        {
          emoji: "🌍",
          icono: "🌍",
          concepto: "Os Catro Sistemas da Terra",
          rareza: "especial",
          elemento: "Planeta",
          poder: 90,
          defensa: 95,
          xp: 30,
          descripcion: "Xeosfera (rochas e minerais), Hidrosfera (toda a auga), Atmosfera (capa gasosa con osíxeno) e Biosfera (todos os seres vivos)."
        },
        {
          emoji: "☁️",
          icono: "☁️",
          concepto: "As 5 Capas da Atmosfera",
          rareza: "dominada",
          elemento: "Aire",
          poder: 85,
          defensa: 98,
          xp: 25,
          descripcion: "Troposfera (onde vivimos e hai nubes), Estratosfera (capa de ozono), Mesosfera, Termosfera e Exosfera (contacto co espazo)."
        }
      ],
      tablaEsquema: {
        columnas: ["Sistema Terrestre", "Composición", "Importancia en Galicia"],
        filas: [
          ["Xeosfera", "Rochas, solo e minerais", "Granito galego e relevo das serras"],
          ["Hidrosfera", "Océano, ríos, rías e choiva", "As rías, a pesca e a auga doce dos ríos"],
          ["Atmosfera", "Nitróxeno, osíxeno e ozono", "Clima oceánico húmido e protección solar"],
          ["Biosfera", "Seres vivos (plantas e animais)", "Fragas atlánticas, fauna e biodiversidade"]
        ]
      },
      mapaCentral: {
        titulo: "Planeta Terra",
        subtitulo: "O Noso Fogar",
        icono: "🌍",
        satelites: [
          { titulo: "A Lúa", icono: "🌒", sound: "¡POW!", descripcion: "Satélite natural que orbita arredor da Terra cada 28 días." },
          { titulo: "O Gran Sol", icono: "☀️", sound: "¡BOOM!", descripcion: "Estrela nai que mantén os 8 planetas na súa órbita con luz e calor." },
          { titulo: "Rotación (24h)", icono: "🔄", sound: "¡ZAP!", descripcion: "Giro sobre si mesma que xera o día e a noite." },
          { titulo: "Traslación (365d)", icono: "📅", sound: "¡TOP!", descripcion: "Viaxe orbital que xera primavera, verán, outono e inverno." }
        ]
      },
      preguntasTrivial: [
        {
          pregunta: "Canto dura o movemento de rotación da Terra e que provoca?",
          opciones: ["24 horas (un día completo) e provoca o día e a noite", "365 días e provoca o verán", "Un mes e provoca a lúa chea", "12 horas e provoca só a mañá"]
        },
        {
          pregunta: "Cal é a capa da atmosfera máis próxima á superficie onde ocorren a choiva e o vento?",
          opciones: ["A Troposfera", "A Exosfera", "A Termosfera", "A Mesosfera"]
        }
      ],
      palancasVF: [
        { id: 1, texto: "A rotación da Terra tarda 24 horas e produce a alternancia do día e da noite.", correcta: "V", xp: 15 },
        { id: 2, texto: "A Terra tarda só 30 días en dar unha volta completa arredor do Sol.", correcta: "F", xp: 15 }
      ],
      retoCreativo: "Debuxa a Terra co seu eixo inclinado e sinala o lado de DÍA (iluminado polo Sol) e o lado de NOITE (escuro). ¡Colorea e escribe o teu nome!"
    }
  },

  enterosESO: {
    etapa: "eso",
    curso: "1º de ESO",
    materia: "Matemáticas",
    tema: "Números enteiros e regra dos signos",
    formato: "Dashboard Visual (1 página)",
    data: {
      titulo: "Números Enteiros (Z) e Regra dos Signos",
      artePrincipal: "⚡📐🧮💻",
      colorPaleta: "azul_espacial",
      lemaMascota: "¡Domina os signos positivos e negativos con precisión algorítmica!",
      resumen: "Os **números enteiros (\\mathbb{Z})** comprenden os números positivos, o cero e os negativos, esenciais para expresar temperaturas baixo cero, niveis e balances.",
      curiosidad: "Os números negativos foron considerados 'falsos' durante séculos en Europa ata que se popularizou o cálculo de débedas comerciais no Renacemento!",
      trucoExamen: "¡Coidado co signo menos diante dun paréntese!: **-(a - b) = -a + b**. Cambia radicalmente o signo de todos os termos interiores!",
      conceptosClave: [
        {
          emoji: "➕",
          icono: "➕",
          pegatina: "⚡",
          concepto: "Suma con Mesmo Signo",
          rareza: "epica",
          elemento: "Aritmética Z",
          poder: 90,
          defensa: 85,
          xp: 30,
          descripcion: "Súmanse os seus valores absolutos e mantense o signo común:\n**$(+3) + (+5) = +8$**\n**$(-4) + (-6) = -10$**"
        },
        {
          emoji: "⚖️",
          icono: "⚖️",
          pegatina: "🎯",
          concepto: "Suma con Distinto Signo",
          rareza: "lendaria",
          elemento: "Aritmética Z",
          poder: 95,
          defensa: 90,
          xp: 35,
          descripcion: "Réstanse os valores absolutos e colócase o signo do número con maior valor absoluto:\n**$(-7) + (+10) = +3$**\n**$(+4) + (-9) = -5$**"
        },
        {
          emoji: "✖️",
          icono: "✖️",
          pegatina: "👾",
          concepto: "Regra dos Signos (Produto)",
          rareza: "epica",
          elemento: "Álxebra Z",
          poder: 92,
          defensa: 95,
          xp: 30,
          descripcion: "Signos iguais dan positivo; signos distintos dan negativo:\n**$(+) \\cdot (+) = +$** | **$(-) \\cdot (-) = +$**\n**$(+) \\cdot (-) = -$** | **$(-) \\cdot (+) = -$**"
        },
        {
          emoji: "🪜",
          icono: "🪜",
          pegatina: "♾️",
          concepto: "Xerarquía de Operacións",
          rareza: "dominada",
          elemento: "Prioridade",
          poder: 100,
          defensa: 95,
          xp: 40,
          descripcion: "1º Parénteses e corchetes\n2º Potencias e raíces cadradas\n3º Multiplicacións e divisións (de esquerda a dereita)\n4º Sumas e restas"
        }
      ],
      tablaEsquema: {
        columnas: ["Operación", "Regra de Signos", "Exemplo Resolto"],
        filas: [
          ["Multiplicación", "Negativo por Negativo = Positivo", "$(-6) \\cdot (-4) = +24$"],
          ["División", "Positivo entre Negativo = Negativo", "$(30) : (-5) = -6$"],
          ["Resta con paréntese", "Menos diante de menos convértese en máis", "$5 - (-8) = 5 + 8 = 13$"],
          ["Operación combinada", "Prioridade do produto fronte á suma", "$-2 + 3 \\cdot (-4) = -2 - 12 = -14$"]
        ]
      },
      mapaCentral: {
        titulo: "Algoritmo Z",
        subtitulo: "Secundaria 1º ESO",
        icono: "⚡",
        satelites: [
          { titulo: "Recta Numérica", icono: "📏", sound: "¡ZAP!", pegatina: "📍", descripcion: "Os números negativos sitúanse á esquerda do 0: **$-5 < -2$**." },
          { titulo: "Valor Absoluto", icono: "📦", sound: "¡POW!", pegatina: "🔢", descripcion: "Distancia ata a orixe sen considerar signo: **$|-7| = 7$**." },
          { titulo: "Regra do Produto", icono: "✖️", sound: "¡BOOM!", pegatina: "⚡", descripcion: "Multiplicar dous negativos produce un positivo: **$(-a) \\cdot (-b) = ab$**." },
          { titulo: "Parénteses", icono: "🧱", sound: "¡TOP!", pegatina: "🎯", descripcion: "Elimina signos anidados antes de sumar os termos: **$+(-) \\to -$**, **$-(-) \\to +$**." }
        ]
      },
      preguntasTrivial: [
        {
          pregunta: "Cal é o resultado exacto da operación combinada: $(-5) + 3 \\cdot (-2)$?",
          opciones: ["-11", "+1", "-16", "+11"],
          correctaIndex: 0,
          xp: 25
        },
        {
          pregunta: "Se multiplicamos tres números enteiros negativos entre si, que signo terá o produto final?",
          opciones: ["Signo negativo (-)", "Signo positivo (+)", "Depende do valor absoluto", "Sempre cero"],
          correctaIndex: 0,
          xp: 25
        }
      ],
      palancasVF: [
        { id: 1, texto: "O produto de dous números enteiros negativos sempre dá como resultado un número positivo.", correcta: "V", xp: 15 },
        { id: 2, texto: "O número -9 é estritamente maior ca o número -2 na recta numérica real.", correcta: "F", xp: 15 }
      ],
      retoCreativo: "Debuxa unha recta numérica Cyber-Math do -10 ao +10. Representa un batiscafo a -7 m e un satélite a +9 m, calculando a diferenza en metros!"
    }
  },

  ecuacionesESO: {
    etapa: "eso",
    curso: "2º de ESO",
    materia: "Matemáticas",
    tema: "Ecuacións de primeiro grao e Teorema de Pitágoras",
    formato: "Dashboard Visual (1 página)",
    data: {
      titulo: "Ecuacións Lineais e Teorema de Pitágoras",
      artePrincipal: "📐⚡🎯🚀",
      colorPaleta: "laranxa_arcade",
      lemaMascota: "¡Despexa a incógnita x e calcula a hipotenusa co poder da xeometría!",
      resumen: "Unha **ecuación de 1º grao** é unha igualdade alxébrica con incógnitas. O **Teorema de Pitágoras** conecta os catetos e a hipotenusa: **$a^2 + b^2 = c^2$**.",
      curiosidad: "Pitágoras e a súa escola consideraban que os números rexían o cosmos, e o descubrimento de que $\\sqrt{2}$ non era racional causou unha verdadeira crise mística!",
      trucoExamen: "Regra da balanza: o que está sumando pasa restando, e o que está multiplicando pasa dividindo con TODO o seu signo: **$-3x = 12 \\implies x = \\frac{12}{-3} = -4$**.",
      conceptosClave: [
        {
          emoji: "🎯",
          icono: "🎯",
          pegatina: "⚡",
          concepto: "Despexar a Incógnita x",
          rareza: "epica",
          elemento: "Álxebra ESO",
          poder: 95,
          defensa: 90,
          xp: 35,
          descripcion: "Agrupa as incógnitas nun membro e os números noutro:\n**$3x + 5 = 20 \\implies 3x = 15 \\implies x = 5$**"
        },
        {
          emoji: "📐",
          icono: "📐",
          pegatina: "🔺",
          concepto: "Teorema de Pitágoras",
          rareza: "lendaria",
          elemento: "Xeometría ESO",
          poder: 100,
          defensa: 95,
          xp: 40,
          descripcion: "En calquera triángulo rectángulo:\n**$c^2 = a^2 + b^2$**\n**$c = \\sqrt{a^2 + b^2}$**"
        },
        {
          emoji: "✂️",
          icono: "✂️",
          pegatina: "🔢",
          concepto: "Ecuacións con Parénteses",
          rareza: "epica",
          elemento: "Álxebra ESO",
          poder: 90,
          defensa: 92,
          xp: 35,
          descripcion: "Aplica a propiedade distributiva antes de mover termos:\n**$2(x - 3) = 8 \\implies 2x - 6 = 8 \\implies 2x = 14 \\implies x = 7$**"
        },
        {
          emoji: "📏",
          icono: "📏",
          pegatina: "📐",
          concepto: "Cálculo dun Cateto",
          rareza: "especial",
          elemento: "Xeometría ESO",
          poder: 88,
          defensa: 90,
          xp: 30,
          descripcion: "Para despexar un cateto coñecendo a hipotenusa:\n**$a^2 = c^2 - b^2 \\implies a = \\sqrt{c^2 - b^2}$**\nExemplo: $\\sqrt{5^2 - 3^2} = \\sqrt{16} = 4$"
        }
      ],
      tablaEsquema: {
        columnas: ["Estrutura / Fórmula", "Algoritmo de Paso", "Exemplo Resolto"],
        filas: [
          ["$ax + b = c$", "Resta $b$ e divide entre $a$", "$4x + 8 = 24 \\implies 4x = 16 \\implies x = 4$"],
          ["$ax + b = cx + d$", "Agrupa incógnitas á esquerda", "$5x - 3 = 2x + 9 \\implies 3x = 12 \\implies x = 4$"],
          ["$c = \\sqrt{a^2 + b^2}$", "Suma cadrados dos catetos e extrae raíz", "Catetos 6 e 8: $c = \\sqrt{36 + 64} = \\sqrt{100} = 10$"],
          ["$a = \\sqrt{c^2 - b^2}$", "Resta o cadrado do cateto á hipotenusa", "Hipotenusa 13, cateto 5: $a = \\sqrt{169 - 25} = \\sqrt{144} = 12$"]
        ]
      },
      mapaCentral: {
        titulo: "Lóxica de Ecuacións",
        subtitulo: "Resolución e Xeometría",
        icono: "📐",
        satelites: [
          { titulo: "Distributiva", icono: "🔄", sound: "¡POW!", pegatina: "⚡", descripcion: "Multiplica o número exterior por cada termo do paréntese." },
          { titulo: "Transposición", icono: "⚖️", sound: "¡BOOM!", pegatina: "🎯", descripcion: "Ao cruzar o signo igual, cada termo cambia á operación inversa." },
          { titulo: "Hipotenusa", icono: "📐", sound: "¡ZAP!", pegatina: "🔺", descripcion: "É sempre o lado oposto ao ángulo recto de 90 graos e o máis longo." },
          { titulo: "Comprobación", icono: "✅", sound: "¡TOP!", pegatina: "💻", descripcion: "Substitúe a solución achada na ecuación inicial para verificar $0 = 0$." }
        ]
      },
      preguntasTrivial: [
        {
          pregunta: "Cal é a solución da ecuación: $3x - 7 = 2x + 5$?",
          opciones: ["x = 12", "x = -2", "x = 2", "x = -12"],
          correctaIndex: 0,
          xp: 25
        },
        {
          pregunta: "Nun triángulo rectángulo con catetos de lonxitude 3 cm e 4 cm, canto mide a hipotenusa?",
          opciones: ["5 cm", "7 cm", "25 cm", "6 cm"],
          correctaIndex: 0,
          xp: 25
        }
      ],
      palancasVF: [
        { id: 1, texto: "Na ecuación $2x = 10$, a incógnita x despexase dividindo 10 entre 2, obtendo x = 5.", correcta: "V", xp: 15 },
        { id: 2, texto: "O Teorema de Pitágoras pode aplicarse en calquera clase de triángulo, aínda que non teña ningún ángulo recto.", correcta: "F", xp: 15 }
      ],
      retoCreativo: "Deseña un triángulo rectángulo Cyber-Math con catetos 9 e 12 cm. Calcula a hipotenusa mediante $c = \\sqrt{a^2 + b^2}$ paso a paso!"
    }
  }
};

/**
 * Parser de texto XML e híbrido a estructura JSON para EduGalicia
 * Robusto contra respuestas en XML puro o formatos con bloques Markdown.
 */
export function parseAiOutputToSheet(rawText, tema, curso, materia) {
  if (!rawText) return null;

  // 1. Limpieza inicial: decodificar posibles entidades y recortar
  const text = String(rawText).trim();

  // Helper para extraer contenido de una etiqueta XML simple
  const getTagContent = (tagName, source = text) => {
    const reg = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'i');
    const m = source.match(reg);
    return m ? m[1].trim() : null;
  };

  // Helper para extraer atributos de una etiqueta
  const getTagAttrs = (tagName, source = text) => {
    const reg = new RegExp(`<${tagName}([^>]+)>`, 'i');
    const m = source.match(reg);
    if (!m) return {};
    const attrString = m[1];
    const attrs = {};
    const attrReg = /([a-zA-Z_0-9]+)=["']([^"']*)["']/g;
    let match;
    while ((match = attrReg.exec(attrString)) !== null) {
      attrs[match[1]] = match[2];
    }
    return attrs;
  };

  // 2. Extraer metadatos de <tema_global>
  const globalAttrs = getTagAttrs('tema_global');
  const tituloFromAttr = globalAttrs.nombre;
  const colorPaleta = globalAttrs.color_paleta || "azul_espacial";

  // Extraer Título (prioridad: atributo nombre, tag <titulo>, o encabezado Markdown)
  const titleTag = getTagContent('titulo');
  const headerMatch = text.match(/^#+ (.+)$/m);
  const titulo = tituloFromAttr || titleTag || (headerMatch ? headerMatch[1].replace(/^[#*\s]+|[#*\s]+$/g, '').trim() : tema) || "Caderno de Exploración";

  // 3. Extraer Arte Principal Temático (FASE 1 & 2)
  const artePrincipalTag = getTagContent('arte_principal');
  let artePrincipal = artePrincipalTag ? artePrincipalTag.replace(/<[^>]+>/g, '').trim() : null;
  if (!artePrincipal) {
    // Si no viene en el XML, derivar según palabras clave del tema
    const normTopic = (tema + " " + materia).toLowerCase();
    if (normTopic.includes('físic') || normTopic.includes('deport') || normTopic.includes('xogo')) {
      artePrincipal = "⚽🏃‍♂️💪";
    } else if (normTopic.includes('universo') || normTopic.includes('espazo') || normTopic.includes('terra')) {
      artePrincipal = "🌍🚀✨";
    } else if (normTopic.includes('nature') || normTopic.includes('ecosistem') || normTopic.includes('animal') || normTopic.includes('árbor')) {
      artePrincipal = "🌳🦊🍃";
    } else if (normTopic.includes('matemát') || normTopic.includes('númer') || normTopic.includes('cálcul') || normTopic.includes('fracc') || normTopic.includes('álxebra') || normTopic.includes('pitágoras') || normTopic.includes('ecuac') || normTopic.includes('enteir')) {
      artePrincipal = "⚡📐🧮💻";
    } else if (normTopic.includes('inglés') || normTopic.includes('english')) {
      artePrincipal = "🇬🇧🎒⭐";
    } else if (normTopic.includes('lingua') || normTopic.includes('lengua') || normTopic.includes('lectur')) {
      artePrincipal = "📚✍️🎭";
    } else {
      artePrincipal = "⭐🔍🎒";
    }
  }

  // 4. Lema da Mascota, Resumen, Curiosidad y Truco
  const lemaMascota = getTagContent('lema_mascota') || "¡Aprende con enerxía e supera todas as probas deste caderno de misións!";
  const resumen = getTagContent('resumen') || "Explora e comprende os saberes esenciais deste tema con exemplos da nosa contorna.";
  const curiosidad = getTagContent('curiosidad') || "Na natureza e na ciencia, cada pequeno detalle está conectado nunha rede fascinante que podes investigar ti mesmo!";
  
  const trucoTag = getTagContent('truco_examen');
  const trucoMatch = text.match(/>\s*(?:\*\*(?:Truco[^*]*|Consejo[^*]*)\*\*:\s*)?([^\n\r]+)/i);
  const trucoExamen = trucoTag || (trucoMatch ? trucoMatch[1].replace(/^\*\*(?:Truco|Consejo)[^*]*\*\*:\s*/i, '').trim() : "Relaciona sempre os conceptos con cousas que poidas ver na túa vida cotiá!");

  // 5. Extraer Cromos Coleccionables (FASE 3)
  const conceptosClave = [];
  const cromosBlock = getTagContent('cromos') || text;
  const cromoMatches = cromosBlock.matchAll(/<cromo([^>]*)>([\s\S]*?)<\/cromo>/gi);

  for (const match of cromoMatches) {
    const attrString = match[1];
    const innerContent = match[2];

    const getAttr = (name) => {
      const m = attrString.match(new RegExp(`${name}=["']([^"']*)["']`, 'i'));
      return m ? m[1] : '';
    };

    const cTitulo = getAttr('titulo') || getTagContent('titulo', innerContent) || "Concepto Clave";
    const cIcono = getAttr('icono') || getTagContent('icono', innerContent) || "⭐";
    const cRareza = getAttr('rareza') || "epica";
    const cElemento = getAttr('elemento') || "Saber Básico";
    const cPoder = parseInt(getAttr('poder'), 10) || 95;
    const cDefensa = parseInt(getAttr('defensa'), 10) || 90;
    const cXp = parseInt(getAttr('xp'), 10) || 30;
    const cPegatina = getTagContent('pegatina', innerContent) || getAttr('pegatina') || cIcono;
    const cDesc = getTagContent('descripcion', innerContent) || innerContent.replace(/<[^>]+>/g, '').trim();

    conceptosClave.push({
      concepto: cTitulo,
      titulo: cTitulo,
      emoji: cIcono,
      icono: cIcono,
      pegatina: cPegatina,
      rareza: cRareza,
      elemento: cElemento,
      poder: cPoder,
      defensa: cDefensa,
      xp: cXp,
      descripcion: cDesc
    });
  }

  // Fallback para conceptos si no venían en etiquetas <cromo>
  if (conceptosClave.length === 0) {
    const lines = text.split('\n');
    for (const line of lines) {
      const cleanLine = line.trim();
      if (/^[-*•]/.test(cleanLine)) {
        const match = cleanLine.match(/^[-*•]\s*(?:([^\w\s\*\#]+)\s*)?\*?\*?([^*\:\n]{2,40})\*?\*?:\s*(.+)$/);
        if (match && conceptosClave.length < 6) {
          const emoji = match[1] || "💡";
          const concepto = match[2].replace(/[*_]/g, '').trim();
          const descripcion = match[3].replace(/[*_]/g, '').trim();
          if (concepto && descripcion) {
            conceptosClave.push({
              concepto,
              titulo: concepto,
              emoji: emoji.trim() || "💡",
              icono: emoji.trim() || "💡",
              rareza: "epica",
              elemento: "Clave",
              poder: 95,
              defensa: 90,
              xp: 30,
              descripcion
            });
          }
        }
      }
    }
  }

  if (conceptosClave.length === 0) {
    conceptosClave.push(
      { emoji: "🌳", icono: "🌳", concepto: "Fundamentos do Tema", rareza: "lendaria", elemento: "Básico", poder: 95, defensa: 90, xp: 30, descripcion: `Saberes fundamentais oficiais de Primaria para ${tema}.` },
      { emoji: "🔍", icono: "🔍", concepto: "Observación e Análise", rareza: "epica", elemento: "Práctica", poder: 90, defensa: 95, xp: 30, descripcion: "Descobre como interactúan os elementos na contorna e no noso día a día." },
      { emoji: "🌟", icono: "🌟", concepto: "Conexión Práctica", rareza: "especial", elemento: "Vida", poder: 85, defensa: 88, xp: 25, descripcion: "Aplica o aprendido resolvendo os retos e actividades propostas." },
      { emoji: "🎯", icono: "🎯", concepto: "Meta de Aprendizaxe", rareza: "dominada", elemento: "Éxito", poder: 100, defensa: 85, xp: 30, descripcion: "Comprender e valorar o patrimonio natural e científico de Galicia." }
    );
  }

  // 6. Extraer Cuadro de Clasificación
  let tablaEsquema = null;
  const cuadroBlock = getTagContent('cuadro_clasificacion');
  if (cuadroBlock) {
    const columnas = [];
    const colMatches = cuadroBlock.matchAll(/<columna>([\s\S]*?)<\/columna>/gi);
    for (const c of colMatches) {
      columnas.push(c[1].trim());
    }

    const filas = [];
    const filaMatches = cuadroBlock.matchAll(/<fila>([\s\S]*?)<\/fila>/gi);
    for (const f of filaMatches) {
      const celdas = [];
      const celdaMatches = f[1].matchAll(/<celda>([\s\S]*?)<\/celda>/gi);
      for (const cell of celdaMatches) {
        celdas.push(cell[1].trim());
      }
      if (celdas.length > 0) filas.push(celdas);
    }

    if (columnas.length > 0 && filas.length > 0) {
      tablaEsquema = { columnas, filas };
    }
  }

  // Fallback de tabla Markdown
  if (!tablaEsquema) {
    const tableRegex = /\|(.+)\|[\r\n]+\|[-:| ]+\|[\r\n]+((?:\|.+\|[\r\n]*)+)/;
    const tableMatch = text.match(tableRegex);
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
  }

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

  // 7. Extraer Mapa Mental Radial (<mapa_central> e <satelite>)
  let mapaCentral = null;
  const mapaBlock = getTagContent('mapa_central');
  if (mapaBlock) {
    const centralAttrs = getTagAttrs('mapa_central');
    const mTitulo = centralAttrs.titulo || "Concepto Central";
    const mSubtitulo = centralAttrs.subtitulo || "Galicia Primaria";
    const mIcono = centralAttrs.icono || "⭐";

    const satelites = [];
    const satMatches = mapaBlock.matchAll(/<satelite([^>]*)>([\s\S]*?)<\/satelite>/gi);
    for (const sat of satMatches) {
      const satAttrStr = sat[1];
      const satInner = sat[2];
      const getSatAttr = (n) => {
        const m = satAttrStr.match(new RegExp(`${n}=["']([^"']*)["']`, 'i'));
        return m ? m[1] : '';
      };
      const sTitulo = getSatAttr('titulo') || getTagContent('titulo', satInner) || "Subtema";
      const sIcono = getSatAttr('icono') || getTagContent('icono', satInner) || "✨";
      const sSound = getSatAttr('sound') || "¡POW!";
      const sPegatina = getTagContent('pegatina', satInner) || getSatAttr('pegatina') || sIcono;
      const sDesc = getTagContent('descripcion', satInner) || satInner.replace(/<[^>]+>/g, '').trim();

      satelites.push({
        titulo: sTitulo,
        concepto: sTitulo,
        icono: sIcono,
        emoji: sIcono,
        pegatina: sPegatina,
        sound: sSound,
        descripcion: sDesc
      });
    }

    if (satelites.length > 0) {
      mapaCentral = {
        titulo: mTitulo,
        subtitulo: mSubtitulo,
        icono: mIcono,
        satelites: satelites.slice(0, 4)
      };
    }
  }

  // Fallback para mapa si no vino en XML: usar primeros 4 conceptos
  if (!mapaCentral) {
    mapaCentral = {
      titulo: titulo,
      subtitulo: "Galicia LOMLOE",
      icono: conceptosClave[0]?.emoji || "⭐",
      satelites: conceptosClave.slice(0, 4).map((c, i) => ({
        titulo: c.concepto,
        concepto: c.concepto,
        icono: c.emoji,
        emoji: c.emoji,
        sound: ["¡POW!", "¡BOOM!", "¡ZAP!", "¡TOP!"][i % 4],
        descripcion: c.descripcion
      }))
    };
  }

  // 8. Extraer Retos Arcade (<retos>, <pregunta_arcade>, <palanca_vf>, <reto_creativo_arte>)
  const preguntasTrivial = [];
  const retosBlock = getTagContent('retos') || text;

  const preguntaMatches = retosBlock.matchAll(/<pregunta_arcade([^>]*)>([\s\S]*?)<\/pregunta_arcade>/gi);
  for (const pm of preguntaMatches) {
    const pAttrStr = pm[1];
    const pInner = pm[2];
    const pTexto = pAttrStr.match(/texto=["']([^"']*)["']/i)?.[1] || "Pregunta Arcade?";
    const pXp = parseInt(pAttrStr.match(/xp=["']([^"']*)["']/i)?.[1], 10) || 20;

    const opciones = [];
    let correctaIndex = 0;
    const opcMatches = pInner.matchAll(/<opcion([^>]*)>([\s\S]*?)<\/opcion>/gi);
    let optIdx = 0;
    for (const om of opcMatches) {
      const isCorrect = om[1].includes('correcta="true"') || om[1].includes("correcta='true'");
      if (isCorrect) correctaIndex = optIdx;
      opciones.push(om[2].trim());
      optIdx++;
    }

    if (opciones.length >= 2) {
      preguntasTrivial.push({
        pregunta: pTexto,
        opciones,
        correctaIndex,
        xp: pXp
      });
    }
  }

  // Fallback para preguntas si no venían en XML
  if (preguntasTrivial.length === 0) {
    const quizRegex = /(\d+[\.\)]\s*[^\n\?]+\?)([\s\S]*?)(?=(?:\d+[\.\)]|##|$))/g;
    const quizMatches = text.matchAll(quizRegex);
    for (const q of quizMatches) {
      if (preguntasTrivial.length < 2) {
        const preguntaTexto = q[1].replace(/^\d+[\.\)]\s*/, '').trim();
        const opcionesTexto = q[2];
        const opciones = [];
        const optMatches = opcionesTexto.matchAll(/[-*a-dA-D\)]\s*([^\n\r]+)/g);
        for (const opt of optMatches) {
          const cleanOpt = opt[1].replace(/^[a-dA-D][\.\)]\s*/, '').trim();
          if (cleanOpt && opciones.length < 4) opciones.push(cleanOpt);
        }
        if (preguntaTexto && opciones.length >= 2) {
          preguntasTrivial.push({ pregunta: preguntaTexto, opciones, correctaIndex: 0, xp: 20 });
        }
      }
    }
  }

  if (preguntasTrivial.length === 0) {
    preguntasTrivial.push(
      {
        pregunta: `Cal é o papel principal de ${tema} na nosa aprendizaxe?`,
        opciones: ["Comprender como funciona o noso entorno", "Memorizar datos sen sentido", "Non ten ningunha utilidade"],
        correctaIndex: 0,
        xp: 20
      },
      {
        pregunta: "Como podemos aplicar este coñecemento no noso día a día en Galicia?",
        opciones: ["Observando e protexendo a nosa contorna natural", "Pechando os ollos e sen participar", "Só cando temos exame"],
        correctaIndex: 0,
        xp: 20
      }
    );
  }

  // Extraer Palancas V/F
  const palancasVF = [];
  const vfMatches = retosBlock.matchAll(/<palanca_vf([^>]*)\/?>/gi);
  for (const vfm of vfMatches) {
    const vAttrStr = vfm[1];
    const vTexto = vAttrStr.match(/texto=["']([^"']*)["']/i)?.[1] || "";
    const vCorrecta = vAttrStr.match(/correcta=["']([^"']*)["']/i)?.[1] || "V";
    const vXp = parseInt(vAttrStr.match(/xp=["']([^"']*)["']/i)?.[1], 10) || 15;
    if (vTexto) {
      palancasVF.push({
        id: palancasVF.length + 1,
        texto: vTexto,
        correcta: vCorrecta.toUpperCase() === "F" ? "F" : "V",
        xp: vXp
      });
    }
  }

  if (palancasVF.length === 0) {
    palancasVF.push(
      { id: 1, texto: "Os elementos deste tema relaciónanse entre si e cumpren funcións esenciais.", correcta: "V", xp: 15 },
      { id: 2, texto: "Este coñecemento non ten ningunha presenza real na natureza nin na sociedade de Galicia.", correcta: "F", xp: 15 }
    );
  }

  // Extraer Reto Creativo
  const retoTag = getTagContent('reto_creativo_arte') || getTagContent('reto_creativo');
  const desafioMatch = text.match(/(?:Desafío|Reto Creativo)[^:]*:\s*([^\n\r]+)/i);
  const retoCreativo = retoTag || (desafioMatch ? desafioMatch[1].trim() : `Debuxa o concepto máis importante deste tema: ponlle unha carita kawaii feliz, o seu nome en letras de cómic xigantes e cores vivas!`);

  return {
    titulo,
    colorPaleta,
    artePrincipal,
    lemaMascota,
    resumen,
    curiosidad,
    trucoExamen,
    conceptosClave,
    tablaEsquema,
    mapaCentral,
    preguntasTrivial,
    palancasVF,
    retoCreativo
  };
}
