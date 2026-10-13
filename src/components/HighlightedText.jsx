import React from 'react';
import katex from 'katex';

/**
 * Renderiza segmentos con fórmulas LaTeX ($...$ o $$...$$) usando KaTeX
 * Seguro contra fallos sintácticos con fallback a texto plano.
 */
function renderMathSegments(content) {
  if (!content) return null;
  const mathRegex = /(\$\$[\s\S]+?\$\$|\$[^\$\n]+?\$)/g;
  const segments = String(content).split(mathRegex);

  return segments.map((seg, sIdx) => {
    if (seg.startsWith('$$') && seg.endsWith('$$')) {
      const formula = seg.slice(2, -2).trim();
      try {
        const html = katex.renderToString(formula, { displayMode: true, throwOnError: false });
        return <span key={sIdx} className="my-1.5 block text-center overflow-x-auto" dangerouslySetInnerHTML={{ __html: html }} />;
      } catch (e) {
        return <code key={sIdx} className="font-mono bg-slate-100 px-1 rounded">{formula}</code>;
      }
    } else if (seg.startsWith('$') && seg.endsWith('$')) {
      const formula = seg.slice(1, -1).trim();
      try {
        const html = katex.renderToString(formula, { displayMode: false, throwOnError: false });
        return <span key={sIdx} className="inline-math mx-0.5 align-middle" dangerouslySetInnerHTML={{ __html: html }} />;
      } catch (e) {
        return <code key={sIdx} className="font-mono bg-slate-100 px-1 rounded">{formula}</code>;
      }
    }
    return <React.Fragment key={sIdx}>{seg}</React.Fragment>;
  });
}

/**
 * HighlightedText: Renderiza texto resaltando palabras con **asteriscos**
 * simulando un rotulador fluorescente amarillo escolar (-1deg de inclinación).
 * Soporta fórmulas KaTeX ($...$) dentro y fuera de los resaltados.
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
              {renderMathSegments(cleanText)}
            </mark>
          );
        }
        return <React.Fragment key={idx}>{renderMathSegments(part)}</React.Fragment>;
      })}
    </span>
  );
}
