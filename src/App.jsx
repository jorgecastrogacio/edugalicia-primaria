import React, { useState, useEffect, useMemo, useRef } from 'react';
import { CURRICULO_GALICIA } from './data/curriculoGalicia';
import { CURRICULO_ESO } from './data/curriculoESO';
import { DEFAULT_TEMPLATES, parseAiOutputToSheet } from './data/defaultTemplates';
import { buildAssembledPrompts, executeGeminiGeneration } from './prompts/promptEngine';
import { FORMATOS_DISPONIBLES } from './data/formatos';
import FormInputs from './components/FormInputs';
import ExportToolbar from './components/ExportToolbar';
import SheetPreview from './components/SheetPreview';
import PromptViewerModal from './components/PromptViewerModal';
import { ShieldCheck, Printer, Zap } from 'lucide-react';

const LOADING_MESSAGES_PRIMARIA = [
  "Consultando Decreto 155/2022 e Orde do 26 de maio...",
  "Filtrando Saberes Básicos de Galicia (Pre-Prompting RAG)...",
  "Adaptando vocabulario cognitivo a Primaria (6-12 anos)...",
  "Diseñando mapa conceptual con sintaxe Mermaid...",
  "Estructurando o Dashboard A4 e o trivial de repaso...",
  "Finalizando maquetación de alta fidelidade para impresión..."
];

const LOADING_MESSAGES_ESO = [
  "Consultando Decreto 156/2022 (DOG núm. 184 - Secundaria)...",
  "Filtrando Saberes Básicos de Matemáticas ESO (Pre-Prompting RAG)...",
  "Compilando fórmulas e sintaxe KaTeX/LaTeX...",
  "Modelando algoritmos paso a paso e regras de signos...",
  "Xerando stickers Cyber-Math e retos lóxico-matemáticos...",
  "Finalizando maquetación matemática de alta fidelidade..."
];

export default function App() {
  // 0. Estado de Etapa Educativa (Primaria vs ESO)
  const [etapa, setEtapa] = useState(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const paramEtapa = urlParams.get('etapa');
      if (paramEtapa === 'eso' || paramEtapa === 'primaria') return paramEtapa;
      const stored = localStorage.getItem('edugalicia_etapa');
      return stored === 'eso' ? 'eso' : 'primaria';
    } catch {
      return 'primaria';
    }
  });

  const isESO = etapa === 'eso';
  const loadingMessages = isESO ? LOADING_MESSAGES_ESO : LOADING_MESSAGES_PRIMARIA;

  // 1. Estado de Inputs de la App (Inicializado según la etapa activa)
  const [cursoId, setCursoId] = useState(() => (etapa === 'eso' ? 'eso1' : '4'));
  const [materiaId, setMateriaId] = useState(() => (etapa === 'eso' ? 'matematicas' : 'conecemento_medio'));
  const [tema, setTema] = useState(() => (etapa === 'eso' ? 'Números enteiros e regra dos signos' : 'Os Ecosistemas de Galicia'));
  const [formato, setFormato] = useState("Dashboard Visual (1 página)");
  const [activeTab, setActiveTab] = useState("dashboard");

  // 2. Estado del Motor LLM
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStepIndex, setLoadingStepIndex] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const loadingIntervalRef = useRef(null);
  const abortControllerRef = useRef(null);
  const currentEtapaRef = useRef(etapa);

  useEffect(() => {
    currentEtapaRef.current = etapa;
  }, [etapa]);

  // 3. Modales
  const [isPromptModalOpen, setIsPromptModalOpen] = useState(false);

  // 4. Estado del Contenido Actual en el Lienzo A4
  const [sheetData, setSheetData] = useState(() => 
    etapa === 'eso' ? DEFAULT_TEMPLATES.enterosESO.data : DEFAULT_TEMPLATES.ecosistemas.data
  );
  const [rawAiResponse, setRawAiResponse] = useState('');

  // BLINDAJE 2 & FASE 1: Reset Atómico Seguro y Cancelación de Fetch en Vuelo al cambiar de Etapa
  const handleEtapaChange = (newEtapa) => {
    if (newEtapa === etapa) return;

    // FASE 1: Abortar inmediatamente cualquier llamada LLM activa para erradicar condiciones de carrera
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setIsLoading(false);

    try {
      localStorage.setItem('edugalicia_etapa', newEtapa);
      const url = new URL(window.location);
      url.searchParams.set('etapa', newEtapa);
      window.history.replaceState({}, '', url);
    } catch (e) {
      console.warn("EduGalicia: No se pudo persistir etapa en URL/storage", e);
    }

    setEtapa(newEtapa);
    setErrorMessage('');

    if (newEtapa === 'eso') {
      setCursoId('eso1');
      setMateriaId('matematicas');
      setTema('Números enteiros e regra dos signos');
      setSheetData(DEFAULT_TEMPLATES.enterosESO.data);
    } else {
      setCursoId('4');
      setMateriaId('conecemento_medio');
      setTema('Os Ecosistemas de Galicia');
      setSheetData(DEFAULT_TEMPLATES.ecosistemas.data);
    }
  };

  // Sincronización con historial del navegador (Botones Atrás / Adelante del navegador)
  useEffect(() => {
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const paramEtapa = urlParams.get('etapa');
      const targetEtapa = (paramEtapa === 'eso' || paramEtapa === 'primaria') ? paramEtapa : 'primaria';
      if (targetEtapa !== currentEtapaRef.current) {
        handleEtapaChange(targetEtapa);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleFormatoChange = (newFormato) => {
    setFormato(newFormato);
    const match = FORMATOS_DISPONIBLES.find(f => f.id === newFormato);
    if (match && match.tabKey) {
      setActiveTab(match.tabKey);
    }
  };

  // Obtener la información del curso y materia actuales de forma aislada según la etapa
  const cursoObj = useMemo(() => {
    if (etapa === 'eso') {
      return CURRICULO_ESO.cursos.find(c => c.id === cursoId) || CURRICULO_ESO.cursos[0];
    }
    return CURRICULO_GALICIA.cursos.find(c => c.id === cursoId) || CURRICULO_GALICIA.cursos[3];
  }, [etapa, cursoId]);

  const materiaObj = useMemo(() => {
    if (etapa === 'eso') {
      return CURRICULO_ESO.materias.find(m => m.id === materiaId) || CURRICULO_ESO.materias[0];
    }
    return CURRICULO_GALICIA.materias.find(m => m.id === materiaId) || CURRICULO_GALICIA.materias[0];
  }, [etapa, materiaId]);

  // Calcular temas sugeridos del currículo gallego según la selección
  const temasSugeridos = useMemo(() => {
    if (!cursoObj || !materiaObj) return [];
    if (etapa === 'eso') {
      const matData = materiaObj.cursos ? materiaObj.cursos[cursoId] : null;
      if (!matData || !matData.bloques) return [];
      const sugerencias = [];
      matData.bloques.forEach(b => {
        if (b.temasSugeridos) sugerencias.push(...b.temasSugeridos);
      });
      return sugerencias;
    }

    const cicloData = materiaObj.ciclos ? materiaObj.ciclos[cursoObj.ciclo] : null;
    if (!cicloData || !cicloData.bloques) return [];
    const sugerencias = [];
    cicloData.bloques.forEach(b => {
      if (b.temasSugeridos) sugerencias.push(...b.temasSugeridos);
    });
    return sugerencias;
  }, [etapa, cursoId, materiaId, cursoObj, materiaObj]);

  // Usar useDeferredValue para evitar recalculación intensiva en cada tecla pulsada
  const deferredTema = React.useDeferredValue(tema);

  // Ensamblar los prompts en tiempo real para auditoría e inspección
  const assembledPrompts = useMemo(() => {
    return buildAssembledPrompts({
      cursoId,
      materiaId,
      tema: deferredTema || "Tema General",
      formato,
      etapa
    });
  }, [cursoId, materiaId, deferredTema, formato, etapa]);

  // Manejar el ciclo de mensajes de carga
  useEffect(() => {
    if (isLoading) {
      setLoadingStepIndex(0);
      loadingIntervalRef.current = setInterval(() => {
        setLoadingStepIndex((prev) => (prev + 1) % loadingMessages.length);
      }, 1200);
    } else {
      if (loadingIntervalRef.current) clearInterval(loadingIntervalRef.current);
    }
    return () => {
      if (loadingIntervalRef.current) clearInterval(loadingIntervalRef.current);
    };
  }, [isLoading, loadingMessages.length]);

  const handleSelectTemplate = (templateKey) => {
    const tpl = DEFAULT_TEMPLATES[templateKey];
    if (!tpl) return;

    // Sincronizar etapa si la plantilla pertenece a otra
    if (tpl.etapa && tpl.etapa !== etapa) {
      setEtapa(tpl.etapa);
      try {
        localStorage.setItem('edugalicia_etapa', tpl.etapa);
        const url = new URL(window.location);
        url.searchParams.set('etapa', tpl.etapa);
        window.history.replaceState({}, '', url);
      } catch (e) {}
    }

    if (tpl.etapa === 'eso' || tpl.curso?.includes('ESO')) {
      const matchCurso = CURRICULO_ESO.cursos.find(c => tpl.curso.includes(c.label) || c.id === tpl.curso);
      if (matchCurso) setCursoId(matchCurso.id);
      setMateriaId('matematicas');
    } else {
      if (tpl.curso) {
        const matchCurso = CURRICULO_GALICIA.cursos.find(c => tpl.curso.includes(c.id));
        if (matchCurso) setCursoId(matchCurso.id);
      }
      if (tpl.materia) {
        const matchMateria = CURRICULO_GALICIA.materias.find(m => 
          tpl.materia.toLowerCase().includes(m.nombre.toLowerCase()) || 
          m.nombre.toLowerCase().includes(tpl.materia.toLowerCase())
        );
        if (matchMateria) setMateriaId(matchMateria.id);
      }
    }
    if (tpl.tema) setTema(tpl.tema);
    setSheetData(tpl.data);
    setErrorMessage('');
  };

  // Disparo directo a Gemini con recuperación automática, cancelación de llamadas y cero bloqueos
  const handleGenerar = async () => {
    // Abortar llamada previa si aún estuviera en vuelo
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;

    const requestEtapa = currentEtapaRef.current;
    setIsLoading(true);
    setErrorMessage('');

    try {
      const resultText = await executeGeminiGeneration({
        model: "gemini-1.5-flash",
        systemPrompt: assembledPrompts.systemPrompt,
        userPrompt: assembledPrompts.userPrompt,
        signal: controller.signal
      });

      // Blindaje contra condición de carrera: si la etapa cambió durante el fetch, descartar
      if (controller.signal.aborted || currentEtapaRef.current !== requestEtapa) {
        console.warn("EduGalicia: Respuesta de IA descartada por cambio de etapa durante la llamada.");
        return;
      }

      setRawAiResponse(resultText);
      const parsed = parseAiOutputToSheet(resultText, tema, cursoObj?.label, materiaObj?.nombre);
      setSheetData(parsed);
    } catch (err) {
      if (err.name === 'AbortError' || controller.signal.aborted) {
        console.log("EduGalicia: Petición cancelada limpiamente.");
        return;
      }
      console.warn("EduGalicia: Activando adaptación pedagógica inmediata tras aviso de IA:", err);
      if (currentEtapaRef.current === requestEtapa) {
        const offlineFallback = parseAiOutputToSheet("", tema, cursoObj?.label, materiaObj?.nombre);
        if (offlineFallback) {
          setSheetData(offlineFallback);
        }
        setErrorMessage(`Aviso: ${err.message || "Error al conectar con Gemini."} Hemos adaptado la lámina a "${tema}".`);
      }
    } finally {
      if (abortControllerRef.current === controller) {
        setIsLoading(false);
        abortControllerRef.current = null;
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* Barra de Navegación Superior (oculta al imprimir) */}
      <header className="no-print bg-white border-b border-slate-200/90 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl ${isESO ? 'bg-gradient-to-tr from-indigo-600 to-violet-600' : 'bg-gradient-to-tr from-blue-600 to-indigo-600'} text-white flex items-center justify-center font-black text-xl shadow-sm transition`}>
              {isESO ? '⚡' : 'EG'}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 text-base tracking-tight">EduGalicia</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider transition ${
                  isESO ? 'bg-indigo-100 text-indigo-900 border border-indigo-200' : 'bg-blue-100 text-blue-800'
                }`}>
                  {isESO ? '⚡ LOMLOE ESO • Cyber-Math' : 'LOMLOE Primaria'}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
                {isESO 
                  ? 'Decreto 156/2022, do 15 de setembro (DOG núm. 184) • Matemáticas 1º e 2º ESO'
                  : 'Decreto 155/2022 e Orde do 26 de maio de 2023 • Comunidade Autónoma de Galicia'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Selector de Etapa Segmentado en Cabecera */}
            <div className="hidden sm:flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 shadow-inner">
              <button
                type="button"
                onClick={() => handleEtapaChange('primaria')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  !isESO
                    ? 'bg-white text-blue-700 shadow-sm border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>🎒</span>
                <span>Primaria</span>
              </button>
              <button
                type="button"
                onClick={() => handleEtapaChange('eso')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  isESO
                    ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>⚡</span>
                <span>1º-2º ESO</span>
                <span className="text-[9px] px-1 py-0.2 bg-black/20 rounded font-mono">MATES</span>
              </button>
            </div>

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
              onSelectTemplate={handleSelectTemplate}
              etapa={etapa}
              onEtapaChange={handleEtapaChange}
            />

            {/* Barra de progreso / Mensaje de Estado Secuencial */}
            {isLoading && (
              <div className={`p-4 rounded-2xl bg-white border ${isESO ? 'border-indigo-200' : 'border-blue-200'} shadow-sm space-y-3 animate-fadeIn`}>
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 border-2 ${isESO ? 'border-indigo-600/30 border-t-indigo-600' : 'border-blue-600/30 border-t-blue-600'} rounded-full animate-spin shrink-0`} />
                  <p className={`text-xs font-bold ${isESO ? 'text-indigo-900' : 'text-blue-900'}`}>
                    {loadingMessages[loadingStepIndex]}
                  </p>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div
                    className={`${isESO ? 'bg-indigo-600' : 'bg-blue-600'} h-full transition-all duration-500 rounded-full`}
                    style={{ width: `${((loadingStepIndex + 1) / loadingMessages.length) * 100}%` }}
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
            <div className={`p-4 rounded-2xl ${isESO ? 'bg-gradient-to-br from-indigo-50/70 to-purple-50/50 border border-indigo-100' : 'bg-gradient-to-br from-blue-50/60 to-indigo-50/40 border border-blue-100'} text-xs text-slate-600 space-y-2`}>
              <div className="flex items-center gap-1.5 font-bold text-slate-800">
                <ShieldCheck className={`w-4 h-4 ${isESO ? 'text-indigo-600' : 'text-blue-600'}`} />
                <span>Garantía de Filtrado RAG Pre-Prompting ({isESO ? 'Decreto 156/2022 ESO' : 'Decreto 155/2022 Primaria'})</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                {isESO ? (
                  <>
                    El orquestador extrae exclusivamente los Saberes Básicos de <strong>{cursoObj?.label}</strong> ({materiaObj?.nombre}) del <strong>Decreto 156/2022 (DOG núm. 184)</strong>. Explicaciones algorítmicas paso a paso, motor tipográfico KaTeX nativo y cero infantilización.
                  </>
                ) : (
                  <>
                    El orquestador extrae exclusivamente los Saberes Básicos de <strong>{cursoObj?.label}</strong> ({materiaObj?.nombre}) del <strong>Decreto 155/2022</strong>. No se satura el contexto y se evitan alucinaciones pedagógicas.
                  </>
                )}
              </p>
            </div>
          </aside>

          {/* COLUMNA DERECHA: Visor A4 y Barra de Exportación */}
          <section className="lg:col-span-7 space-y-4">
            {/* Barra de Acciones de Exportación */}
            <ExportToolbar
              sheetElementId="edugalicia-a4-sheet"
              title={`${cursoObj?.label || (isESO ? 'eso' : 'primaria')}-${tema}`}
              markdownContent={rawAiResponse}
              onOpenPromptViewer={() => setIsPromptModalOpen(true)}
              activeTab={activeTab}
            />

            {/* Visor WYSIWYG de la Hoja A4 con Selector de Láminas */}
            <div className="overflow-x-auto pb-6 flex justify-center">
              <SheetPreview
                id="edugalicia-a4-sheet"
                curso={cursoObj?.label || (isESO ? "1º de ESO" : "4º de Primaria")}
                materia={materiaObj?.nombre || (isESO ? "Matemáticas" : "Ciencias da Natureza")}
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
