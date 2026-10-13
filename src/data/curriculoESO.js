/**
 * Base de Datos Curricular Oficial de Galicia para Educación Secundaria Obrigatoria (ESO)
 * Decreto 156/2022, do 15 de setembro (DOG núm. 184)
 * Especializada en Matemáticas 1º e 2º de ESO
 */

export const CURRICULO_ESO = {
  normativa: {
    decreto: "Decreto 156/2022, do 15 de setembro (DOG núm. 184)",
    comunidade: "Comunidade Autónoma de Galicia",
    etapa: "Educación Secundaria Obrigatoria (ESO)"
  },
  cursos: [
    { id: "eso1", label: "1º de ESO", etapa: "eso", idade: "12-13 anos" },
    { id: "eso2", label: "2º de ESO", etapa: "eso", idade: "13-14 anos" }
  ],
  materias: [
    {
      id: "matematicas",
      nombre: "Matemáticas",
      icono: "📐",
      color: "indigo",
      cursos: {
        eso1: {
          bloques: [
            {
              id: "sentido_numerico_eso1",
              nombre: "Sentido numérico e cálculo en Z",
              temasSugeridos: [
                "Números enteiros e valor absoluto",
                "Operacións combinadas e regra dos signos",
                "Divisibilidade: m.c.d. e m.c.m.",
                "Fraccións: simplificación e operacións",
                "Potencias de base enteira e raíces cadradas",
                "Xerarquía de operacións con parénteses"
              ],
              saberes: [
                "Números enteiros (Z): orde, representación na recta e valor absoluto (SB-MAT-ESO1-N-01).",
                "Regra dos signos e operacións aritméticas con enteiros (suma, resta, multiplicación e división) (SB-MAT-ESO1-N-02).",
                "Potencias de base enteira con expoñente natural e as súas propiedades fundamentais (SB-MAT-ESO1-N-03).",
                "Cálculo de raíces cadradas exactas e estimación de raíces non exactas (SB-MAT-ESO1-N-04).",
                "Criterios de divisibilidade, descomposición en factores primos, m.c.d. e m.c.m. en problemas reais (SB-MAT-ESO1-N-05).",
                "Fraccións equivalentes, fracción irredutible e operacións con fraccións (SB-MAT-ESO1-N-06)."
              ]
            },
            {
              id: "sentido_alxebraico_eso1",
              nombre: "Sentido alxébrico e ecuacións iniciais",
              temasSugeridos: [
                "Linguaxe alxébrica e valor numérico",
                "Monomios: coeficientes, grao e suma",
                "Ecuacións de 1º grao básicas (ax + b = c)",
                "Resolución de problemas con ecuacións sinxelas"
              ],
              saberes: [
                "Linguaxe alxébrica: tradución entre linguaxe natural e expresións alxébricas con variables (SB-MAT-ESO1-A-01).",
                "Valor numérico dunha expresión alxébrica para valores dados (SB-MAT-ESO1-A-02).",
                "Monomios: partes (coeficiente e parte literal), grao e operacións básicas de suma e resta (SB-MAT-ESO1-A-03).",
                "Concepto de ecuación e solución. Ecuacións de primeiro grao con coeficientes enteiros (SB-MAT-ESO1-A-04).",
                "Resolución de problemas cotiáns formulando ecuacións de primeiro grao (SB-MAT-ESO1-A-05)."
              ]
            },
            {
              id: "sentido_medida_proporcionalidade_eso1",
              nombre: "Proporcionalidade e porcentaxes",
              temasSugeridos: [
                "Proporcionalidade directa e regra de tres",
                "Cálculo de porcentaxes, aumentos e rebaixas",
                "Escalas en mapas e planos"
              ],
              saberes: [
                "Razón e proporción numérica. Constante de proporcionalidade directa (SB-MAT-ESO1-M-01).",
                "A regra de tres simple directa e resolución de problemas do comercio e vida diaria (SB-MAT-ESO1-M-02).",
                "Porcentaxes: cálculo mental de tantos por cento, aumentos e descontos porcentuais (SB-MAT-ESO1-M-03).",
                "Escalas numéricas e gráficas na interpretación de planos e maquetas (SB-MAT-ESO1-M-04)."
              ]
            },
            {
              id: "sentido_espacial_xeometria_eso1",
              nombre: "Xeometría plana e Teorema de Pitágoras",
              temasSugeridos: [
                "Teorema de Pitágoras en triángulos rectángulos",
                "Perímetros e áreas de polígonos regulares",
                "Circunferencia e círculo: lonxitudes e áreas"
              ],
              saberes: [
                "Identificación de triángulos rectángulos: hipotenusa e catetos (SB-MAT-ESO1-X-01).",
                "O Teorema de Pitágoras: enunciado xeométrico, cálculo de lados descoñecidos e comprobación (SB-MAT-ESO1-X-02).",
                "Fórmulas de perímetros e áreas de figuras planas (triángulo, cadrado, rectángulo, rombo, trapecio) (SB-MAT-ESO1-X-03).",
                "O número Pi (π), lonxitude da circunferencia e área do círculo (SB-MAT-ESO1-X-04)."
              ]
            },
            {
              id: "sentido_estocastico_eso1",
              nombre: "Estatística e Probabilidade básica",
              temasSugeridos: [
                "Táboas de frecuencias e diagramas de barras",
                "Media, mediana e moda",
                "Probabilidade e regra de Laplace con dados e moedas"
              ],
              saberes: [
                "Fases dun estudo estatístico básico: poboación, mostra e tipo de variables (SB-MAT-ESO1-E-01).",
                "Elaboración de táboas de frecuencias absolutas e relativas (SB-MAT-ESO1-E-02).",
                "Cálculo e interpretación de parámetros de centralización: media aritmética, mediana e moda (SB-MAT-ESO1-E-03).",
                "Sucesos aleatorios e probabilidade sinxela mediante a Regra de Laplace (SB-MAT-ESO1-E-04)."
              ]
            }
          ]
        },
        eso2: {
          bloques: [
            {
              id: "sentido_numerico_eso2",
              nombre: "Números racionais e potencias avanzadas",
              temasSugeridos: [
                "Operacións combinadas con fraccións e xerarquía",
                "Potencias con expoñentes enteiros negativos",
                "Notación científica para cantidades moi grandes ou pequenas",
                "Problemas reais con fraccións encadeadas"
              ],
              saberes: [
                "O conxunto dos números racionais (Q): representación, fraccións propias, impropias e decimais periódicos (SB-MAT-ESO2-N-01).",
                "Operacións combinadas con fraccións respectando parénteses e xerarquía (SB-MAT-ESO2-N-02).",
                "Propiedades das potencias con expoñentes enteiros negativos: a^(-n) = 1/a^n (SB-MAT-ESO2-N-03).",
                "Aproximación por redondeo, truncamento e estimación do erro (SB-MAT-ESO2-N-04).",
                "Problemas de aplicación de fraccións na vida real (repartos, mesturas e traballo conxunto) (SB-MAT-ESO2-N-05)."
              ]
            },
            {
              id: "sentido_alxebraico_eso2",
              nombre: "Polinomios e Ecuacións con parénteses e denominadores",
              temasSugeridos: [
                "Polinomios: suma, resta e produto",
                "Identidades notables: cadrado da suma, da resta e suma por diferenza",
                "Ecuacións de 1º grao con parénteses e denominadores",
                "Sistemas sinxelos de dúas ecuacións lineais",
                "Problemas alxébricos avanzados"
              ],
              saberes: [
                "Polinomios nunha variable: grao, coeficiente principal e termo independente (SB-MAT-ESO2-A-01).",
                "Operacións con polinomios: adición, substracción e multiplicación por un monomio ou binomio (SB-MAT-ESO2-A-02).",
                "Identidades notables básicas: (a+b)^2, (a-b)^2 e (a+b)(a-b) (SB-MAT-ESO2-A-03).",
                "Algoritmo de resolución de ecuacións lineais con parénteses e denominadores mediante m.c.m. (SB-MAT-ESO2-A-04).",
                "Iniciación aos sistemas de ecuacións de 1º grao con dúas incógnitas (métodos gráficos e de substitución) (SB-MAT-ESO2-A-05).",
                "Modelización alxébrica de problemas xeométricos, de idades e de mesturas (SB-MAT-ESO2-A-06)."
              ]
            },
            {
              id: "sentido_medida_proporcionalidade_eso2",
              nombre: "Proporcionalidade inversa e composta",
              temasSugeridos: [
                "Proporcionalidade inversa e produto constante",
                "Repartos proporcionais directos e inversos",
                "Interese simple e porcentaxes sucesivas"
              ],
              saberes: [
                "Identificación de relacións de proporcionalidade inversa na física e na vida cotiá (SB-MAT-ESO2-M-01).",
                "Resolución de problemas mediante regra de tres simple inversa (SB-MAT-ESO2-M-02).",
                "Repartos directamente e inversamente proporcionais (SB-MAT-ESO2-M-03).",
                "Cálculo de variacións porcentuais sucesivas e interese simple financeiro: I = C·r·t / 100 (SB-MAT-ESO2-M-04)."
              ]
            },
            {
              id: "sentido_espacial_xeometria_eso2",
              nombre: "Corpos xeométricos no espazo e volumes",
              temasSugeridos: [
                "Poliedros regulares e Teorema de Euler",
                "Prismas e pirámides: áreas e volumes",
                "Cilindro, cono e esfera: fórmulas e aplicacións",
                "Teorema de Pitágoras no espazo tridimensional"
              ],
              saberes: [
                "Clasificación de poliedros regulares e relación de Euler (C + V = A + 2) (SB-MAT-ESO2-X-01).",
                "Prismas rectos e pirámides: desenvolvemento plano, área lateral, área total e volume (SB-MAT-ESO2-X-02).",
                "Corpos redondos: cilindros, conos e esferas; cálculo de áreas superficiais e capacidade/volume (SB-MAT-ESO2-X-03).",
                "Aplicación do Teorema de Pitágoras no espazo (diagonal dun ortoedro, apotema dunha pirámide) (SB-MAT-ESO2-X-04)."
              ]
            },
            {
              id: "sentido_estocastico_eso2",
              nombre: "Estatística bidimensional e Probabilidade composta",
              temasSugeridos: [
                "Histogramas e polígonos de frecuencias",
                "Dispersión: rango e desviación típica intuitiva",
                "Diagramas en árbore e probabilidade de dous experimentos"
              ],
              saberes: [
                "Agrupamento de datos continuos en intervalos de clase e histogramas (SB-MAT-ESO2-E-01).",
                "Medidas de dispersión: percorrido ou rango e necesidade de medir a variabilidade (SB-MAT-ESO2-E-02).",
                "Experimentos compostos sinxelos (lanzar dous dados, dúas moedas) mediante táboas de continxencia e diagramas en árbore (SB-MAT-ESO2-E-03).",
                "Cálculo de probabilidades en situacións cotiás e xogos de azar xustos (SB-MAT-ESO2-E-04)."
              ]
            }
          ]
        }
      }
    }
  ]
};

/**
 * Filtro RAG Oficial para Educación Secundaria Obrigatoria (ESO)
 * Extrae os Saberes Básicos estritamente correspondentes ao curso indicado do Decreto 156/2022
 */
export function filterCurriculoESORAG(cursoId = "eso1", materiaId = "matematicas") {
  const normCurso = String(cursoId).toLowerCase().includes("2") ? "eso2" : "eso1";
  const mat = CURRICULO_ESO.materias.find(m => m.id === "matematicas");
  if (!mat) return null;

  const cursoData = mat.cursos[normCurso];
  const cursoObj = CURRICULO_ESO.cursos.find(c => c.id === normCurso);

  if (!cursoData) return null;

  return {
    decreto: CURRICULO_ESO.normativa.decreto,
    comunidade: CURRICULO_ESO.normativa.comunidade,
    etapa: CURRICULO_ESO.normativa.etapa,
    cursoId: normCurso,
    curso: cursoObj?.label || (normCurso === "eso2" ? "2º de ESO" : "1º de ESO"),
    idade: cursoObj?.idade || "12-14 anos",
    materia: mat.nombre,
    bloques: cursoData.bloques
  };
}
