import React, { useState } from 'react';
import { Printer, Download, Copy, Check, Eye, Key, Sparkles } from 'lucide-react';
import { toPng } from 'html-to-image';

export default function ExportToolbar({
  sheetElementId,
  title = "ficha-edugalicia",
  markdownContent,
  onOpenPromptViewer,
  activeTab = "dashboard"
}) {
  const [isExportingImage, setIsExportingImage] = useState(false);
  const [copied, setCopied] = useState(false);

  // Impresión nativa calibrada a A4 (Directo a PDF sin cortes)
  const handlePrint = () => {
    window.print();
  };

  // Exportación a imagen PNG de alta definición (pixelRatio 2) con soporte para Guardar en Fotos móvil
  const handleDownloadImage = async () => {
    const parentContainer = document.getElementById(sheetElementId);
    if (!parentContainer) {
      alert("No se encontró el lienzo para exportar.");
      return;
    }

    // Buscar el nodo real .a4-sheet activo (evita capturar wrappers vacíos o escalados)
    const targetSheet = parentContainer.querySelector('.a4-sheet') || parentContainer;

    try {
      setIsExportingImage(true);
      targetSheet.classList.add('force-print-layout');

      // Guardar estilos temporales para captura limpia a escala 1:1 pura (794x1123 px = A4 a 96 DPI)
      const originalTransform = parentContainer.style.transform;
      parentContainer.style.transform = 'none';

      const dataUrl = await toPng(targetSheet, {
        pixelRatio: 2,
        backgroundColor: '#ffffff',
        width: 794,
        style: {
          margin: '0',
          boxShadow: 'none',
          transform: 'none',
          width: '794px',
          minWidth: '794px'
        }
      });

      // Restaurar el transform responsivo de pantalla
      parentContainer.style.transform = originalTransform;

      const sanitizedTitle = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const tabSuffix = activeTab ? `-${activeTab}` : '';
      const fileName = `${sanitizedTitle}${tabSuffix}-lomloe.png`;

      // En móviles (iOS / Android): Si el navegador soporta Web Share API con archivos,
      // abre el menú nativo del sistema ("Guardar imagen en Fotos", AirDrop, WhatsApp)
      if (navigator.share && navigator.canShare) {
        try {
          const res = await fetch(dataUrl);
          const blob = await res.blob();
          const file = new File([blob], fileName, { type: 'image/png' });

          if (navigator.canShare({ files: [file] })) {
            await navigator.share({
              files: [file],
              title: 'Lámina EduGalicia',
              text: 'Lámina educativa imprimible A4 de EduGalicia'
            });
            return;
          }
        } catch (shareErr) {
          // Si el usuario cancela el menú nativo o no está disponible, continuar con descarga estándar
          if (shareErr.name === 'AbortError') return;
        }
      }

      // Descarga directa habitual en escritorio / fallback
      const link = document.createElement('a');
      link.download = fileName;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Error al exportar a imagen:", err);
      alert("Hubo un detalle al exportar la imagen. Puedes usar 'Imprimir a PDF'.");
    } finally {
      targetSheet.classList.remove('force-print-layout');
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
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 shadow-sm active:scale-95 transition"
          title="Abre el cuadro de diálogo del navegador para Guardar como PDF o Imprimir en A4"
        >
          <Printer className="w-4 h-4 text-blue-400" />
          <span>Imprimir / Guardar PDF</span>
        </button>

        <button
          onClick={handleDownloadImage}
          disabled={isExportingImage}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200/60 active:scale-95 disabled:opacity-50 transition"
          title="Descargar como imagen PNG de 300dpi (ideal para WhatsApp o ClassDojo)"
        >
          {isExportingImage ? (
            <div className="w-4 h-4 border-2 border-blue-600/30 border-t-blue-600 rounded-full animate-spin" />
          ) : (
            <Download className="w-4 h-4" />
          )}
          <span>{isExportingImage ? 'Generando PNG...' : 'Descargar Imagen'}</span>
        </button>

        {markdownContent && (
          <button
            onClick={handleCopyMarkdown}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-100 border border-slate-200 active:scale-95 transition"
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
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-100 border border-slate-200 transition"
          title="Inspeccionar el System Prompt y el Prompt de Ensamblaje con Saberes Básicos RAG"
        >
          <Eye className="w-3.5 h-3.5 text-indigo-500" />
          <span>Ver Prompt Ensamblado</span>
        </button>
      </div>
    </div>
  );
}
