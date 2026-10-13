import React, { useState } from 'react';
import { Printer, Download, Copy, Check, Eye, X, Image as ImageIcon, Sparkles } from 'lucide-react';
import { toPng, toBlob } from 'html-to-image';

export default function ExportToolbar({
  sheetElementId,
  title = "ficha-edugalicia",
  markdownContent,
  onOpenPromptViewer,
  activeTab = "dashboard"
}) {
  const [isExportingImage, setIsExportingImage] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // Estado para el Modal de Retención Móvil / iOS (Fallback Definitivo)
  const [modalImageUrl, setModalImageUrl] = useState(null);

  // 1. Impresión nativa calibrada a A4 (Directo a PDF sin cortes)
  const handlePrint = () => {
    window.print();
  };

  // 2. Exportación Nativa Asíncrona (Web Share API Nivel 2 - 1 Solo Clic)
  const handleDownloadImage = async () => {
    const offscreenContainer = document.getElementById('edugalicia-a4-offscreen');
    const onScreenContainer = document.getElementById(sheetElementId);
    
    const targetNode = offscreenContainer?.querySelector('.a4-sheet') || 
                       offscreenContainer || 
                       onScreenContainer?.querySelector('.a4-sheet') || 
                       onScreenContainer;

    if (!targetNode) {
      alert("No se encontró el lienzo para exportar.");
      return;
    }

    try {
      setIsExportingImage(true);

      // FASE 2: Sincronización Gráfica de Fuentes (KaTeX WOFF2 + WebFonts para iOS Safari)
      if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }

      // REQUISITO CRÍTICO CTO: Capturar el scrollHeight completo dinámico (evita efecto ticket cortado)
      const dynamicHeight = Math.max(targetNode.scrollHeight || 1123, 1123);

      const blob = await toBlob(targetNode, {
        pixelRatio: 2,
        backgroundColor: '#ffffff',
        width: 794,
        height: dynamicHeight,
        style: {
          margin: '0',
          boxShadow: 'none',
          transform: 'none',
          width: '794px',
          minWidth: '794px',
          height: `${dynamicHeight}px`,
          maxHeight: 'none'
        }
      });

      if (!blob) {
        throw new Error("No se pudo generar el archivo de imagen.");
      }

      const sanitizedTitle = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const tabSuffix = activeTab ? `-${activeTab}` : '';
      const fileName = `${sanitizedTitle}${tabSuffix}-edugalicia.png`;

      // 1. INTENTO PRIMARIO: Web Share API Nivel 2 (Nativo iOS / Android / Móvil)
      const file = new File([blob], fileName, { type: 'image/png' });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: `${title} - EduGalicia`,
          text: `Lámina Didáctica Oficial LOMLOE Galicia: ${title}`
        });
        return;
      }

      // 2. FALLBACK SECUNDARIO (Desktop o navegadores sin soporte de Files en navigator.share)
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = fileName;
      link.href = objectUrl;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(objectUrl), 60000);

    } catch (err) {
      if (err.name === 'AbortError') return; // Cancelación voluntaria del usuario en el share sheet
      console.error("Error al exportar a imagen:", err);
      alert("No se pudo exportar automáticamente. Usa la opción 'Imprimir / Guardar PDF'.");
    } finally {
      setIsExportingImage(false);
    }
  };

  const handleCopyMarkdown = () => {
    if (!markdownContent) return;
    navigator.clipboard.writeText(markdownContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="no-print bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/80 p-3 shadow-sm flex flex-wrap items-center justify-between gap-3">
      {/* Grupo izquierdo: Acciones de descarga principales */}
      <div className="flex items-center gap-2">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 shadow-sm active:scale-95 transition cursor-pointer"
          title="Abre el cuadro de diálogo del navegador para Guardar como PDF o Imprimir en A4"
        >
          <Printer className="w-4 h-4 text-blue-400" />
          <span>Imprimir / Guardar PDF</span>
        </button>

        <button
          onClick={handleDownloadImage}
          disabled={isExportingImage}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-purple-600 text-white hover:bg-purple-700 shadow-sm active:scale-95 disabled:opacity-50 transition cursor-pointer"
          title="Guardar directamente en Fotos / Galería o Compartir"
        >
          {isExportingImage ? (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <Download className="w-4 h-4 text-amber-300" />
          )}
          <span>{isExportingImage ? 'Procesando...' : 'Guardar en Fotos / Compartir'}</span>
        </button>

        {markdownContent && (
          <button
            onClick={handleCopyMarkdown}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-100 border border-slate-200 active:scale-95 transition cursor-pointer"
            title="Copiar texto en formato Markdown"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? '¡Copiado!' : 'Copiar MD'}</span>
          </button>
        )}
      </div>

      {/* Grupo derecho: Herramientas de Inspección */}
      <div className="flex items-center gap-2">
        <button
          onClick={onOpenPromptViewer}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-100 border border-slate-200 transition cursor-pointer"
          title="Inspeccionar el System Prompt y el Prompt de Ensamblaje con Saberes Básicos RAG"
        >
          <Eye className="w-3.5 h-3.5 text-indigo-500" />
          <span>Ver Prompt Ensamblado</span>
        </button>
      </div>
    </div>
  );
}
