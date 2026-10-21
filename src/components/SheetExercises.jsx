import React from 'react';
import { MapPin, Trophy, Sparkles, Target, Star, Award, Zap, Swords, CheckCircle2, HelpCircle } from 'lucide-react';
import { getUniversalMascot } from '../data/illustrationMap.jsx';
import HighlightedText from './HighlightedText.jsx';

export default function SheetExercises({
  id = "edugalicia-sheet-exercicios",
  curso,
  materia,
  tema,
  data,
  etapa = "primaria"
}) {
  const isESO = etapa === 'eso' || /\b(eso|secundaria)\b/i.test(String(curso || ''));
  const activeMascot = getUniversalMascot(materia, tema, curso);

  // Fallback de 4 ejercicios de alta exigencia adaptados al tema
  const ejercicios = data?.batallaExercicios && data.batallaExercicios.length >= 4
    ? data.batallaExercicios
    : [
        {
          id: 1,
          tipo: "aplicacion_real",
          categoria: "🎯 APLICACIÓN PRÁCTICA",
          nivel: "⭐⭐⭐ (Avanzado)",
          xp: 25,
          titulo: `Misión Práctica: Aplicación de ${tema || "Saberes"}`,
          enunciado: `Nunha contorna natural ou cotiá de Galicia, como inflúe directamente o concepto de **${tema || "este contido"}**? Explica dous efectos observables e xustifica a túa resposta con datos claros.`,
          pista: "Lembra relacionar os elementos principais vistos nas fichas previas.",
          pauta: "lineas",
          solucion: "Identificar dous factores concretos e explicar a relación de causa-efecto de xeito lóxico."
        },
        {
          id: 2,
          tipo: "analise_errores",
          categoria: "🔍 ANÁLISE DE ERROS",
          nivel: "⭐⭐⭐⭐ (Experto)",
          xp: 30,
          titulo: "Caza da Trampa: Onde está o erro?",
          enunciado: `Un estudante afirma o seguinte: *"Todos os elementos deste tema funcionan de xeito illado sen influír no resto do sistema."* É correcta esta afirmación? Localiza o erro científico ou lóxico e reescribe a frase de xeito impecable.`,
          pista: "Lembra o concepto de equilibrio, cadea e conexión que vimos no mapa mental.",
          pauta: "lineas",
          solucion: "Falso: actúan de forma interconectada nun equilibrio dinámico imprescindible."
        },
        {
          id: 3,
          tipo: "calculo_ou_estrutura",
          categoria: "⚙️ CÁLCULO E LÓXICA",
          nivel: "⭐⭐⭐ (Avanzado)",
          xp: 25,
          titulo: isESO ? "Desafío Algorítmico Paso a Paso" : "Resolución de Problema Estruturado",
          enunciado: isESO 
            ? `Se temos a expresión $2x + 4 = 16$, despexar o valor de $x$ paso a paso indicando a propiedade aplicada en cada movemento.`
            : `Se nun estudo de campo contabilizamos 12 elementos do Grupo A e o triplo do Grupo B menos 5, cantos elementos hai en total? Mostra as túas operacións paso a paso.`,
          pista: isESO ? "Resta 4 a ambos lados e divide entre 2." : "Paso 1: Calcula o Grupo B (12 x 3 - 5). Paso 2: Suma ambos grupos.",
          pauta: "cuadricula",
          solucion: isESO ? "$2x = 12 \\implies x = 6$" : "Grupo B: 36 - 5 = 31. Total: 12 + 31 = 43 elementos."
        },
        {
          id: 4,
          tipo: "desafio_experto",
          categoria: "🏆 DESAFÍO SUPREMO",
          nivel: "⭐⭐⭐⭐⭐ (Mestre)",
          xp: 35,
          titulo: "Reto Aberto: Transferencia e Hipótese",
          enunciado: `Imaxina que ocorre un cambio drástico na contorna e desaparece o elemento central de **${tema || "este saber"}**. Que hipótese propoñerías sobre as consecuencias inmediatas? Deseña un plan de 2 pasos para recuperar o equilibrio.`,
          pista: "Aplica o método científico: observación da causa e proposta de solución viable.",
          pauta: "lineas",
          solucion: "A hipótese debe formular a rotura do sistema e dous pasos realistas de restauración."
        }
      ];

  const totalXP = ejercicios.reduce((acc, curr) => acc + (curr.xp || 25), 0);

  return (
    <div id={id} className="a4-sheet h-auto min-h-[1123px] bg-notebook text-slate-900 flex flex-col justify-between p-5 sm:p-6 relative">
      {/* 1. CABECERA NEO-BRUTALISTA DE COMBATE DIDÁCTICO */}
      <header className="pb-2 border-b-4 border-black avoid-break relative">
        <div className="absolute -top-3 -right-2 text-3xl z-20 select-none drop-shadow-sm">📍</div>
        <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3.5">
            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-400 border-4 border-black shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] text-black flex items-center justify-center p-1.5 shrink-0 -rotate-2`}>
              <Swords className="w-8 h-8 text-black stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider bg-rose-400 text-white border-2 border-black shadow-[2px_2px_0px_#000] px-2.5 py-0.5 rounded-full flex items-center gap-1 -rotate-1">
                  <Swords className="w-3 h-3 text-white" />
                  {isESO ? 'Batalla Cyber-Math ESO' : 'Batalla de Exercicios Primaria'}
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider bg-amber-300 text-black border-2 border-black shadow-[2px_2px_0px_#000] px-2.5 py-0.5 rounded-full flex items-center gap-1 rotate-2">
                  <Award className="w-3.5 h-3.5 fill-black text-black" />
                  +{totalXP} XP EN XOGO
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tighter text-black [text-shadow:2px_2px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000] leading-none mb-1">
                Batalla de Exercicios de Alta Esixencia
              </h1>
              <p className="text-[11px] sm:text-xs font-black text-rose-950 uppercase tracking-wide">
                {curso} • {materia} • {data?.titulo || tema}
              </p>
            </div>
          </div>

          <div className="relative text-right text-[11px] bg-amber-100 border-3 sm:border-4 border-black shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] rounded-2xl p-2 min-w-[160px] shrink-0 rotate-1 w-full sm:w-auto">
            <div className="w-12 h-3.5 bg-white/60 border border-gray-400 absolute -top-2 left-1/2 -translate-x-1/2 -rotate-1 z-20" />
            <div className="flex justify-between border-b-2 border-dashed border-black/40 pb-1 mb-1 font-black">
              <span className="text-amber-950">⚔️ Estratega:</span>
              <span className="text-black">___________</span>
            </div>
            <div className="flex justify-between items-center text-[10px] font-black">
              <span className="text-slate-700">Puntuación:</span>
              <span className="text-black">____ / {totalXP} XP</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. CUERPO DE EJERCICIOS DE ALTA EXIGENCIA */}
      <main className="flex-1 my-2 space-y-2">
        {/* Banner de Instrucción */}
        <div className="flex items-center justify-between bg-black text-white px-3.5 py-1.5 rounded-xl text-xs font-black border-2 border-black shadow-[2px_2px_0px_#000] avoid-break">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 text-base">⚡</span>
            <span className="uppercase tracking-tight text-[10.5px] sm:text-xs">
              Resolve con rigor no espazo pautado. Xira 180° a clave inferior para autoevaluarte!
            </span>
          </div>
          <span className="bg-amber-400 text-black px-2 py-0.5 rounded-lg text-[9.5px] font-mono shrink-0">
            4 RETOS
          </span>
        </div>

        {/* Grid de 4 Tarjetas de Ejercicios */}
        <div className="space-y-2 sm:space-y-2.5">
          {ejercicios.map((ej, idx) => {
            const isGrid = ej.pauta === 'cuadricula';

            return (
              <section
                key={ej.id || idx}
                className="exercise-card avoid-break avoid-page-break relative border-3 sm:border-4 border-black rounded-2xl bg-white shadow-[4px_4px_0px_0px_#000] p-2.5 sm:p-3 flex flex-col justify-between break-words"
              >
                {/* Washi tape decorativo */}
                <div className="w-10 h-3 bg-white/70 border border-gray-400 absolute -top-1.5 left-8 rotate-1 z-20 shadow-xs" />

                {/* Cabecera del Reto */}
                <div className="flex flex-wrap items-center justify-between gap-1.5 pb-1 mb-1.5 border-b-2 border-black/20">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-black text-amber-300 font-black text-[11px] flex items-center justify-center border border-black shadow-[1.5px_1.5px_0px_#000]">
                      #{idx + 1}
                    </span>
                    <span className="text-[9.5px] font-black uppercase bg-amber-200 text-black border border-black px-1.5 py-0.2 rounded-md">
                      {ej.categoria || `RETO #${idx + 1}`}
                    </span>
                    <span className="text-[9px] font-black text-slate-700 hidden sm:inline-block">
                      {ej.nivel || "⭐⭐⭐"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-black uppercase bg-rose-100 text-rose-900 border border-rose-300 px-1.5 py-0.2 rounded-md font-mono">
                      +{ej.xp || 25} XP
                    </span>
                  </div>
                </div>

                {/* Enunciado del Ejercicio */}
                <div className="mb-1.5 space-y-1">
                  <h3 className="font-black text-xs text-black uppercase tracking-tight">
                    {ej.titulo || `Exercicio ${idx + 1}`}
                  </h3>
                  <div className="text-[10.5px] sm:text-[11px] font-bold text-slate-900 leading-snug">
                    <HighlightedText text={ej.enunciado} />
                  </div>

                  {ej.pista && (
                    <div className="text-[9.5px] font-bold text-slate-700 bg-amber-50/80 border-l-2 border-amber-400 pl-2 py-0.2 italic mt-0.5">
                      💡 <strong>Pista:</strong> {ej.pista}
                    </div>
                  )}
                </div>

                {/* Área de Resolución Escolar Pautada */}
                <div className="mb-1">
                  <div className="flex items-center justify-between text-[8.5px] font-black uppercase text-slate-600 mb-0.5 px-1">
                    <span>
                      {isGrid ? '📐 Espazo de Cálculo / Operacións:' : '✏️ Espazo de Resposta e Desenvolvemento:'}
                    </span>
                    <span>Pauta {isGrid ? 'Cuadrícula' : 'Liñas'}</span>
                  </div>

                  <div 
                    className={`w-full h-14 sm:h-16 rounded-lg border-2 border-black/40 relative overflow-hidden ${
                      isGrid 
                        ? 'bg-slate-50/50 bg-[radial-gradient(#94a3b8_1.2px,transparent_1.2px)] [background-size:10px_10px]'
                        : 'bg-white bg-[repeating-linear-gradient(transparent,transparent_21px,#cbd5e1_22px)]'
                    }`}
                  >
                    {/* Marca de agua didáctica interior */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none text-slate-800 text-[10px] font-black uppercase tracking-widest">
                      Área de traballo escolar do alumno/a
                    </div>
                  </div>
                </div>

                {/* Solucionario Invertido 180° para Autocorrección */}
                <div className="pt-1 border-t border-dashed border-black/25 flex items-center justify-between text-[7.5px] font-bold text-slate-600">
                  <span className="flex items-center gap-1 font-black uppercase text-slate-700">
                    <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600 inline" />
                    Autocorrección:
                  </span>

                  <div 
                    className="rotate-180 select-none bg-amber-50 border border-black/40 px-2 py-0.2 rounded shadow-xs max-w-[75%] truncate font-mono text-[8px] text-slate-800"
                    title="Xira 180° para verificar a solución"
                  >
                    🔒 Solución #{idx + 1}: {ej.solucion || "Verificación polo docente"}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </main>

      {/* 3. PIE DE PÁGINA */}
      <footer className="pt-1.5 border-t-3 border-black text-[9.5px] font-black text-slate-700 flex items-center justify-between avoid-break">
        <span>EduGalicia • {etapa === 'eso' || isESO ? 'Decreto 156/2022' : 'Decreto 155/2022'} • Xunta de Galicia</span>
        <span className="font-black text-black uppercase bg-rose-300 border-2 border-black px-2 py-0.5 rounded-md shadow-[2px_2px_0px_#000]">
          Lámina 4: Batalla de Exercicios A4
        </span>
      </footer>
    </div>
  );
}
