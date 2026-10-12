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

  // 2. Exportación a Imagen con Flujo Dual: Blob URL + Modal de Retención iOS
  const handleDownloadImage = async () => {
    const parentContainer = document.getElementById(sheetElementId);
    if (!parentContainer) {
      alert("No se encontró el lienzo para exportar.");
      return;
    }

    // Localizar el nodo .a4-sheet activo
    const targetSheet = parentContainer.querySelector('.a4-sheet') || parentContainer;

    try {
      setIsExportingImage(true);
      targetSheet.classList.add('force-print-layout');

      // Desactivar temporalmente cualquier transformación CSS de pantalla para render 1:1 puro
      const originalTransform = parentContainer.style.transform;
      parentContainer.style.transform = 'none';

      // Generar Blob nativo en alta resolución (794x1123 a pixelRatio: 2)
      const blob = await toBlob(targetSheet, {
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

      // Restaurar el transform visual del teléfono inmediatamente
      parentContainer.style.transform = originalTransform;

      if (!blob) {
        throw new Error("No se pudo generar el archivo de imagen.");
      }

      const sanitizedTitle = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const tabSuffix = activeTab ? `-${activeTab}` : '';
      const fileName = `${sanitizedTitle}${tabSuffix}-lomloe.png`;

      const objectUrl = URL.createObjectURL(blob);

      // Detección de entorno táctil / iOS
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || ('ontouchstart' in window);

      if (isMobile) {
        // En móviles: abrir el modal de retención con la imagen lista para toque largo / guardar en fotos
        setModalImageUrl(objectUrl);
      } else {
        // En escritorio: descarga directa transparente mediante Blob URL
        const link = document.createElement('a');
        link.download = fileName;
        link.href = objectUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(objectUrl), 60000);
      }
    } catch (err) {
      console.error("Error al exportar a imagen:", err);
      // Fallback de emergencia a toPng directo
      try {
        const fallbackDataUrl = await toPng(targetSheet, { pixelRatio: 2, backgroundColor: '#ffffff', width: 794 });
        setModalImageUrl(fallbackDataUrl);
      } catch (fallbackErr) {
        alert("No se pudo exportar la imagen. Usa la opción 'Imprimir / Guardar PDF'.");
      }
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
    <>
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
            title="Descargar o Guardar en Fotos en alta resolución"
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

      {/* 3. MODAL DE RETENCIÓN ANTI-IOS: GUARDA DIRECTO EN FOTOS */}
      {modalImageUrl && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center p-4 overflow-y-auto no-print animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_#000] max-w-lg w-full p-5 flex flex-col items-center text-center relative my-auto">
            <button
              onClick={() => setModalImageUrl(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-100 border-2 border-black flex items-center justify-center font-black hover:bg-rose-100 transition"
              aria-label="Cerrar ventana"
            >
              <X className="w-5 h-5 text-black" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-amber-300 border-3 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center text-2xl mb-3 -rotate-3">
              📸
            </div>

            <h3 className="text-lg font-black uppercase tracking-tight text-black mb-1">
              ¡Lámina Lista para Guardar!
            </h3>
            
            <p className="text-xs font-bold text-slate-700 bg-amber-100 border-2 border-black rounded-xl p-2.5 mb-4 max-w-sm">
              👉 <strong>Mantén el dedo pulsado</strong> sobre la imagen de abajo y elige <strong>"Guardar en Fotos"</strong> o <strong>"Compartir"</strong>.
            </p>

            {/* Vista previa de la imagen exportada */}
            <div className="w-full max-h-[55vh] overflow-y-auto rounded-xl border-3 border-black shadow-[4px_4px_0px_#000] bg-slate-50 p-2 mb-4">
              <img
                src={modalImageUrl}
                alt="Lámina Generada EduGalicia"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>

            <div className="flex gap-2 w-full">
              <a
                href={modalImageUrl}
                download={`${title}-lomloe.png`}
                className="flex-1 py-2.5 rounded-xl bg-purple-600 border-2 border-black text-white font-black text-xs shadow-[3px_3px_0px_#000] active:translate-y-0.5 flex items-center justify-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                Descarga Directa
              </a>
              <button
                onClick={() => setModalImageUrl(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-200 border-2 border-black font-black text-xs text-black shadow-[2px_2px_0px_#000]"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
