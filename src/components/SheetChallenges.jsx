import React, { useState } from 'react';
import { MapPin, Trophy, Sparkles, Check, RotateCw, Target, Star, Award } from 'lucide-react';

export default function SheetChallenges({
  id = "edugalicia-sheet-retos",
  curso,
  materia,
  tema,
  data
}) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [tfAnswers, setTfAnswers] = useState({});

  const handleSelectOption = (qIdx, optIdx) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [qIdx]: optIdx
    }));
  };

  const handleToggleTf = (idx, value) => {
    setTfAnswers((prev) => ({
      ...prev,
      [idx]: value
    }));
  };

  const preguntas = data?.preguntasTrivial || [
    {
      pregunta: "Cal é o papel dos produtores (vexetais) no equilibrio do noso ecosistema?",
      opciones: ["Fabrican o seu alimento con fotosíntese", "Comen pequenos animais", "Non teñen ningunha función"]
    },
    {
      pregunta: "Se coidamos a nosa contorna e reciclamos, que conseguimos?",
      opciones: ["Protexer a fauna e flora de Galicia", "Que chova todos os días", "Que as árbores non crezan"]
    }
  ];

  return (
    <div id={id} className="a4-sheet bg-notebook text-slate-900 flex flex-col justify-between p-6">
      {/* 1. CABECERA ESCAPE ROOM NEO-BRUTALISTA v2.0 */}
      <header className="pb-3 border-b-4 border-black avoid-break relative">
        <div className="absolute -top-3 -right-2 text-3xl z-20 select-none drop-shadow-sm">📍</div>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-16 h-16 rounded-2xl bg-purple-400 border-4 border-black shadow-[6px_6px_0px_0px_#000] text-black flex items-center justify-center p-2 shrink-0 -rotate-3">
              <Target className="w-full h-full text-black stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider bg-purple-300 text-black border-2 border-black shadow-[2px_2px_0px_#000] px-2.5 py-0.5 rounded-full flex items-center gap-1 -rotate-1">
                  <MapPin className="w-3 h-3 text-black stroke-[3]" />
                  Galicia LOMLOE
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider bg-amber-300 text-black border-2 border-black shadow-[2px_2px_0px_#000] px-2.5 py-0.5 rounded-full flex items-center gap-1 rotate-2">
                  <Award className="w-3.5 h-3.5 fill-black text-black" />
                  ESCAPE ROOM: +100 XP
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-black [text-shadow:2px_2px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000] leading-none mb-1">
                Misión Detective: Retos e Desafíos
              </h1>
              <p className="text-xs font-black text-purple-900 uppercase tracking-wide">
                {curso} • {materia}
              </p>
            </div>
          </div>

          <div className="relative text-right text-[11px] bg-purple-100 border-4 border-black shadow-[6px_6px_0px_0px_#000] rounded-2xl p-2.5 min-w-[175px] shrink-0 rotate-2">
            <div className="w-12 h-3.5 bg-white/60 border border-gray-400 absolute -top-2 left-1/2 -translate-x-1/2 rotate-1 z-20" />
            <div className="flex justify-between border-b-2 border-dashed border-black/40 pb-1 mb-1 font-black">
              <span className="text-purple-950">🕵️ Axente:</span>
              <span className="text-black">___________</span>
            </div>
            <div className="flex justify-between items-center text-[10px] font-black">
              <span className="text-slate-700">Estrelas:</span>
              <span className="text-amber-500 text-sm tracking-wider">⭐⭐⭐</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. CUERPO DE RETOS ARCADE */}
      <main className="flex-1 space-y-4 my-3">
        {/* RETO 1: PREGUNTAS CON BOTONES ARCADE (active:translate-y-1 active:shadow-none) */}
        <section className="avoid-break space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-black text-black uppercase tracking-wide">
              <span className="w-7 h-7 rounded-xl bg-purple-400 border-3 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center font-black text-sm -rotate-6">
                🎯
              </span>
              <h2>Reto 1: Proba Arcade (Preme e Marca o Acerto)</h2>
            </div>
            <span className="text-[10px] font-black bg-black text-white px-3 py-1 rounded-full shadow-[2px_2px_0px_#000] rotate-1">
              +40 XP
            </span>
          </div>

          <div className="space-y-3">
            {preguntas.slice(0, 2).map((q, idx) => {
              const selectedOpt = selectedAnswers[idx];

              return (
                <div
                  key={idx}
                  className={`relative p-3.5 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_#000] bg-white ${idx === 0 ? '-rotate-1' : 'rotate-1'} avoid-break`}
                >
                  <div className="w-12 h-3 bg-white/60 border border-gray-400 absolute -top-1.5 left-1/2 -translate-x-1/2 rotate-1 z-20" />
                  <div className="flex items-start gap-2.5 mb-2">
                    <span className="w-6 h-6 rounded-lg bg-purple-600 border-2 border-black text-white font-black text-xs flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#000]">
                      #{idx + 1}
                    </span>
                    <p className="text-xs md:text-sm font-black text-black leading-snug">
                      {q.pregunta}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pl-8">
                    {q.opciones.map((opc, oIdx) => (
                      <button
                        key={oIdx}
                        type="button"
                        onClick={() => handleSelectOption(idx, oIdx)}
                        className={`text-left text-[11px] p-2 rounded-xl border-3 border-black transition active:translate-y-1 active:shadow-none flex items-center gap-2 ${
                          selectedOpt === oIdx
                            ? 'bg-purple-500 text-white font-black shadow-[4px_4px_0px_#000]'
                            : 'bg-yellow-50 text-black hover:bg-yellow-100 font-bold shadow-[3px_3px_0px_#000]'
                        }`}
                      >
                        <span className={`w-4 h-4 rounded-full border-2 border-black flex items-center justify-center text-[10px] shrink-0 font-black ${
                          selectedOpt === oIdx ? 'bg-white text-black' : 'bg-white text-transparent'
                        }`}>
                          ✓
                        </span>
                        <span className="truncate">{opc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* RETO 2: VERDADEIRO / FALSO CON BOTONES ARCADE (active:translate-y-1 active:shadow-none) */}
        <section className="avoid-break relative bg-emerald-100 border-4 border-black shadow-[6px_6px_0px_0px_#000] rounded-2xl p-3.5 -rotate-1">
          <div className="w-14 h-4 bg-white/60 border border-gray-400 absolute -top-2 left-1/2 -translate-x-1/2 rotate-2 z-20" />
          <div className="flex items-center justify-between mb-2 pb-1 border-b-2 border-black/30">
            <div className="flex items-center gap-2 font-black text-xs text-black uppercase tracking-wide">
              <span className="text-base">⚡</span>
              <h3>Reto 2: Palanca Arcade (Verdadeiro ou Falso)</h3>
            </div>
            <span className="text-[10px] font-black bg-black text-white px-2.5 py-0.5 rounded-full shadow-[2px_2px_0px_#000]">
              +30 XP
            </span>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="bg-white border-3 border-black rounded-xl p-2.5 flex items-center justify-between shadow-[3px_3px_0px_#000]">
              <span className="font-black text-slate-900 text-[11.5px] leading-snug">
                1. Os elementos fundamentais deste tema relacionanse entre si e cumpren funcións vitais.
              </span>
              <div className="flex items-center gap-2.5 shrink-0 ml-3">
                <button
                  type="button"
                  onClick={() => handleToggleTf(1, true)}
                  className={`px-3 py-1.5 rounded-xl border-3 border-black font-black text-xs flex items-center gap-1.5 transition active:translate-y-1 active:shadow-none ${
                    tfAnswers[1] === true 
                      ? 'bg-emerald-400 text-black shadow-[4px_4px_0px_#000]' 
                      : 'bg-slate-100 text-black shadow-[2px_2px_0px_#000] hover:bg-emerald-100'
                  }`}
                >
                  <span className="text-base">🙂</span> V
                </button>
                <button
                  type="button"
                  onClick={() => handleToggleTf(1, false)}
                  className={`px-3 py-1.5 rounded-xl border-3 border-black font-black text-xs flex items-center gap-1.5 transition active:translate-y-1 active:shadow-none ${
                    tfAnswers[1] === false 
                      ? 'bg-rose-400 text-black shadow-[4px_4px_0px_#000]' 
                      : 'bg-slate-100 text-black shadow-[2px_2px_0px_#000] hover:bg-rose-100'
                  }`}
                >
                  <span className="text-base">☹️</span> F
                </button>
              </div>
            </div>

            <div className="bg-white border-3 border-black rounded-xl p-2.5 flex items-center justify-between shadow-[3px_3px_0px_#000]">
              <span className="font-black text-slate-900 text-[11.5px] leading-snug">
                2. Podemos descubrir e protexer estes seres e fenómenos na natureza real de Galicia.
              </span>
              <div className="flex items-center gap-2.5 shrink-0 ml-3">
                <button
                  type="button"
                  onClick={() => handleToggleTf(2, true)}
                  className={`px-3 py-1.5 rounded-xl border-3 border-black font-black text-xs flex items-center gap-1.5 transition active:translate-y-1 active:shadow-none ${
                    tfAnswers[2] === true 
                      ? 'bg-emerald-400 text-black shadow-[4px_4px_0px_#000]' 
                      : 'bg-slate-100 text-black shadow-[2px_2px_0px_#000] hover:bg-emerald-100'
                  }`}
                >
                  <span className="text-base">🙂</span> V
                </button>
                <button
                  type="button"
                  onClick={() => handleToggleTf(2, false)}
                  className={`px-3 py-1.5 rounded-xl border-3 border-black font-black text-xs flex items-center gap-1.5 transition active:translate-y-1 active:shadow-none ${
                    tfAnswers[2] === false 
                      ? 'bg-rose-400 text-black shadow-[4px_4px_0px_#000]' 
                      : 'bg-slate-100 text-black shadow-[2px_2px_0px_#000] hover:bg-rose-100'
                  }`}
                >
                  <span className="text-base">☹️</span> F
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* RETO 3: RECUADRO GIGANTE DISCONTINUO PARA DEBUXO (border-4 border-dashed border-black bg-yellow-50) */}
        <section className="avoid-break relative border-4 border-dashed border-black bg-yellow-50 shadow-[6px_6px_0px_0px_#000] rounded-2xl p-4 rotate-1">
          <div className="absolute -top-3.5 -left-2 text-2xl z-20">📍</div>
          <div className="w-14 h-4 bg-white/60 border border-gray-400 absolute -top-2 left-1/2 -translate-x-1/2 -rotate-2 z-20" />
          <div className="flex items-center justify-between mb-1.5 pl-4">
            <div className="flex items-center gap-2 font-black text-xs text-black uppercase tracking-wide">
              <span className="text-lg">🎨</span>
              <h3>Reto 3: Taller Creativo de Debuxo e Rotulado</h3>
            </div>
            <span className="text-[10px] font-black text-white bg-black px-2.5 py-0.5 rounded-full shadow-[2px_2px_0px_#000]">
              +30 XP
            </span>
          </div>

          <p className="text-[11px] text-slate-900 font-bold mb-2.5 pl-4 leading-snug">
            {data?.retoCreativo || "Debuxa aquí o concepto máis importante deste tema: ponlle unha carita kawaii feliz, o seu nome en letras de cómic xigantes e cores vivas!"}
          </p>

          {/* Lienzo blanco para dibujar */}
          <div className="w-full h-32 bg-white rounded-xl border-3 border-black shadow-[3px_3px_0px_#000] flex flex-col items-center justify-center text-slate-400 text-xs font-black gap-1">
            <span className="text-2xl">✏️ 🎨</span>
            <span>Espazo para o teu debuxo, esquema e cores</span>
          </div>
        </section>

        {/* CÓDIGO SECRETO INVERTIDO */}
        <section className="avoid-break pt-1">
          <div className="flex items-center justify-between text-[10px] text-black border-t-2 border-black/30 pt-1.5 font-black">
            <div className="flex items-center gap-2">
              <span className="bg-amber-300 border-2 border-black px-2 py-0.5 rounded shadow-[1px_1px_0px_#000]">
                🔍 Código Secreto:
              </span>
              <span className="font-mono bg-white border-2 border-black px-2 py-0.5 rounded text-[9.5px] shadow-[2px_2px_0px_#000]">
                {preguntas.map((_, i) => `Q${i + 1}:Opción A`).join(' • ')} • V/F: 1-V, 2-V
              </span>
            </div>
            <span className="text-[9px] text-slate-600 italic font-bold">
              (Xira a folla para validar o teu escape)
            </span>
          </div>
        </section>
      </main>

      {/* 3. PIE DE PÁGINA */}
      <footer className="pt-2 border-t-3 border-black text-[10px] font-black text-slate-700 flex items-center justify-between avoid-break">
        <span>EduGalicia • Decreto 155/2022 • Xunta de Galicia</span>
        <span className="font-black text-black uppercase bg-purple-300 border-2 border-black px-2.5 py-0.5 rounded-md shadow-[2px_2px_0px_#000]">
          Lámina 3: Escape Room A4
        </span>
      </footer>
    </div>
  );
}
