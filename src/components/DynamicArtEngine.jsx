import React from 'react';
import { getUniversalMascot } from '../data/illustrationMap.jsx';

/**
 * DynamicArtEngine: Motor de Arte Temático Espectacular Neo-Brutalista
 * Combina patrones SVG de fondo, ráfagas cómic, manchas de pintura,
 * gradientes vibrantes y arte temático monumental que enamora a los niños.
 */
export default function DynamicArtEngine({
  artePrincipal = "🌍🚀✨",
  tema = "",
  materia = "",
  lema = "",
  className = "",
  etapa = "primaria"
}) {
  const isESO = etapa === 'eso' || /\b(eso|secundaria)\b/i.test(tema);
  const mascot = getUniversalMascot(materia, tema);
  const normTema = (tema + " " + materia).toLowerCase();

  // Detección de atmósfera y paleta temática
  let bgGradient = "from-amber-200 via-yellow-100 to-amber-300";
  let badgeColor = "bg-rose-500 text-white";
  let borderColor = "border-black";
  let themePattern = "dots"; // dots | stars | circuit | nature | bubbles

  if (normTema.includes("universo") || normTema.includes("espazo") || normTema.includes("terra") || normTema.includes("astro")) {
    bgGradient = "from-sky-300 via-indigo-100 to-purple-300";
    badgeColor = "bg-indigo-900 text-cyan-300";
    themePattern = "stars";
  } else if (normTema.includes("nature") || normTema.includes("ecosistem") || normTema.includes("seres vivos") || normTema.includes("planta") || normTema.includes("animal")) {
    bgGradient = "from-emerald-200 via-lime-100 to-teal-300";
    badgeColor = "bg-emerald-800 text-amber-200";
    themePattern = "nature";
  } else if (normTema.includes("matemát") || normTema.includes("númer") || normTema.includes("cálcul") || normTema.includes("fracc")) {
    bgGradient = "from-amber-300 via-orange-100 to-yellow-400";
    badgeColor = "bg-amber-950 text-yellow-300";
    themePattern = "circuit";
  } else if (normTema.includes("físic") || normTema.includes("deport") || normTema.includes("xogo")) {
    bgGradient = "from-rose-300 via-orange-100 to-amber-300";
    badgeColor = "bg-rose-900 text-white";
    themePattern = "bubbles";
  } else if (normTema.includes("inglés") || normTema.includes("english") || normTema.includes("lingua")) {
    bgGradient = "from-blue-300 via-cyan-100 to-sky-200";
    badgeColor = "bg-blue-900 text-amber-300";
    themePattern = "dots";
  }

  const rawArt = String(artePrincipal || "⭐").trim();

  return (
    <div className={`relative select-none overflow-visible w-full break-inside-avoid ${className}`}>
      {/* Marco Monumental Neo-Brutalista con sombra sólida */}
      <div className={`relative bg-gradient-to-br ${bgGradient} border-4 ${borderColor} rounded-3xl p-4 sm:p-6 shadow-[8px_8px_0px_0px_#000] -rotate-0.5 transition hover:rotate-0 duration-300 overflow-hidden`}>
        
        {/* PATRÓN PROCEDURAL SVG DE FONDO */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {themePattern === "stars" && (
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="stars-pat" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M20 5 L22 15 L32 15 L24 21 L27 31 L20 25 L13 31 L16 21 L8 15 L18 15 Z" fill="#000" />
                  <circle cx="35" cy="8" r="2" fill="#000" />
                  <circle cx="5" cy="35" r="1.5" fill="#000" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#stars-pat)" />
            </svg>
          )}

          {themePattern === "nature" && (
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="leaf-pat" width="45" height="45" patternUnits="userSpaceOnUse">
                  <path d="M10 25 C10 10, 25 10, 35 20 C25 35, 10 35, 10 25 Z" fill="#000" />
                  <circle cx="20" cy="15" r="2" fill="#000" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#leaf-pat)" />
            </svg>
          )}

          {themePattern === "circuit" && (
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-pat" width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#000" strokeWidth="1.5" />
                  <circle cx="0" cy="0" r="2.5" fill="#000" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pat)" />
            </svg>
          )}

          {(themePattern === "dots" || themePattern === "bubbles") && (
            <div className="absolute inset-0 bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:16px_16px]" />
          )}
        </div>

        {/* Washi Tape Superior */}
        <div className="w-24 h-5 bg-white/85 border-2 border-black/70 absolute -top-3 left-1/2 -translate-x-1/2 rotate-1 z-30 shadow-xs flex items-center justify-center">
          <span className="text-[9px] font-black uppercase tracking-widest text-black">EDUGALICIA</span>
        </div>

        {/* Insignia de Nivel Escolar Top-Left */}
        <div className={`absolute -top-3 -left-3 z-30 ${badgeColor} font-black text-[10px] sm:text-xs uppercase px-3 py-1 rounded-full border-3 border-black shadow-[3px_3px_0px_#000] -rotate-6`}>
          ⭐ NIVEL OFICIAL
        </div>

        {/* Chincheta Top-Right */}
        <div className="absolute -top-3 -right-2 text-3xl z-30 filter drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
          📍
        </div>

        {/* CONTENIDO INTERNO: ARTE GIGANTE + TITULAR PEDAGÓGICO */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-5 py-2">
          
          {/* Lado Gráfico: Disco Solar de Cómic + Emojis Gigantes Superpuestos */}
          <div className="relative flex items-center justify-center order-1 sm:order-2 shrink-0">
            {/* Mancha / Ráfaga Solar de Cómic */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white border-4 border-black shadow-[6px_6px_0px_#000] flex items-center justify-center relative overflow-visible rotate-3">
              <div className="absolute -inset-2 bg-yellow-300 rounded-full border-3 border-black -z-10 -rotate-6" />
              
              {/* EMOJI / ARTE MONUMENTAL */}
              <div className="text-6xl sm:text-7xl md:text-8xl select-none filter drop-shadow-[6px_6px_0px_#000] transform hover:scale-110 hover:-rotate-6 transition duration-200 z-20 cursor-pointer">
                {rawArt}
              </div>
            </div>

            {/* Medalla de Misión Escolar */}
            <div className="absolute -bottom-2 -left-2 bg-amber-400 text-black font-black text-[9px] sm:text-[10px] uppercase px-2.5 py-1 rounded-xl border-2 border-black -rotate-12 shadow-[2px_2px_0px_#000] z-30">
              ⚡ 100% LOMLOE
            </div>
          </div>

          {/* Lado Pedagógico: Textos ricos sin truncar */}
          <div className="flex-1 text-center sm:text-left order-2 sm:order-1 space-y-2.5 min-w-0">
            <div className="inline-flex items-center gap-2 bg-black text-amber-300 font-black text-[10px] sm:text-xs uppercase px-3 py-1 rounded-full shadow-[2px_2px_0px_#000]">
              <span>🛡️</span>
              <span>{isESO ? 'Decreto 156/2022 • Saber Básico Secundaria' : 'Decreto 155/2022 • Saber Básico Galego'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight leading-tight uppercase break-words">
              {tema || "Misión de Aprendizaxe"}
            </h2>

            {lema && (
              <p className="text-xs sm:text-sm font-black text-slate-900 bg-white/80 border-2 border-black rounded-2xl p-2.5 shadow-[3px_3px_0px_#000] inline-block max-w-xl leading-snug break-words">
                "{lema}"
              </p>
            )}
          </div>
        </div>

        {/* Pie decorativo estilo expediente clasificado */}
        <div className="mt-3 pt-2 border-t-2 border-dashed border-black/50 flex items-center justify-between text-[9px] font-mono font-bold text-black/80">
          <span>EXPEDIENTE: GAL-2026</span>
          <span className="uppercase">DESEÑADO PARA APRENDER XOGANDO</span>
          <span>★ ★ ★ ★ ★</span>
        </div>
      </div>
    </div>
  );
}
