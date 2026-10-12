import React, { useState } from 'react';
import { X, Copy, Check, Terminal, ShieldCheck } from 'lucide-react';

export default function PromptViewerModal({ isOpen, onClose, assembledPrompts }) {
  const [activeTab, setActiveTab] = useState('user'); // 'user' o 'system'
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const contentToDisplay = activeTab === 'system'
    ? assembledPrompts?.systemPrompt
    : assembledPrompts?.userPrompt;

  const handleCopy = () => {
    navigator.clipboard.writeText(contentToDisplay || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Cabecera */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-indigo-600" />
            <div>
              <h3 className="font-bold text-slate-800 text-sm">Inspector de Prompts y RAG</h3>
              <p className="text-[11px] text-slate-500">
                Auditoría en tiempo real de lo que se envía al modelo LLM
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Pestañas e Indicador RAG */}
        <div className="px-4 pt-3 pb-2 border-b border-slate-100 flex items-center justify-between">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('user')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                activeTab === 'user'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              User Prompt (Ensamblado con RAG)
            </button>
            <button
              onClick={() => setActiveTab('system')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                activeTab === 'system'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              System Prompt (Maestro EduGalicia)
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Filtrado RAG: {assembledPrompts?.ragSummary?.bloquesEnviados || 1} bloque(s) inyectado(s)</span>
          </div>
        </div>

        {/* Visor de Código / Texto */}
        <div className="flex-1 overflow-y-auto p-4 bg-slate-900 text-slate-200 font-mono text-xs leading-relaxed">
          <pre className="whitespace-pre-wrap">{contentToDisplay}</pre>
        </div>

        {/* Pie con botón de copiar */}
        <div className="p-3 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            Longitud: {contentToDisplay?.length || 0} caracteres
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition shadow-xs"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copiado al portapapeles' : 'Copiar Prompt'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
