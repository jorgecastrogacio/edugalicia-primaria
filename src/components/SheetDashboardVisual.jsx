import React from 'react';
import { ILLUSTRATIONS, getSubjectIllustration, getUniversalMascot } from '../data/illustrationMap.jsx';
import { MapPin, Sparkles, Lightbulb, Star, Calendar, Compass, Layers, Shield, Zap } from 'lucide-react';

// Datos enriquecidos 1 a 1 para temas curriculares comunes de Primaria
const NUMBERS_1_20 = [
  { n: 1, w: "one", c: "bg-rose-50 border-rose-300 text-rose-600" },
  { n: 2, w: "two", c: "bg-blue-50 border-blue-300 text-blue-600" },
  { n: 3, w: "three", c: "bg-emerald-50 border-emerald-300 text-emerald-600" },
  { n: 4, w: "four", c: "bg-amber-50 border-amber-300 text-amber-600" },
  { n: 5, w: "five", c: "bg-purple-50 border-purple-300 text-purple-600" },
  { n: 6, w: "six", c: "bg-teal-50 border-teal-300 text-teal-600" },
  { n: 7, w: "seven", c: "bg-pink-50 border-pink-300 text-pink-600" },
  { n: 8, w: "eight", c: "bg-sky-50 border-sky-300 text-sky-600" },
  { n: 9, w: "nine", c: "bg-lime-50 border-lime-300 text-lime-600" },
  { n: 10, w: "ten", c: "bg-orange-50 border-orange-300 text-orange-600" },
  { n: 11, w: "eleven", c: "bg-indigo-50 border-indigo-300 text-indigo-600" },
  { n: 12, w: "twelve", c: "bg-red-50 border-red-300 text-red-600" },
  { n: 13, w: "thirteen", c: "bg-cyan-50 border-cyan-300 text-cyan-600" },
  { n: 14, w: "fourteen", c: "bg-fuchsia-50 border-fuchsia-300 text-fuchsia-600" },
  { n: 15, w: "fifteen", c: "bg-blue-50 border-blue-300 text-blue-600" },
  { n: 16, w: "sixteen", c: "bg-emerald-50 border-emerald-300 text-emerald-600" },
  { n: 17, w: "seventeen", c: "bg-amber-50 border-amber-300 text-amber-600" },
  { n: 18, w: "eighteen", c: "bg-purple-50 border-purple-300 text-purple-600" },
  { n: 19, w: "nineteen", c: "bg-rose-50 border-rose-300 text-rose-600" },
  { n: 20, w: "twenty", c: "bg-sky-50 border-sky-300 text-sky-600" }
];

const MONTHS_OF_YEAR = [
  { n: 1, m: "January", icon: "❄️", g: "Xaneiro", c: "bg-sky-100 text-sky-800 border-sky-300" },
  { n: 2, m: "February", icon: "❤️", g: "Febreiro", c: "bg-rose-100 text-rose-800 border-rose-300" },
  { n: 3, m: "March", icon: "☘️", g: "Marzo", c: "bg-emerald-100 text-emerald-800 border-emerald-300" },
  { n: 4, m: "April", icon: "🌧️", g: "Abril", c: "bg-blue-100 text-blue-800 border-blue-300" },
  { n: 5, m: "May", icon: "🌸", g: "Maio", c: "bg-pink-100 text-pink-800 border-pink-300" },
  { n: 6, m: "June", icon: "☀️", g: "Xuño", c: "bg-amber-100 text-amber-800 border-amber-300" },
  { n: 7, m: "July", icon: "🌊", g: "Xullo", c: "bg-cyan-100 text-cyan-800 border-cyan-300" },
  { n: 8, m: "August", icon: "🏖️", g: "Agosto", c: "bg-yellow-100 text-yellow-800 border-yellow-300" },
  { n: 9, m: "September", icon: "🍎", g: "Setembro", c: "bg-red-100 text-red-800 border-red-300" },
  { n: 10, m: "October", icon: "🎃", g: "Outubro", c: "bg-orange-100 text-orange-800 border-orange-300" },
  { n: 11, m: "November", icon: "🍂", g: "Novembro", c: "bg-stone-100 text-stone-800 border-stone-300" },
  { n: 12, m: "December", icon: "🎄", g: "Decembro", c: "bg-emerald-100 text-emerald-800 border-emerald-300" }
];

const PREPOSITIONS_ITEMS = [
  { prep: "on", trans: "encima de", phrase: "The book is on the table.", icon: ILLUSTRATIONS.boxCatOn, color: "border-pink-200 bg-pink-50/50" },
  { prep: "under", trans: "debajo de", phrase: "The cat is under the table.", icon: ILLUSTRATIONS.boxCatUnder, color: "border-emerald-200 bg-emerald-50/50" },
  { prep: "behind", trans: "detrás de", phrase: "The bear is behind the chair.", icon: ILLUSTRATIONS.boxCatBehind, color: "border-purple-200 bg-purple-50/50" },
  { prep: "between", trans: "entre", phrase: "The book is between the apple and orange.", icon: ILLUSTRATIONS.boxCatBetween, color: "border-amber-200 bg-amber-50/50" },
  { prep: "next to", trans: "al lado de", phrase: "The bag is next to the desk.", icon: ILLUSTRATIONS.boxCatNextTo, color: "border-sky-200 bg-sky-50/50" }
];

export default function SheetDashboardVisual({
  id = "edugalicia-sheet-dashboard",
  curso,
  materia,
  tema,
  data
}) {
  const normTema = ((data?.titulo || tema || "") + " " + materia).toLowerCase();

  // Detectores de temas temáticos para maquetación infográfica exhaustiva 1 a 1
  const isEnglishOrNumbers = normTema.includes("number") || normTema.includes("número") || normTema.includes("inglés") || normTema.includes("english") || normTema.includes("month") || normTema.includes("mes") || normTema.includes("preposi");
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

      {/* 2. CUERPO DE CROMOS COLECCIONABLES CAÓTICOS */}
      <main className="flex-1 space-y-3.5 my-2.5">
        {/* ESCAPARATE DE ARTE TEMÁTICO GIGANTE (FASE 2: EMOJI-ART SUPERPUESTO GIGANTE) */}
        <section className="avoid-break relative overflow-visible">
          <div className={`relative ${activeMascot.color} border-4 border-black shadow-[6px_6px_0px_0px_#000] rounded-2xl p-3 sm:p-4 flex items-center justify-between gap-3 -rotate-1`}>
            {/* Washi Tape */}
            <div className="w-16 h-4 bg-white/70 border border-gray-400 absolute -top-2 left-1/2 -translate-x-1/2 rotate-1 z-20 shadow-xs" />

            {/* Columna Izquierda: Información y Lema Didáctico */}
            <div className="min-w-0 flex-1 z-10">
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="text-[9px] font-black uppercase bg-black text-white px-2 py-0.5 rounded shadow-[1px_1px_0px_#000]">
                  ⚡ {activeMascot.badge}
                </span>
                <span className="text-[10px] font-black text-indigo-950 uppercase tracking-tight truncate">
                  {data?.temaGlobal?.nombre || data?.titulo || tema}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-black text-black leading-snug">
                "{data?.lemaMascota || activeMascot.quote}"
              </p>
              <p className="text-[10px] sm:text-[10.5px] font-bold text-slate-800 mt-1 line-clamp-2">
                {data?.resumen || "Descobre e domina todos os conceptos esenciais desta misión oficial de Primaria!"}
              </p>
            </div>

            {/* Columna Derecha: ARTE TEMÁTICO GIGANTE SUPERPUESTO (z-20, drop-shadow, rotate) */}
            <div className="relative shrink-0 pr-1 sm:pr-3">
              <div className="text-5xl sm:text-7xl md:text-8xl select-none filter drop-shadow-[6px_6px_0px_#000] rotate-6 transform hover:scale-110 transition duration-200">
                {data?.artePrincipal || "🌍🚀✨"}
              </div>
              <span className="absolute -bottom-2 -right-1 bg-rose-500 text-white font-black text-[8px] uppercase px-1.5 py-0.5 rounded border border-black shadow-[2px_2px_0px_#000] rotate-12">
                ARTE LOMLOE
              </span>
            </div>
          </div>
        </section>
        {/* HERO VISUAL DE DUELO CELULAR (Si es célula) */}
        {isCellTopic && (
          <section className="avoid-break relative bg-pink-100 border-4 border-black shadow-[6px_6px_0px_0px_#000] rounded-2xl p-3 -rotate-1">
            <div className="w-14 h-4 bg-white/60 border border-gray-400 absolute -top-2 left-1/2 -translate-x-1/2 rotate-1 z-20" />
            <div className="flex items-center justify-between pb-1.5 mb-2 border-b-2 border-black/30">
              <span className="text-[10px] font-black uppercase tracking-wider bg-black text-white px-2 py-0.5 rounded-md">
                ⚔️ Duelo de Células Kawaii: Animal vs Vexetal
              </span>
              <span className="text-[10px] font-black text-indigo-950 uppercase">¡Compara as súas armas!</span>
            </div>
            <div className="grid grid-cols-2 gap-4 items-center">
              <div className="relative bg-white border-3 border-black shadow-[4px_4px_0px_#000] rounded-xl p-2.5 flex items-center gap-3 rotate-1">
                <div className="w-16 h-16 shrink-0 filter drop-shadow-md">
                  <ILLUSTRATIONS.kawaiiAnimalCell className="w-full h-full" />
                </div>
                <div className="min-w-0">
                  <div className="font-black text-xs text-rose-600 uppercase flex items-center gap-1">
                    <span>🩷</span> Célula Animal
                  </div>
                  <ul className="text-[9.5px] font-bold text-slate-900 list-disc list-inside leading-tight space-y-0.5 mt-0.5">
                    <li>Membrana flexible (forma esférica)</li>
                    <li>Sen parede nin cloroplastos</li>
                    <li>Centríolos e vacúolos diminutos</li>
                  </ul>
                </div>
              </div>

              <div className="relative bg-white border-3 border-black shadow-[4px_4px_0px_#000] rounded-xl p-2.5 flex items-center gap-3 -rotate-1">
                <div className="w-16 h-16 shrink-0 filter drop-shadow-md">
                  <ILLUSTRATIONS.kawaiiPlantCell className="w-full h-full" />
                </div>
                <div className="min-w-0">
                  <div className="font-black text-xs text-emerald-700 uppercase flex items-center gap-1">
                    <span>🌿</span> Célula Vexetal
                  </div>
                  <ul className="text-[9.5px] font-bold text-slate-900 list-disc list-inside leading-tight space-y-0.5 mt-0.5">
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
            <div className="flex items-center justify-between pb-1.5 mb-2 border-b-2 border-black/30">
              <span className="text-[10px] font-black uppercase tracking-wider bg-black text-white px-2 py-0.5 rounded-md">
                🚀 Misión Cósmica: O Sol e os Astros
              </span>
              <span className="text-[10px] font-black text-indigo-950 uppercase">Sistema Solar</span>
            </div>
            <div className="grid grid-cols-2 gap-4 items-center">
              <div className="relative bg-white border-3 border-black shadow-[4px_4px_0px_#000] rounded-xl p-2.5 flex items-center gap-3 -rotate-1">
                <div className="w-16 h-16 shrink-0 filter drop-shadow-md">
                  <ILLUSTRATIONS.kawaiiSunHero className="w-full h-full" />
                </div>
                <div className="min-w-0">
                  <div className="font-black text-xs text-amber-600 uppercase">☀️ O Gran Sol</div>
                  <p className="text-[9.5px] font-bold text-slate-800 leading-tight">
                    Estrela nai que mantén os 8 planetas na súa órbita gravitatória.
                  </p>
                </div>
              </div>
              <div className="relative bg-white border-3 border-black shadow-[4px_4px_0px_#000] rounded-xl p-2.5 flex items-center gap-3 rotate-1">
                <div className="w-16 h-16 shrink-0 filter drop-shadow-md">
                  <ILLUSTRATIONS.kawaiiEarthGlobe className="w-full h-full" />
                </div>
                <div className="min-w-0">
                  <div className="font-black text-xs text-blue-600 uppercase">🌍 Planeta Terra</div>
                  <p className="text-[9.5px] font-bold text-slate-800 leading-tight">
                    O noso fogar: auga líquida, atmosfera protectora e biosfera viva.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TEMA INGLÉS / NÚMEROS / MESES */}
        {isEnglishOrNumbers ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
              <div className="md:col-span-6 relative bg-amber-100 border-4 border-black shadow-[6px_6px_0px_0px_#000] rounded-2xl p-3 -rotate-1 avoid-break">
                <div className="w-12 h-3.5 bg-white/60 border border-gray-400 absolute -top-2 left-1/2 -translate-x-1/2 rotate-2 z-20" />
                <div className="flex items-center justify-between mb-2 pb-1 border-b-2 border-black/30">
                  <h2 className="text-xs font-black text-black uppercase tracking-tight flex items-center gap-1.5">
                    <span className="text-base">🔢</span> Numbers 1–20
                  </h2>
                  <span className="text-[9px] font-black bg-black text-white px-2 py-0.5 rounded-full">Completo</span>
                </div>
                <div className="grid grid-cols-5 gap-1.5 text-center">
                  {NUMBERS_1_20.map((item, i) => (
                    <div key={item.n} className={`p-1 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000] ${item.c} flex flex-col items-center justify-center ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}>
                      <span className="text-xs font-black leading-none">{item.n}</span>
                      <span className="text-[8.5px] font-black truncate max-w-full leading-tight">{item.w}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-6 relative bg-sky-100 border-4 border-black shadow-[6px_6px_0px_0px_#000] rounded-2xl p-3 rotate-1 avoid-break">
                <div className="w-12 h-3.5 bg-white/60 border border-gray-400 absolute -top-2 left-1/2 -translate-x-1/2 -rotate-1 z-20" />
                <div className="flex items-center justify-between mb-2 pb-1 border-b-2 border-black/30">
                  <h2 className="text-xs font-black text-black uppercase tracking-tight flex items-center gap-1.5">
                    <span className="text-base">📍</span> Prepositions of Place
                  </h2>
                  <span className="text-[9px] font-black bg-black text-white px-2 py-0.5 rounded-full">Ilustrado</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {PREPOSITIONS_ITEMS.slice(0, 4).map((p, idx) => {
                    const IconComp = p.icon;
                    return (
                      <div key={idx} className={`p-2 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000] bg-white flex items-center gap-2 ${idx % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
                        <div className="w-8 h-8 shrink-0 flex items-center justify-center">
                          <IconComp className="w-7 h-7" />
                        </div>
                        <div className="min-w-0 text-left">
                          <div className="font-black text-xs text-black leading-tight">
                            <span className="text-indigo-800 uppercase">{p.prep}</span>
                            <span className="text-[9px] text-slate-600 font-bold ml-1">({p.trans})</span>
                          </div>
                          <p className="text-[8.5px] text-slate-700 leading-tight truncate italic font-medium">{p.phrase}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="relative bg-purple-100 border-4 border-black shadow-[6px_6px_0px_0px_#000] rounded-2xl p-3 -rotate-1 avoid-break">
              <div className="w-14 h-4 bg-white/60 border border-gray-400 absolute -top-2 left-1/2 -translate-x-1/2 rotate-1 z-20" />
              <div className="flex items-center justify-between mb-2 pb-1 border-b-2 border-black/30">
                <h2 className="text-xs font-black text-black uppercase tracking-tight flex items-center gap-1.5">
                  <span className="text-base">📅</span> The 12 Months of the Year
                </h2>
                <span className="text-[9px] font-black bg-black text-white px-2 py-0.5 rounded-full">12 meses</span>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 text-center">
                {MONTHS_OF_YEAR.map((m, i) => (
                  <div key={m.n} className={`p-1.5 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000] bg-white flex flex-col items-center justify-center ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}>
                    <div className="flex items-center gap-0.5">
                      <span className="text-xs">{m.icon}</span>
                      <span className="text-[9px] font-black">{m.n}</span>
                    </div>
                    <span className="text-[10px] font-black leading-tight text-black">{m.m}</span>
                    <span className="text-[8px] text-slate-600 font-bold leading-none">{m.g}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* GRID CAÓTICO DE CROMOS COLECCIONABLES (grid-cols-2 gap-8 con OVERLAPPING) */
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  {data.conceptosClave.map((item, idx) => {
                    const rotClass = rotations[idx % rotations.length];
                    const bgClass = pastelBgs[idx % pastelBgs.length];
                    const rarity = cardRarities[idx % cardRarities.length];
                    const element = cardElements[idx % cardElements.length];

                    return (
                      <div
                        key={idx}
                        className={`relative border-4 border-black shadow-[6px_6px_0px_0px_#000] ring-2 ring-black/30 rounded-2xl ${bgClass} p-3.5 pt-6 ${rotClass} transition hover:scale-[1.02] avoid-break flex flex-col justify-between`}
                      >
                        {/* Washi Tape Superior */}
                        <div className="w-14 h-4 bg-white/70 border border-gray-400 absolute -top-2 left-1/2 -translate-x-1/2 rotate-2 z-20 shadow-xs" />

                        {/* EMOJI GIGANTE DESBORDANDO LA CAJA (Overlapping) */}
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
                            <h3 className="font-black text-xs md:text-sm uppercase tracking-tight text-black leading-tight">
                              {item.concepto}
                            </h3>
                            <span className="text-[9px] font-black uppercase bg-purple-600 text-white px-1.5 py-0.5 rounded shadow-[1px_1px_0px_#000]">
                              +30 XP
                            </span>
                          </div>

                          {/* Explicación Didáctica */}
                          <p className="text-[10.5px] text-slate-900 font-bold leading-snug bg-white/70 border border-black/20 rounded-xl p-2 shadow-xs">
                            {item.descripcion}
                          </p>
                        </div>

                        {/* Barra de Atributo de Juego RPG */}
                        <div className="mt-2.5 pt-1.5 border-t-2 border-dashed border-black/30 flex items-center justify-between text-[9px] font-black text-black">
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
        )}
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
