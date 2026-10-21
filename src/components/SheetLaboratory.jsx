import React from 'react';
import { Microscope, FlaskConical, Scissors, Sparkles, CheckCircle2, HelpCircle, Award, Compass, ShieldCheck } from 'lucide-react';
import { getUniversalMascot } from '../data/illustrationMap.jsx';
import HighlightedText from './HighlightedText.jsx';

export default function SheetLaboratory({
  id = "edugalicia-sheet-laboratorio",
  curso,
  materia,
  tema,
  data,
  etapa = "primaria"
}) {
  const isESO = etapa === 'eso' || /\b(eso|secundaria)\b/i.test(String(curso || ''));
  const activeMascot = getUniversalMascot(materia, tema, curso);

  // Fallback de Laboratorio / Taller
  const lab = data?.tallerLaboratorio || {
    tituloMision: isESO
      ? `Laboratorio Matemático: Modelización e Algoritmos de ${tema || "Álxebra"}`
      : `Taller de Investigación: Método Científico e Observación de ${tema || "Ciencias"}`,
    contextoReto: isESO
      ? `Aplica o razoamento matemático e as propiedades alxébricas para resolver un problema de deseño e verificación en Galicia.`
      : `Investiga como se comporta este fenómeno na natureza ou na vida cotiá mediante un experimento práctico sinxelo.`,
    materiales: isESO
      ? ["Calculadora científica ou compás", "Papel cuadriculado de resolución", "Regra milimetrada e lapis"]
      : ["2 recipientes transparentes ou vasos", "Mostras da contorna ou follas", "Auga e caderno de campo"],
    hipotesis: isESO
      ? `Se modificamos os coeficientes da expresión, como varía o resultado final?`
      : `Que diferenzas observaremos entre o estado inicial e o resultado tras a proba?`,
    pasos: [
      { numero: 1, instruccion: isESO ? "Formula a expresión matemática e anota os datos iniciais." : "Prepara os materiais na mesa e describe o estado inicial da mostra." },
      { numero: 2, instruccion: isESO ? "Executa o algoritmo paso a paso respectando a xerarquía de operacións." : "Realiza a mestura ou observación mantendo as mesmas condicións." },
      { numero: 3, instruccion: isESO ? "Comproba o resultado substituíndo a solución na ecuación orixinal." : "Anota o tempo e os cambios de cor, textura ou forma producidos." }
    ],
    cadroRexistro: {
      tipo: isESO ? "cuadricula" : "lineas",
      preguntaGuia: isESO
        ? "Espazo pautado de cálculo algorítmico, táboa de valores e verificación:"
        : "Cadro de rexistro de datos, anotación de medidas e croquis do experimento:"
    },
    conclusionCientifica: isESO
      ? `A formulación matemática permite predicir e verificar o comportamento exacto do sistema con certeza absoluta.`
      : `O experimento comproba a estreita relación entre os elementos estudados e a súa función na nosa contorna.`
  };

  // Fallback de Flashcards
  const flashcards = (data?.glosarioFlashcards && data.glosarioFlashcards.length >= 4)
    ? data.glosarioFlashcards.slice(0, 4)
    : [
        {
          id: 1,
          termo: isESO ? "Idea Central Z" : "Concepto Clave",
          icono: "🧠",
          rareza: "ouro",
          xp: 25,
          definicion: `Definición esencial para dominar **${tema || "este saber"}** con precisión académica.`,
          retoDorso: "Cal é o primeiro paso para aplicar este concepto?"
        },
        {
          id: 2,
          termo: isESO ? "Regra dos Signos" : "Regra de Ouro",
          icono: "⚡",
          rareza: "diamante",
          xp: 30,
          definicion: `Procedemento metódico fundamental que evita os erros máis comúns.`,
          retoDorso: "Que trampa debes evitar sempre segundo esta regra?"
        },
        {
          id: 3,
          termo: isESO ? "Elemento Neutro / Inverso" : "Eslabón de Conexión",
          icono: "🔄",
          rareza: "prata",
          xp: 20,
          definicion: `Propiedade que conecta este tema co resto de contidos do curso.`,
          retoDorso: "Con que outra materia escolar relacionarías este saber?"
        },
        {
          id: 4,
          termo: isESO ? "Teorema de Verificación" : "Termo de Exame",
          icono: "🎯",
          rareza: "ouro",
          xp: 25,
          definicion: `Palabra técnica imprescindible para obter a máxima cualificación no teu caderno.`,
          retoDorso: "Dille a definición exacta ao teu compañeiro/a sen mirar!"
        }
      ];

  const conexionVidaReal = data?.conexionVidaReal || `Este saber aplícase directamente en Galicia na investigación biolóxica, na enxeñaría e no coidado sostible da nosa contorna.`;

  return (
    <div
      id={id}
      className="a4-sheet laboratory-sheet bg-white text-slate-800 shadow-xl border-4 border-slate-900 rounded-3xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden"
      style={{ boxSizing: 'border-box' }}
    >
      {/* 1. CABECERA EDITORIAL DE ALTA FIDELIDAD */}
      <header className="border-b-3 border-slate-900 pb-2 flex flex-wrap items-center justify-between gap-2 header-banner">
        <div className="flex items-center gap-2.5">
          <div className={`w-8 h-8 rounded-xl ${isESO ? 'bg-indigo-600' : 'bg-emerald-600'} text-white flex items-center justify-center font-black text-base shadow-sm shrink-0`}>
            🔬
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-[9.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                isESO ? 'bg-indigo-100 text-indigo-900 border border-indigo-300' : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
              }`}>
                {isESO ? 'Decreto 156/2022 • Cyber-Math ESO' : 'Decreto 155/2022 • Primaria Galicia'}
              </span>
              <span className="text-[9.5px] font-black bg-amber-400 text-slate-950 px-2 py-0.5 rounded-md border border-slate-900 uppercase">
                Lámina 5 • Laboratorio & Flashcards
              </span>
            </div>
            <h1 className="text-lg sm:text-xl font-black text-slate-950 tracking-tight leading-tight mt-0.5 uppercase">
              <HighlightedText text={data?.titulo || tema || "Taller de Investigación e Glosario"} />
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-lg border border-slate-200">
            {curso} • {materia}
          </span>
        </div>
      </header>

      {/* 2. PARTE SUPERIOR (55%): TALLER DE INVESTIGACIÓN Y MÉTODO CIENTÍFICO */}
      <section className="laboratory-card my-2 p-3 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/40 border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] space-y-2">
        {/* Título da Misión */}
        <div className="flex items-start justify-between gap-2.5 border-b-2 border-slate-200 pb-1.5">
          <div className="flex items-center gap-2">
            <span className="text-lg select-none">🧪</span>
            <div>
              <h2 className="text-xs sm:text-sm font-black text-slate-900 tracking-tight leading-tight uppercase">
                <HighlightedText text={lab.tituloMision} />
              </h2>
              <p className="text-[10.5px] text-slate-600 font-medium leading-tight mt-0.5">
                <HighlightedText text={lab.contextoReto} />
              </p>
            </div>
          </div>
          <span className="text-[8.5px] font-black uppercase px-2 py-0.5 rounded-md bg-purple-100 text-purple-900 border border-purple-300 shrink-0">
            ⚡ Reto Práctico
          </span>
        </div>

        {/* Bloque Dobre: Materiais e Hipótese */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* Caixa de Materiais */}
          <div className="p-2 bg-white rounded-xl border border-slate-200/90 shadow-2xs space-y-1">
            <span className="text-[9.5px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1">
              <span>📦</span> Materiais Necesarios:
            </span>
            <div className="flex flex-wrap gap-1">
              {lab.materiales?.map((mat, idx) => (
                <span
                  key={idx}
                  className="text-[9.5px] font-semibold bg-slate-100 text-slate-700 px-1.5 py-0.2 rounded-md border border-slate-200 flex items-center gap-1"
                >
                  <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                  <HighlightedText text={mat} />
                </span>
              ))}
            </div>
          </div>

          {/* Caixa de Hipótese */}
          <div className="p-2 bg-amber-50/80 rounded-xl border border-amber-300 shadow-2xs space-y-1">
            <span className="text-[9.5px] font-black uppercase tracking-wider text-amber-900 flex items-center gap-1">
              <span>💡</span> Hipótese de Traballo:
            </span>
            <p className="text-[10px] sm:text-[10.5px] text-amber-950 font-bold leading-snug italic">
              "<HighlightedText text={lab.hipotesis} />"
            </p>
          </div>
        </div>

        {/* Procedemento Paso a Paso */}
        <div className="space-y-1">
          <span className="text-[9.5px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1">
            <span>⚙️</span> Procedemento Paso a Paso:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5">
            {lab.pasos?.map((p) => (
              <div
                key={p.numero}
                className="p-1.5 bg-white rounded-xl border border-slate-200 flex items-start gap-1.5 shadow-2xs"
              >
                <span className={`w-4 h-4 rounded-full ${isESO ? 'bg-indigo-600' : 'bg-blue-600'} text-white font-black text-[9px] flex items-center justify-center shrink-0 mt-0.5`}>
                  {p.numero}
                </span>
                <p className="text-[9.5px] text-slate-700 font-medium leading-tight">
                  <HighlightedText text={p.instruccion} />
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cadro de Rexistro e Observación Pautado */}
        <div className="p-2 bg-white rounded-xl border-2 border-dashed border-slate-300 space-y-1">
          <div className="flex items-center justify-between text-[9.5px] font-black uppercase text-slate-600">
            <span className="flex items-center gap-1">
              <HelpCircle className="w-3 h-3 text-blue-600" />
              <HighlightedText text={lab.cadroRexistro?.preguntaGuia || "Rexistro de Datos e Observación:"} />
            </span>
            <span className="text-slate-400 font-mono text-[8.5px]">
              {lab.cadroRexistro?.tipo === 'cuadricula' ? '▦ Pauta Cuadrícula' : '≡ Pauta Liñas'}
            </span>
          </div>

          {/* Área Pautada Escolar */}
          <div
            className={`w-full h-12 sm:h-14 rounded-lg border border-slate-200 ${
              lab.cadroRexistro?.tipo === 'cuadricula'
                ? 'bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:10px_10px] bg-slate-50/50'
                : 'bg-[repeating-linear-gradient(transparent,transparent_17px,#cbd5e1_18px)] bg-slate-50/40'
            }`}
          />
        </div>

        {/* Conclusión Científica */}
        <div className="p-1.5 rounded-xl bg-emerald-50 border border-emerald-300 flex items-center gap-2">
          <span className="text-sm select-none">🏆</span>
          <div className="text-[10px] sm:text-[10.5px] text-emerald-950 font-bold leading-tight">
            <strong>Conclusión:</strong> <HighlightedText text={lab.conclusionCientifica} />
          </div>
        </div>
      </section>

      {/* 3. PARTE INFERIOR (45%): GLOSARIO VISUAL & 4 FLASHCARDS RECORTABLES */}
      <section className="flashcard-section my-1.5 space-y-1.5">
        {/* Liña de Corte con Tesouras */}
        <div className="border-t-2 border-dashed border-slate-400 pt-1.5 flex items-center justify-between text-[10px] font-black text-slate-700">
          <span className="flex items-center gap-1.5 uppercase tracking-wide">
            <Scissors className="w-3 h-3 text-rose-600" />
            Recorta as túas 4 Tarxetas de Memorización e Repasa en Parellas
          </span>
          <span className="text-[8.5px] bg-slate-100 text-slate-800 px-2 py-0.2 rounded-full border border-slate-300 font-bold uppercase">
            Flashcards de Estudo
          </span>
        </div>

        {/* Grid de 4 Flashcards Coleccionables */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 flashcards-grid">
          {flashcards.map((card, idx) => (
            <div
              key={card.id || idx}
              className="flashcard-item p-2 bg-white rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a] flex flex-col justify-between hover:translate-y-[-2px] transition-transform relative group"
            >
              {/* Marca de solapa de corte */}
              <div className="absolute -top-1.5 right-2 text-[7.5px] font-mono text-slate-400 select-none">
                ✂️ - - -
              </div>

              <div>
                {/* Cabecera Tarxeta: Título Completo sen recortes nin puntos XP */}
                <div className="flex items-center gap-1 border-b border-slate-200 pb-1 mb-1 min-h-[26px]">
                  <span className="text-sm select-none shrink-0">{card.icono || "💡"}</span>
                  <h3 className="font-black text-[11px] text-slate-900 uppercase leading-snug break-words flex-1">
                    <HighlightedText text={card.termo} />
                  </h3>
                </div>

                {/* Corpo: Definición Concisa */}
                <p className="text-[9.5px] text-slate-600 font-medium leading-relaxed break-words">
                  <HighlightedText text={card.definicion} />
                </p>
              </div>

              {/* Pé da Tarxeta: Reto do Dorso */}
              <div className="mt-1.5 pt-1 border-t border-dashed border-slate-300 bg-slate-50 p-1 rounded-lg text-left">
                <span className="text-[8px] font-black uppercase text-indigo-700 block mb-0.5">
                  ❓ Reto do Dorso:
                </span>
                <p className="text-[9px] text-slate-800 font-bold leading-tight">
                  <HighlightedText text={card.retoDorso} />
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Conexión coa Vida Real */}
        <div className="p-1.5 rounded-xl bg-blue-50/70 border border-blue-200 flex items-center justify-between gap-2 text-[10px] text-slate-700">
          <div className="flex items-center gap-1.5">
            <span className="text-sm select-none">🌍</span>
            <span className="leading-tight">
              <strong>Conexión coa Vida Real:</strong> <HighlightedText text={conexionVidaReal} />
            </span>
          </div>
          <span className="text-[8.5px] font-black text-blue-900 bg-blue-100 px-1.5 py-0.2 rounded-md border border-blue-300 shrink-0 hidden sm:inline">
            Galicia LOMLOE
          </span>
        </div>
      </section>

      {/* 4. PIE DE PÁGINA RIGUROSO */}
      <footer className="border-t-3 border-slate-900 pt-1.5 flex items-center justify-between text-[10px] font-bold text-slate-600">
        <div className="flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-blue-600" />
          <span className="text-[9px]">
            {isESO ? 'Competencias LOMLOE: STEM, CD, CPSAA • Decreto 156/2022' : 'Competencias LOMLOE: STEM, CCL, CD, CCEC • Decreto 155/2022'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[9px] bg-slate-900 text-white font-black px-2 py-0.5 rounded-md">
            {activeMascot.badge} • {activeMascot.name}
          </span>
        </div>
      </footer>
    </div>
  );
}
