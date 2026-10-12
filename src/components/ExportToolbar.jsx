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

  // 2. Exportación a Imagen Nativa de Alta Fidelidad a partir del contenedor Off-Screen
  const handleDownloadImage = async () => {
    // Prioridad 1: Contenedor Off-Screen matemático A4 exacto (794px, sin distorsión de scroll móvil)
    const offscreenContainer = document.getElementById('edugalicia-a4-offscreen');
    const onScreenContainer = document.getElementById(sheetElementId);
    
    // Nodo a fotografiar
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

      // Generar Blob nativo en 2x (1588x2246 @ pixelRatio: 2) ultra nítido
      const blob = await toBlob(targetNode, {
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

      if (!blob) {
        throw new Error("No se pudo generar el archivo de imagen.");
      }

      const sanitizedTitle = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const tabSuffix = activeTab ? `-${activeTab}` : '';
      const fileName = `${sanitizedTitle}${tabSuffix}-edugalicia.png`;

      const objectUrl = URL.createObjectURL(blob);

      // Detección de dispositivos táctiles / iOS (iPhone/iPad/iPod o Safari táctil)
      const isTouchOrIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                           (navigator.maxTouchPoints && navigator.maxTouchPoints > 1 && window.innerWidth < 800);

      // Disparar siempre intento de descarga directa por enlace dinámico
      const link = document.createElement('a');
      link.download = fileName;
      link.href = objectUrl;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Si es móvil / iOS, abrir SIEMPRE el Modal para Guardar en Fotos con pulsación larga
      if (isTouchOrIOS) {
        setModalImageUrl(objectUrl);
      } else {
        setTimeout(() => URL.revokeObjectURL(objectUrl), 60000);
      }
    } catch (err) {
      console.error("Error al exportar a imagen:", err);
      try {
        const fallbackDataUrl = await toPng(targetNode, { pixelRatio: 2, backgroundColor: '#ffffff', width: 794 });
        setModalImageUrl(fallbackDataUrl);
      } catch (fallbackErr) {
        alert("No se pudo exportar la imagen automáticamente. Usa la opción 'Imprimir / Guardar PDF'.");
      }
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
    <>
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
            title="Descarga directa a tu dispositivo con 1-clic"
          >
            {isExportingImage ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Download className="w-4 h-4 text-amber-300" />
            )}
            <span>{isExportingImage ? 'Descargando...' : 'Descargar en Fotos / Galería'}</span>
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

      {/* 3. MODAL DE RETENCIÓN ANTI-IOS: GUARDA DIRECTO EN FOTOS (VECTOR 4) */}
      {modalImageUrl && (
        <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-4 overflow-y-auto no-print animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_#000] max-w-lg w-full p-4 sm:p-6 flex flex-col items-center text-center relative my-auto">
            <button
              onClick={() => setModalImageUrl(null)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-slate-100 border-2 border-black flex items-center justify-center font-black hover:bg-rose-100 transition cursor-pointer"
              aria-label="Cerrar ventana"
            >
              <X className="w-5 h-5 text-black" />
            </button>

            <div className="w-14 h-14 rounded-2xl bg-amber-300 border-3 border-black shadow-[4px_4px_0px_#000] flex items-center justify-center text-3xl mb-3 -rotate-3">
              📸
            </div>

            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black mb-2 leading-tight">
              ¡MISIÓN CUMPLIDA! 📸
            </h3>
            
            <p className="text-xs sm:text-sm font-black text-slate-900 bg-amber-100 border-3 border-black shadow-[3px_3px_0px_#000] rounded-2xl p-3.5 mb-4 max-w-sm leading-snug">
              👉 <strong>Mantén pulsado el dedo sobre esta imagen para Guardarla en Fotos</strong> o compartirla con tu clase.
            </p>

            {/* Vista previa de la imagen exportada */}
            <div className="w-full max-h-[50vh] overflow-y-auto rounded-2xl border-3 border-black shadow-[4px_4px_0px_#000] bg-slate-50 p-2 mb-4">
              <img
                src={modalImageUrl}
                alt="Lámina Generada EduGalicia"
                className="w-full h-auto object-contain rounded-xl select-all"
              />
            </div>

            <div className="flex gap-2 w-full">
              <a
                href={modalImageUrl}
                download={`${title}-edugalicia.png`}
                className="flex-1 py-2.5 rounded-xl bg-purple-600 border-2 border-black text-white font-black text-xs shadow-[3px_3px_0px_#000] active:translate-y-0.5 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Descargar PNG Otra Vez
              </a>
              <button
                onClick={() => setModalImageUrl(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-200 border-2 border-black font-black text-xs text-black shadow-[2px_2px_0px_#000] cursor-pointer"
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
