import React, { useState, useMemo } from 'react';
import { CURRICULO_GALICIA } from '../data/curriculoGalicia';
import { CURRICULO_ESO } from '../data/curriculoESO';
import { BookOpen, GraduationCap, Layout, Sparkles, ChevronDown, Check, X } from 'lucide-react';
import { FORMATOS_DISPONIBLES } from '../data/formatos';

export default function FormInputs({
  cursoId,
  setCursoId,
  materiaId,
  setMateriaId,
  tema,
  setTema,
  formato,
  setFormato,
  onGenerar,
  isLoading,
  temasSugeridos = [],
  etapa = 'primaria',
  onEtapaChange
}) {
  const isESO = etapa === 'eso';
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Parsear los temas seleccionados a partir del string actual separado por comas
  const selectedTopicsList = useMemo(() => {
    if (!tema) return [];
    return tema.split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
  }, [tema]);

  const isTopicSelected = (topic) => {
    const tClean = topic.trim().toLowerCase();
    return selectedTopicsList.includes(tClean);
  };

  const handleToggleTopic = (topic) => {
    const tClean = topic.trim();
    const currentList = tema
      ? tema.split(',').map(s => s.trim()).filter(Boolean)
      : [];
    
    const existsIndex = currentList.findIndex(item => item.toLowerCase() === tClean.toLowerCase());
    let updated;
    if (existsIndex >= 0) {
      updated = currentList.filter((_, idx) => idx !== existsIndex);
    } else {
      updated = [...currentList, tClean];
    }
    setTema(updated.join(', '));
  };

  const handleClearTopics = () => {
    setTema('');
  };

  // Manejar cambio de curso con blindaje de ciclo en Primaria
  const handleCursoChange = (newCursoId) => {
    setCursoId(newCursoId);
    if (!isESO) {
      const cObj = CURRICULO_GALICIA.cursos.find(c => c.id === newCursoId);
      if (cObj) {
        const mat = CURRICULO_GALICIA.materias.find(m => m.id === materiaId);
        if (!mat || !mat.ciclos[cObj.ciclo]) {
          // Si la materia actual no existe en el nuevo ciclo (ej. Valores Cívicos), cambiar a matemáticas
          setMateriaId('matematicas');
        }
      }
    }
  };

  const selectedCount = useMemo(() => {
    return temasSugeridos.filter(t => isTopicSelected(t)).length;
  }, [temasSugeridos, selectedTopicsList]);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-5 space-y-5">
      {/* 1. HERO SELECTOR DE ETAPA: BOTONES GIGANTES DE ALTO CONTRASTE */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
            1. Selecciona Etapa Educativa Oficial
          </label>
          <span className="text-[10px] font-bold text-slate-400">
            DOG Galicia
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Botón Primaria */}
          <button
            type="button"
            onClick={() => onEtapaChange && onEtapaChange('primaria')}
            className={`p-3.5 sm:p-4 rounded-2xl text-left border-2 transition-all flex flex-col justify-between cursor-pointer ${
              !isESO
                ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-blue-400 shadow-md ring-4 ring-blue-500/20 scale-[1.01]'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200 shadow-xs opacity-75 hover:opacity-100'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="text-2xl select-none">🎒</span>
                <span className="font-black text-sm sm:text-base tracking-tight uppercase">Primaria</span>
              </div>
              {!isESO && (
                <span className="text-[10px] bg-white text-blue-700 font-black px-2 py-0.5 rounded-full uppercase shadow-xs">
                  Activo ✓
                </span>
              )}
            </div>
            <p className={`text-[11px] leading-tight ${!isESO ? 'text-blue-100 font-medium' : 'text-slate-500'}`}>
              1º a 6º de Primaria • Dec. 155/2022
            </p>
          </button>

          {/* Botón Secundaria (ESO) */}
          <button
            type="button"
            onClick={() => onEtapaChange && onEtapaChange('eso')}
            className={`p-3.5 sm:p-4 rounded-2xl text-left border-2 transition-all flex flex-col justify-between cursor-pointer ${
              isESO
                ? 'bg-gradient-to-br from-indigo-700 via-purple-700 to-violet-800 text-white border-purple-400 shadow-md ring-4 ring-purple-500/20 scale-[1.01]'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200 shadow-xs opacity-75 hover:opacity-100'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="text-2xl select-none">⚡</span>
                <span className="font-black text-sm sm:text-base tracking-tight uppercase">Secundaria</span>
              </div>
              {isESO && (
                <span className="text-[10px] bg-white text-purple-800 font-black px-2 py-0.5 rounded-full uppercase shadow-xs">
                  Activo ✓
                </span>
              )}
            </div>
            <div className="flex items-center justify-between">
              <p className={`text-[11px] leading-tight ${isESO ? 'text-purple-100 font-medium' : 'text-slate-500'}`}>
                1º e 2º ESO • Cyber-Math DOG 184
              </p>
              <span className={`text-[9px] font-mono font-bold px-1.5 py-0.2 rounded ${
                isESO ? 'bg-black/30 text-white' : 'bg-slate-200 text-slate-700'
              }`}>
                MATES
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* 2. CASCADA DE CURSO Y ASIGNATURA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
        {/* Selector de Curso */}
        <div>
          <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1.5">
            <GraduationCap className={`w-4 h-4 ${isESO ? 'text-indigo-600' : 'text-blue-600'}`} />
            <span>2. Curso Oficial</span>
          </label>
          {isESO ? (
            <select
              value={cursoId}
              onChange={(e) => handleCursoChange(e.target.value)}
              className="w-full text-sm font-medium rounded-xl border border-indigo-200 bg-indigo-50/30 px-3.5 py-2.5 text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
            >
              {CURRICULO_ESO.cursos.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label} ({c.idade})
                </option>
              ))}
            </select>
          ) : (
            <select
              value={cursoId}
              onChange={(e) => handleCursoChange(e.target.value)}
              className="w-full text-sm font-medium rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-slate-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
            >
              {CURRICULO_GALICIA.cursos.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label} ({c.cicloLabel})
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Selector de Asignatura */}
        <div>
          <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1.5">
            <BookOpen className={`w-4 h-4 ${isESO ? 'text-indigo-600' : 'text-blue-600'}`} />
            <span>3. Asignatura</span>
          </label>
          {isESO ? (
            <div className="relative">
              <select
                value="matematicas"
                disabled
                className="w-full text-sm font-bold rounded-xl border border-indigo-200 bg-indigo-50/50 px-3.5 py-2.5 text-indigo-900 cursor-not-allowed appearance-none"
              >
                <option value="matematicas">📐 Matemáticas (Cyber-Math)</option>
              </select>
              <span className="absolute right-3 top-2.5 text-[10px] bg-indigo-200 text-indigo-800 font-bold px-1.5 py-0.5 rounded">
                DOG 184
              </span>
            </div>
          ) : (
            <select
              value={materiaId}
              onChange={(e) => setMateriaId(e.target.value)}
              className="w-full text-sm font-medium rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-slate-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
            >
              {CURRICULO_GALICIA.materias
                .filter((m) => {
                  const cObj = CURRICULO_GALICIA.cursos.find((c) => c.id === cursoId);
                  return cObj && m.ciclos[cObj.ciclo];
                })
                .map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.icono} {m.nombre}
                  </option>
                ))}
            </select>
          )}
        </div>
      </div>

      {/* 3. DESPLEGABLE MULTISELECCIÓN DE TEMAS + ENTRADA LIBRE */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
            <Sparkles className={`w-4 h-4 ${isESO ? 'text-indigo-500' : 'text-amber-500'}`} />
            <span>4. Temas a Estudiar (Oficiais ou Personalizados)</span>
          </label>
          {tema && (
            <button
              type="button"
              onClick={handleClearTopics}
              className="text-[10px] text-slate-400 hover:text-rose-600 font-bold flex items-center gap-0.5"
            >
              <X className="w-3 h-3" /> Limpar
            </button>
          )}
        </div>

        {/* Desplegable de Temas del Currículo */}
        {temasSugeridos.length > 0 && (
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-semibold transition cursor-pointer ${
                isDropdownOpen
                  ? isESO ? 'border-indigo-400 bg-indigo-50/70 text-indigo-900' : 'border-blue-400 bg-blue-50/70 text-blue-900'
                  : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
              }`}
            >
              <span className="flex items-center gap-2 truncate">
                <span>📚</span>
                <span className="truncate">
                  {selectedCount > 0
                    ? `${selectedCount} tema(s) seleccionado(s) do currículo oficial`
                    : `Despregar catálogo de temas oficiais (${temasSugeridos.length})`}
                </span>
              </span>
              <div className="flex items-center gap-2 shrink-0">
                {selectedCount > 0 && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    isESO ? 'bg-indigo-600 text-white' : 'bg-blue-600 text-white'
                  }`}>
                    {selectedCount}
                  </span>
                )}
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </div>
            </button>

            {/* Panel Desplegable de Opciones con Checkboxes */}
            {isDropdownOpen && (
              <div className="mt-1.5 p-2.5 bg-white border border-slate-200 rounded-xl shadow-xl max-h-56 overflow-y-auto space-y-1 z-30 animate-fadeIn">
                <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-100 px-1 text-[11px]">
                  <span className="text-slate-500 font-medium">Fai clic para engadir ou quitar temas:</span>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(false)}
                    className="text-slate-400 hover:text-slate-700 font-bold"
                  >
                    Pechar ✕
                  </button>
                </div>
                {temasSugeridos.map((t, idx) => {
                  const checked = isTopicSelected(t);
                  return (
                    <label
                      key={idx}
                      className={`flex items-start gap-2.5 p-2 rounded-lg text-xs cursor-pointer transition select-none ${
                        checked
                          ? isESO
                            ? 'bg-indigo-50 text-indigo-900 font-bold'
                            : 'bg-blue-50 text-blue-900 font-bold'
                          : 'hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => handleToggleTopic(t)}
                        className="mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="leading-snug">{t}</span>
                    </label>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Input Libre Sincronizado */}
        <input
          type="text"
          value={tema}
          onChange={(e) => setTema(e.target.value)}
          placeholder={
            isESO
              ? 'Ex: "Números enteiros e signos", ou selecciona no catálogo arriba...'
              : 'Ex: "Os ecosistemas de Galicia", ou selecciona no catálogo arriba...'
          }
          className="w-full text-sm rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
        />
        <p className="text-[11px] text-slate-400">
          💡 Podes combinar temas do desplegable separados por comas ou escribir calquera contido a medida.
        </p>
      </div>

      {/* 4. FORMATO DESEADO (6 TARJETAS ORDENADAS) */}
      <div>
        <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-2">
          <Layout className={`w-4 h-4 ${isESO ? 'text-indigo-600' : 'text-blue-600'}`} />
          <span>5. Formato Desexado</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {FORMATOS_DISPONIBLES.map((f) => {
            const isSelected = formato === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFormato(f.id)}
                className={`flex flex-col items-start p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? isESO
                      ? 'border-indigo-500 bg-indigo-50/70 ring-2 ring-indigo-500/20 shadow-sm'
                      : 'border-blue-500 bg-blue-50/70 ring-2 ring-blue-500/20 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/60'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-base select-none">{f.icon}</span>
                  <span className={`text-xs font-bold truncate ${
                    isSelected ? (isESO ? 'text-indigo-900' : 'text-blue-900') : 'text-slate-800'
                  }`}>
                    {f.label}
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 leading-tight line-clamp-2">
                  {f.desc}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. BOTÓN DE GENERACIÓN PRINCIPAL */}
      <button
        type="button"
        disabled={isLoading || !tema.trim()}
        onClick={onGenerar}
        className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white shadow-md active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 transition-all flex items-center justify-center gap-2 cursor-pointer ${
          isESO
            ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-700 hover:to-purple-700'
            : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
        }`}
      >
        {isLoading ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>{isESO ? 'Consultando DOG 156/2022 e maquetando KaTeX...' : 'Consultando Decreto 155/2022 e maquetando...'}</span>
          </>
        ) : (
          <>
            <Sparkles className="w-4 h-4" />
            <span>{isESO ? '⚡ Generar Material Cyber-Math A4' : 'Generar Material Didáctico A4'}</span>
          </>
        )}
      </button>
    </div>
  );
}
