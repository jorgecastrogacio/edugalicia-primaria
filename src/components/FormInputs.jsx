import React from 'react';
import { CURRICULO_GALICIA } from '../data/curriculoGalicia';
import { CURRICULO_ESO } from '../data/curriculoESO';
import { BookOpen, GraduationCap, Layout, Sparkles, HelpCircle, Zap } from 'lucide-react';
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
  onSelectTemplate,
  etapa = 'primaria',
  onEtapaChange
}) {
  const isESO = etapa === 'eso';

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-5 space-y-5">
      {/* Cabecera de Sección con Selector de Etapa y Badge Normativo */}
      <div className="flex flex-col gap-3 pb-3 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg ${isESO ? 'bg-indigo-100 text-indigo-700' : 'bg-blue-50 text-blue-600'} flex items-center justify-center font-bold text-sm`}>
              1
            </div>
            <h2 className="font-semibold text-slate-800 text-base">Parámetros del Material</h2>
          </div>
          <span className={`text-[11px] px-2.5 py-1 rounded-full font-bold transition ${
            isESO 
              ? 'bg-indigo-50 text-indigo-800 border border-indigo-200' 
              : 'bg-blue-50 text-blue-700'
          }`}>
            {isESO ? '⚡ LOMLOE ESO • DOG 184' : '🎒 LOMLOE Primaria • Dec. 155/2022'}
          </span>
        </div>

        {/* Selector de Etapa Segmentado */}
        {onEtapaChange && (
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              type="button"
              onClick={() => onEtapaChange('primaria')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold transition ${
                !isESO
                  ? 'bg-white text-blue-800 shadow-sm border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>🎒</span>
              <span>Primaria (1º a 6º)</span>
            </button>
            <button
              type="button"
              onClick={() => onEtapaChange('eso')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold transition ${
                isESO
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>⚡</span>
              <span>1º e 2º de ESO</span>
              <span className="text-[9px] px-1 py-0.5 rounded bg-black/20 font-mono">MATES</span>
            </button>
          </div>
        )}
      </div>

      {/* Grid de Selectores Principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Selector de Curso */}
        <div>
          <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1.5">
            <GraduationCap className={`w-4 h-4 ${isESO ? 'text-indigo-600' : 'text-blue-600'}`} />
            <span>{isESO ? 'Curso de Secundaria' : 'Curso de Primaria'}</span>
          </label>
          {isESO ? (
            <select
              value={cursoId}
              onChange={(e) => setCursoId(e.target.value)}
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
              onChange={(e) => setCursoId(e.target.value)}
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
            <span>Asignatura</span>
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

      {/* Tema a estudiar con Autocomplete / Sugerencias */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
            <Sparkles className={`w-4 h-4 ${isESO ? 'text-indigo-500' : 'text-amber-500'}`} />
            <span>Tema a estudiar</span>
          </label>
          <span className="text-[11px] text-slate-400">
            {isESO ? 'Ej: "Números enteros y signos", "Teorema de Pitágoras"' : 'Ej: "Los ecosistemas", "Las fracciones"'}
          </span>
        </div>
        <input
          type="text"
          value={tema}
          onChange={(e) => setTema(e.target.value)}
          placeholder={isESO ? "Escribe un tema de matemáticas o haz clic en las sugerencias..." : "Escribe el tema o haz clic en las sugerencias abajo..."}
          className="w-full text-sm rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
        />

        {/* Sugerencias Rápidas del Currículo Gallego */}
        {temasSugeridos.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5 items-center">
            <span className="text-[11px] font-medium text-slate-500 mr-1">Sugerencias:</span>
            {temasSugeridos.slice(0, 5).map((t, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setTema(t)}
                className={`text-[11px] px-2.5 py-1 rounded-lg border transition ${
                  isESO
                    ? 'bg-indigo-50/60 hover:bg-indigo-100 text-indigo-800 border-indigo-200/60'
                    : 'bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-600 border-slate-200/60'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        )}

        {/* Plantillas Didácticas Rápidas 1-Clic */}
        {onSelectTemplate && (
          <div className="mt-3 pt-2.5 border-t border-slate-100">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1">
                <span>📚</span> Plantillas Modelo ({isESO ? 'Secundaria ESO' : 'Primaria'}):
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {isESO ? (
                <>
                  <button
                    type="button"
                    onClick={() => onSelectTemplate('enterosESO')}
                    className="text-[11px] font-bold bg-indigo-50 hover:bg-indigo-100 text-indigo-900 px-3 py-1.5 rounded-lg border border-indigo-300 transition flex items-center gap-1"
                  >
                    <span>⚡</span> 1º ESO: Enteiros e Signos Z
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectTemplate('ecuacionesESO')}
                    className="text-[11px] font-bold bg-amber-50 hover:bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg border border-amber-300 transition flex items-center gap-1"
                  >
                    <span>📐</span> 2º ESO: Ecuacións e Pitágoras
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => onSelectTemplate('ecosistemas')}
                    className="text-[11px] font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-lg border border-emerald-200 transition"
                  >
                    🌳 Ecosistemas
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectTemplate('fracciones')}
                    className="text-[11px] font-semibold bg-blue-50 hover:bg-blue-100 text-blue-800 px-2.5 py-1 rounded-lg border border-blue-200 transition"
                  >
                    🍕 Fracciones
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectTemplate('englishAdventure')}
                    className="text-[11px] font-semibold bg-amber-50 hover:bg-amber-100 text-amber-900 px-2.5 py-1 rounded-lg border border-amber-200 transition"
                  >
                    🇬🇧 English Adventure
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectTemplate('universo')}
                    className="text-[11px] font-semibold bg-purple-50 hover:bg-purple-100 text-purple-800 px-2.5 py-1 rounded-lg border border-purple-200 transition"
                  >
                    🚀 Sistema Solar
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Formato Deseado */}
      <div>
        <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-2">
          <Layout className={`w-4 h-4 ${isESO ? 'text-indigo-600' : 'text-blue-600'}`} />
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
                    ? isESO 
                      ? 'border-indigo-500 bg-indigo-50/60 ring-2 ring-indigo-500/20 shadow-sm'
                      : 'border-blue-500 bg-blue-50/60 ring-2 ring-blue-500/20 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/50'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{f.icon}</span>
                  <span className={`text-xs font-semibold ${isSelected ? (isESO ? 'text-indigo-900' : 'text-blue-900') : 'text-slate-800'}`}>
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
        className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white shadow-md active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 transition-all flex items-center justify-center gap-2 ${
          isESO
            ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-700 hover:to-purple-700'
            : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
        }`}
      >
        {isLoading ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>{isESO ? 'Consultando Decreto 156/2022 e maquetando KaTeX...' : 'Consultando Decreto 155/2022 y maquetando...'}</span>
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
