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

  const conceptos = data?.conceptosClave && data.conceptosClave.length > 0 
    ? data.conceptosClave 
    : [
        { emoji: "🌳", concepto: "Biotopo e Biocenose", descripcion: "Medio físico e seres vivos que conviven nel." },
        { emoji: "🐟", concepto: "Rías e Marismas", descripcion: "Mestura de auga doce e salgada con gran riqueza." },
        { emoji: "🦉", concepto: "Fragas Autóctonas", descripcion: "Bosques densos con carballos e fauna galega." },
        { emoji: "🔄", concepto: "Cadea Trófica", descripcion: "Produtores, consumidores e descompoñedores." }
      ];

  const satelites = conceptos.slice(0, 4);
  const coloresSatelites = [
    { bg: "bg-pink-100", pos: "top-2 left-2 md:top-3 md:left-3", rot: "-rotate-3", emojiRot: "-rotate-12", sound: "¡POW!" },
    { bg: "bg-cyan-100", pos: "top-2 right-2 md:top-3 md:right-3", rot: "rotate-2", emojiRot: "rotate-6", sound: "¡BOOM!" },
    { bg: "bg-emerald-100", pos: "bottom-2 left-2 md:bottom-3 md:left-3", rot: "rotate-3", emojiRot: "-rotate-6", sound: "¡ZAP!" },
    { bg: "bg-purple-100", pos: "bottom-2 right-2 md:bottom-3 md:right-3", rot: "-rotate-2", emojiRot: "rotate-12", sound: "¡TOP!" }
  ];

  return (
    <div id={id} className="a4-sheet min-h-[1123px] h-fit bg-notebook text-slate-900 flex flex-col justify-between p-6 relative">
      {/* 1. CABECERA NEO-BRUTALISTA v2.0 CON MASCOTA */}
      <header className="pb-3 border-b-4 border-black avoid-break relative">
        <div className="absolute -top-3 -right-2 text-3xl z-20 select-none drop-shadow-sm">📍</div>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className={`w-16 h-16 rounded-2xl ${activeMascot.color} border-4 border-black shadow-[6px_6px_0px_0px_#000] text-black flex items-center justify-center p-1.5 shrink-0 rotate-3`}>
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
                  {isESO ? 'Mapa Algorítmico' : 'Mapa Mental Cómic'}
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-black [text-shadow:2px_2px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000] leading-none mb-1">
                {data?.titulo || tema || "Mapa Mental do Explorador"}
              </h1>
              <p className="text-xs font-black text-sky-900 uppercase tracking-wide">
                {curso} • {materia} • Guía: {activeMascot.name}
              </p>
            </div>
          </div>

          <div className="relative text-right text-[11px] bg-sky-100 border-4 border-black shadow-[6px_6px_0px_0px_#000] rounded-2xl p-2.5 min-w-[175px] shrink-0 -rotate-2">
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

      {/* 2. LIENZO RADIAL: EXPLOSIÓN CÓMIC BURST + SATÉLITES FLOTANTES */}
      <main className="flex-1 my-3 flex flex-col justify-between space-y-3">
        {/* Banner de Misión Cómic */}
        <div className="flex items-center justify-between bg-yellow-300 border-4 border-black shadow-[4px_4px_0px_#000] px-3.5 py-2 rounded-2xl text-xs font-black text-black avoid-break -rotate-1">
          <div className="flex items-center gap-2">
            <span className="text-lg">💥</span>
            <span className="uppercase tracking-tight">¡Explosión de Ideas! Conecta os conceptos órbita por órbita</span>
          </div>
          <span className="text-[10px] uppercase font-black bg-black text-white px-2.5 py-0.5 rounded-lg shadow-[2px_2px_0px_#000]">
            +50 XP
          </span>
        </div>

        {/* LIENZO DE MAPA CONCEPTUAL ELÁSTICO ORGANICO (CERO COLISIONES ABSOLUTAS) */}
        <div className="relative w-full bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_#000] p-3.5 sm:p-5 avoid-break space-y-4">
          {/* Fila Superior: Satélites 1 y 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
            {((data?.mapaCentral?.satelites || satelites).slice(0, 2)).map((item, idx) => {
              const config = coloresSatelites[idx];
              return (
                <div
                  key={idx}
                  className={`satelite-card relative ${config.rot} z-10 border-4 border-black shadow-[4px_4px_0px_#000] rounded-2xl ${config.bg} p-3.5 pt-4.5 h-fit break-words transition hover:scale-[1.02] overflow-hidden`}
                >
                  {/* Marca de Agua Translúcida de Fondo */}
                  <div className="absolute inset-0 m-auto flex items-center justify-center text-7xl opacity-[0.07] pointer-events-none select-none z-0">
                    {item.pegatina || item.icono || item.emoji || "✨"}
                  </div>

                  {/* Pegatina Flotante Esquina */}
                  <div className="absolute bottom-1 right-2 text-2xl opacity-80 rotate-12 select-none pointer-events-none z-20 filter drop-shadow-xs">
                    {item.pegatina || item.icono || item.emoji || "✨"}
                  </div>

                  <div className="w-12 h-3.5 bg-white/70 border border-gray-400 absolute -top-2 left-1/2 -translate-x-1/2 rotate-1 z-30 shadow-xs" />
                  
                  {/* Comic sound badge */}
                  <span className="absolute -top-2.5 -right-2 bg-black text-yellow-300 text-[8px] font-black px-1.5 py-0.5 rounded-md border border-black rotate-12 shadow-[1px_1px_0px_#000]">
                    {item.sound || config.sound}
                  </span>

                  {/* Emoji desbordante */}
                  <div className={`absolute -top-5 -left-4 z-30 text-4xl sm:text-5xl ${config.emojiRot} select-none filter drop-shadow-[2px_3px_0px_rgba(0,0,0,0.3)]`}>
                    {item.icono || item.emoji || "✨"}
                  </div>

                  <div className="pl-6 pt-0.5 relative z-10">
                    <div className="flex items-center justify-between border-b-2 border-black/30 pb-1 mb-1">
                      <h3 className="font-black text-xs sm:text-sm uppercase tracking-tight text-black leading-tight flex items-center gap-1">
                        <span className="text-sm select-none pointer-events-none">⤴️</span>
                        {item.titulo || item.concepto}
                      </h3>
                      <span className="text-[8px] font-black uppercase bg-black text-white px-1.5 py-0.2 rounded">
                        Órbita #{idx + 1}
                      </span>
                    </div>
                    <p className="text-[clamp(9px,0.95vw,11px)] font-bold text-slate-900 leading-snug bg-white/85 rounded-xl p-2 border border-black/20 break-words whitespace-pre-line relative z-10 satelite-desc">
                      <HighlightedText text={item.descripcion} />
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* NÚCLEO CENTRAL: ANCLAJE VISUAL EXPANSIVO CONECTADO */}
          <div className="relative z-20 bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400 border-4 border-black rounded-3xl p-5 shadow-[8px_8px_0px_0px_#000] text-center -rotate-0.5 overflow-hidden">
            {/* Rayos de sol / Explosión cómic de fondo */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:12px_12px] pointer-events-none" />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 px-2">
              <div className="flex items-center gap-3.5">
                <div className="w-16 h-16 rounded-2xl bg-white border-3 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center text-4xl shrink-0 rotate-2">
                  <span className="filter drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)] select-none">
                    {data?.mapaCentral?.icono || "💥"}
                  </span>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] font-black uppercase bg-black text-yellow-300 px-2.5 py-0.5 rounded-full shadow-[1px_1px_0px_#000]">
                      ⚡ NÚCLEO CENTRAL DA MISIÓN
                    </span>
                    <span className="text-[9px] font-black text-black bg-amber-200 border border-black px-2 py-0.5 rounded-md hidden sm:inline-block">
                      CONEXIÓNS ACTIVAS
                    </span>
                  </div>
                  <h2 className="text-base sm:text-lg md:text-xl font-black uppercase text-black tracking-tight leading-tight">
                    {data?.mapaCentral?.titulo || data?.titulo || tema || "Concepto Principal"}
                  </h2>
                </div>
              </div>

              {/* Conector Visual: Flechas cómic conectando órbitas */}
              <div className="flex items-center gap-2 text-xs font-black text-black bg-white border-3 border-black px-3.5 py-1.5 rounded-2xl shadow-[3px_3px_0px_#000]">
                <span className="text-amber-500 text-sm">✦</span>
                <span className="uppercase tracking-wide">{data?.mapaCentral?.subtitulo || "Rede de Saberes LOMLOE"}</span>
                <span className="text-amber-500 text-sm">✦</span>
              </div>
            </div>
          </div>

          {/* Fila Inferior: Satélites 3 y 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
            {((data?.mapaCentral?.satelites || satelites).slice(2, 4)).map((item, idx) => {
              const realIdx = idx + 2;
              const config = coloresSatelites[realIdx] || coloresSatelites[0];
              return (
                <div
                  key={realIdx}
                  className={`satelite-card relative ${config.rot} z-10 border-4 border-black shadow-[4px_4px_0px_#000] rounded-2xl ${config.bg} p-3.5 pt-4.5 h-fit break-words transition hover:scale-[1.02] overflow-hidden`}
                >
                  {/* Marca de Agua Translúcida de Fondo */}
                  <div className="absolute inset-0 m-auto flex items-center justify-center text-7xl opacity-[0.07] pointer-events-none select-none z-0">
                    {item.pegatina || item.icono || item.emoji || "✨"}
                  </div>

                  {/* Pegatina Flotante Esquina */}
                  <div className="absolute bottom-1 right-2 text-2xl opacity-80 rotate-12 select-none pointer-events-none z-20 filter drop-shadow-xs">
                    {item.pegatina || item.icono || item.emoji || "✨"}
                  </div>

                  <div className="w-12 h-3.5 bg-white/70 border border-gray-400 absolute -top-2 left-1/2 -translate-x-1/2 rotate-1 z-30 shadow-xs" />
                  
                  {/* Comic sound badge */}
                  <span className="absolute -top-2.5 -right-2 bg-black text-yellow-300 text-[8px] font-black px-1.5 py-0.5 rounded-md border border-black rotate-12 shadow-[1px_1px_0px_#000]">
                    {item.sound || config.sound}
                  </span>

                  {/* Emoji desbordante */}
                  <div className={`absolute -top-5 -left-4 z-30 text-4xl sm:text-5xl ${config.emojiRot} select-none filter drop-shadow-[2px_3px_0px_rgba(0,0,0,0.3)]`}>
                    {item.icono || item.emoji || "✨"}
                  </div>

                  <div className="pl-6 pt-0.5 relative z-10">
                    <div className="flex items-center justify-between border-b-2 border-black/30 pb-1 mb-1">
                      <h3 className="font-black text-xs sm:text-sm uppercase tracking-tight text-black leading-tight flex items-center gap-1">
                        <span className="text-sm select-none pointer-events-none">⤵️</span>
                        {item.titulo || item.concepto}
                      </h3>
                      <span className="text-[8px] font-black uppercase bg-black text-white px-1.5 py-0.2 rounded">
                        Órbita #{realIdx + 1}
                      </span>
                    </div>
                    <p className="text-[clamp(9px,0.95vw,11px)] font-bold text-slate-900 leading-snug bg-white/85 rounded-xl p-2 border border-black/20 break-words whitespace-pre-line relative z-10 satelite-desc">
                      <HighlightedText text={item.descripcion} />
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ZONA INFERIOR LÚDICA: NOTAS DE CAMPO Y SELLO DE CLASIFICACIÓN */}
        <div className="grid grid-cols-2 gap-4 text-xs avoid-break pt-1">
          <div className="relative p-3 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_#000] bg-purple-100 -rotate-1">
            <div className="absolute -top-3.5 -left-2 text-2xl z-20">📍</div>
            <div className="font-black text-black flex items-center justify-between mb-1.5 text-xs uppercase pl-4">
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

          <div className="relative p-3 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_#000] bg-emerald-100 rotate-1">
            <div className="absolute -top-3.5 -right-2 text-2xl z-20">📍</div>
            {/* Sello de Aprobado por Detectives */}
            <div className="absolute -bottom-2 -right-2 bg-rose-500 text-white font-black text-[8px] uppercase px-2 py-0.5 rounded border-2 border-black rotate-6 shadow-[2px_2px_0px_#000]">
              ✓ APROBADO POLO COMITÉ
            </div>
            <div className="font-black text-black flex items-center gap-1.5 mb-1 text-xs uppercase pr-4">
              <span>🌟</span> Conclusión de Misión:
            </div>
            <p className="text-[10px] font-bold text-slate-900 leading-snug">
              Este mapa cósmico demostra como todos os conceptos están unidos por fíos invisibles no noso ecosistema e vida diaria!
            </p>
          </div>
        </div>
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

