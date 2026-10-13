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

  // 2. Normalización de multiplicaciones con asterisco dentro de fórmulas:
  // Convierte 3 * 5 -> 3 \cdot 5, a * b -> a \cdot b, 2 * (x - 3) -> 2 \cdot (x - 3)
  formula = formula.replace(/([0-9a-zA-Z\)\}\]])\s*\*\s*([0-9a-zA-Z\(\{\\\-])/g, '$1 \\cdot $2');

  // 3. Normalización de operadores relacionales no estándar (<=, >=, !=, <>)
  formula = formula.replace(/<=/g, '\\le ');
  formula = formula.replace(/>=/g, '\\ge ');
  formula = formula.replace(/!=/g, '\\neq ');
  formula = formula.replace(/<>/g, '\\neq ');

  // 4. Normalización de grados sexagesimales (90º o 90° -> 90^\circ)
  formula = formula.replace(/([0-9]+)\s*[º°]/g, '$1^\\circ');

  // 5. Normalización del número Pi (π unicode o pi aislado -> \pi)
  formula = formula.replace(/π/g, '\\pi');
  formula = formula.replace(/(^|[^\w\\])pi\b/g, '$1\\pi');

  // 6. Curación de comandos matemáticos generados sin barra invertida
  formula = formula.replace(/(^|[^\w\\])frac\{/g, '$1\\frac{');
  formula = formula.replace(/(^|[^\w\\])sqrt\{/g, '$1\\sqrt{');
  formula = formula.replace(/(^|[^\w\\])sqrt\[/g, '$1\\sqrt[');
  formula = formula.replace(/(^|[^\w\\])cdot\b/g, '$1\\cdot');
  formula = formula.replace(/(^|[^\w\\])times\b/g, '$1\\times');
  formula = formula.replace(/(^|[^\w\\])pm\b/g, '$1\\pm');
  formula = formula.replace(/(^|[^\w\\])implies\b/g, '$1\\implies');
  formula = formula.replace(/(^|[^\w\\])widehat\{/g, '$1\\widehat{');
  formula = formula.replace(/(^|[^\w\\])overline\{/g, '$1\\overline{');
  formula = formula.replace(/(^|[^\w\\])bar\{/g, '$1\\bar{');
  formula = formula.replace(/(^|[^\w\\])begin\{cases\}/g, '$1\\begin{cases}');
  formula = formula.replace(/(^|[^\w\\])end\{cases\}/g, '$1\\end{cases}');
  // Curación de conjuntos, relaciones y ángulos (Directiva Phi)
  formula = formula.replace(/(^|[^\w\\])mathbb\{/g, '$1\\mathbb{');
  formula = formula.replace(/(^|[^\w\\])angle\b/g, '$1\\angle ');
  formula = formula.replace(/(^|[^\w\\])approx\b/g, '$1\\approx ');
  formula = formula.replace(/(^|[^\w\\])le\b/g, '$1\\le ');
  formula = formula.replace(/(^|[^\w\\])ge\b/g, '$1\\ge ');
  formula = formula.replace(/(^|[^\w\\])neq\b/g, '$1\\neq ');
  formula = formula.replace(/(^|[^\w\\])notin\b/g, '$1\\notin ');
  formula = formula.replace(/(^|[^\w\\])subset\b/g, '$1\\subset ');
  formula = formula.replace(/(^|[^\w\\])in\b(?!\s*\{)/g, '$1\\in ');

  // 7. Normalizar saltos de línea dentro de sistemas de ecuaciones \begin{cases}
  formula = formula.replace(/\\newline/g, ' \\\\ ');

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
 * Auto-curación de texto plano fuera de bloques matemáticos ($...$, $$...$$)
 * Protege las fórmulas existentes evitando dobles envolturas o corrupciones de sintaxis.
 */
function autoHealOutsideMath(raw) {
  if (!raw) return raw;
  const mathRegex = /(\$\$[\s\S]+?\$\$|\$(?:\\\$|[^\$\n])+?\$)/g;
  const segments = String(raw).split(mathRegex);

  return segments.map((seg) => {
    if (!seg) return '';
    // Si ya es un bloque delimitado de matemáticas, preservarlo intacto
    if ((seg.startsWith('$$') && seg.endsWith('$$') && seg.length >= 4) ||
        (seg.startsWith('$') && seg.endsWith('$') && seg.length >= 2)) {
      return seg;
    }

    let healed = seg;

    // 1. Fracciones sin formato: frac34 -> $\frac{3}{4}$, fracab -> $\frac{a}{b}$, frac{a}{b} -> $\frac{a}{b}$
    healed = healed.replace(/\bfrac([0-9a-zA-Z])([0-9a-zA-Z])\b/g, '$\\frac{$1}{$2}$');
    healed = healed.replace(/(?:\\?frac\{([^{}]+)\}\{([^{}]+)\})/g, '$\\frac{$1}{$2}$');

    // 2. Sistemas de ecuaciones en texto plano \begin{cases}...\end{cases}
    healed = healed.replace(/\\begin\{cases\}([\s\S]*?)\\end\{cases\}/g, '$$\\begin{cases}$1\\end{cases}$$');

    // 3. Grados sexagesimales (90º o 90°)
    healed = healed.replace(/(?<!\w)(\d+)\s*[º°](?!\w)/g, '$$$1^\\circ$$');

    // 4. Decimales periódicos (\widehat o \overline)
    healed = healed.replace(/\\(widehat|overline)\{([^{}]+)\}/g, '$\\$1{$2}$');

    // 5. Media aritmética \bar{x} y Pi \pi
    healed = healed.replace(/\\(bar|overline)\{x\}/g, '$\\$1{x}$');
    healed = healed.replace(/\\pi\b/g, '$\\pi$');

    // 6. Directiva Phi: Conjuntos numéricos Blackboard Bold sueltos (\mathbb{Z}, \mathbb{Q}, \mathbb{N}, \mathbb{R})
    healed = healed.replace(/\\?mathbb\{([A-Za-z]+)\}/g, '$\\mathbb{$1}$');

    // 7. Directiva Phi: Notación angular suelta (\angle ABC, \angle A)
    healed = healed.replace(/\\angle\s*([A-Za-z0-9]+)/g, '$\\angle $1$');

    return healed;
  }).join('');
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

  // Curación inteligente de expresiones matemáticas huérfanas en texto plano sin alterar fórmulas existentes
  cleanText = autoHealOutsideMath(cleanText);

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
