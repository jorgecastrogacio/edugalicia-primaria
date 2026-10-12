import React from 'react';

/**
 * Catálogo de Ilustraciones e Iconos SVG Puros (Zero dependencias externas, Zero CORS)
 * Diseñados para educación Primaria: coloridos, simpáticos, escalables y optimizados para impresión A4.
 */

export const ILLUSTRATIONS = {
  // 1. Gamificación e Insignias Infantiles
  trophy: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.45 1-1 1H7v4h10v-4h-2c-.55 0-1-.45-1-1v-2.34" />
      <path d="M6 4h12a2 2 0 0 1 2 2v3a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6V6a2 2 0 0 1 2-2Z" />
    </svg>
  ),
  starMedal: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l2.4 7.2h7.6l-6.1 4.5 2.3 7.3-6.2-4.6-6.2 4.6 2.3-7.3-6.1-4.5h7.6z" />
    </svg>
  ),
  rocket: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  detectiveBadge: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <path d="M11 8v6M8 11h6" />
    </svg>
  ),
  magicWand: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m19 2 2 2-14 14-2-2L19 2Z" />
      <path d="m15 6 1 1" />
      <path d="m12 3 1 1" />
      <path d="m20 11 1 1" />
      <path d="m9 18 1 1" />
      <path d="m5 22 1-1" />
    </svg>
  ),

  // 2. Naturaleza, Fragas y Ecosistemas Gallegos
  oakTree: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22v-8" />
      <path d="M8 22v-4" />
      <path d="M16 22v-4" />
      <path d="M12 14c-3.5 0-6-2.5-6-6a6 6 0 0 1 12 0c0 3.5-2.5 6-6 6z" />
      <path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </svg>
  ),
  fishWave: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 16c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1" />
      <path d="M18 6c-3-2-7-2-10 1-2 2-3 5-3 5s3 0 6-2 7-4 7-4z" />
      <circle cx="9" cy="8" r="1" fill="currentColor" />
      <path d="M18 6l4-2v6l-4-2" />
    </svg>
  ),
  leafEcology: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  ),

  // 3. Matemáticas, Geometría y Lógica Infantil
  fractionsPie: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2v10l7.07 7.07" />
      <path d="M12 12 4.93 4.93" />
    </svg>
  ),
  shapesGeometry: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 20h8L7 4z" />
      <rect x="14" y="10" width="7" height="10" rx="1" />
      <circle cx="17.5" cy="4.5" r="2.5" />
    </svg>
  ),
  calculatorBrain: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="16" height="20" x="4" y="2" rx="3" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M8 18h.01M12 18h.01" />
    </svg>
  ),

  // 4. Lengua, Creatividad e Historia
  bookQuill: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
      <path d="M6 6h10M6 10h10M6 14h6" />
    </svg>
  ),
  globeMap: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  ),

  // 5. Inglés y Vocabulario (Preposiciones, Calendario, Tiempo)
  calendar: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
    </svg>
  ),
  boxCatOn: (props) => (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="8" y="22" width="24" height="14" rx="2" className="fill-amber-100 stroke-amber-600" />
      {/* Objeto ON encima */}
      <circle cx="20" cy="14" r="6" className="fill-blue-200 stroke-blue-700" />
      <text x="20" y="17" fontSize="8" textAnchor="middle" fill="#1e3a8a" fontWeight="bold">ON</text>
    </svg>
  ),
  boxCatUnder: (props) => (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      {/* Mesa o caja arriba */}
      <rect x="8" y="8" width="24" height="10" rx="2" className="fill-amber-100 stroke-amber-600" />
      <line x1="12" y1="18" x2="12" y2="34" stroke="#d97706" strokeWidth="2.5" />
      <line x1="28" y1="18" x2="28" y2="34" stroke="#d97706" strokeWidth="2.5" />
      {/* Objeto UNDER debajo */}
      <circle cx="20" cy="27" r="5" className="fill-emerald-200 stroke-emerald-700" />
      <text x="20" y="29.5" fontSize="6.5" textAnchor="middle" fill="#065f46" fontWeight="bold">UNDER</text>
    </svg>
  ),
  boxCatBehind: (props) => (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      {/* Objeto BEHIND detrás */}
      <circle cx="26" cy="16" r="6" className="fill-purple-200 stroke-purple-700" />
      {/* Silla o caja delante */}
      <rect x="8" y="18" width="18" height="18" rx="2" className="fill-sky-200 stroke-sky-700" />
    </svg>
  ),
  boxCatBetween: (props) => (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="4" y="16" width="10" height="18" rx="2" className="fill-amber-100 stroke-amber-600" />
      <circle cx="20" cy="24" r="5" className="fill-rose-200 stroke-rose-700" />
      <rect x="26" y="16" width="10" height="18" rx="2" className="fill-amber-100 stroke-amber-600" />
    </svg>
  ),
  boxCatNextTo: (props) => (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="24" r="6" className="fill-amber-200 stroke-amber-700" />
      <rect x="22" y="14" width="14" height="20" rx="2" className="fill-emerald-200 stroke-emerald-700" />
    </svg>
  ),

  // 6. Astronomía y Ciencias (O Universo)
  solarSystem: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="4" fill="#fbbf24" stroke="#d97706" />
      <ellipse cx="12" cy="12" rx="10" ry="5" stroke="#94a3b8" strokeDasharray="2 2" />
      <circle cx="20" cy="14" r="1.5" fill="#38bdf8" />
    </svg>
  ),
  planetEarth: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" className="fill-blue-100 stroke-blue-600" />
      <path d="M12 3a9 9 0 0 0-4 1.5c1 1 2 2 2 3.5s-1.5 2-1.5 3.5c0 1.5 1 2.5 2.5 3s2.5 0 3-1.5" className="fill-emerald-400 stroke-emerald-700" />
    </svg>
  ),

  // 7. Personajes Kawaii Infantiles Neo-Brutalistas Universales
  kawaiiAnimalCell: (props) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M60 10C88 10 108 30 110 58C112 86 92 110 60 110C28 110 10 88 10 60C10 32 32 10 60 10Z" fill="#FCE7F3" stroke="#000000" strokeWidth="4" />
      <circle cx="35" cy="40" r="4" fill="#F472B6" />
      <circle cx="85" cy="80" r="3" fill="#F472B6" />
      <circle cx="60" cy="62" r="24" fill="#C084FC" stroke="#000000" strokeWidth="3" />
      <circle cx="53" cy="58" r="3.5" fill="#000000" />
      <circle cx="67" cy="58" r="3.5" fill="#000000" />
      <circle cx="54" cy="56.5" r="1" fill="#FFFFFF" />
      <circle cx="68" cy="56.5" r="1" fill="#FFFFFF" />
      <path d="M57 65C58.5 67 61.5 67 63 65" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="48" cy="62" rx="3" ry="1.5" fill="#F43F5E" opacity="0.6" />
      <ellipse cx="72" cy="62" rx="3" ry="1.5" fill="#F43F5E" opacity="0.6" />
      <rect x="24" y="68" width="16" height="8" rx="4" transform="rotate(-25 24 68)" fill="#FBBF24" stroke="#000000" strokeWidth="2" />
      <path d="M26 69L34 65" stroke="#000000" strokeWidth="1.5" />
    </svg>
  ),

  kawaiiPlantCell: (props) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="12" y="12" width="96" height="96" rx="18" fill="#DCFCE7" stroke="#000000" strokeWidth="4.5" />
      <rect x="18" y="18" width="84" height="84" rx="14" fill="#BBF7D0" stroke="#000000" strokeWidth="2.5" />
      <path d="M30 40C30 30 50 26 70 30C90 34 92 60 85 80C78 100 40 96 32 80C26 68 30 50 30 40Z" fill="#7DD3FC" stroke="#000000" strokeWidth="2.5" />
      <ellipse cx="32" cy="30" rx="7" ry="4.5" transform="rotate(20 32 30)" fill="#22C55E" stroke="#000000" strokeWidth="2" />
      <ellipse cx="88" cy="85" rx="7" ry="4.5" transform="rotate(-30 88 85)" fill="#22C55E" stroke="#000000" strokeWidth="2" />
      <circle cx="53" cy="54" r="3.5" fill="#000000" />
      <circle cx="67" cy="54" r="3.5" fill="#000000" />
      <circle cx="54" cy="52.5" r="1" fill="#FFFFFF" />
      <circle cx="68" cy="52.5" r="1" fill="#FFFFFF" />
      <path d="M57 61C58.5 64 61.5 64 63 61" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="48" cy="58" r="2.5" fill="#F43F5E" opacity="0.6" />
      <circle cx="72" cy="58" r="2.5" fill="#F43F5E" opacity="0.6" />
    </svg>
  ),

  kawaiiEarthGlobe: (props) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="50" cy="50" r="44" fill="#60A5FA" stroke="#000000" strokeWidth="4" />
      <path d="M22 36C28 32 40 38 42 46C44 54 34 60 26 56C18 52 16 40 22 36Z" fill="#4ADE80" stroke="#000000" strokeWidth="2" />
      <path d="M60 22C70 20 82 28 80 40C78 52 64 56 62 44C60 32 50 24 60 22Z" fill="#4ADE80" stroke="#000000" strokeWidth="2" />
      <path d="M48 68C58 64 74 72 70 82C66 92 50 88 44 82C38 76 38 72 48 68Z" fill="#4ADE80" stroke="#000000" strokeWidth="2" />
      <circle cx="44" cy="48" r="3.5" fill="#000000" />
      <circle cx="58" cy="48" r="3.5" fill="#000000" />
      <circle cx="45" cy="46.5" r="1" fill="#FFFFFF" />
      <circle cx="59" cy="46.5" r="1" fill="#FFFFFF" />
      <path d="M48 55C50 57.5 52 57.5 54 55" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),

  kawaiiSunHero: (props) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M50 4V16M50 84V96M4 50H16M84 50H96M18 18L26 26M74 74L82 82M18 82L26 74M74 26L82 18" stroke="#F59E0B" strokeWidth="5" strokeLinecap="round" />
      <circle cx="50" cy="50" r="32" fill="#FDE047" stroke="#000000" strokeWidth="4" />
      <circle cx="43" cy="47" r="3.5" fill="#000000" />
      <circle cx="57" cy="47" r="3.5" fill="#000000" />
      <circle cx="44" cy="45.5" r="1" fill="#FFFFFF" />
      <circle cx="58" cy="45.5" r="1" fill="#FFFFFF" />
      <path d="M47 55C49 58 51 58 53 55" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="36" cy="52" r="3" fill="#F43F5E" opacity="0.6" />
      <circle cx="64" cy="52" r="3" fill="#F43F5E" opacity="0.6" />
    </svg>
  ),

  // --- CATÁLOGO DE 8 MASCOTAS UNIVERSALES KAWAII ---
  // 1. Detective Sabueso / Lupa Mágica
  kawaiiDetective: (props) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Gorro de detective Sherlock */}
      <ellipse cx="60" cy="38" rx="34" ry="16" fill="#F59E0B" stroke="#000000" strokeWidth="4" />
      <path d="M30 42C30 24 90 24 90 42Z" fill="#D97706" stroke="#000000" strokeWidth="4" />
      <path d="M54 18L66 18" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
      <circle cx="60" cy="18" r="4" fill="#DC2626" stroke="#000000" strokeWidth="2" />
      {/* Cabeza sonriente */}
      <circle cx="60" cy="72" r="34" fill="#FED7AA" stroke="#000000" strokeWidth="4" />
      {/* Ojo izquierdo guiñando / normal */}
      <circle cx="48" cy="68" r="4.5" fill="#000000" />
      <circle cx="49.5" cy="66" r="1.5" fill="#FFFFFF" />
      {/* Gran lupa en ojo derecho */}
      <circle cx="74" cy="68" r="14" fill="#BAE6FD" stroke="#000000" strokeWidth="4" fillOpacity="0.75" />
      <circle cx="74" cy="68" r="6" fill="#000000" />
      <circle cx="76" cy="66" r="2" fill="#FFFFFF" />
      {/* Mango de la lupa */}
      <line x1="84" y1="78" x2="102" y2="96" stroke="#B45309" strokeWidth="6" strokeLinecap="round" />
      <line x1="84" y1="78" x2="102" y2="96" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
      {/* Sonrisa detective picarona */}
      <path d="M52 84C58 90 68 88 72 82" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
      {/* Mejillas */}
      <circle cx="40" cy="78" r="4" fill="#F43F5E" opacity="0.6" />
      <circle cx="82" cy="78" r="4" fill="#F43F5E" opacity="0.6" />
      {/* Insignia / Pajarita */}
      <path d="M52 102L68 112M68 102L52 112" stroke="#EF4444" strokeWidth="5" strokeLinecap="round" />
    </svg>
  ),

  // 2. Carballiño Sabio (Hoja de Roble Gallego con gafas)
  kawaiiLeaf: (props) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Cuerpo de hoja con lóbulos */}
      <path d="M60 12C78 22 98 42 92 70C86 96 68 108 60 114C52 108 34 96 28 70C22 42 42 22 60 12Z" fill="#4ADE80" stroke="#000000" strokeWidth="4.5" />
      {/* Nervios de la hoja */}
      <path d="M60 22V106M60 48L78 38M60 52L42 42M60 72L80 64M60 76L40 68" stroke="#15803D" strokeWidth="3" strokeLinecap="round" />
      {/* Gafas redondas de sabio */}
      <circle cx="48" cy="62" r="11" fill="#FEF08A" stroke="#000000" strokeWidth="3.5" />
      <circle cx="72" cy="62" r="11" fill="#FEF08A" stroke="#000000" strokeWidth="3.5" />
      <line x1="59" y1="62" x2="61" y2="62" stroke="#000000" strokeWidth="3.5" />
      {/* Ojitos dentro de las gafas */}
      <circle cx="48" cy="62" r="4" fill="#000000" />
      <circle cx="49.5" cy="60" r="1.5" fill="#FFFFFF" />
      <circle cx="72" cy="62" r="4" fill="#000000" />
      <circle cx="73.5" cy="60" r="1.5" fill="#FFFFFF" />
      {/* Sonrisa alegre */}
      <path d="M55 80C58 84 62 84 65 80" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
      {/* Bellotita compañera en la cabeza */}
      <ellipse cx="60" cy="18" rx="8" ry="6" fill="#B45309" stroke="#000000" strokeWidth="2.5" />
      <circle cx="60" cy="12" r="2" fill="#78350F" />
    </svg>
  ),

  // 3. Átomo Saltarín (Energía / Ciencias / Matemáticas)
  kawaiiAtom: (props) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Órbitas atómicas */}
      <ellipse cx="60" cy="60" rx="52" ry="18" transform="rotate(-30 60 60)" stroke="#38BDF8" strokeWidth="4" strokeDasharray="6 4" />
      <ellipse cx="60" cy="60" rx="52" ry="18" transform="rotate(30 60 60)" stroke="#A855F7" strokeWidth="4" strokeDasharray="6 4" />
      <ellipse cx="60" cy="60" rx="52" ry="18" transform="rotate(90 60 60)" stroke="#FBBF24" strokeWidth="4" strokeDasharray="6 4" />
      {/* Electrones orbitando */}
      <circle cx="20" cy="38" r="6" fill="#38BDF8" stroke="#000000" strokeWidth="2.5" />
      <circle cx="102" cy="42" r="6" fill="#A855F7" stroke="#000000" strokeWidth="2.5" />
      <circle cx="60" cy="112" r="6" fill="#FBBF24" stroke="#000000" strokeWidth="2.5" />
      {/* Núcleo Kawaii super feliz */}
      <circle cx="60" cy="60" r="28" fill="#F43F5E" stroke="#000000" strokeWidth="4" />
      {/* Ojitos brillantes */}
      <circle cx="51" cy="55" r="4.5" fill="#FFFFFF" />
      <circle cx="51" cy="55" r="3" fill="#000000" />
      <circle cx="52.5" cy="53.5" r="1" fill="#FFFFFF" />
      <circle cx="69" cy="55" r="4.5" fill="#FFFFFF" />
      <circle cx="69" cy="55" r="3" fill="#000000" />
      <circle cx="70.5" cy="53.5" r="1" fill="#FFFFFF" />
      {/* Sonrisa abierta kawaii */}
      <path d="M53 67C55 74 65 74 67 67Z" fill="#991B1B" stroke="#000000" strokeWidth="2.5" />
      {/* Mejillitas */}
      <circle cx="44" cy="62" r="3" fill="#FECDD3" />
      <circle cx="76" cy="62" r="3" fill="#FECDD3" />
    </svg>
  ),

  // 4. Libro Mágico Falante (Lenguas, Literatura, Historia)
  kawaiiBook: (props) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Páginas abiertas */}
      <path d="M16 38C38 32 60 38 60 48C60 38 82 32 104 38V96C82 90 60 96 60 104C60 96 38 90 16 96V38Z" fill="#FEF08A" stroke="#000000" strokeWidth="4.5" />
      {/* Tapa dura exterior */}
      <path d="M12 42C36 36 60 42 60 52C60 42 84 36 108 42V100C84 94 60 100 60 108C60 100 36 94 12 100V42Z" stroke="#000000" strokeWidth="4.5" />
      {/* Líneas de texto simpáticas en página izquierda */}
      <line x1="24" y1="52" x2="48" y2="52" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
      <line x1="24" y1="64" x2="48" y2="64" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
      <line x1="24" y1="76" x2="44" y2="76" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
      {/* Cara Kawaii en página derecha */}
      <circle cx="76" cy="62" r="4" fill="#000000" />
      <circle cx="77.5" cy="60" r="1.5" fill="#FFFFFF" />
      <circle cx="92" cy="62" r="4" fill="#000000" />
      <circle cx="93.5" cy="60" r="1.5" fill="#FFFFFF" />
      <path d="M80 72C83 76 87 76 90 72" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
      <circle cx="72" cy="68" r="3" fill="#F43F5E" opacity="0.6" />
      <circle cx="96" cy="68" r="3" fill="#F43F5E" opacity="0.6" />
      {/* Birrete de graduado en la esquina */}
      <path d="M48 20L60 14L72 20L60 26Z" fill="#1E293B" stroke="#000000" strokeWidth="3" />
      <path d="M54 23V30C54 33 66 33 66 30V23" fill="#1E293B" stroke="#000000" strokeWidth="2.5" />
      <line x1="60" y1="26" x2="74" y2="28" stroke="#EAB308" strokeWidth="2.5" />
    </svg>
  ),

  // 5. Microscopio Risón (Laboratorio / Ciencias de la Naturaleza)
  kawaiiMicroscope: (props) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Base pesada */}
      <rect x="26" y="98" width="68" height="14" rx="7" fill="#64748B" stroke="#000000" strokeWidth="4" />
      {/* Brazo curvo */}
      <path d="M74 98C88 90 92 60 82 46C76 38 66 38 60 44" stroke="#000000" strokeWidth="6" strokeLinecap="round" />
      {/* Tubo óptico e ocular */}
      <rect x="42" y="24" width="18" height="38" rx="5" transform="rotate(-15 42 24)" fill="#38BDF8" stroke="#000000" strokeWidth="4" />
      <rect x="36" y="16" width="22" height="10" rx="3" transform="rotate(-15 36 16)" fill="#0284C7" stroke="#000000" strokeWidth="3" />
      {/* Platina */}
      <rect x="34" y="74" width="36" height="8" rx="3" fill="#FCD34D" stroke="#000000" strokeWidth="3.5" />
      {/* Portaobxectos con chispa */}
      <rect x="40" y="70" width="24" height="4" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5" />
      {/* Cara Kawaii en el cuerpo del microscopio */}
      <circle cx="50" cy="44" r="3.5" fill="#000000" />
      <circle cx="58" cy="42" r="3.5" fill="#000000" />
      <path d="M52 50C54 53 58 52 59 49" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
      {/* Chispitas de descubrimiento */}
      <path d="M96 24L99 18L102 24L108 27L102 30L99 36L96 30L90 27Z" fill="#FBBF24" stroke="#000000" strokeWidth="1.5" />
    </svg>
  ),

  // 6. Planeta Terra con Gafas de Sol (Ciencias Sociales / Geografía / Ecosistema)
  kawaiiCoolEarth: (props) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Planeta azul */}
      <circle cx="60" cy="60" r="48" fill="#38BDF8" stroke="#000000" strokeWidth="4.5" />
      {/* Continentes gallegos y verdes */}
      <path d="M32 44C38 38 52 42 54 54C56 64 42 72 34 68C26 64 24 50 32 44Z" fill="#4ADE80" stroke="#000000" strokeWidth="3" />
      <path d="M72 28C84 26 98 36 94 50C90 64 74 68 70 54C68 40 60 30 72 28Z" fill="#4ADE80" stroke="#000000" strokeWidth="3" />
      <path d="M56 80C68 76 86 86 82 98C76 108 58 104 50 96C44 90 46 84 56 80Z" fill="#4ADE80" stroke="#000000" strokeWidth="3" />
      {/* Gafas de sol molonas Neo-Brutalistas */}
      <polygon points="34,50 56,50 52,66 38,66" fill="#000000" stroke="#000000" strokeWidth="2" />
      <polygon points="64,50 86,50 82,66 68,66" fill="#000000" stroke="#000000" strokeWidth="2" />
      <line x1="56" y1="54" x2="64" y2="54" stroke="#000000" strokeWidth="4" />
      <line x1="26" y1="52" x2="34" y2="52" stroke="#000000" strokeWidth="3" />
      <line x1="86" y1="52" x2="94" y2="52" stroke="#000000" strokeWidth="3" />
      {/* Brillo en las gafas */}
      <line x1="40" y1="54" x2="46" y2="62" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      <line x1="70" y1="54" x2="76" y2="62" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      {/* Sonrisa de crack */}
      <path d="M54 74C58 78 64 78 68 74" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" />
      {/* Signo de paz o pulgar arriba */}
      <circle cx="20" cy="76" r="8" fill="#FDE047" stroke="#000000" strokeWidth="3" />
      <text x="20" y="80" fontSize="10" textAnchor="middle" fontWeight="black" fill="#000">✌️</text>
    </svg>
  ),

  // 7. Dino Investigador (Historia, Prehistoria, Retos)
  kawaiiDino: (props) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Cuerpo y cola de dinosaurio bebé */}
      <path d="M30 64C30 40 50 24 72 24C86 24 98 32 98 48C98 56 92 62 86 64C94 74 96 90 84 100C72 108 50 106 38 98L16 104C14 102 18 90 24 84C20 78 30 70 30 64Z" fill="#A3E635" stroke="#000000" strokeWidth="4.5" />
      {/* Crestas dorsales */}
      <polygon points="48,22 54,12 60,22" fill="#FACC15" stroke="#000000" strokeWidth="2.5" />
      <polygon points="64,22 70,12 76,22" fill="#FACC15" stroke="#000000" strokeWidth="2.5" />
      <polygon points="28,40 20,34 26,48" fill="#FACC15" stroke="#000000" strokeWidth="2.5" />
      <polygon points="20,58 12,54 18,66" fill="#FACC15" stroke="#000000" strokeWidth="2.5" />
      {/* Barriga suave */}
      <path d="M50 72C50 60 74 60 76 74C78 88 64 98 50 94Z" fill="#FEF08A" stroke="#000000" strokeWidth="2.5" />
      {/* Ojito Kawaii enorme */}
      <circle cx="76" cy="42" r="7" fill="#000000" />
      <circle cx="78.5" cy="39.5" r="2.5" fill="#FFFFFF" />
      <circle cx="74" cy="44" r="1" fill="#FFFFFF" />
      {/* Sonrisa con dientito simpático */}
      <path d="M84 52C82 56 76 56 74 54" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
      <polygon points="78,54 81,58 83,54" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5" />
      {/* Patitas */}
      <rect x="42" y="98" width="12" height="14" rx="6" fill="#84CC16" stroke="#000000" strokeWidth="3.5" />
      <rect x="66" y="98" width="12" height="14" rx="6" fill="#84CC16" stroke="#000000" strokeWidth="3.5" />
      {/* Lápiz que sujeta con sus manitas */}
      <rect x="74" y="66" width="30" height="7" rx="2" transform="rotate(25 74 66)" fill="#F97316" stroke="#000000" strokeWidth="2" />
      <polygon points="102,79 110,83 105,75" fill="#FDE047" stroke="#000000" strokeWidth="1.5" />
    </svg>
  ),

  // 8. Robotito Galáctico (Tecnología, Matemáticas, Futuro)
  kawaiiRobot: (props) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Antena con bombillita parpadeante */}
      <line x1="60" y1="14" x2="60" y2="30" stroke="#000000" strokeWidth="4" />
      <circle cx="60" cy="14" r="7" fill="#EF4444" stroke="#000000" strokeWidth="3" />
      <circle cx="62" cy="12" r="2" fill="#FFFFFF" />
      {/* Cabeza cuadrada con esquinas redondeadas */}
      <rect x="30" y="30" width="60" height="42" rx="12" fill="#E2E8F0" stroke="#000000" strokeWidth="4.5" />
      {/* Orejitas de perno */}
      <rect x="22" y="44" width="8" height="14" rx="3" fill="#94A3B8" stroke="#000000" strokeWidth="3" />
      <rect x="90" y="44" width="8" height="14" rx="3" fill="#94A3B8" stroke="#000000" strokeWidth="3" />
      {/* Pantalla Visor */}
      <rect x="38" y="38" width="44" height="26" rx="8" fill="#0F172A" stroke="#000000" strokeWidth="2" />
      {/* Ojos digitales pixel/kawaii */}
      <rect x="46" y="44" width="8" height="10" rx="2" fill="#22C55E" />
      <rect x="66" y="44" width="8" height="10" rx="2" fill="#22C55E" />
      <path d="M54 58H66" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" />
      {/* Cuerpo */}
      <rect x="36" y="74" width="48" height="34" rx="10" fill="#CBD5E1" stroke="#000000" strokeWidth="4" />
      {/* Medidor de corazón / energía */}
      <circle cx="60" cy="90" r="10" fill="#F43F5E" stroke="#000000" strokeWidth="2.5" />
      <path d="M55 90H58L60 86L62 94L64 90H65" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Botoncitos de colores */}
      <circle cx="44" cy="90" r="3" fill="#FBBF24" stroke="#000000" strokeWidth="1.5" />
      <circle cx="76" cy="90" r="3" fill="#38BDF8" stroke="#000000" strokeWidth="1.5" />
    </svg>
  )
};

/**
 * Catálogo de las 8 Mascotas Universales Kawaii con nombres y frases de motivación infantil
 */
export const MASCOT_ROSTER = [
  {
    id: "detective",
    name: "Inspector Lupiña",
    role: "Axente Investigador",
    component: ILLUSTRATIONS.kawaiiDetective,
    badge: "🕵️ Sabuxo Curioso",
    color: "bg-amber-300",
    quote: "¡Seguide a pista do saber, ningún misterio resiste!"
  },
  {
    id: "leaf",
    name: "Carballiño Sabio",
    role: "Guardián da Natureza",
    component: ILLUSTRATIONS.kawaiiLeaf,
    badge: "🌿 Fraga Viva",
    color: "bg-emerald-300",
    quote: "¡Medra forte e aprende como as árbores dos nosos bosques!"
  },
  {
    id: "atom",
    name: "Átomo Faísca",
    role: "Enerxía e Ciencia",
    component: ILLUSTRATIONS.kawaiiAtom,
    badge: "⚡ Poder Atómico",
    color: "bg-rose-300",
    quote: "¡A curiosidade é a faísca que fai mover o mundo!"
  },
  {
    id: "book",
    name: "Tomo Parlante",
    role: "Mestre das Palabras",
    component: ILLUSTRATIONS.kawaiiBook,
    badge: "📖 Gran Saber",
    color: "bg-yellow-200",
    quote: "¡Cada páxina é unha porta aberta á gran aventura!"
  },
  {
    id: "microscope",
    name: "Microscopio Risón",
    role: "Científico de Laboratorio",
    component: ILLUSTRATIONS.kawaiiMicroscope,
    badge: "🔬 Ollar Máxico",
    color: "bg-sky-300",
    quote: "¡O que parece diminuto agocha universos xigantes!"
  },
  {
    id: "coolEarth",
    name: "Terra Molona",
    role: "Viaxeiro do Cosmos",
    component: ILLUSTRATIONS.kawaiiCoolEarth,
    badge: "🌍 Planeta Vivo",
    color: "bg-blue-300",
    quote: "¡Coidemos o noso fogar azul mentres o exploramos!"
  },
  {
    id: "dino",
    name: "Dino Crono",
    role: "Explorador da Historia",
    component: ILLUSTRATIONS.kawaiiDino,
    badge: "🦖 Paso Firme",
    color: "bg-lime-300",
    quote: "¡Da Prehistoria ao futuro, o coñecemento fai historia!"
  },
  {
    id: "robot",
    name: "Robo-Byte 3000",
    role: "Enxeñeiro do Futuro",
    component: ILLUSTRATIONS.kawaiiRobot,
    badge: "🤖 Lóxica Dixital",
    color: "bg-purple-300",
    quote: "¡Bip-bip! ¡Circuítos cargados ao 100% de ilusión!"
  }
];

/**
 * Función que asigna UNA de las 8 mascotas universales de forma inteligente y determinista.
 * NINGÚN tema quedará jamás vacío o sin mascota.
 */
export function getUniversalMascot(materia = "", tema = "") {
  const norm = (materia + " " + tema).toLowerCase();

  // 1. Detección por palabras clave directas
  if (norm.includes("célula") || norm.includes("organism") || norm.includes("laboratorio") || norm.includes("microscop") || norm.includes("química")) {
    return MASCOT_ROSTER[4]; // Microscopio Risón
  }
  if (norm.includes("natureza") || norm.includes("medio") || norm.includes("ecosistem") || norm.includes("seres vivos") || norm.includes("planta") || norm.includes("fraga") || norm.includes("árbore")) {
    return MASCOT_ROSTER[1]; // Carballiño Sabio
  }
  if (norm.includes("universo") || norm.includes("espazo") || norm.includes("xeografía") || norm.includes("continente") || norm.includes("clima") || norm.includes("auga") || norm.includes("terra")) {
    return MASCOT_ROSTER[5]; // Terra Molona
  }
  if (norm.includes("lingua") || norm.includes("lengua") || norm.includes("literatura") || norm.includes("poesía") || norm.includes("gramátic") || norm.includes("lectura") || norm.includes("inglés") || norm.includes("english")) {
    return MASCOT_ROSTER[3]; // Tomo Parlante
  }
  if (norm.includes("matemát") || norm.includes("cálculo") || norm.includes("número") || norm.includes("fracc") || norm.includes("xeometr") || norm.includes("tecnol") || norm.includes("robót")) {
    return MASCOT_ROSTER[7]; // Robo-Byte 3000
  }
  if (norm.includes("enerxía") || norm.includes("física") || norm.includes("átomo") || norm.includes("forza") || norm.includes("movemento") || norm.includes("luz")) {
    return MASCOT_ROSTER[2]; // Átomo Faísca
  }
  if (norm.includes("historia") || norm.includes("prehistoria") || norm.includes("idade media") || norm.includes("castro") || norm.includes("romanos") || norm.includes("antigo")) {
    return MASCOT_ROSTER[6]; // Dino Crono
  }
  if (norm.includes("misión") || norm.includes("detective") || norm.includes("reto") || norm.includes("investiga") || norm.includes("escape")) {
    return MASCOT_ROSTER[0]; // Inspector Lupiña
  }

  // 2. Determinista vía hash de la cadena para variedad infinita garantizada
  let hash = 0;
  for (let i = 0; i < norm.length; i++) {
    hash = (hash << 5) - hash + norm.charCodeAt(i);
    hash |= 0;
  }
  const index = Math.abs(hash) % MASCOT_ROSTER.length;
  return MASCOT_ROSTER[index];
}

/**
 * Función que selecciona el icono/ilustración más adecuado para el tema y materia
 */
export function getSubjectIllustration(materia = "", tema = "") {
  const mascot = getUniversalMascot(materia, tema);
  return mascot.component;
}

