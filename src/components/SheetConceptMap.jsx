import React from 'react';
import { MapPin, Sparkles, Compass, Lightbulb, Star, Zap } from 'lucide-react';
import { getUniversalMascot } from '../data/illustrationMap.jsx';

export default function SheetConceptMap({
  id = "edugalicia-sheet-mapa",
  curso,
  materia,
  tema,
  data
}) {
  const activeMascot = getUniversalMascot(materia, tema);

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
    <div id={id} className="a4-sheet bg-notebook text-slate-900 flex flex-col justify-between p-6">
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
                  Galicia LOMLOE
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider bg-purple-300 text-black border-2 border-black shadow-[2px_2px_0px_#000] px-2.5 py-0.5 rounded-full flex items-center gap-1 rotate-2">
                  <Sparkles className="w-3 h-3 text-black fill-black" />
                  Mapa Mental Cómic
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
              <span className="text-sky-950">🧭 Explorador:</span>
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

        {/* LIENZO DE MAPA MENTAL RADIAL */}
        <div className="relative flex-1 min-h-[460px] bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_#000] p-4 flex items-center justify-center overflow-hidden avoid-break">
          {/* LÍNEAS CURVAS DE CONEXIÓN SVG CON TRAZO DISCONTINUO */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden sm:block">
            {/* Curva hacia Top-Left */}
            <path d="M 220 130 Q 320 180 400 240" fill="none" stroke="black" strokeWidth="5" strokeDasharray="8 8" />
            {/* Curva hacia Top-Right */}
            <path d="M 580 130 Q 480 180 400 240" fill="none" stroke="black" strokeWidth="5" strokeDasharray="8 8" />
            {/* Curva hacia Bottom-Left */}
            <path d="M 220 370 Q 320 320 400 260" fill="none" stroke="black" strokeWidth="5" strokeDasharray="8 8" />
            {/* Curva hacia Bottom-Right */}
            <path d="M 580 370 Q 480 320 400 260" fill="none" stroke="black" strokeWidth="5" strokeDasharray="8 8" />
          </svg>

          {/* NODO CENTRAL: EXPLOSIÓN CÓMIC BURST (POLYGON BURST DE FONDO + BUBBLE CIRCULAR) */}
          <div className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 flex flex-col items-center justify-center p-3 sm:p-4 text-center -rotate-1 transition hover:scale-105 my-auto">
            {/* SVG Polígono de explosión tipo cómic */}
            <svg className="absolute inset-0 w-full h-full -z-10 drop-shadow-[5px_5px_0px_#000]" viewBox="0 0 200 200">
              <polygon
                points="100,6 122,54 176,34 148,84 196,114 144,138 160,194 100,164 40,194 56,138 4,114 52,84 24,34 78,54"
                fill="#FDE047"
                stroke="#000000"
                strokeWidth="5"
                strokeLinejoin="round"
              />
            </svg>

            {/* Núcleo Interior Circular */}
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-amber-400 border-4 border-black flex flex-col items-center justify-center p-2.5 shadow-inner">
              {/* Sticker decorativo desbordante sobre el círculo central */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-yellow-300 font-black text-[9px] sm:text-[10px] uppercase px-3 py-0.5 rounded-full border-2 border-black rotate-2 shadow-[2px_2px_0px_#000] whitespace-nowrap">
                💥 ¡BOOM! NÚCLEO ⭐
              </div>

              <h2 className="text-xs sm:text-sm md:text-base font-black uppercase text-black tracking-tight leading-tight [text-shadow:1.5px_1.5px_0_#fff]">
                {data?.titulo || tema || "Concepto Principal"}
              </h2>
              <p className="text-[8.5px] sm:text-[9.5px] font-black text-slate-900 mt-1 uppercase bg-white/90 px-2 py-0.5 rounded-full border border-black/40">
                Primaria LOMLOE
              </p>
            </div>
          </div>

          {/* SATÉLITES ORGÁNICOS POSICIONADOS CON ABSOLUTE EN ESCRITORIO */}
          {satelites.map((item, idx) => {
            const config = coloresSatelites[idx];
            return (
              <div
                key={idx}
                className={`sm:absolute ${config.pos} ${config.rot} z-20 border-3 sm:border-4 border-black shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] ring-2 ring-black/20 rounded-2xl ${config.bg} p-2.5 sm:p-3 max-w-full sm:max-w-[215px] avoid-break transition hover:scale-105 my-1 sm:my-0`}
              >
                {/* Washi Tape */}
                <div className="w-12 h-3.5 bg-white/70 border border-gray-400 absolute -top-2 left-1/2 -translate-x-1/2 rotate-1 z-30 shadow-xs" />

                {/* Comic sound badge en esquina superior derecha */}
                <span className="absolute -top-3 -right-2 bg-black text-yellow-300 text-[8px] font-black px-1.5 py-0.5 rounded-md border border-black rotate-12 shadow-[1px_1px_0px_#000]">
                  {config.sound}
                </span>

                {/* EMOJI GIGANTE DESBORDANDO LA CAJA */}
                <div className={`absolute -top-5 sm:-top-6 -left-4 sm:-left-5 z-30 text-4xl sm:text-5xl ${config.emojiRot} select-none filter drop-shadow-[2px_3px_0px_rgba(0,0,0,0.3)]`}>
                  {item.emoji || "✨"}
                </div>

                <div className="pl-5 sm:pl-6 pt-1">
                  <div className="flex items-center justify-between border-b-2 border-black/30 pb-0.5 mb-1">
                    <h3 className="font-black text-xs uppercase tracking-tight text-black leading-tight">
                      {item.concepto}
                    </h3>
                  </div>
                  <p className="text-[9.5px] sm:text-[10px] font-bold text-slate-900 leading-snug bg-white/70 rounded-lg p-1.5 border border-black/15">
                    {item.descripcion}
                  </p>
                </div>
              </div>
            );
          })}
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
        <span>EduGalicia • Decreto 155/2022 • Xunta de Galicia</span>
        <span className="font-black text-black uppercase bg-sky-300 border-2 border-black px-2.5 py-0.5 rounded-md shadow-[2px_2px_0px_#000]">
          Lámina 2: Mapa Mental Orgánico A4
        </span>
      </footer>
    </div>
  );
}

