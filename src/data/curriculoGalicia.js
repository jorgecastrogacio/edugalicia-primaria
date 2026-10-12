/**
 * Base de Datos Curricular Oficial Completa de Galicia (Decreto 155/2022 e Orde do 26 de maio de 2023)
 * Cobertura 100% de 1º a 6º de Educación Primaria (Ciclos 1, 2 e 3)
 */

export const CURRICULO_GALICIA = {
  normativa: {
    decreto: "Decreto 155/2022, do 15 de setembro (DOG núm. 183)",
    orde: "Orde do 26 de maio de 2023 (DOG núm. 108)",
    comunidade: "Comunidade Autónoma de Galicia",
    etapa: "Educación Primaria"
  },
  cursos: [
    { id: "1", label: "1º de Primaria", ciclo: 1, cicloLabel: "1º Ciclo (1º-2º)" },
    { id: "2", label: "2º de Primaria", ciclo: 1, cicloLabel: "1º Ciclo (1º-2º)" },
    { id: "3", label: "3º de Primaria", ciclo: 2, cicloLabel: "2º Ciclo (3º-4º)" },
    { id: "4", label: "4º de Primaria", ciclo: 2, cicloLabel: "2º Ciclo (3º-4º)" },
    { id: "5", label: "5º de Primaria", ciclo: 3, cicloLabel: "3º Ciclo (5º-6º)" },
    { id: "6", label: "6º de Primaria", ciclo: 3, cicloLabel: "3º Ciclo (5º-6º)" },
  ],
  materias: [
    {
      id: "matematicas",
      nombre: "Matemáticas",
      icono: "📐",
      color: "blue",
      ciclos: {
        1: {
          bloques: [
            {
              id: "sentido_numerico",
              nombre: "Sentido numérico",
              temasSugeridos: ["Números ata o 99", "Sumas e restas sen e con levada", "Valor posicional: unidades e decenas", "Cálculo mental: amigos do 10"],
              saberes: [
                "Estratexias de reconto sistemático e estimación de cantidades ata o 99 (SB-MAT-1C-A-01).",
                "O sistema de numeración decimal: orde, valor posicional (unidades e decenas) e descomposición (SB-MAT-1C-A-02).",
                "Operacións de suma e resta: significados (xuntar, engadir, separar, quitar) e algoritmos estándar (SB-MAT-1C-A-03).",
                "Cálculo mental: estratexias básicas (dobres, amigos do 10, sumar/restar 1 e 10) (SB-MAT-1C-A-04).",
                "Resolución de problemas aritméticos sinxelos da vida cotiá nun só paso (SB-MAT-1C-A-05)."
              ]
            },
            {
              id: "sentido_medida",
              nombre: "Sentido da medida",
              temasSugeridos: ["Medidas non convencionais (palmos, pasos)", "O reloxo: horas en punto e media", "Moedas e billetes de euro"],
              saberes: [
                "Unidades de medida corporais e convencionais básicas: metro e centímetro (SB-MAT-1C-B-01).",
                "A medida do tempo: lectura de reloxos analóxicos e dixitais en punto e media (SB-MAT-1C-B-02).",
                "O sistema monetario: moedas de 1 e 2 euros, céntimos e billetes de 5, 10 e 20 euros (SB-MAT-1C-B-03)."
              ]
            },
            {
              id: "sentido_espacial",
              nombre: "Sentido espacial e xeometría",
              temasSugeridos: ["Figuras planas (círculo, cadrado, triángulo)", "Corpos xeométricos (cubo, esfera)", "Posición relativa: dereita e esquerda"],
              saberes: [
                "Identificación e descrición de figuras planas de 2D: círculo, cadrado, rectángulo e triángulo (SB-MAT-1C-C-01).",
                "Recoñecemento de corpos xeométricos tridimensionais no contorno: esfera, cubo e cilindro (SB-MAT-1C-C-02).",
                "Posición e movemento relativo: dentro/fóra, arriba/abaixo, diante/detrás, dereita/esquerda (SB-MAT-1C-C-03)."
              ]
            },
            {
              id: "sentido_alxebrico",
              nombre: "Sentido alxébrico e patróns",
              temasSugeridos: ["Patróns e series con figuras e cores", "O signo igual como equilibrio", "Pensamento computacional desconectado"],
              saberes: [
                "Patróns e regularidades: continuación de series lóxicas con figuras, cores e números (SB-MAT-1C-E-01).",
                "O significado do signo igual como relación de equivalencia ou equilibrio (SB-MAT-1C-E-02).",
                "Pensamento computacional desconectado: secuencias de pasos e instrucións ordenadas (SB-MAT-1C-E-03)."
              ]
            },
            {
              id: "sentido_estocastico",
              nombre: "Sentido estocástico e datos",
              temasSugeridos: ["Táboas de dobre entrada", "Pictogramas e gráficos de barras"],
              saberes: [
                "Organización de datos en táboas de dobre entrada e representación en pictogramas e barras (SB-MAT-1C-D-01)."
              ]
            },
            {
              id: "sentido_socioemocional",
              nombre: "Sentido socioemocional",
              temasSugeridos: ["Xestión do erro matemático", "Perseveranza e traballo cooperativo"],
              saberes: [
                "Xestión das emocións e o erro como oportunidade de aprendizaxe (SB-MAT-1C-F-01).",
                "Actitude positiva e traballo cooperativo na resolución de retos matemáticos (SB-MAT-1C-F-02)."
              ]
            }
          ]
        },
        2: {
          bloques: [
            {
              id: "sentido_numerico",
              nombre: "Sentido numérico",
              temasSugeridos: ["Números ata o 99.999", "As táboas de multiplicar ata o 10", "A división e repartos con 1 cifra", "Fraccións sinxelas (1/2, 1/4, 3/4)"],
              saberes: [
                "O sistema decimal ata o 99.999: lectura, valor posicional e redondeo (SB-MAT-2C-A-01).",
                "A multiplicación: suma reiterada, produto cartesiano e táboas ata o 10 (SB-MAT-2C-A-02).",
                "A división: repartición equitativa, divisor dunha cifra, resto e cociente (SB-MAT-2C-A-03).",
                "Iniciación ás fraccións como parte dun todo (medios, terzos, cuartos) (SB-MAT-2C-A-04).",
                "Cálculo mental flexible e estimación en operacións combinadas sinxelas (SB-MAT-2C-A-05)."
              ]
            },
            {
              id: "sentido_medida",
              nombre: "Sentido da medida",
              temasSugeridos: ["Sistema Métrico (km, m, cm, l, kg)", "O reloxo con minutos (e cuarto, e media, menos cuarto)", "Cálculo de perímetros"],
              saberes: [
                "Unidades estándar: lonxitude (km, m, cm, mm), masa (kg, g) e capacidade (l, medio litro) (SB-MAT-2C-B-01).",
                "A medida do tempo con minutos e cálculo de intervalos temporais (SB-MAT-2C-B-02).",
                "Cálculo de perímetros en figuras poligonais sinxelas (SB-MAT-2C-B-03)."
              ]
            },
            {
              id: "sentido_espacial",
              nombre: "Sentido espacial e xeometría",
              temasSugeridos: ["Clasificación de polígonos", "Ángulos rectos, agudos e obtusos", "Eixes de simetría", "Poliedros e corpos redondos"],
              saberes: [
                "Clasificación de polígonos polo número de lados e elementos (vértices, lados) (SB-MAT-2C-C-01).",
                "Ángulos: identificación de rectos, agudos e obtusos (SB-MAT-2C-C-02).",
                "Eixes de simetría en elementos da natureza e da arte galega (SB-MAT-2C-C-03).",
                "Corpos xeométricos: prismas, pirámides, cilindros e esferas (SB-MAT-2C-C-04)."
              ]
            },
            {
              id: "sentido_alxebrico",
              nombre: "Sentido alxébrico",
              temasSugeridos: ["Series crecentes e decrecentes", "Algoritmos con bifurcacións (se... entón...)"],
              saberes: [
                "Patróns numéricos e xeométricos en series crecentes e decrecentes (SB-MAT-2C-D-01).",
                "Pensamento computacional: algoritmos con condicionais simples (SB-MAT-2C-D-02)."
              ]
            },
            {
              id: "sentido_estocastico",
              nombre: "Sentido estocástico",
              temasSugeridos: ["Gráficos de barras con escala", "A moda estatística", "Sucesos seguros, posibles e imposibles"],
              saberes: [
                "Elaboración e lectura crítica de gráficas de barras con escala e pictogramas (SB-MAT-2C-E-01).",
                "Concepto de moda como o valor máis frecuente (SB-MAT-2C-E-02).",
                "Probabilidade intuitiva en xogos de azar con dados e moedas (SB-MAT-2C-E-03)."
              ]
            },
            {
              id: "sentido_socioemocional",
              nombre: "Sentido socioemocional",
              temasSugeridos: ["Persistencia ante retos", "Autoavaliación de pasos"],
              saberes: [
                "Xestión da frustración e persistencia na resolución de problemas (SB-MAT-2C-F-01)."
              ]
            }
          ]
        },
        3: {
          bloques: [
            {
              id: "sentido_numerico",
              nombre: "Sentido numérico",
              temasSugeridos: ["Números decimais e operacións", "Xerarquía das operacións e parénteses", "Múltiplos, divisores e números primos (mcm e mcd)", "Operacións con fraccións equivalentes", "Porcentaxes e proporcionalidade directa", "Potencias de base 10 e raíz cadrada"],
              saberes: [
                "Números decimais (décimas, centésimas, milésimas) e ordenación na recta (SB-MAT-3C-A-01).",
                "Operacións combinadas con decimais e xerarquía de parénteses (SB-MAT-3C-A-02).",
                "Múltiplos, divisores, números primos, criterios de divisibilidade, m.c.d. e m.c.m. (SB-MAT-3C-A-03).",
                "Fraccións equivalentes, suma e resta con distinto denominador, produto e cociente (SB-MAT-3C-A-04).",
                "Porcentaxes (10%, 25%, 50%), descontos e proporcionalidade directa (SB-MAT-3C-A-05).",
                "Potencias de base 10 e raíz cadrada exacta (SB-MAT-3C-A-06)."
              ]
            },
            {
              id: "sentido_medida",
              nombre: "Sentido da medida",
              temasSugeridos: ["Sistema Métrico Decimal e unidades de superficie (m²)", "Área de polígonos regulares e círculo (pi)", "Sistema sesaxesimal: graos e tempos"],
              saberes: [
                "O Sistema Métrico Decimal completo e unidades de superficie (metro cadrado, hectárea) (SB-MAT-3C-B-01).",
                "Áreas de triángulos, cuadriláteros, polígonos regulares e círculo (número pi) (SB-MAT-3C-B-02).",
                "O sistema sesaxesimal: medida de ángulos en graos e tempos en horas/minutos/segundos (SB-MAT-3C-B-03)."
              ]
            },
            {
              id: "sentido_espacial",
              nombre: "Sentido espacial e xeometría",
              temasSugeridos: ["Suma de ángulos dun triángulo (180º)", "Coordenadas cartesianas no plano", "Poliedros regulares e Teorema de Pitágoras visual"],
              saberes: [
                "Clasificación de triángulos por lados e ángulos; suma de ángulos (180º) (SB-MAT-3C-C-01).",
                "O plano cartesiano: localización de puntos por coordenadas (abscisas e ordenadas) (SB-MAT-3C-C-02).",
                "Poliedros regulares, corpos redondos e Teorema de Pitágoras con enfoque intuitivo (SB-MAT-3C-C-03)."
              ]
            },
            {
              id: "sentido_alxebrico",
              nombre: "Sentido alxébrico",
              temasSugeridos: ["Ecuacións aritméticas sinxelas con incógnita", "Diagramas de fluxo con bucles"],
              saberes: [
                "Iniciación á linguaxe alxébrica e termo descoñecido en ecuacións sinxelas (SB-MAT-3C-D-01).",
                "Pensamento computacional: diagramas de fluxo con bucles e estruturas condicionais (SB-MAT-3C-D-02)."
              ]
            },
            {
              id: "sentido_estocastico",
              nombre: "Sentido estocástico",
              temasSugeridos: ["Media aritmética, mediana, moda e rango", "Diagramas circulares", "Regra de Laplace"],
              saberes: [
                "Estatística descritiva: media aritmética, mediana, moda e rango contextualizados (SB-MAT-3C-E-01).",
                "Gráficas avanzadas: diagramas circulares e detección de manipulacións gráficas (SB-MAT-3C-E-02).",
                "Probabilidade matemática: aplicación da Regra de Laplace (casos favorables / posibles) (SB-MAT-3C-E-03)."
              ]
            },
            {
              id: "sentido_socioemocional",
              nombre: "Sentido socioemocional",
              temasSugeridos: ["Autonomía e rigor", "Xustificación lóxica das solucións"],
              saberes: [
                "Autonomía, rigor e autocrítica na comunicación de solucións matemáticas (SB-MAT-3C-F-01)."
              ]
            }
          ]
        }
      }
    },
    {
      id: "conecemento_medio",
      nombre: "Ciencias da Natureza",
      icono: "🌿",
      color: "emerald",
      ciclos: {
        1: {
          bloques: [
            {
              id: "cultura_cientifica",
              nombre: "Cultura científica",
              temasSugeridos: ["Animais da contorna galega", "Partes das plantas", "O corpo humano e os cinco sentidos", "Hábitos saudables de alimentación e descanso"],
              saberes: [
                "Iniciación á actividade científica: formulación de hipóteses pola observación directa (SB-CN-1C-A-01).",
                "Recollida e rexistro de datos da contorna natural mediante táboas e debuxos (SB-CN-1C-A-02).",
                "Instrumentos básicos de observación: lupas e recipientes de medida (SB-CN-1C-A-03).",
                "Características dos animais e plantas: necesidades vitais e partes da planta (SB-CN-1C-A-04).",
                "O corpo humano, órganos dos sentidos e hábitos de hixiene e descanso (SB-CN-1C-A-05).",
                "Propiedades observables dos materiais e cambios de estado visibles na auga (SB-CN-1C-A-06)."
              ]
            },
            {
              id: "tecnoloxia_dixitalizacion",
              nombre: "Tecnoloxía e dixitalización",
              temasSugeridos: ["Dispositivos dixitais na escola", "Uso seguro de ferramentas manuais"],
              saberes: [
                "Dispositivos dixitais escolares: manexo con seguridade do rato e teclado (SB-CN-1C-B-01).",
                "Materiais reciclados e ferramentas manuais na construción guiada de obxectos (SB-CN-1C-B-02)."
              ]
            }
          ]
        },
        2: {
          bloques: [
            {
              id: "cultura_cientifica",
              nombre: "Cultura científica",
              temasSugeridos: ["Ecosistemas de Galicia: Fragas e Rías", "Cadeas tróficas: produtores e consumidores", "Animais vertebrados e invertebrados", "Estados da materia e cambios de estado", "Fontes de enerxía renovables", "A dieta atlántica e a roda dos alimentos"],
              saberes: [
                "A investigación científica escolar con variables sinxelas (SB-CN-2C-A-01).",
                "Os ecosistemas de Galicia: fragas atlánticas, rías, marismas e ríos (SB-CN-2C-A-02).",
                "Relacións tróficas: produtores (fotosíntese), consumidores e descompoñedores (SB-CN-2C-A-03).",
                "Clasificación dos seres vivos: vertebrados e invertebrados nos cinco reinos (SB-CN-2C-A-04).",
                "A materia: masa e volume. Estados e cambios de estado (fusión, evaporación) (SB-CN-2C-A-05).",
                "A enerxía: formas de enerxía e fontes renovables (solar, eólica, hidráulica) (SB-CN-2C-A-06).",
                "A saúde: hábitos saudables, a roda dos alimentos e a dieta atlántica galega (SB-CN-2C-A-07)."
              ]
            },
            {
              id: "tecnoloxia_dixitalizacion",
              nombre: "Tecnoloxía e dixitalización",
              temasSugeridos: ["Máquinas sinxelas (palancas, poleas, rodas)", "Navegación segura e busca de información"],
              saberes: [
                "Deseño e construción de estruturas con máquinas sinxelas e operadores mecánicos (SB-CN-2C-B-01).",
                "Uso seguro da rede e busca guiada de información científica (SB-CN-2C-B-02)."
              ]
            }
          ]
        },
        3: {
          bloques: [
            {
              id: "cultura_cientifica",
              nombre: "Cultura científica",
              temasSugeridos: ["A célula animal e vexetal", "A función de nutrición: dixestivo, respiratorio, circulatorio e excretor", "O sistema nervioso e o aparello locomotor", "A reprodución humana e a puberdade", "Mesturas homoxéneas e heteroxéneas (densidade)", "Circuítos eléctricos e magnetismo"],
              saberes: [
                "A célula: estrutura, tipos (animal e vexetal) e seres unicelulares/pluricelulares (SB-CN-3C-A-01).",
                "Niveis de organización biolóxica: células, tecidos, órganos e sistemas (SB-CN-3C-A-02).",
                "A función de nutrición: dixestivo, respiratorio, circulatorio e excretor coordinados (SB-CN-3C-A-03).",
                "A función de relación: sistema nervioso central, sentidos e aparello locomotor (SB-CN-3C-A-04).",
                "A reprodución humana, cambios na puberdade e saúde afectivo-sexual (SB-CN-3C-A-05).",
                "A materia: densidade, mesturas e métodos de separación. Combustión e oxidación (SB-CN-3C-A-06).",
                "A electricidade e magnetismo: circuítos eléctricos elementais e campos magnéticos (SB-CN-3C-A-07)."
              ]
            },
            {
              id: "tecnoloxia_dixitalizacion",
              nombre: "Tecnoloxía e dixitalización",
              temasSugeridos: ["Proxectos tecnolóxicos con circuítos", "Ciberseguridade e pegada dixital"],
              saberes: [
                "Deseño de proxectos tecnolóxicos e montaxe de prototipos con circuítos (SB-CN-3C-B-01).",
                "Pegada dixital, ciberseguridade e uso ético das tecnoloxías (SB-CN-3C-B-02)."
              ]
            }
          ]
        }
      }
    },
    {
      id: "ciencias_sociais",
      nombre: "Ciencias Sociais",
      icono: "🌍",
      color: "amber",
      ciclos: {
        1: {
          bloques: [
            {
              id: "sociedades_territorios",
              nombre: "Sociedades e territorios",
              temasSugeridos: ["O calendario e as estacións do ano", "A historia familiar e liñas do tempo", "A aldea, vila e cidade en Galicia", "Orientación e planos da escola", "Oficios e servizos públicos"],
              saberes: [
                "O tempo cronolóxico: antes, agora, despois; estacións e días da semana (SB-CS-1C-A-01).",
                "A historia familiar e persoal con liñas do tempo sinxelas (SB-CS-1C-A-02).",
                "A contorna local: características da aldea, da vila e da cidade en Galicia (SB-CS-1C-A-03).",
                "Orientación espacial elemental e planos sinxelos da aula e da escola (SB-CS-1C-A-04).",
                "Oficios e servizos públicos básicos da comunidade (SB-CS-1C-A-05)."
              ]
            },
            {
              id: "cidadania_convivencia",
              nombre: "Cidadanía e convivencia",
              temasSugeridos: ["Normas de convivencia e respecto", "Seguridade viaria como peóns", "Festas e tradicións populares de Galicia"],
              saberes: [
                "Normas de convivencia na aula e resolución pacífica de conflitos (SB-CS-1C-B-01).",
                "Seguridade viaria: semáforos, pasos de peóns e cinto de seguridade (SB-CS-1C-B-02).",
                "Tradicións populares e festas tradicionais de Galicia (SB-CS-1C-B-03)."
              ]
            }
          ]
        },
        2: {
          bloques: [
            {
              id: "sociedades_territorios",
              nombre: "Sociedades e territorios",
              temasSugeridos: ["Movementos da Terra (rotación e translación)", "O relevo e os ríos de Galicia (Miño, Sil, Ulla)", "O clima oceánico en Galicia", "Sectores económicos: pesca, marisqueo e gandería en Galicia", "Prehistoria, cultura castrexa e romanización de Galicia"],
              saberes: [
                "A Terra no Sistema Solar: rotación, translación e fases da Lúa (SB-CS-2C-A-01).",
                "A xeografía física de Galicia: serras, Rías Altas e Baixas e concas fluviais (SB-CS-2C-A-02).",
                "O clima oceánico de Galicia e os elementos meteorolóxicos (SB-CS-2C-A-03).",
                "Poboación e sectores produtivos en Galicia: pesca, marisqueo e gandería (SB-CS-2C-A-04).",
                "Pegadas do pasado: da cultura castrexa á romanización en Galicia (SB-CS-2C-A-05)."
              ]
            },
            {
              id: "cidadania_convivencia",
              nombre: "Cidadanía e convivencia",
              temasSugeridos: ["O concello e os servizos municipais", "Conservación do patrimonio e loita contra os incendios"],
              saberes: [
                "A organización municipal: concello, alcaldía e servizos cidadáns (SB-CS-2C-B-01).",
                "Conservación do patrimonio e sensibilización contra os incendios forestais (SB-CS-2C-B-02)."
              ]
            }
          ]
        },
        3: {
          bloques: [
            {
              id: "sociedades_territorios",
              nombre: "Sociedades e territorios",
              temasSugeridos: ["Coordenadas xeográficas: latitude e lonxitude", "Xeografía física de España e Europa", "A Constitución de 1978 e o Estatuto de Autonomía de Galicia", "A Idade Moderna en Galicia e España", "A Idade Contemporánea: Rexurdimento galego, Guerra Civil e Democracia", "Desenvolvemento sostible e Axenda 2030 en Galicia"],
              saberes: [
                "A representación da Terra: paralelos, meridianos, latitude e lonxitude (SB-CS-3C-A-01).",
                "A xeografía física de España e Europa: relevo, ríos e zonas climáticas (SB-CS-3C-A-02).",
                "A Constitución, o Estatuto de Autonomía, a Xunta, o Parlamento e a Unión Europea (SB-CS-3C-A-03).",
                "A Idade Moderna en Galicia e España: Reis Católicos e Imperio dos Austrias (SB-CS-3C-A-04).",
                "A Idade Contemporánea: Rexurdimento galego, Guerra Civil, Ditadura e Democracia (SB-CS-3C-A-05).",
                "Desenvolvemento sostible, Axenda 2030 e ODS no contexto de Galicia (SB-CS-3C-A-06)."
              ]
            },
            {
              id: "cidadania_convivencia",
              nombre: "Cidadanía e convivencia",
              temasSugeridos: ["Igualdade de xénero e Dereitos Humanos"],
              saberes: [
                "Igualdade de xénero, Dereitos Humanos e rexeitamento á discriminación (SB-CS-3C-B-01)."
              ]
            }
          ]
        }
      }
    },
    {
      id: "lingua_galega",
      nombre: "Lingua Galega e Literatura",
      icono: "📖",
      color: "sky",
      ciclos: {
        1: {
          bloques: [
            {
              id: "linguas_falantes",
              nombre: "As linguas e os seus falantes",
              temasSugeridos: ["O galego, a nosa lingua propia"],
              saberes: [
                "A lingua galega como lingua propia de Galicia e actitude positiva de uso (SB-LG-1C-A-01)."
              ]
            },
            {
              id: "comunicacion_oral",
              nombre: "Comunicación oral",
              temasSugeridos: ["Saúdos e cortesía en galego", "Cantigas e adiviñas populares"],
              saberes: [
                "Comprensión e expresión oral en galego en situacións cotiás (SB-LG-1C-B-01).",
                "Cantigas infantís, trabalinguas e adiviñas da tradición oral (SB-LG-1C-B-02)."
              ]
            },
            {
              id: "comunicacion_escrita",
              nombre: "Comunicación escrita",
              temasSugeridos: ["Iniciación á lectura en galego", "Maiúsculas e punto final"],
              saberes: [
                "Correspondencia grafema-fonema propia do galego e lectoescritura (SB-LG-1C-C-01).",
                "Redacción de frases sinxelas con correcta separación de palabras (SB-LG-1C-C-02).",
                "Normas elementais: maiúsculas e punto final (SB-LG-1C-C-03)."
              ]
            },
            {
              id: "educacion_literaria",
              nombre: "Educación literaria",
              temasSugeridos: ["Contos ilustrados en galego"],
              saberes: [
                "Lectura de álbums ilustrados e contos infantís en galego (SB-LG-1C-D-01)."
              ]
            }
          ]
        },
        2: {
          bloques: [
            {
              id: "comunicacion_oral",
              nombre: "Comunicación oral",
              temasSugeridos: ["Exposicións orais na aula", "Lendas e romances galegos"],
              saberes: [
                "Exposicións orais breves con apoio visual e debates guiados (SB-LG-2C-B-01).",
                "Lendas populares e textos da tradición oral galega (SB-LG-2C-B-02)."
              ]
            },
            {
              id: "comunicacion_escrita",
              nombre: "Comunicación escrita",
              temasSugeridos: ["Ideas principais dun texto", "Redacción de noticias e instrucións"],
              saberes: [
                "Comprensión lectora e identificación da idea principal (SB-LG-2C-C-01).",
                "Produción de noticias escolares, instrucións e descricións (SB-LG-2C-C-02)."
              ]
            },
            {
              id: "reflexion_lingua",
              nombre: "Reflexión sobre a lingua e ortografía",
              temasSugeridos: ["Substantivos, adxectivos e verbos en galego", "Acentuación: agudas, graves e esdrúxulas", "Familias de palabras e sinónimos/antónimos"],
              saberes: [
                "Clases de palabras: substantivos, adxectivos, artigos e tempos verbais (SB-LG-2C-D-01).",
                "Ortografía: regras de acentuación (agudas, graves, esdrúxulas) e signos de puntuación (SB-LG-2C-D-02).",
                "Léxico: sinónimos, antónimos e derivación con prefixos e sufixos (SB-LG-2C-D-03)."
              ]
            },
            {
              id: "educacion_literaria",
              nombre: "Educación literaria",
              temasSugeridos: ["O Día das Letras Galegas", "Autores da literatura infantil galega"],
              saberes: [
                "Lectura de autoras e autores galegos e o Día das Letras Galegas (SB-LG-2C-E-01)."
              ]
            }
          ]
        },
        3: {
          bloques: [
            {
              id: "linguas_falantes",
              nombre: "As linguas e os seus falantes",
              temasSugeridos: ["O galego na lusofonía", "Variedades dialectais: gheada e seseo"],
              saberes: [
                "O galego no marco da lusofonía e rexeitamento a prexuízos lingüísticos (SB-LG-3C-A-01).",
                "Variedades dialectais da lingua galega: bloques e fenómenos de gheada e seseo (SB-LG-3C-A-02)."
              ]
            },
            {
              id: "comunicacion_oral_escrita",
              nombre: "Comunicación oral e escrita",
              temasSugeridos: ["Debates formais e argumentación", "Detección de fake news en prensa dixital", "Textos expositivos e argumentativos"],
              saberes: [
                "Xéneros orais formais: conferencias e debates con argumentación sólida (SB-LG-3C-B-01).",
                "Análise crítica de prensa e medios dixitais; detección de fake news (SB-LG-3C-C-01).",
                "Elaboración de textos expositivos e argumentativos con conectores de cohesión (SB-LG-3C-C-02)."
              ]
            },
            {
              id: "gramatica_normativa",
              nombre: "Gramática normativa e ortografía",
              temasSugeridos: ["Pronomes átonos e a súa colocación en galego", "A oración simple: suxeito e predicado", "Acentuación diacrítica e formación de plurais"],
              saberes: [
                "Categorías gramaticais: pronomes átonos galegos e a súa colocación (SB-LG-3C-D-01).",
                "A oración simple: estrutura de suxeito, predicado e complementos (SB-LG-3C-D-02).",
                "Ortografía normativa: acento diacrítico e formación de plurais en -l, -s, -r, -z (SB-LG-3C-D-03)."
              ]
            },
            {
              id: "historia_literatura",
              nombre: "Educación literaria",
              temasSugeridos: ["As cantigas medievais e o Rexurdimento (Rosalía, Castelao)", "Figuras literarias: metáfora e personificación"],
              saberes: [
                "Historia da literatura galega: cantigas medievais, Rexurdimento e século XX (SB-LG-3C-E-01).",
                "Recursos estilísticos literarios: metáfora, comparación e personificación (SB-LG-3C-E-02)."
              ]
            }
          ]
        }
      }
    },
    {
      id: "lengua_castellana",
      nombre: "Lengua Castellana y Literatura",
      icono: "📚",
      color: "red",
      ciclos: {
        1: {
          bloques: [
            {
              id: "comunicacion_oral",
              nombre: "Comunicación oral",
              temasSugeridos: ["Turnos de palabra", "Comprensión de instrucciones y cuentos"],
              saberes: [
                "Interacción oral en situaciones cotidianas y respeto a turnos de palabra (SB-LC-1C-A-01).",
                "Comprensión de mensajes orales directos e instrucciones de aula (SB-LC-1C-A-02)."
              ]
            },
            {
              id: "comunicacion_escrita",
              nombre: "Comunicación escrita",
              temasSugeridos: ["Lectura comprensiva de textos breves", "La oración y caligrafía legible", "Signos de puntuación (. , ¿ ? ¡ !)"],
              saberes: [
                "Afianzamiento del código alfabético y lectura en voz alta entonada (SB-LC-1C-B-01).",
                "Comprensión de textos funcionales breves: carteles, notas e invitaciones (SB-LC-1C-B-02).",
                "Escritura guiada de palabras y oraciones completas legibles (SB-LC-1C-B-03).",
                "Ortografía natural: mayúsculas, punto y signos de interrogación y exclamación (SB-LC-1C-B-04)."
              ]
            },
            {
              id: "educacion_literaria",
              nombre: "Educación literaria",
              temasSugeridos: ["Poemas rimados y fábulas con moraleja"],
              saberes: [
                "Aproximación a la literatura infantil: poemas rimados y fábulas (SB-LC-1C-C-01)."
              ]
            }
          ]
        },
        2: {
          bloques: [
            {
              id: "comunicacion_oral_escrita",
              nombre: "Comunicación oral y escrita",
              temasSugeridos: ["Exposiciones sencillas y entrevistas", "Comprensión lectora e inferencias", "Borradores y revisión de textos"],
              saberes: [
                "Expresión oral de textos formales: exposiciones y entrevistas escolares (SB-LC-2C-A-01).",
                "Búsqueda guiada de información y deducción del sentido por contexto (SB-LC-2C-B-01).",
                "Planificación, redacción de borradores y revisión guiada de cartas y relatos (SB-LC-2C-B-02)."
              ]
            },
            {
              id: "reflexion_lengua",
              nombre: "Reflexión sobre la lengua",
              temasSugeridos: ["Clases de sustantivos, concordancia y determinantes", "Reglas de acentuación: agudas, llanas y esdrújulas", "Grafías dudosas (c/qu, c/z, g/gu/gü, r/rr)"],
              saberes: [
                "Sustantivos (clases), adjetivos (concordancia), artículos y determinantes (SB-LC-2C-C-01).",
                "Acentuación gráfica: clasificación de agudas, llanas y esdrújulas (SB-LC-2C-C-02).",
                "Ortografía de grafías conflictivas: c/qu, c/z, g/gu/gü, r/rr, ll/y (SB-LC-2C-C-03)."
              ]
            },
            {
              id: "educacion_literaria",
              nombre: "Educación literaria",
              temasSugeridos: ["Poesía y estrofas", "Teatro infantil con acotaciones"],
              saberes: [
                "Géneros literarios: poesía (estrofas y versos rimados) y teatro infantil (SB-LC-2C-D-01)."
              ]
            }
          ]
        },
        3: {
          bloques: [
            {
              id: "comunicacion_avanzada",
              nombre: "Comunicación oral y escrita",
              temasSugeridos: ["Debate formal y discursos orales", "Hechos vs opiniones en prensa", "Informes escolares y biografías"],
              saberes: [
                "Producción de discursos orales argumentativos y debate formal (SB-LC-3C-A-01).",
                "Comprensión de textos divulgativos y distinción entre hechos y opiniones (SB-LC-3C-B-01).",
                "Elaboración de informes escolares y textos argumentativos bien estructurados (SB-LC-3C-B-02)."
              ]
            },
            {
              id: "morfosintaxis_ortografia",
              nombre: "Morfosintaxis y ortografía",
              temasSugeridos: ["Las 8 categorías gramaticales", "Análisis sintáctico: Sujeto y Predicado", "Diptongos, hiatos y tilde diacrítica"],
              saberes: [
                "Morfología: las 8 clases de palabras completas (incluidas preposiciones y conjunciones) (SB-LC-3C-C-01).",
                "Sintaxis: Sujeto y Predicado (núcleo, CD, CI y circunstanciales) (SB-LC-3C-C-02).",
                "Ortografía completa: diptongos, hiatos, tilde diacrítica y grafías complejas (SB-LC-3C-C-03)."
              ]
            },
            {
              id: "educacion_literaria",
              nombre: "Educación literaria",
              temasSugeridos: ["Narrativa juvenil, métrica poética y guion teatral"],
              saberes: [
                "Grandes géneros literarios: narrativa, lírica (métrica y rima asonante/consonante) y dramática (SB-LC-3C-D-01)."
              ]
            }
          ]
        }
      }
    },
    {
      id: "lingua_estranxeira",
      nombre: "Lingua Estranxeira (Inglés)",
      icono: "🇬🇧",
      color: "purple",
      ciclos: {
        1: {
          bloques: [
            {
              id: "comunicacion",
              nombre: "Communication & Basics",
              temasSugeridos: ["Greetings & Courtesy (Hello, Please, Thank you)", "Colours & Numbers 1-20", "Classroom Objects & Family", "TPR Instructions (Sit down, Listen)"],
              saberes: [
                "Saúdos, despedidas e fórmulas básicas de cortesía (SB-LE-1C-A-01).",
                "Léxico básico: cores, números 1-20, animais, familia e obxectos escolares (SB-LE-1C-A-02).",
                "Comprensión de instrucións básicas de aula mediante Total Physical Response (SB-LE-1C-A-03).",
                "Produción de estruturas orais elementais con apoio visual (I am, I have got) (SB-LE-1C-A-04).",
                "Cancións e nursery rhymes de países de fala inglesa (SB-LE-1C-B-01)."
              ]
            }
          ]
        },
        2: {
          bloques: [
            {
              id: "communication_routines",
              nombre: "Communication & Routines",
              temasSugeridos: ["Daily Routines (Present Simple)", "Likes and Dislikes (I like / I don't like)", "Food & Parts of the house", "Short texts & Comics"],
              saberes: [
                "Comprensión e expresión oral de rutinas diarias con Present Simple (SB-LE-2C-A-01).",
                "Expresión de gustos e preferencias persoais (I like / I don't like) (SB-LE-2C-A-02).",
                "Léxico ampliado: alimentos, partes da casa, prendas e tempo (SB-LE-2C-A-03).",
                "Lectura de textos breves ilustrados: cómics e folletos sinxelos (SB-LE-2C-A-04).",
                "Escritura guiada completando modelos dados (postais, descricións) (SB-LE-2C-A-05).",
                "Costumes e festividades de países anglófonos (SB-LE-2C-B-01)."
              ]
            }
          ]
        },
        3: {
          bloques: [
            {
              id: "advanced_communication",
              nombre: "Advanced Communication",
              temasSugeridos: ["Past actions (Past Simple regular/irregular)", "Future plans (be going to)", "Comparatives & Superlatives", "Writing emails & Biographies", "English as a global language"],
              saberes: [
                "Interacción oral: indicacións, compras simuladas e tempo libre (SB-LE-3C-A-01).",
                "Narración de feitos pasados con Past Simple regular e irregular (SB-LE-3C-A-02).",
                "Plans futuros con be going to (SB-LE-3C-A-03).",
                "Graos do adxectivo: comparativo e superlativo regular e irregular (SB-LE-3C-A-04).",
                "Produción de textos escritos estructurados en parágrafos (emails, biografías) (SB-LE-3C-A-05).",
                "O inglés como lingua de comunicación internacional e cultura global (SB-LE-3C-B-01)."
              ]
            }
          ]
        }
      }
    },
    {
      id: "educacion_artistica",
      nombre: "Educación Artística",
      icono: "🎨",
      color: "pink",
      ciclos: {
        1: {
          bloques: [
            {
              id: "plastica_visual",
              nombre: "Educación plástica e visual",
              temasSugeridos: ["O punto e a liña", "Cores primarias e secundarias", "Debuxo e modelado con plastilina"],
              saberes: [
                "Elementos configurativos: punto, liña, forma e cores primarias/secundarias (SB-EA-1C-A-01).",
                "Técnicas elementais: témperas, ceras, colaxe e modelado con plastilina (SB-EA-1C-A-02)."
              ]
            },
            {
              id: "musica_danza",
              nombre: "Música e danza",
              temasSugeridos: ["Cualidades do son (grave/agudo, forte/feble)", "Pequena percusión e cantigas galegas"],
              saberes: [
                "Cualidades do son: altura, duración, intensidade e timbre (SB-EA-1C-B-01).",
                "A voz e instrumentos de aula: claves, triángulo e pandeireta galega (SB-EA-1C-B-02)."
              ]
            }
          ]
        },
        2: {
          bloques: [
            {
              id: "plastica_visual",
              nombre: "Educación plástica e visual",
              temasSugeridos: ["Gamas cálidas e frías", "Xeometría na arte e materiais reciclados"],
              saberes: [
                "Elementos xeométricos na arte plástica: simetrías, tramas e gamas cálidas/frías (SB-EA-2C-A-01).",
                "Técnicas plásticas mixtas e modelado con materiais sostibles (SB-EA-2C-A-02)."
              ]
            },
            {
              id: "musica_danza",
              nombre: "Música e danza",
              temasSugeridos: ["Figuras rítmicas (redonda, branca, negra, corchea)", "Folclore galego: a muiñeira e a gaita"],
              saberes: [
                "Linguaxe musical: figuras rítmicas, notas no pentagrama e pulso (SB-EA-2C-B-01).",
                "Familias de instrumentos e folclore galego: muiñeira, pandeireteiras e gaita (SB-EA-2C-B-02)."
              ]
            },
            {
              id: "cultura_audiovisual",
              nombre: "Cultura audiovisual",
              temasSugeridos: ["Escalas de planos e fotografía dixital básica"],
              saberes: [
                "A imaxe fixa e en movemento: escalas de planos e iniciación á fotografía (SB-EA-2C-C-01)."
              ]
            }
          ]
        },
        3: {
          bloques: [
            {
              id: "plastica_visual",
              nombre: "Educación plástica e visual",
              temasSugeridos: ["Perspectiva con punto de fuga e claroscuro", "Patrimonio artístico de Galicia: do Románico ás Vangardas (Maruja Mallo, Castelao)"],
              saberes: [
                "Perspectiva e espazo tridimensional: punto de fuga, liña de horizonte e claroscuro (SB-EA-3C-A-01).",
                "Patrimonio galego: do Pórtico da Gloria ás Vangardas (Maruja Mallo, Laxeiro, Castelao) (SB-EA-3C-A-02)."
              ]
            },
            {
              id: "musica_danza",
              nombre: "Música e danza",
              temasSugeridos: ["Interpretación con frauta doce ou láminas Orff", "Da música tradicional ao pop, rock e jazz"],
              saberes: [
                "Interpretación instrumental con frauta doce ou láminas en compases de 2/4, 3/4 e 4/4 (SB-EA-3C-B-01).",
                "A música na historia: do folclore galego aos estilos modernos (pop, rock, jazz) (SB-EA-3C-B-02)."
              ]
            },
            {
              id: "cultura_audiovisual",
              nombre: "Cultura audiovisual",
              temasSugeridos: ["Creación de guións gráficos (storyboard) e curtametraxes escolares (stop-motion)"],
              saberes: [
                "Linguaxe cinematográfica: elaboración de storyboards, stop-motion e edición básica (SB-EA-3C-C-01)."
              ]
            }
          ]
        }
      }
    },
    {
      id: "educacion_fisica",
      nombre: "Educación Física",
      icono: "🏃",
      color: "orange",
      ciclos: {
        1: {
          bloques: [
            {
              id: "vida_saudable",
              nombre: "Vida activa e saudable",
              temasSugeridos: ["Esquema corporal e lateralidade", "Hábitos de hixiene e hidratación"],
              saberes: [
                "Esquema corporal, lateralidade e control postural básico (SB-EF-1C-A-01).",
                "Hábitos de hixiene e hidratación deportiva (SB-EF-1C-A-02)."
              ]
            },
            {
              id: "habilidades_motrices",
              nombre: "Habilidades motrices e xogo",
              temasSugeridos: ["Desprazamentos, saltos e xiros", "Xogos populares de Galicia e cooperación"],
              saberes: [
                "Desprazamentos, saltos, xiros, lanzamentos e recepcións (SB-EF-1C-B-01).",
                "Xogos cooperativos e tradicionais de Galicia: respecto ás normas (SB-EF-1C-B-02)."
              ]
            }
          ]
        },
        2: {
          bloques: [
            {
              id: "vida_saudable",
              nombre: "Vida activa e saudable",
              temasSugeridos: ["Resistencia aeróbica e quecemento"],
              saberes: [
                "Acondicionamento físico básico: resistencia e quecemento guiado (SB-EF-2C-A-01)."
              ]
            },
            {
              id: "habilidades_xogos",
              nombre: "Habilidades motrices e xogos populares",
              temasSugeridos: ["Carreiras con obstáculos e lanzamentos de precisión", "Xogos tradicionais galegos (chave, billarda, peón)"],
              saberes: [
                "Coordinación dinámica xeral e lanzamentos de precisión en movemento (SB-EF-2C-B-01).",
                "Xogos tradicionais galegos: xogo da chave, billarda, peón e fair play (SB-EF-2C-B-02)."
              ]
            },
            {
              id: "medio_natural",
              nombre: "Interacción sostible co medio natural",
              temasSugeridos: ["Orientación con croquis e sendeirismo escolar"],
              saberes: [
                "Orientación con croquis elemental e sendeirismo sostible sen deixar pegada (SB-EF-2C-C-01)."
              ]
            }
          ]
        },
        3: {
          bloques: [
            {
              id: "vida_saudable_primeiros_auxilios",
              nombre: "Vida activa e primeiros auxilios",
              temasSugeridos: ["Capacidades físicas (resistencia, forza, flexibilidade)", "Plan de exercicio persoal e primeiros auxilios (conduta PAS)"],
              saberes: [
                "Capacidades físicas básicas, plan de exercicio persoal e primeiros auxilios (conduta PAS) (SB-EF-3C-A-01)."
              ]
            },
            {
              id: "iniciacion_deportiva",
              nombre: "Iniciación deportiva e orientación no medio natural",
              temasSugeridos: ["Deportes colectivos e invasión", "Carreiras de orientación con compás e mapa"],
              saberes: [
                "Deportes colectivos: táctica básica de ataque/defensa e xogo limpo (SB-EF-3C-B-01).",
                "Orientación no medio natural: manexo de compás e mapas topográficos sostibles (SB-EF-3C-B-02)."
              ]
            }
          ]
        }
      }
    },
    {
      id: "valores_civicos",
      nombre: "Educación en Valores Cívicos e Éticos",
      icono: "⚖️",
      color: "teal",
      ciclos: {
        3: {
          bloques: [
            {
              id: "autonomia_moral",
              nombre: "Autonomía moral e valores éticos",
              temasSugeridos: ["Dereitos Humanos e Dereitos da Infancia", "Dilemas morais e pensamento crítico"],
              saberes: [
                "Dignidade humana, Declaración dos Dereitos Humanos e Dereitos do Neno (SB-EV-3C-A-01).",
                "Pensamento crítico e resolución de dilemas morais sobre responsabilidade persoal (SB-EV-3C-A-02)."
              ]
            },
            {
              id: "sociedade_democratica",
              nombre: "Sociedade democrática e compromiso ambiental",
              temasSugeridos: ["Prevención do acoso escolar (bullying e ciberbullying)", "Ética ambiental e defensa da biodiversidade de Galicia"],
              saberes: [
                "Cultura de paz, mediación escolar e prevención do bullying e ciberbullying (SB-EV-3C-B-01).",
                "Ética ambiental, consumo responsable e defensa da biodiversidade galega (SB-EV-3C-B-02)."
              ]
            }
          ]
        }
      }
    }
  ]
};

/**
 * Función RAG Pre-Prompting: Filtra o currículo oficial de Galicia
 * Devolve ÚNICAMENTE os Saberes Básicos do nodo seleccionado (Curso + Asignatura).
 */
export function filterCurriculoRAG(cursoId, materiaId) {
  const cursoObj = CURRICULO_GALICIA.cursos.find(c => c.id === String(cursoId));
  if (!cursoObj) return null;

  const materiaObj = CURRICULO_GALICIA.materias.find(m => m.id === materiaId);
  if (!materiaObj) return null;

  const cicloData = materiaObj.ciclos[cursoObj.ciclo];
  if (!cicloData) return null;

  return {
    curso: cursoObj.label,
    ciclo: cursoObj.cicloLabel,
    decreto: CURRICULO_GALICIA.normativa.decreto,
    orde: CURRICULO_GALICIA.normativa.orde,
    materia: materiaObj.nombre,
    bloques: cicloData.bloques.map(b => ({
      bloque: b.nombre,
      saberes: b.saberes,
      temasRecomendados: b.temasSugeridos
    }))
  };
}
