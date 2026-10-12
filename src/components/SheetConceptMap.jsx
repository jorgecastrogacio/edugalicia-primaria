import React from 'react';
import { MapPin, Sparkles, Compass, Lightbulb, Star } from 'lucide-react';

export default function SheetConceptMap({
  id = "edugalicia-sheet-mapa",
  curso,
  materia,
  tema,
  data
}) {
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
    { bg: "bg-pink-100", pos: "top-2 left-2 md:top-4 md:left-4", rot: "-rotate-3", emojiRot: "-rotate-12" },
    { bg: "bg-cyan-100", pos: "top-2 right-2 md:top-4 md:right-4", rot: "rotate-2", emojiRot: "rotate-6" },
    { bg: "bg-emerald-100", pos: "bottom-2 left-2 md:bottom-4 md:left-4", rot: "rotate-3", emojiRot: "-rotate-6" },
    { bg: "bg-purple-100", pos: "bottom-2 right-2 md:bottom-4 md:right-4", rot: "-rotate-2", emojiRot: "rotate-12" }
  ];

  return (
    <div id={id} className="a4-sheet bg-notebook text-slate-900 flex flex-col justify-between p-6">
      {/* 1. CABECERA NEO-BRUTALISTA v2.0 */}
      <header className="pb-3 border-b-4 border-black avoid-break relative">
        <div className="absolute -top-3 -right-2 text-3xl z-20 select-none drop-shadow-sm">📍</div>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-16 h-16 rounded-2xl bg-sky-300 border-4 border-black shadow-[6px_6px_0px_0px_#000] text-black flex items-center justify-center p-2 shrink-0 rotate-3">
              <Compass className="w-full h-full text-black stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider bg-sky-300 text-black border-2 border-black shadow-[2px_2px_0px_#000] px-2.5 py-0.5 rounded-full flex items-center gap-1 -rotate-1">
                  <MapPin className="w-3 h-3 text-black stroke-[3]" />
                  Galicia LOMLOE
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider bg-purple-300 text-black border-2 border-black shadow-[2px_2px_0px_#000] px-2.5 py-0.5 rounded-full flex items-center gap-1 rotate-2">
                  <Sparkles className="w-3 h-3 text-black fill-black" />
                  Mapa Mental Orgánico
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-black [text-shadow:2px_2px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000] leading-none mb-1">
                {data?.titulo || tema || "Mapa Mental do Explorador"}
              </h1>
              <p className="text-xs font-black text-sky-900 uppercase tracking-wide">
                {curso} • {materia}
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

      {/* 2. LIENZO RADIAL ORGÁNICO: CONTENEDOR CENTRAL CIRCULAR GIGANTE + SATÉLITES ABSOLUTE */}
      <main className="flex-1 my-3 flex flex-col justify-between space-y-3">
        {/* Banner de Misión Cómic */}
        <div className="flex items-center justify-between bg-yellow-300 border-4 border-black shadow-[4px_4px_0px_#000] px-3.5 py-2 rounded-2xl text-xs font-black text-black avoid-break -rotate-1">
          <div className="flex items-center gap-2">
            <span className="text-lg">⚡</span>
            <span className="uppercase tracking-tight">Ruta Orgánica de Exploración: ¡O Segredo do Coñecemento!</span>
          </div>
          <span className="text-[10px] uppercase font-black bg-black text-white px-2.5 py-0.5 rounded-lg shadow-[2px_2px_0px_#000]">
            +50 XP
          </span>
        </div>

        {/* LIENZO DE MAPA MENTAL RADIAL */}
        <div className="relative flex-1 min-h-[460px] bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_#000] p-4 flex items-center justify-center overflow-hidden avoid-break">
          {/* LÍNEAS GRUESAS DE CONEXIÓN SVG CON TRAZO DISCONTINUO */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {/* Línea hacia Top-Left */}
            <line x1="22%" y1="20%" x2="50%" y2="50%" stroke="black" strokeWidth="5" strokeDasharray="8 8" />
            {/* Línea hacia Top-Right */}
            <line x1="78%" y1="20%" x2="50%" y2="50%" stroke="black" strokeWidth="5" strokeDasharray="8 8" />
            {/* Línea hacia Bottom-Left */}
            <line x1="22%" y1="80%" x2="50%" y2="50%" stroke="black" strokeWidth="5" strokeDasharray="8 8" />
            {/* Línea hacia Bottom-Right */}
            <line x1="78%" y1="80%" x2="50%" y2="50%" stroke="black" strokeWidth="5" strokeDasharray="8 8" />
          </svg>

          {/* NODO CENTRAL GIGANTE CIRCULAR: rounded-full border-8 border-black shadow-[8px_8px_0px_0px_#000] */}
          <div className="relative z-10 w-56 h-56 md:w-64 md:h-64 rounded-full border-8 border-black shadow-[8px_8px_0px_0px_#000] bg-amber-300 flex flex-col items-center justify-center p-4 text-center -rotate-1 transition hover:scale-105">
            {/* Sticker decorativo desbordante sobre el círculo central */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl z-20 select-none filter drop-shadow-md">
              ☁️
            </div>
            <div className="absolute -bottom-3 bg-black text-amber-300 font-black text-[10px] uppercase px-3 py-1 rounded-full border-2 border-black rotate-3 shadow-[2px_2px_0px_#000]">
              ⭐ NÚCLEO CENTRAL ⭐
            </div>

            <h2 className="text-base md:text-lg font-black uppercase text-black tracking-tight leading-tight [text-shadow:1.5px_1.5px_0_#fff]">
              {data?.titulo || tema || "Concepto Principal"}
            </h2>
            <p className="text-[10px] font-black text-slate-900 mt-1 uppercase bg-white/70 px-2 py-0.5 rounded-full border border-black/30">
              Galicia Primaria
            </p>
          </div>

          {/* SATÉLITES ORGÁNICOS POSICIONADOS CON ABSOLUTE */}
          {satelites.map((item, idx) => {
            const config = coloresSatelites[idx];
            return (
              <div
                key={idx}
                className={`absolute ${config.pos} ${config.rot} z-20 border-4 border-black shadow-[6px_6px_0px_0px_#000] rounded-2xl ${config.bg} p-3 max-w-[210px] avoid-break transition hover:scale-105`}
              >
                {/* Washi Tape */}
                <div className="w-12 h-3.5 bg-white/60 border border-gray-400 absolute -top-2 left-1/2 -translate-x-1/2 rotate-1 z-30" />

                {/* EMOJI GIGANTE DESBORDANDO LA CAJA */}
                <div className={`absolute -top-6 -left-5 z-30 text-5xl ${config.emojiRot} select-none filter drop-shadow-[2px_3px_0px_rgba(0,0,0,0.3)]`}>
                  {item.emoji || "✨"}
                </div>

                <div className="pl-6 pt-1">
                  <div className="flex items-center justify-between border-b-2 border-black/30 pb-0.5 mb-1">
                    <h3 className="font-black text-xs uppercase tracking-tight text-black leading-tight">
                      {item.concepto}
                    </h3>
                  </div>
                  <p className="text-[10px] font-bold text-slate-900 leading-snug">
                    {item.descripcion}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ZONA INFERIOR LÚDICA: NOTAS DE CAMPO Y CONCLUSIONES CON CHINCHETAS */}
        <div className="grid grid-cols-2 gap-4 text-xs avoid-break pt-1">
          <div className="relative p-3 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_#000] bg-purple-100 -rotate-1">
            <div className="absolute -top-3.5 -left-2 text-2xl z-20">📍</div>
            <div className="font-black text-black flex items-center gap-1.5 mb-1.5 text-xs uppercase pl-4">
              <span>✏️</span> Notas de Campo do Investigador:
            </div>
            <div className="space-y-2 pt-0.5">
              <div className="border-b-2 border-dashed border-black/40 h-3" />
              <div className="border-b-2 border-dashed border-black/40 h-3" />
            </div>
          </div>

          <div className="relative p-3 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_#000] bg-emerald-100 rotate-1">
            <div className="absolute -top-3.5 -right-2 text-2xl z-20">📍</div>
            <div className="font-black text-black flex items-center gap-1.5 mb-1 text-xs uppercase pr-4">
              <span>🌟</span> Conclusión de Misión:
            </div>
            <p className="text-[10px] font-bold text-slate-900 leading-snug">
              Este mapa demostra como cada elemento está conectado e depende dos demais para funcionar en harmonía na nosa contorna!
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
