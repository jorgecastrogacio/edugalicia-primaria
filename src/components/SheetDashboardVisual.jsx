import React from 'react';
import { ILLUSTRATIONS, getSubjectIllustration, getUniversalMascot } from '../data/illustrationMap.jsx';
import DynamicArtEngine from './DynamicArtEngine.jsx';
import { MapPin, Sparkles, Lightbulb, Star, Calendar, Compass, Layers, Shield, Zap } from 'lucide-react';

export default function SheetDashboardVisual({
  id = "edugalicia-sheet-dashboard",
  curso,
  materia,
  tema,
  data
}) {
  const normTema = ((data?.titulo || tema || "") + " " + (materia || "")).toLowerCase();

  // Detectores opcionales para ilustraciones temáticas en cabecera
  const isCellTopic = normTema.includes("célula") || normTema.includes("celula") || normTema.includes("citoplasma") || normTema.includes("orgánulo") || normTema.includes("organulo");
  const isSpaceTopic = normTema.includes("universo") || normTema.includes("sistema solar") || normTema.includes("planeta") || normTema.includes("terra") || normTema.includes("astro");

  const activeMascot = getUniversalMascot(materia, tema);
  const SubjectIcon = activeMascot.component;

  const rotations = ["-rotate-2", "rotate-3", "-rotate-1", "rotate-2", "-rotate-3", "rotate-1"];
  const pastelBgs = ["bg-yellow-100", "bg-cyan-100", "bg-pink-100", "bg-emerald-100", "bg-purple-100", "bg-orange-100"];
  const cardRarities = ["LENDARIA ★★★", "ÉPICA ★★", "ESPECIAL ★", "DOMINADA ★★★", "RARA ★★", "MÁXIMA ★★★"];
  const cardElements = ["⚡ PODER CLAVE", "🛡️ SABER CENTRAL", "🔥 EXPERTO", "💎 LOMLOE TOP", "✨ MISTERIO", "🏆 CRACK"];

  return (
    <div id={id} className="a4-sheet bg-notebook text-slate-900 flex flex-col justify-between p-6">
      {/* 1. CABECERA NEO-BRUTALISTA INFANTIL v2.0 */}
      <header className="pb-3 border-b-4 border-black avoid-break relative">
        {/* Chincheta decorativa esquina */}
        <div className="absolute -top-3 -right-2 text-3xl z-20 select-none drop-shadow-sm">📍</div>
        
        <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-3.5">
            {/* Escudo / Mascota Desbordada */}
            <div className="relative shrink-0">
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${activeMascot.color} border-4 border-black shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] text-black flex items-center justify-center p-1.5 shrink-0 -rotate-3`}>
                {isCellTopic ? (
                  <ILLUSTRATIONS.kawaiiAnimalCell className="w-full h-full" />
                ) : isSpaceTopic ? (
                  <ILLUSTRATIONS.kawaiiEarthGlobe className="w-full h-full" />
                ) : (
                  <SubjectIcon className="w-full h-full text-black" />
                )}
              </div>
              <span className="absolute -bottom-2 -right-2 bg-rose-500 text-white text-[9px] font-black uppercase px-1.5 py-0.5 rounded-md border-2 border-black rotate-6 shadow-[2px_2px_0px_#000]">
                Lv. 100
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-black uppercase tracking-wider bg-blue-300 text-black border-2 border-black shadow-[2px_2px_0px_#000] px-2 py-0.5 rounded-full flex items-center gap-1 -rotate-1">
                  <MapPin className="w-3 h-3 text-black stroke-[3]" />
                  Galicia LOMLOE
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider bg-amber-300 text-black border-2 border-black shadow-[2px_2px_0px_#000] px-2 py-0.5 rounded-full flex items-center gap-1 rotate-2">
                  <Star className="w-3.5 h-3.5 fill-black text-black" />
                  {activeMascot.badge}
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tighter text-black [text-shadow:2px_2px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000] leading-none mb-1">
                {data?.titulo || tema || "Caderno de Exploración"}
              </h1>
              <p className="text-[11px] sm:text-xs font-black text-indigo-900 uppercase tracking-wide">
                {curso} • {materia}
              </p>
            </div>
          </div>

          {/* Ficha de Detective / Investigador con cinta washi */}
          <div className="relative text-right text-[11px] bg-yellow-100 border-3 sm:border-4 border-black shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] rounded-2xl p-2 sm:p-2.5 w-full sm:w-auto sm:min-w-[175px] shrink-0 rotate-1 sm:rotate-2">
            <div className="w-12 h-3.5 bg-white/60 border border-gray-400 absolute -top-2 left-1/2 -translate-x-1/2 rotate-2 z-20" />
            <div className="flex justify-between border-b-2 border-dashed border-black/40 pb-1 mb-1 font-black">
              <span className="text-indigo-900">🕵️ Investigador:</span>
              <span className="text-black">___________</span>
            </div>
            <div className="flex justify-between items-center text-[10px] font-black">
              <span className="text-slate-700">Data:</span>
              <span className="text-black">___ / ___ / 20__</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. CUERPO DE CROMOS COLECCIONABLES CAÓTICOS (BENTO EDITORIAL ELÁSTICO) */}
      <main className="flex-1 space-y-4 my-2">
        {/* PILAR 1: MOTOR DE ARTE TEMÁTICO DINÁMICO */}
        <section className="avoid-break relative overflow-visible my-1">
          <DynamicArtEngine
            artePrincipal={data?.artePrincipal || "🌍🚀✨"}
            tema={data?.titulo || tema}
            materia={materia}
            lema={data?.lemaMascota || activeMascot.quote}
          />
        </section>

        {/* HERO VISUAL DE DUELO CELULAR (Si es célula) */}
        {isCellTopic && (
          <section className="avoid-break relative bg-pink-100 border-4 border-black shadow-[6px_6px_0px_0px_#000] rounded-2xl p-3 -rotate-1">
            <div className="w-14 h-4 bg-white/60 border border-gray-400 absolute -top-2 left-1/2 -translate-x-1/2 rotate-1 z-20" />
            <div className="flex items-center justify-between pb-1 mb-2 border-b-2 border-black/30">
              <span className="text-[10px] font-black uppercase tracking-wider bg-black text-white px-2 py-0.5 rounded-md">
                ⚔️ Duelo de Células Kawaii: Animal vs Vexetal
              </span>
              <span className="text-[10px] font-black text-indigo-950 uppercase">¡Compara as súas armas!</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-stretch">
              <div className="relative bg-white border-3 border-black shadow-[4px_4px_0px_#000] rounded-xl p-3 flex items-center gap-3 rotate-1 h-fit">
                <div className="w-16 h-16 shrink-0 filter drop-shadow-md">
                  <ILLUSTRATIONS.kawaiiAnimalCell className="w-full h-full" />
                </div>
                <div className="min-w-0">
                  <div className="font-black text-xs text-rose-600 uppercase flex items-center gap-1">
                    <span>🩷</span> Célula Animal
                  </div>
                  <ul className="text-[10px] font-bold text-slate-900 list-disc list-inside leading-tight space-y-0.5 mt-0.5 break-words">
                    <li>Membrana flexible (forma esférica)</li>
                    <li>Sen parede nin cloroplastos</li>
                    <li>Centríolos e vacúolos diminutos</li>
                  </ul>
                </div>
              </div>

              <div className="relative bg-white border-3 border-black shadow-[4px_4px_0px_#000] rounded-xl p-3 flex items-center gap-3 -rotate-1 h-fit">
                <div className="w-16 h-16 shrink-0 filter drop-shadow-md">
                  <ILLUSTRATIONS.kawaiiPlantCell className="w-full h-full" />
                </div>
                <div className="min-w-0">
                  <div className="font-black text-xs text-emerald-700 uppercase flex items-center gap-1">
                    <span>🌿</span> Célula Vexetal
                  </div>
                  <ul className="text-[10px] font-bold text-slate-900 list-disc list-inside leading-tight space-y-0.5 mt-0.5 break-words">
                    <li>Parede ríxida de celulosa</li>
                    <li>Cloroplastos (fotosíntese solar)</li>
                    <li>Gran vacúolo central de reserva</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* HERO UNIVERSO (Si es espacio) */}
        {isSpaceTopic && (
          <section className="avoid-break relative bg-cyan-100 border-4 border-black shadow-[6px_6px_0px_0px_#000] rounded-2xl p-3 rotate-1">
            <div className="w-14 h-4 bg-white/60 border border-gray-400 absolute -top-2 left-1/2 -translate-x-1/2 -rotate-1 z-20" />
            <div className="flex items-center justify-between pb-1 mb-2 border-b-2 border-black/30">
              <span className="text-[10px] font-black uppercase tracking-wider bg-black text-white px-2 py-0.5 rounded-md">
                🚀 Misión Cósmica: O Sol e os Astros
              </span>
              <span className="text-[10px] font-black text-indigo-950 uppercase">Sistema Solar</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-stretch">
              <div className="relative bg-white border-3 border-black shadow-[4px_4px_0px_#000] rounded-xl p-3 flex items-center gap-3 -rotate-1 h-fit">
                <div className="w-16 h-16 shrink-0 filter drop-shadow-md">
                  <ILLUSTRATIONS.kawaiiSunHero className="w-full h-full" />
                </div>
                <div className="min-w-0">
                  <div className="font-black text-xs text-amber-600 uppercase">☀️ O Gran Sol</div>
                  <p className="text-[10px] font-bold text-slate-800 leading-tight break-words">
                    Estrela nai que mantén os 8 planetas na súa órbita gravitatória.
                  </p>
                </div>
              </div>
              <div className="relative bg-white border-3 border-black shadow-[4px_4px_0px_#000] rounded-xl p-3 flex items-center gap-3 rotate-1 h-fit">
                <div className="w-16 h-16 shrink-0 filter drop-shadow-md">
                  <ILLUSTRATIONS.kawaiiEarthGlobe className="w-full h-full" />
                </div>
                <div className="min-w-0">
                  <div className="font-black text-xs text-blue-600 uppercase">🌍 Planeta Terra</div>
                  <p className="text-[10px] font-bold text-slate-800 leading-tight break-words">
                    O noso fogar: auga líquida, atmosfera protectora e biosfera viva.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* PILAR 2: BENTO GRID EDITORIAL DE CROMOS COLECCIONABLES (h-fit, break-words, cero truncates) */}
        <div className="space-y-4">
            {data?.conceptosClave && data.conceptosClave.length > 0 && (
              <section className="avoid-break">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs font-black text-black uppercase tracking-wider">
                    <span className="w-7 h-7 rounded-xl bg-amber-400 border-3 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center font-black text-sm -rotate-6">
                      🃏
                    </span>
                    <h2>Colección de Cromos Coleccionables (Desglose 1 a 1)</h2>
                  </div>
                  <span className="text-[10px] font-black text-white bg-black px-3 py-1 rounded-full shadow-[3px_3px_0px_#000] rotate-2">
                    {data.conceptosClave.length} Cartas de Poder
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
                  {data.conceptosClave.map((item, idx) => {
                    const rotClass = rotations[idx % rotations.length];
                    const bgClass = pastelBgs[idx % pastelBgs.length];
                    const rarity = cardRarities[idx % cardRarities.length];
                    const element = cardElements[idx % cardElements.length];

                    return (
                      <div
                        key={idx}
                        className={`cromo-card relative border-4 border-black shadow-[6px_6px_0px_0px_#000] rounded-2xl ${bgClass} p-3.5 pt-6 ${rotClass} transition hover:scale-[1.01] h-fit break-words flex flex-col justify-between`}
                      >
                        {/* Washi Tape Superior */}
                        <div className="w-14 h-4 bg-white/70 border border-gray-400 absolute -top-2 left-1/2 -translate-x-1/2 rotate-2 z-20 shadow-xs" />

                        {/* EMOJI GIGANTE DESBORDANDO LA CAJA */}
                        <div className="absolute -top-7 -left-5 z-20 text-5xl md:text-6xl -rotate-12 select-none filter drop-shadow-[2px_4px_0px_rgba(0,0,0,0.35)]">
                          {item.emoji || "⭐"}
                        </div>

                        {/* Medalla de Cromo Top-Right con Insignia RPG */}
                        <div className="absolute -top-3.5 -right-3 z-20 bg-amber-300 border-2 border-black rounded-full w-9 h-9 flex flex-col items-center justify-center font-black text-[9px] shadow-[2px_2px_0px_#000] rotate-12">
                          <span>Nº</span>
                          <span className="leading-none text-xs">{idx + 1}</span>
                        </div>

                        <div>
                          {/* Franja de Rareza y Elemento */}
                          <div className="flex items-center justify-between pl-8 mb-1.5">
                            <span className="text-[8.5px] font-black uppercase bg-black text-amber-300 px-2 py-0.5 rounded border border-black shadow-[1px_1px_0px_#000]">
                              {rarity}
                            </span>
                            <span className="text-[8.5px] font-black uppercase bg-white text-indigo-900 px-2 py-0.5 rounded border border-black">
                              {element}
                            </span>
                          </div>

                          {/* Encabezado del Cromo */}
                          <div className="flex items-center justify-between border-b-2 border-black/30 pb-1 mb-2 pl-8">
                            <h3 className="font-black text-xs md:text-sm uppercase tracking-tight text-black leading-tight break-words">
                              {item.concepto}
                            </h3>
                            <span className="text-[9px] font-black uppercase bg-purple-600 text-white px-1.5 py-0.5 rounded shadow-[1px_1px_0px_#000]">
                              +30 XP
                            </span>
                          </div>

                          {/* Explicación Didáctica (SIN TRUNCAMIENTOS) */}
                          <p className="text-[10.5px] sm:text-xs text-slate-900 font-bold leading-relaxed bg-white/80 border border-black/20 rounded-xl p-2.5 shadow-xs break-words">
                            {item.descripcion}
                          </p>
                        </div>

                        {/* Barra de Atributo de Juego RPG */}
                        <div className="mt-3 pt-2 border-t-2 border-dashed border-black/30 flex items-center justify-between text-[9.5px] font-black text-black">
                          <span className="flex items-center gap-1.5">
                            <span className="bg-emerald-300 border border-black px-1.5 py-0.2 rounded text-[8px]">
                              DEF: 95
                            </span>
                            <span>⚡ PODER: 100</span>
                          </span>
                          <span className="tracking-widest text-amber-500 font-black text-[10px]">★★★★★</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* CUADRO DE CLASIFICACIÓN TIPO CÓMIC */}
            {data?.tablaEsquema && data.tablaEsquema.filas && data.tablaEsquema.filas.length > 0 && (
              <section className="avoid-break relative">
                <div className="flex items-center gap-2 text-xs font-black text-black uppercase tracking-wide mb-2">
                  <span className="w-6 h-6 rounded-lg bg-emerald-400 border-2 border-black shadow-[2px_2px_0px_#000] flex items-center justify-center font-black text-xs">
                    📊
                  </span>
                  <h2>Cadro de Clasificación e Vocabulario</h2>
                </div>
                <div className="overflow-hidden rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_#000] bg-white avoid-break">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead className="bg-black text-white font-black border-b-3 border-black">
                      <tr>
                        {data.tablaEsquema.columnas.map((col, idx) => (
                          <th key={idx} className="p-2.5 text-[10.5px] uppercase tracking-wider">
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y-2 divide-black/20 bg-white">
                      {data.tablaEsquema.filas.map((row, idx) => (
                        <tr key={idx} className={`transition avoid-break ${idx % 2 === 0 ? 'bg-white' : 'bg-yellow-50/60'}`}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className={`p-2 text-[10.5px] text-black ${cIdx === 0 ? 'font-black text-black' : 'font-semibold'}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* SECCIÓN DUO: TRUCO SECRETO Y CURIOSIDAD CON CHINCHETAS Y POST-ITS ASIMÉTRICOS */}
            <div className="grid grid-cols-2 gap-4 avoid-break pt-1">
              {/* CURIOSIDAD / SABÍAS QUE */}
              <div className="relative border-4 border-black shadow-[6px_6px_0px_0px_#000] bg-cyan-100 p-3 rounded-2xl -rotate-2">
                <div className="absolute -top-3.5 -left-2 text-2xl z-20">📍</div>
                <div className="w-12 h-3.5 bg-white/60 border border-gray-400 absolute -top-2 left-1/2 -translate-x-1/2 rotate-1 z-20" />
                <div className="font-black text-black uppercase tracking-tight text-xs flex items-center gap-1.5 mb-1 pl-4">
                  <span>🧐</span> Sabías que...?
                </div>
                <p className="text-[10px] text-slate-900 font-bold leading-tight">
                  {data?.curiosidad || "Na natureza galega, todos os seres vivos colaboran nun equilibrio marabilloso que debemos coidar!"}
                </p>
              </div>

              {/* TRUCO SECRETO PARA NO FALLAR */}
              <div className="relative border-4 border-black shadow-[6px_6px_0px_0px_#000] bg-amber-200 p-3 rounded-2xl rotate-2">
                <div className="absolute -top-3.5 -right-2 text-2xl z-20">📍</div>
                <div className="w-12 h-3.5 bg-white/60 border border-gray-400 absolute -top-2 left-1/2 -translate-x-1/2 -rotate-2 z-20" />
                <div className="font-black text-black uppercase tracking-tight text-xs flex items-center gap-1.5 mb-1 pr-4">
                  <span>💡</span> ¡O Truco Secreto!
                </div>
                <p className="text-[10px] text-slate-900 font-bold leading-tight italic">
                  "{data?.trucoExamen || "Relaciona sempre os conceptos con elementos que poidas ver na túa propia rúa ou colexio!"}"
                </p>
              </div>
            </div>
          </div>
      </main>

      {/* 3. PIE DE PÁGINA NORMATIVO OFICIAL */}
      <footer className="pt-2 border-t-3 border-black text-[10px] font-black text-slate-700 flex items-center justify-between avoid-break">
        <span>EduGalicia • Decreto 155/2022 • Xunta de Galicia</span>
        <span className="font-black text-black uppercase bg-amber-300 border-2 border-black px-2.5 py-0.5 rounded-md shadow-[2px_2px_0px_#000]">
          Lámina 1: Dashboard Póster A4
        </span>
      </footer>
    </div>
  );
}
