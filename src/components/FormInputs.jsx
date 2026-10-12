import React from 'react';
import { CURRICULO_GALICIA } from '../data/curriculoGalicia';
import { BookOpen, GraduationCap, Layout, Sparkles, HelpCircle } from 'lucide-react';

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
  temasSugeridos = []
}) {
  const materiaSeleccionada = CURRICULO_GALICIA.materias.find(m => m.id === materiaId);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-5 space-y-5">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
            1
          </div>
          <h2 className="font-semibold text-slate-800 text-base">Parámetros del Material</h2>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-medium">
          LOMLOE Galicia 155/2022
        </span>
      </div>

      {/* Grid de Selectores Principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Selector de Curso */}
        <div>
          <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1.5">
            <GraduationCap className="w-4 h-4 text-blue-600" />
            <span>Curso de Primaria</span>
          </label>
          <select
            value={cursoId}
            onChange={(e) => setCursoId(e.target.value)}
            className="w-full text-sm font-medium rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-slate-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
          >
            {CURRICULO_GALICIA.cursos.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label} ({c.cicloLabel})
              </option>
            ))}
          </select>
        </div>

        {/* Selector de Asignatura */}
        <div>
          <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1.5">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>Asignatura</span>
          </label>
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
        </div>
      </div>

      {/* Tema a estudiar con Autocomplete / Sugerencias */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Tema a estudiar</span>
          </label>
          <span className="text-[11px] text-slate-400">Ej: "Los ecosistemas", "Las fracciones"</span>
        </div>
        <input
          type="text"
          value={tema}
          onChange={(e) => setTema(e.target.value)}
          placeholder="Escribe el tema o haz clic en las sugerencias abajo..."
          className="w-full text-sm rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
        />

        {/* Sugerencias Rápidas del Currículo Gallego */}
        {temasSugeridos.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5 items-center">
            <span className="text-[11px] font-medium text-slate-500 mr-1">Sugerencias:</span>
            {temasSugeridos.slice(0, 4).map((t, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setTema(t)}
                className="text-[11px] bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-600 px-2.5 py-1 rounded-lg border border-slate-200/60 transition"
              >
                {t}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Formato Deseado */}
      <div>
        <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-2">
          <Layout className="w-4 h-4 text-blue-600" />
          <span>Formato deseado</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
          {FORMATOS_DISPONIBLES.map((f) => {
            const isSelected = formato === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFormato(f.id)}
                className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'border-blue-500 bg-blue-50/60 ring-2 ring-blue-500/20 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/50'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{f.icon}</span>
                  <span className={`text-xs font-semibold ${isSelected ? 'text-blue-900' : 'text-slate-800'}`}>
                    {f.label}
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 leading-tight">
                  {f.desc}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Botón de Generación Principal */}
      <button
        type="button"
        disabled={isLoading || !tema.trim()}
        onClick={onGenerar}
        className="w-full py-3.5 px-4 rounded-xl font-semibold text-sm text-white shadow-md bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 transition-all flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>Consultando Decreto 155/2022 y maquetando...</span>
          </>
        ) : (
          <>
            <Sparkles className="w-4 h-4" />
            <span>Generar Material Didáctico A4</span>
          </>
        )}
      </button>
    </div>
  );
}
