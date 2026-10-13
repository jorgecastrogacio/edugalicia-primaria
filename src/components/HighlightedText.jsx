import React from 'react';
import katex from 'katex';

/**
 * Normaliza y compila una fórmula matemática a HTML con KaTeX.
 * Cura automáticamente errores sintácticos comunes emitidos por LLMs (barras dobles o comandos sin barra).
 */
function renderSingleMath(rawFormula, isDisplayMode, key) {
  if (!rawFormula) return null;

  let formula = rawFormula.trim();

  // 1. Normalizar barras invertidas duplicadas de serializaciones JSON/XML (\\\\frac -> \\frac)
  formula = formula.replace(/\\\\([a-zA-Z]+)/g, '\\$1');

  // 2. Curación automática: comandos matemáticos generados sin barra invertida
  formula = formula.replace(/(^|[^\w\\])frac\{/g, '$1\\frac{');
  formula = formula.replace(/(^|[^\w\\])sqrt\{/g, '$1\\sqrt{');
  formula = formula.replace(/(^|[^\w\\])cdot\b/g, '$1\\cdot');
  formula = formula.replace(/(^|[^\w\\])times\b/g, '$1\\times');
  formula = formula.replace(/(^|[^\w\\])pm\b/g, '$1\\pm');
  formula = formula.replace(/(^|[^\w\\])implies\b/g, '$1\\implies');

  try {
    // Paso 3 (Renderizado KaTeX estricto): displayMode true para $$...$$ (línea horizontal pura, grande)
    const html = katex.renderToString(formula, {
      displayMode: isDisplayMode,
      throwOnError: false,
      output: 'htmlAndMathml'
    });

    if (isDisplayMode) {
      return (
        <span
          key={key}
          className="my-2.5 block text-center overflow-x-auto text-base font-normal select-text"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    }

    return (
      <span
        key={key}
        className="inline-math mx-0.5 align-middle font-normal inline-block select-text"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  } catch (err) {
    console.warn("EduGalicia: Error al renderizar KaTeX:", err);
    return <code key={key} className="font-mono bg-slate-100 text-xs px-1 py-0.5 rounded">{formula}</code>;
  }
}

/**
 * Paso 2: Regex Inquebrantable
 * Aísla perfectamente bloques $$ ... $$ (display) y $ ... $ (inline)
 */
function renderMathSegments(content) {
  if (!content) return null;

  const mathRegex = /(\$\$[\s\S]+?\$\$|\$(?:\\\$|[^\$\n])+?\$)/g;
  const segments = String(content).split(mathRegex);

  return segments.map((seg, sIdx) => {
    if (!seg) return null;

    if (seg.startsWith('$$') && seg.endsWith('$$') && seg.length >= 4) {
      const formula = seg.slice(2, -2);
      return renderSingleMath(formula, true, sIdx);
    } else if (seg.startsWith('$') && seg.endsWith('$') && seg.length >= 2) {
      const formula = seg.slice(1, -1);
      return renderSingleMath(formula, false, sIdx);
    }

    return <React.Fragment key={sIdx}>{seg}</React.Fragment>;
  });
}

/**
 * HighlightedText:
 * Renderiza textos pedagógicos combinando:
 * 1. Resaltador Fluorescente (**...**)
 * 2. Compilador KaTeX estricto ($...$ e $$...$$) con sanitización previa
 */
export default function HighlightedText({ text, className = "" }) {
  if (text === null || text === undefined) return null;

  // Paso 1 (Sanitización Previa): Limpia caracteres de control antes de cualquier Regex
  let cleanText = String(text)
    .replace(/\\n/g, '\n')
    .replace(/<br\s*\/?>/gi, '\n');

  // Auto-curación de texto plano emitido erróneamente por la IA sin delimitadores
  // Convierte frac34 -> $\frac{3}{4}$ o fracab -> $\frac{a}{b}$
  cleanText = cleanText.replace(/(?<!\$)\bfrac([0-9a-zA-Z])([0-9a-zA-Z])\b(?!\$)/g, '$\\frac{$1}{$2}$');
  // Convierte frac{a}{b} o \frac{a}{b} sueltos en $\frac{a}{b}$
  cleanText = cleanText.replace(/(?<!\$)(?:\\?frac\{([^{}]+)\}\{([^{}]+)\})(?!\$)/g, '$\\frac{$1}{$2}$');

  // Separar fragmentos con marcado fluorescente (**...**)
  const parts = cleanText.split(/(\*\*\s*[\s\S]+?\s*\*\*)/g);

  return (
    <span className={className}>
      {parts.map((part, idx) => {
        if (!part) return null;

        if (/^\*\*\s*[\s\S]+?\s*\*\*$/.test(part)) {
          const innerContent = part.replace(/^\*\*\s*/, '').replace(/\s*\*\*$/, '');
          return (
            <mark
              key={idx}
              className="bg-amber-300 text-black font-black px-1.5 py-0.5 rounded-sm -rotate-1 inline-block shadow-[1px_1px_0px_#000] relative z-10 mx-0.5 tracking-tight not-italic"
            >
              {renderMathSegments(innerContent)}
            </mark>
          );
        }

        return <React.Fragment key={idx}>{renderMathSegments(part)}</React.Fragment>;
      })}
    </span>
  );
}
