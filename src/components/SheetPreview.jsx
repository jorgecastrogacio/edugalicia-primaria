import React, { useState, useEffect, useRef } from 'react';
import SheetDashboardVisual from './SheetDashboardVisual';
import SheetConceptMap from './SheetConceptMap';
import SheetChallenges from './SheetChallenges';
import HtmlCanvasRenderer from './HtmlCanvasRenderer';
import { Layout, Compass, Target, BookOpen, Sparkles, ShieldCheck } from 'lucide-react';
import { getUniversalMascot } from '../data/illustrationMap.jsx';

export default function SheetPreview({
  id = "edugalicia-a4-sheet",
  curso,
  materia,
  tema,
  formato,
  data,
  rawContent,
  activeTab: controlledActiveTab,
  onTabChange
}) {
  const [internalTab, setInternalTab] = useState('dashboard');
  const activeTab = controlledActiveTab !== undefined ? controlledActiveTab : internalTab;

  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  // Calibración matemática exacta de escala A4 (210mm = 794px a 96DPI)
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.clientWidth;
      const a4WidthPx = 794; // Ancho A4 exacto a 96 DPI

      if (containerWidth < a4WidthPx && containerWidth > 0) {
        // Añadir margen de respiración en móvil (restar 16px para padding)
        const availableWidth = containerWidth - 16;
        const newScale = Math.min(1, Math.max(0.35, availableWidth / a4WidthPx));
        setScale(newScale);
      } else {
        setScale(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTabClick = (tabKey) => {
    if (onTabChange) {
      onTabChange(tabKey);
    } else {
      setInternalTab(tabKey);
    }
  };

  const tabs = [
    {
      id: 'dashboard',
      label: '1. Dashboard Visual',
      icon: '📊',
      badge: 'Lámina 1',
      color: 'bg-amber-500 text-white hover:bg-amber-600'
    },
    {
      id: 'mapa',
      label: '2. Mapa Conceptual',
      icon: '🧠',
      badge: 'Lámina 2',
      color: 'bg-sky-500 text-white hover:bg-sky-600'
    },
    {
      id: 'retos',
      label: '3. Retos y Preguntas',
      icon: '🎯',
      badge: 'Lámina 3',
      color: 'bg-purple-600 text-white hover:bg-purple-700'
    },
    {
      id: 'todo',
      label: '📚 Cuaderno Completo (3 Páginas)',
      icon: '✨',
      badge: 'Todo A4',
      color: 'bg-slate-800 text-white hover:bg-slate-900'
    }
  ];

  // Altura proporcional calculada para que el contenedor padre no colapse cuando scale < 1
  const a4HeightPx = 1123;
  const scaledHeight = scale < 1 ? `${Math.round(a4HeightPx * scale)}px` : 'auto';

  return (
    <div ref={containerRef} className="w-full flex flex-col items-center overflow-x-hidden">
      {/* 1. SELECTOR SUPERIOR DE PESTAÑAS (NO SE IMPRIME) */}
      <nav aria-label="Selección de Lámina" className="no-print mb-4 w-full max-w-[210mm] bg-white/95 backdrop-blur-xs p-2 rounded-2xl border border-slate-200/90 shadow-xs">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabClick(tab.id)}
                className={`flex items-center justify-between p-2.5 rounded-xl text-xs font-bold transition-all ${
                  isSelected
                    ? `${tab.color} shadow-sm ring-2 ring-offset-1 ring-blue-500/40 scale-[1.02]`
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/70'
                }`}
              >
                <div className="flex items-center gap-1.5 truncate">
                  <span className="text-sm">{tab.icon}</span>
                  <span className="truncate">{tab.label}</span>
                </div>
                <span className={`text-[9px] px-1.5 py-0.5 rounded-md font-extrabold shrink-0 ${
                  isSelected ? 'bg-black/20 text-white' : 'bg-slate-200/70 text-slate-600'
                }`}>
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* 2. CONTENEDOR DEL LIENZO A4 CON ESCALADO PROPORCIONAL ANTI-CORTE */}
      <div 
        id={id} 
        className="w-full flex flex-col items-center transition-transform origin-top"
        style={{
          width: scale < 1 ? '794px' : '100%',
          transform: scale < 1 ? `scale(${scale})` : 'none',
          transformOrigin: 'top center',
          marginBottom: scale < 1 ? `-${Math.round(a4HeightPx * (1 - scale))}px` : '0px'
        }}
      >
        {/* VISTA 1: DASHBOARD VISUAL (SÓLO LÁMINA 1) */}
        {activeTab === 'dashboard' && (
          <div className="sheet-page w-full flex justify-center">
            <SheetDashboardVisual
              curso={curso}
              materia={materia}
              tema={tema}
              data={data}
            />
          </div>
        )}

        {/* VISTA 2: MAPA CONCEPTUAL (SÓLO LÁMINA 2) */}
        {activeTab === 'mapa' && (
          <div className="sheet-page w-full flex justify-center">
            <SheetConceptMap
              curso={curso}
              materia={materia}
              tema={tema}
              data={data}
            />
          </div>
        )}

        {/* VISTA 3: RETOS Y PREGUNTAS (SÓLO LÁMINA 3) */}
        {activeTab === 'retos' && (
          <div className="sheet-page w-full flex justify-center">
            <SheetChallenges
              curso={curso}
              materia={materia}
              tema={tema}
              data={data}
            />
          </div>
        )}

        {/* VISTA 4: CUADERNO COMPLETO CON MINI-PORTADA ESCOLAR NEO-BRUTALISTA */}
        {activeTab === 'todo' && (() => {
          const activeMascot = getUniversalMascot(materia, tema);
          return (
            <div className="w-full space-y-6 flex flex-col items-center">
              {/* MINI-PORTADA ESCOLAR: MISIÓN SECRETA DO EXPLORADOR */}
              <div className="sheet-page w-full flex justify-center">
                <div className="a4-sheet bg-notebook text-slate-900 flex flex-col justify-between border-4 border-black shadow-[8px_8px_0px_0px_#000] p-8 relative">
                  {/* Chincheta Superior */}
                  <div className="absolute -top-3.5 -right-2 text-4xl z-20 select-none">📍</div>

                  {/* Sello de Top Secret en esquina */}
                  <div className="absolute top-14 right-6 bg-rose-600 text-white font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-md border-3 border-black rotate-12 shadow-[3px_3px_0px_#000] z-20">
                    🔴 CLASIFICADO: TOP SECRET
                  </div>

                  {/* Cabecera Portada */}
                  <header className="border-b-4 border-black pb-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">🛡️</span>
                      <span className="text-xs font-black uppercase tracking-widest bg-black text-white px-3.5 py-1.5 rounded-full shadow-[2px_2px_0px_#000]">
                        Decreto 155/2022 • Xunta de Galicia
                      </span>
                    </div>
                    <span className="text-xs font-black uppercase bg-amber-300 border-3 border-black px-3 py-1 rounded-xl shadow-[3px_3px_0px_#000] rotate-2">
                      Edición Escolar Oficial
                    </span>
                  </header>

                  {/* Centro Portada Impactante */}
                  <div className="my-auto text-center space-y-5 py-3">
                    {/* Tarjeta de Mascota Oficial Protagonista */}
                    <div className="relative inline-block p-4 sm:p-5 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_#000] -rotate-2">
                      <div className="w-16 h-4 bg-white/70 border border-gray-400 absolute -top-2 left-1/2 -translate-x-1/2 rotate-1 z-20 shadow-xs" />
                      <div className={`w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-2 p-2 rounded-2xl ${activeMascot.color} border-3 border-black shadow-[4px_4px_0px_#000]`}>
                        <activeMascot.component className="w-full h-full" />
                      </div>
                      <div className="text-xs font-black text-black uppercase tracking-widest bg-amber-300 px-3.5 py-1 rounded-full border-2 border-black inline-block shadow-[2px_2px_0px_#000]">
                        {activeMascot.badge} • {activeMascot.name}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="text-sm font-black uppercase tracking-wider bg-purple-300 text-black border-3 border-black shadow-[3px_3px_0px_#000] px-4 py-1.5 rounded-full inline-block rotate-1">
                        ⭐ MISIÓN DIDÁCTICA PRIMARIA ⭐
                      </span>
                      <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tighter uppercase max-w-xl mx-auto comic-title leading-tight">
                        {data?.titulo || tema || "Caderno de Aprendizaxe"}
                      </h1>
                      <p className="text-base font-black text-indigo-900 uppercase tracking-wide">
                        {curso} • {materia}
                      </p>
                    </div>

                    {/* Ficha / Pasaporte de Detective do Alumno */}
                    <div className="relative max-w-md mx-auto bg-yellow-50 border-4 border-black rounded-2xl p-5 shadow-[6px_6px_0px_0px_#000] space-y-3 text-left rotate-1">
                      <div className="w-14 h-4 bg-white/70 border border-gray-400 absolute -top-2 left-1/2 -translate-x-1/2 -rotate-1 z-20 shadow-xs" />
                      
                      <div className="flex justify-between items-center border-b-2 border-dashed border-black/40 pb-2">
                        <span className="font-black text-xs text-black uppercase">🕵️ Axente Investigador/a:</span>
                        <span className="font-bold text-xs text-slate-800">________________________</span>
                      </div>
                      <div className="flex justify-between items-center border-b-2 border-dashed border-black/40 pb-2">
                        <span className="font-black text-xs text-black uppercase">🏫 Centro Educativo:</span>
                        <span className="font-bold text-xs text-slate-800">________________________</span>
                      </div>
                      <div className="flex justify-between items-center border-b-2 border-dashed border-black/40 pb-2">
                        <span className="font-black text-xs text-black uppercase">📅 Data da Misión:</span>
                        <span className="font-bold text-xs text-slate-800">___ / ___ / 20__</span>
                      </div>
                      
                      {/* Código de barras estilo dossier confidencial */}
                      <div className="pt-1 flex items-center justify-between text-[8px] font-mono font-bold text-slate-700">
                        <span className="tracking-widest">||| | |||| || | ||| |||| |</span>
                        <span>EXPEDIENTE-GAL-2026</span>
                      </div>
                    </div>
                  </div>

                  {/* Pie Portada */}
                  <footer className="border-t-4 border-black pt-3 flex justify-between items-center text-xs font-black">
                    <span className="text-slate-800">EduGalicia Primaria LOMLOE</span>
                    <span className="bg-black text-white px-3.5 py-1.5 rounded-xl shadow-[3px_3px_0px_#000]">
                      3 Láminas de Contido A4 + Retos Gamificados
                    </span>
                  </footer>
                </div>
              </div>

              {/* LÁMINA 1: DASHBOARD */}
              <div className="sheet-page w-full flex justify-center">
                <SheetDashboardVisual
                  curso={curso}
                  materia={materia}
                  tema={tema}
                  data={data}
                />
              </div>

              {/* LÁMINA 2: MAPA CONCEPTUAL */}
              <div className="sheet-page w-full flex justify-center">
                <SheetConceptMap
                  curso={curso}
                  materia={materia}
                  tema={tema}
                  data={data}
                />
              </div>

              {/* LÁMINA 3: RETOS Y PREGUNTAS */}
              <div className="sheet-page w-full flex justify-center">
                <SheetChallenges
                  curso={curso}
                  materia={materia}
                  tema={tema}
                  data={data}
                />
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
