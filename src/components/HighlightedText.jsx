import React from 'react';

/**
 * HighlightedText: Renderiza texto resaltando palabras con **asteriscos**
 * simulando un rotulador fluorescente amarillo escolar (-1deg de inclinación).
 * Robusto contra espacios extra, saltos de línea (\n) y asteriscos huérfanos.
 */
export default function HighlightedText({ text, className = "" }) {
  if (!text) return null;

  // Regex robusta: captura **contenido** incluso con espacios o saltos de línea suaves
  const parts = String(text).split(/(\*\*\s*[\s\S]+?\s*\*\*)/g);

  return (
    <span className={className}>
      {parts.map((part, idx) => {
        if (/^\*\*\s*[\s\S]+?\s*\*\*$/.test(part)) {
          const cleanText = part.replace(/^\*\*\s*/, '').replace(/\s*\*\*$/, '');
          return (
            <mark
              key={idx}
              className="bg-amber-300 text-black font-black px-1.5 py-0.5 rounded-sm -rotate-1 inline-block shadow-[1px_1px_0px_#000] relative z-10 mx-0.5 tracking-tight not-italic"
            >
              {cleanText}
            </mark>
          );
        }
        return <React.Fragment key={idx}>{part}</React.Fragment>;
      })}
    </span>
  );
}
