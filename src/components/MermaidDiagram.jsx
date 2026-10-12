import React, { useEffect, useRef, useState } from 'react';
import { AlertTriangle, Copy, Check } from 'lucide-react';

export default function MermaidDiagram({ chartCode, className = "" }) {
  const containerRef = useRef(null);
  const [svgContent, setSvgContent] = useState('');
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setHasError(false);
    setErrorMessage('');

    if (!chartCode || typeof chartCode !== 'string' || !chartCode.trim()) {
      setSvgContent('');
      return;
    }

    const renderChart = async () => {
      // Generar ID único para evitar colisiones en DOM de Mermaid
      const uniqueId = `mermaid-svg-${Math.random().toString(36).substring(2, 9)}`;

      // Limpiar sintaxis básica de backticks en caso de que venga con bloques ```mermaid
      let sanitizedCode = chartCode
        .replace(/^```(mermaid)?/i, '')
        .replace(/```$/, '')
        .trim();

      try {
        // Carga diferida dinámica (Dynamic Import) para code-splitting del bundle principal
        const { default: mermaid } = await import('mermaid');
        mermaid.initialize({
          startOnLoad: false,
          theme: 'neutral',
          securityLevel: 'loose',
          themeVariables: {
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '13px',
            primaryColor: '#e0f2fe',
            primaryTextColor: '#0369a1',
            primaryBorderColor: '#0284c7',
            lineColor: '#64748b',
            secondaryColor: '#fef3c7',
            tertiaryColor: '#f1f5f9'
          }
        });

        const isValid = await mermaid.parse(sanitizedCode).catch(err => {
          throw err;
        });

        if (isValid !== false) {
          const { svg } = await mermaid.render(uniqueId, sanitizedCode);
          if (isMounted) {
            setSvgContent(svg);
            setHasError(false);
          }
        }
      } catch (err) {
        console.warn('EduGalicia: Error controlado al renderizar Mermaid:', err);
        if (isMounted) {
          setHasError(true);
          setErrorMessage(err?.message || 'Error sintáctico en la estructura del diagrama.');
        }
      }
    };

    renderChart();

    return () => {
      isMounted = false;
    };
  }, [chartCode]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(chartCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Fallback elegante en caso de fallo de sintaxis en el LLM
  if (hasError) {
    return (
      <div className={`p-4 rounded-xl border border-amber-200 bg-amber-50/70 text-amber-900 avoid-break ${className}`}>
        <div className="flex items-center justify-between mb-2 pb-2 border-b border-amber-200/60">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-800">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Diagrama en modo texto (Sintaxis no renderizable)</span>
          </div>
          <button
            onClick={handleCopyCode}
            className="flex items-center gap-1 text-[11px] px-2 py-0.5 rounded bg-amber-100 hover:bg-amber-200 text-amber-800 transition"
            title="Copiar código fuente"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'Copiado' : 'Copiar'}</span>
          </button>
        </div>
        <pre className="text-xs font-mono p-2.5 rounded bg-amber-100/60 overflow-x-auto whitespace-pre-wrap text-slate-700">
          {chartCode}
        </pre>
        <p className="text-[10px] text-amber-700 mt-1 italic">
          Nota del sistema: El contenido se conserva íntegro para estudio aunque el gráfico no pudo dibujarse.
        </p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`mermaid-wrapper flex justify-center items-center py-2 avoid-break ${className}`}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}
