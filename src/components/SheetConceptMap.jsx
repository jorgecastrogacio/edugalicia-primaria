import React from 'react';
import { MapPin, Sparkles, Compass, Lightbulb, Star, Zap } from 'lucide-react';
import { getUniversalMascot } from '../data/illustrationMap.jsx';
import HighlightedText from './HighlightedText.jsx';

export default function SheetConceptMap({
  id = "edugalicia-sheet-mapa",
  curso,
  materia,
  tema,
  data,
  etapa = "primaria"
}) {
  const isESO = etapa === 'eso' || String(curso || '').toLowerCase().includes('eso');
  const activeMascot = getUniversalMascot(materia, tema, curso);

  // Fallback seguro si la IA no devuelve conceptos
  const conceptos = data?.mapaCentral?.satelites && data.mapaCentral.satelites.length > 0
    ? data.mapaCentral.satelites
    : (data?.conceptosClave && data.conceptosClave.length > 0 
        ? data.conceptosClave 
        : [
            { emoji: "🌳", icono: "🌳", titulo: "Biotopo e Biocenose", concepto: "Biotopo e Biocenose", descripcion: "Medio físico e seres vivos que conviven en harmonía." },
            { emoji: "🐟", icono: "🐟", titulo: "Rías e Marismas", concepto: "Rías e Marismas", descripcion: "Mestura rica de auga doce e salgada con fitoplancto." },
            { emoji: "🦉", icono: "🦉", titulo: "Fragas Autóctonas", concepto: "Fragas Autóctonas", descripcion: "Bosques densos con carballos, castiñeiros e fauna salvaxe." },
            { emoji: "🔄", icono: "🔄", titulo: "Cadea Trófica", concepto: "Cadea Trófica", descripcion: "Produtores vexetais, herbívoros filtradores e depredadores." }
          ]);

  const satelites = conceptos;

  // Paleta cíclica para cada satélite orbital
  const estilosSatelites = [
    { bg: "bg-pink-100", border: "border-pink-900", badgeBg: "bg-pink-400", sound: "¡POW!", rot: "-rotate-1" },
    { bg: "bg-cyan-100", border: "border-cyan-900", badgeBg: "bg-cyan-400", sound: "¡BOOM!", rot: "rotate-1" },
    { bg: "bg-emerald-100", border: "border-emerald-900", badgeBg: "bg-emerald-400", sound: "¡ZAP!", rot: "rotate-1" },
    { bg: "bg-purple-100", border: "border-purple-900", badgeBg: "bg-purple-400", sound: "¡TOP!", rot: "-rotate-1" },
    { bg: "bg-amber-100", border: "border-amber-900", badgeBg: "bg-amber-400", sound: "¡CRACK!", rot: "rotate-1" },
    { bg: "bg-orange-100", border: "border-orange-900", badgeBg: "bg-orange-400", sound: "¡MEGA!", rot: "-rotate-1" }
  ];

  return (
    <div id={id} className="a4-sheet h-auto min-h-[1123px] bg-notebook text-slate-900 flex flex-col justify-between p-6 relative">
      {/* 1. CABECERA NEO-BRUTALISTA v2.0 */}
      <header className="pb-3 border-b-4 border-black avoid-break relative">
        <div className="absolute -top-3 -right-2 text-3xl z-20 select-none drop-shadow-sm">📍</div>
        <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3.5">
            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${activeMascot.color} border-4 border-black shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] text-black flex items-center justify-center p-1.5 shrink-0 rotate-2`}>
              <activeMascot.component className="w-full h-full" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider bg-sky-300 text-black border-2 border-black shadow-[2px_2px_0px_#000] px-2.5 py-0.5 rounded-full flex items-center gap-1 -rotate-1">
                  <MapPin className="w-3 h-3 text-black stroke-[3]" />
                  {isESO ? 'Galicia ESO LOMLOE' : 'Galicia LOMLOE'}
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider bg-purple-300 text-black border-2 border-black shadow-[2px_2px_0px_#000] px-2.5 py-0.5 rounded-full flex items-center gap-1 rotate-2">
                  <Sparkles className="w-3 h-3 text-black fill-black" />
                  {isESO ? 'Mapa Algorítmico' : 'Mapa Mental Orgánico'}
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tighter text-black [text-shadow:2px_2px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000] leading-none mb-1">
                {data?.mapaCentral?.titulo || data?.titulo || tema || "Mapa Mental do Explorador"}
              </h1>
              <p className="text-[11px] sm:text-xs font-black text-sky-900 uppercase tracking-wide">
                {curso} • {materia} • Guía: {activeMascot.name}
              </p>
            </div>
          </div>

          <div className="relative text-right text-[11px] bg-sky-100 border-3 sm:border-4 border-black shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] rounded-2xl p-2.5 min-w-[170px] shrink-0 -rotate-1 w-full sm:w-auto">
            <div className="w-12 h-3.5 bg-white/60 border border-gray-400 absolute -top-2 left-1/2 -translate-x-1/2 rotate-1 z-20" />
            <div className="flex justify-between border-b-2 border-dashed border-black/40 pb-1 mb-1 font-black">
              <span className="text-sky-950">{isESO ? '📐 Analista:' : '🧭 Explorador:'}</span>
              <span className="text-black">___________</span>
            </div>
            <div className="flex justify-between items-center text-[10px] font-black">
              <span className="text-slate-700">Data:</span>
              <span className="text-black">___ / ___ / 20__</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. LIENZO ORGÁNICO FLEX/GRID (CERO COLISIONES ABSOLUTAS) */}
      <main className="flex-1 my-3 space-y-3.5">
        {/* Banner de Misión Cómic */}
        <div className="flex items-center justify-between bg-yellow-300 border-4 border-black shadow-[4px_4px_0px_#000] px-3.5 py-2 rounded-2xl text-xs font-black text-black avoid-break -rotate-0.5">
          <div className="flex items-center gap-2">
            <span className="text-lg">💥</span>
            <span className="uppercase tracking-tight">¡Explosión de Ideas! Conecta os conceptos órbita por órbita</span>
          </div>
          <span className="text-[10px] uppercase font-black bg-black text-white px-2.5 py-0.5 rounded-lg shadow-[2px_2px_0px_#000]">
            +50 XP
          </span>
        </div>

        {/* NÚCLEO CENTRAL HEROICO EXPANSIVO (ANCLAJE DE LA RED) */}
        <section className="avoid-break relative bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400 border-4 border-black rounded-3xl p-4 sm:p-5 shadow-[6px_6px_0px_0px_#000] overflow-hidden">
          {/* Fondo rayado cómic */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:12px_12px] pointer-events-none" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border-3 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center text-3xl sm:text-4xl shrink-0 rotate-2">
                <span className="filter drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)] select-none">
                  {data?.mapaCentral?.icono || "💥"}
                </span>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[9px] font-black uppercase bg-black text-yellow-300 px-2 py-0.5 rounded-full shadow-[1px_1px_0px_#000]">
                    ⚡ NÚCLEO CENTRAL
                  </span>
                  <span className="text-[9px] font-black text-black bg-amber-200 border border-black px-2 py-0.5 rounded-md hidden sm:inline-block">
                    {satelites.length} ÓRBITAS CONECTADAS
                  </span>
                </div>
                <h2 className="text-base sm:text-lg md:text-xl font-black uppercase text-black tracking-tight leading-tight">
                  {data?.mapaCentral?.titulo || data?.titulo || tema || "Concepto Principal"}
                </h2>
              </div>
            </div>

            {/* Conector Visual */}
            <div className="flex items-center gap-1.5 text-xs font-black text-black bg-white border-3 border-black px-3 py-1.5 rounded-2xl shadow-[3px_3px_0px_#000] shrink-0">
              <span className="text-amber-500">✦</span>
              <span className="uppercase tracking-wide text-[10px] sm:text-xs">
                {data?.mapaCentral?.subtitulo || "Rede de Saberes LOMLOE"}
              </span>
              <span className="text-amber-500">✦</span>
            </div>
          </div>
        </section>

        {/* RED DE SATÉLITES ORBITALES (CSS Grid Inteligente sin superposición) */}
        <section className="avoid-break">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
            {satelites.map((item, idx) => {
              const estilo = estilosSatelites[idx % estilosSatelites.length];
              const iconoSat = item.pegatina || item.icono || item.emoji || "✨";
              const tituloSat = item.titulo || item.concepto || `Órbita #${idx + 1}`;
              const soundSat = item.sound || estilo.sound;

              return (
                <div
                  key={idx}
                  className={`satelite-card relative ${estilo.rot} border-4 border-black shadow-[5px_5px_0px_0px_#000] rounded-2xl ${estilo.bg} p-4 flex flex-col justify-between transition hover:scale-[1.01] h-full break-words`}
                >
                  {/* Washi tape superior contenido */}
                  <div className="w-12 h-3.5 bg-white/70 border border-gray-400 absolute -top-2 left-1/2 -translate-x-1/2 rotate-1 z-20 shadow-xs" />

                  {/* Cabecera del Satélite */}
                  <div className="flex items-start justify-between gap-2 pb-2 mb-2 border-b-2 border-black/25">
                    <div className="flex items-center gap-2.5 min-w-0">
                      {/* Icono Badge Contenido (Sin offsets negativos frágiles) */}
                      <div className="w-10 h-10 rounded-xl bg-white border-2 border-black shadow-[2px_2px_0px_#000] flex items-center justify-center text-xl shrink-0">
                        <span className="select-none filter drop-shadow-xs">{iconoSat}</span>
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[8px] font-black uppercase bg-black text-white px-1.5 py-0.2 rounded">
                            Órbita #{idx + 1}
                          </span>
                          <span className="text-[8px] font-black uppercase bg-yellow-300 text-black border border-black px-1.5 py-0.2 rounded font-mono">
                            {soundSat}
                          </span>
                        </div>
                        <h3 className="font-black text-xs sm:text-sm uppercase tracking-tight text-black truncate mt-0.5">
                          {tituloSat}
                        </h3>
                      </div>
                    </div>

                    <span className="text-xs font-black text-slate-800 shrink-0">
                      🔗
                    </span>
                  </div>

                  {/* Cuerpo de la Órbita */}
                  <div className="flex-1 bg-white/90 rounded-xl p-2.5 border-2 border-black/20 shadow-inner flex flex-col justify-between">
                    <p className="text-[10px] sm:text-[11px] font-bold text-slate-900 leading-snug break-words whitespace-pre-line satelite-desc">
                      <HighlightedText text={item.descripcion} />
                    </p>

                    <div className="mt-2 pt-1.5 border-t border-dashed border-black/20 flex items-center justify-between text-[9px] font-black text-slate-700">
                      <span className="flex items-center gap-1">
                        <span>🎯</span> Saber Asociado
                      </span>
                      <span className="uppercase text-indigo-900">
                        Conectado ao Núcleo
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ZONA INFERIOR LÚDICA: NOTAS DE CAMPO Y SELLO DE CLASIFICACIÓN */}
        <section className="avoid-break grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs pt-1">
          <div className="relative p-3 rounded-2xl border-4 border-black shadow-[4px_4px_0px_#000] bg-purple-100 -rotate-0.5">
            <div className="absolute -top-3.5 -left-2 text-2xl z-20">📍</div>
            <div className="font-black text-black flex items-center justify-between mb-1.5 text-xs uppercase pl-3">
              <span className="flex items-center gap-1.5">
                <span>✏️</span> Notas de Campo do Investigador:
              </span>
              <span className="bg-purple-300 border border-black px-1.5 py-0.2 rounded text-[8px]">
                📏 Cuadrícula
              </span>
            </div>
            <div className="space-y-2 pt-0.5">
              <div className="border-b-2 border-dashed border-black/40 h-3" />
              <div className="border-b-2 border-dashed border-black/40 h-3" />
            </div>
          </div>

          <div className="relative p-3 rounded-2xl border-4 border-black shadow-[4px_4px_0px_#000] bg-emerald-100 rotate-0.5">
            <div className="absolute -top-3.5 -right-2 text-2xl z-20">📍</div>
            <div className="absolute -bottom-2 -right-2 bg-rose-500 text-white font-black text-[8px] uppercase px-2 py-0.5 rounded border-2 border-black rotate-6 shadow-[2px_2px_0px_#000]">
              ✓ APROBADO POLO COMITÉ
            </div>
            <div className="font-black text-black flex items-center gap-1.5 mb-1 text-xs uppercase pr-4">
              <span>🌟</span> Conclusión de Misión:
            </div>
            <p className="text-[10px] font-bold text-slate-900 leading-snug">
              Este mapa conceptual demostra como os elementos están conectados entre si formando un sistema vivo e comprensible!
            </p>
          </div>
        </section>
      </main>

      {/* 3. PIE DE PÁGINA */}
      <footer className="pt-2 border-t-3 border-black text-[10px] font-black text-slate-700 flex items-center justify-between avoid-break">
        <span>EduGalicia • {etapa === 'eso' || isESO ? 'Decreto 156/2022' : 'Decreto 155/2022'} • Xunta de Galicia</span>
        <span className="font-black text-black uppercase bg-sky-300 border-2 border-black px-2.5 py-0.5 rounded-md shadow-[2px_2px_0px_#000]">
          {isESO ? 'Lámina 2: Algoritmo Radial A4' : 'Lámina 2: Mapa Mental Orgánico A4'}
        </span>
      </footer>
    </div>
  );
}

