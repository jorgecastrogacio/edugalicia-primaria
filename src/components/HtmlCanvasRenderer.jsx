import React, { useMemo } from 'react';
import DOMPurify from 'dompurify';

/**
 * HtmlCanvasRenderer: Renderizador de Láminas A4 Generativas con Blindaje Anti-XSS
 * - Sanitiza el HTML generado por Gemini mediante DOMPurify (elimina scripts, iframes, eval).
 * - Restringe el contenedor a las dimensiones exactas A4 (210mm x 297mm).
 * - Aplica estilos Tailwind de forma inmediata con soporte para print y canvas export.
 */
export default function HtmlCanvasRenderer({
  htmlContent,
  id = "edugalicia-html-canvas",
  fallbackComponent = null
}) {
  // Configuración restrictiva de DOMPurify: permitir solo etiquetas y atributos de maquetación y diseño
  const cleanHtml = useMemo(() => {
    if (!htmlContent || typeof htmlContent !== 'string') return '';

    return DOMPurify.sanitize(htmlContent, {
      ALLOWED_TAGS: [
        'div', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'table', 'thead', 'tbody', 'tr', 'th', 'td',
        'ul', 'ol', 'li', 'header', 'footer', 'main', 'section', 'article', 'aside',
        'strong', 'em', 'b', 'i', 'u', 's', 'small', 'sub', 'sup',
        'blockquote', 'hr', 'br', 'svg', 'path', 'circle', 'rect', 'line', 'polygon', 'polyline', 'text', 'g'
      ],
      ALLOWED_ATTR: [
        'class', 'className', 'id', 'style', 'viewBox', 'fill', 'stroke', 'stroke-width',
        'strokeWidth', 'stroke-linecap', 'strokeLinecap', 'stroke-linejoin', 'strokeLinejoin',
        'd', 'cx', 'cy', 'r', 'x', 'y', 'width', 'height', 'rx', 'ry', 'x1', 'y1', 'x2', 'y2',
        'points', 'transform', 'font-size', 'fontSize', 'text-anchor', 'textAnchor', 'font-weight', 'fontWeight'
      ],
      FORBID_TAGS: ['script', 'iframe', 'object', 'embed', 'link', 'style', 'form', 'input'],
      FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover', 'href', 'src']
    });
  }, [htmlContent]);

  if (!cleanHtml) {
    return fallbackComponent || (
      <div className="a4-sheet text-slate-400 flex items-center justify-center text-sm">
        No se ha generado contenido HTML para esta lámina.
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center overflow-x-hidden">
      <div
        id={id}
        className="a4-sheet a4-canvas text-slate-800 flex flex-col justify-between overflow-hidden"
        style={{ width: '210mm', minHeight: '297mm' }}
        dangerouslySetInnerHTML={{ __html: cleanHtml }}
      />
    </div>
  );
}
