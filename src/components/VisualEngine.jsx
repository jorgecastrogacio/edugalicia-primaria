import React from 'react';
import { getUniversalMascot } from '../data/illustrationMap.jsx';

/**
 * VisualEngine: Motor Gráfico Neo-Brutalista para EduGalicia
 * Transforma datos semánticos (icono, tema, materia) en un póster monumental
 * con estética cómic / carta coleccionable, desbordamiento y sombras duras.
 */
export default function VisualEngine({
  artePrincipal = "🌍🚀✨",
  tema = "",
  materia = "",
  lema = "",
  modo = "hero", // "hero" | "card" | "badge"
  className = "",
  etapa = "primaria"
}) {
  const isESO = etapa === 'eso' || /\b(eso|secundaria)\b/i.test(tema);
  const mascot = getUniversalMascot(materia, tema);

  // Si viene una combinación de emojis o un solo emoji
  const rawArt = String(artePrincipal || "⭐").trim();
  const primaryIcon = rawArt.split(/\s+/)[0] || rawArt;

  if (modo === "badge") {
    return (
      <div className={`relative inline-flex items-center justify-center p-2 rounded-2xl bg-amber-300 border-3 border-black shadow-[3px_3px_0px_#000] rotate-2 select-none ${className}`}>
        <span className="text-3xl filter drop-shadow-[2px_2px_0px_#000]">{primaryIcon}</span>
      </div>
    );
  }

  return (
    <div className={`relative select-none overflow-visible ${className}`}>
      {/* Contenedor Monumental Neo-Brutalista */}
      <div className="relative bg-gradient-to-br from-amber-200 via-yellow-100 to-amber-300 border-4 border-black rounded-3xl p-4 sm:p-6 shadow-[8px_8px_0px_0px_#000] -rotate-1 transition hover:rotate-0 duration-300">
        
        {/* Washi Tape Superior */}
        <div className="w-20 h-5 bg-white/80 border-2 border-black/60 absolute -top-3 left-1/2 -translate-x-1/2 rotate-2 z-30 shadow-xs flex items-center justify-center">
          <span className="text-[8px] font-black uppercase tracking-widest text-black/70">EDUGALICIA</span>
        </div>

        {/* Insignia de Nivel Escolar Top-Left */}
        <div className="absolute -top-3.5 -left-3 z-30 bg-rose-500 text-white font-black text-[10px] sm:text-xs uppercase px-3 py-1 rounded-full border-3 border-black shadow-[3px_3px_0px_#000] -rotate-12">
          ⚡ MÁXIMO PODER
        </div>

        {/* Chincheta de fijación Top-Right */}
        <div className="absolute -top-3 -right-2 text-3xl z-30 filter drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
          📍
        </div>

        {/* ESCAPARATE DE ARTE GIGANTE: ÍCONO / EMOJI MONUMENTAL DESBORDANDO */}
        <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 py-2">
          
          {/* Lado Gráfico: Arte Masivo */}
          <div className="relative flex items-center justify-center order-1 sm:order-2">
            {/* Círculo de impacto de fondo tipo cómic */}
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white border-4 border-black shadow-[4px_4px_0px_#000] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#000_1.5px,transparent_1.5px)] [background-size:8px_8px]" />
              
              {/* EMOJI / ARTE GIGANTE: text-[90px] a text-[130px] */}
              <div className="text-7xl sm:text-8xl md:text-9xl select-none filter drop-shadow-[6px_6px_0px_#000] transform rotate-6 hover:scale-110 hover:-rotate-3 transition duration-200 z-10 cursor-pointer">
                {rawArt}
              </div>
            </div>

            {/* Sello de Autenticidad flotando en la esquina del arte */}
            <div className="absolute -bottom-2 -right-3 bg-amber-400 text-black font-black text-[9px] uppercase px-2.5 py-0.5 rounded-lg border-2 border-black rotate-12 shadow-[2px_2px_0px_#000] z-20">
              OFICIAL A4
            </div>
          </div>

          {/* Lado Informativo: Titular y Lema Mascota */}
          <div className="flex-1 text-center sm:text-left order-2 sm:order-1 space-y-2">
            <div className="inline-flex items-center gap-2 bg-black text-amber-300 font-black text-[10px] sm:text-xs uppercase px-3 py-1 rounded-full shadow-[2px_2px_0px_#000]">
              <span>🛡️</span>
              <span>{isESO ? 'Decreto 156/2022 • Saber Básico Secundaria' : 'Decreto 155/2022 • Saber Básico'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight leading-none uppercase">
              {tema || "Misión de Aprendizaxe"}
            </h2>

            {lema && (
              <p className="text-xs sm:text-sm font-black text-slate-800 italic bg-white/70 border-2 border-black rounded-xl p-2 shadow-[2px_2px_0px_#000] inline-block">
                "{lema}"
              </p>
            )}
          </div>
        </div>

        {/* Barra inferior decorativa estilo cómic */}
        <div className="mt-3 pt-2 border-t-2 border-dashed border-black/40 flex items-center justify-between text-[9px] font-mono font-bold text-black/80">
          <span>||| || | |||| || |</span>
          <span className="uppercase">EXPEDIENTE DIDÁCTICO OFICIAL • XUNTA DE GALICIA</span>
          <span>★ ★ ★ ★ ★</span>
        </div>
      </div>
    </div>
  );
}
