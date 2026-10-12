import React, { useState, useEffect, useMemo, useRef } from 'react';
import { CURRICULO_GALICIA } from './data/curriculoGalicia';
import { DEFAULT_TEMPLATES, parseAiOutputToSheet } from './data/defaultTemplates';
import { buildAssembledPrompts, executeGeminiGeneration } from './prompts/promptEngine';
import { FORMATOS_DISPONIBLES } from './data/formatos';
import FormInputs from './components/FormInputs';
import ExportToolbar from './components/ExportToolbar';
import SheetPreview from './components/SheetPreview';
import PromptViewerModal from './components/PromptViewerModal';
import { ShieldCheck, Printer } from 'lucide-react';

const LOADING_MESSAGES = [
  "Consultando Decreto 155/2022 e Orde do 26 de maio...",
  "Filtrando Saberes Básicos de Galicia (Pre-Prompting RAG)...",
  "Adaptando vocabulario cognitivo a Primaria (6-12 anos)...",
  "Diseñando mapa conceptual con sintaxe Mermaid...",
  "Estructurando o Dashboard A4 e o trivial de repaso...",
  "Finalizando maquetación de alta fidelidade para impresión..."
];

export default function App() {
  // 1. Estado de Inputs de la App
  const [cursoId, setCursoId] = useState("4");
  const [materiaId, setMateriaId] = useState("conecemento_medio");
  const [tema, setTema] = useState("Os Ecosistemas de Galicia");
  const [formato, setFormato] = useState("Dashboard Visual (1 página)");
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleFormatoChange = (newFormato) => {
    setFormato(newFormato);
    const match = FORMATOS_DISPONIBLES.find(f => f.id === newFormato);
    if (match && match.tabKey) {
      setActiveTab(match.tabKey);
    }
  };

  // 2. Estado del Motor LLM
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStepIndex, setLoadingStepIndex] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const loadingIntervalRef = useRef(null);

  // 3. Modales
  const [isPromptModalOpen, setIsPromptModalOpen] = useState(false);

  // 4. Estado del Contenido Actual en el Lienzo A4
  const [sheetData, setSheetData] = useState(DEFAULT_TEMPLATES.ecosistemas.data);
  const [rawAiResponse, setRawAiResponse] = useState('');

  // Obtener la información del curso y materia actuales para navegación en catálogo
  const cursoObj = CURRICULO_GALICIA.cursos.find(c => c.id === cursoId);
  const materiaObj = CURRICULO_GALICIA.materias.find(m => m.id === materiaId);

  // Calcular temas sugeridos del currículo gallego según la selección
  const temasSugeridos = useMemo(() => {
    if (!cursoObj || !materiaObj) return [];
    const cicloData = materiaObj.ciclos[cursoObj.ciclo];
    if (!cicloData || !cicloData.bloques) return [];
    const sugerencias = [];
    cicloData.bloques.forEach(b => {
      if (b.temasSugeridos) sugerencias.push(...b.temasSugeridos);
    });
    return sugerencias;
  }, [cursoId, materiaId, cursoObj, materiaObj]);

  // Usar useDeferredValue para evitar recalculación intensiva en cada tecla pulsada
  const deferredTema = React.useDeferredValue(tema);

  // Ensamblar los prompts en tiempo real para auditoría e inspección
  const assembledPrompts = useMemo(() => {
    return buildAssembledPrompts({
      cursoId,
      materiaId,
      tema: deferredTema || "Tema General",
      formato
    });
  }, [cursoId, materiaId, deferredTema, formato]);

  // Manejar el ciclo de mensajes de carga
  useEffect(() => {
    if (isLoading) {
      setLoadingStepIndex(0);
      loadingIntervalRef.current = setInterval(() => {
        setLoadingStepIndex((prev) => (prev + 1) % LOADING_MESSAGES.length);
      }, 1200);
    } else {
      if (loadingIntervalRef.current) clearInterval(loadingIntervalRef.current);
    }
    return () => {
      if (loadingIntervalRef.current) clearInterval(loadingIntervalRef.current);
    };
  }, [isLoading]);

  // Disparo directo a Gemini con cero fricción
  const handleGenerar = async () => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      // Llamada directa a Gemini leyendo import.meta.env.VITE_GEMINI_API_KEY
      const resultText = await executeGeminiGeneration({
        model: "gemini-1.5-flash",
        systemPrompt: assembledPrompts.systemPrompt,
        userPrompt: assembledPrompts.userPrompt
      });

      setRawAiResponse(resultText);
      const parsed = parseAiOutputToSheet(resultText, tema, cursoObj?.label, materiaObj?.nombre);
      setSheetData(parsed);
    } catch (err) {
      console.error("Error al generar:", err);
      setErrorMessage(err.message || "Error al procesar la solicitud con la IA.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* Barra de Navegación Superior (oculta al imprimir) */}
      <header className="no-print bg-white border-b border-slate-200/90 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-xl shadow-sm">
              EG
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 text-base tracking-tight">EduGalicia</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 uppercase tracking-wider">
                  LOMLOE Primaria
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
                Decreto 155/2022 e Orde do 26 de maio de 2023 • Comunidade Autónoma de Galicia
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Botón Imprimir Rápido */}
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 shadow-sm transition active:scale-95"
            >
              <Printer className="w-3.5 h-3.5 text-blue-400" />
              <span>Imprimir A4</span>
            </button>
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* COLUMNA IZQUIERDA: Formulario de Entradas (no se imprime) */}
          <aside className="no-print lg:col-span-5 space-y-4">
            <FormInputs
              cursoId={cursoId}
              setCursoId={setCursoId}
              materiaId={materiaId}
              setMateriaId={setMateriaId}
              tema={tema}
              setTema={setTema}
              formato={formato}
              setFormato={handleFormatoChange}
              onGenerar={handleGenerar}
              isLoading={isLoading}
              temasSugeridos={temasSugeridos}
            />

            {/* Barra de progreso / Mensaje de Estado Secuencial */}
            {isLoading && (
              <div className="p-4 rounded-2xl bg-white border border-blue-200 shadow-sm space-y-3 animate-fadeIn">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-blue-600/30 border-t-blue-600 rounded-full animate-spin shrink-0" />
                  <p className="text-xs font-bold text-blue-900">
                    {LOADING_MESSAGES[loadingStepIndex]}
                  </p>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-600 h-full transition-all duration-500 rounded-full"
                    style={{ width: `${((loadingStepIndex + 1) / LOADING_MESSAGES.length) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {/* Mensaje de Error si ocurre */}
            {errorMessage && (
              <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs">
                <strong>Aviso:</strong> {errorMessage}
              </div>
            )}

            {/* Card Informativa de Rigor Normativo Gallego */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50/60 to-indigo-50/40 border border-blue-100 text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-slate-800">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Garantía de Filtrado RAG Pre-Prompting</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                El orquestador extrae exclusivamente los Saberes Básicos de <strong>{cursoObj?.label}</strong> ({materiaObj?.nombre}) del Decreto 155/2022. No se satura el contexto y se evitan alucinaciones pedagógicas.
              </p>
            </div>
          </aside>

          {/* COLUMNA DERECHA: Visor A4 y Barra de Exportación */}
          <section className="lg:col-span-7 space-y-4">
            {/* Barra de Acciones de Exportación */}
            <ExportToolbar
              sheetElementId="edugalicia-a4-sheet"
              title={`${cursoObj?.label || 'primaria'}-${tema}`}
              markdownContent={rawAiResponse}
              onOpenPromptViewer={() => setIsPromptModalOpen(true)}
              activeTab={activeTab}
            />

            {/* Visor WYSIWYG de la Hoja A4 con Selector de Láminas */}
            <div className="overflow-x-auto pb-6 flex justify-center">
              <SheetPreview
                id="edugalicia-a4-sheet"
                curso={cursoObj?.label || "4º de Primaria"}
                materia={materiaObj?.nombre || "Ciencias da Natureza"}
                tema={tema}
                formato={formato}
                data={sheetData}
                rawContent={rawAiResponse}
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />
            </div>
          </section>
        </div>
      </main>

      {/* Modal de Inspección de Prompts */}
      <PromptViewerModal
        isOpen={isPromptModalOpen}
        onClose={() => setIsPromptModalOpen(false)}
        assembledPrompts={assembledPrompts}
      />
    </div>
  );
}
