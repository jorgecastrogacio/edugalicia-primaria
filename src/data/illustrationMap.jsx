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

  // 7. Personajes Kawaii Infantiles Neo-Brutalistas (Con ojitos y sonrisas)
  kawaiiAnimalCell: (props) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Membrana flexible exterior */}
      <path d="M60 10C88 10 108 30 110 58C112 86 92 110 60 110C28 110 10 88 10 60C10 32 32 10 60 10Z" fill="#FCE7F3" stroke="#000000" strokeWidth="4" />
      {/* Citoplasma moteado */}
      <circle cx="35" cy="40" r="4" fill="#F472B6" />
      <circle cx="85" cy="80" r="3" fill="#F472B6" />
      {/* Núcleo con ojitos */}
      <circle cx="60" cy="62" r="24" fill="#C084FC" stroke="#000000" strokeWidth="3" />
      {/* Ojitos Kawaii */}
      <circle cx="53" cy="58" r="3.5" fill="#000000" />
      <circle cx="67" cy="58" r="3.5" fill="#000000" />
      <circle cx="54" cy="56.5" r="1" fill="#FFFFFF" />
      <circle cx="68" cy="56.5" r="1" fill="#FFFFFF" />
      {/* Sonrisa */}
      <path d="M57 65C58.5 67 61.5 67 63 65" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
      {/* Mejillas sonrosadas */}
      <ellipse cx="48" cy="62" rx="3" ry="1.5" fill="#F43F5E" opacity="0.6" />
      <ellipse cx="72" cy="62" rx="3" ry="1.5" fill="#F43F5E" opacity="0.6" />
      {/* Mitocondria simpática */}
      <rect x="24" y="68" width="16" height="8" rx="4" transform="rotate(-25 24 68)" fill="#FBBF24" stroke="#000000" strokeWidth="2" />
      <path d="M26 69L34 65" stroke="#000000" strokeWidth="1.5" />
    </svg>
  ),

  kawaiiPlantCell: (props) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Pared celular prismática rígida exterior */}
      <rect x="12" y="12" width="96" height="96" rx="18" fill="#DCFCE7" stroke="#000000" strokeWidth="4.5" />
      {/* Membrana interior */}
      <rect x="18" y="18" width="84" height="84" rx="14" fill="#BBF7D0" stroke="#000000" strokeWidth="2.5" />
      {/* Vacuola gigante con expresión contenta */}
      <path d="M30 40C30 30 50 26 70 30C90 34 92 60 85 80C78 100 40 96 32 80C26 68 30 50 30 40Z" fill="#7DD3FC" stroke="#000000" strokeWidth="2.5" />
      {/* Cloroplastos verdes felices */}
      <ellipse cx="32" cy="30" rx="7" ry="4.5" transform="rotate(20 32 30)" fill="#22C55E" stroke="#000000" strokeWidth="2" />
      <ellipse cx="88" cy="85" rx="7" ry="4.5" transform="rotate(-30 88 85)" fill="#22C55E" stroke="#000000" strokeWidth="2" />
      {/* Ojitos Kawaii */}
      <circle cx="53" cy="54" r="3.5" fill="#000000" />
      <circle cx="67" cy="54" r="3.5" fill="#000000" />
      <circle cx="54" cy="52.5" r="1" fill="#FFFFFF" />
      <circle cx="68" cy="52.5" r="1" fill="#FFFFFF" />
      {/* Sonrisa amplia */}
      <path d="M57 61C58.5 64 61.5 64 63 61" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
      {/* Mejillas */}
      <circle cx="48" cy="58" r="2.5" fill="#F43F5E" opacity="0.6" />
      <circle cx="72" cy="58" r="2.5" fill="#F43F5E" opacity="0.6" />
    </svg>
  ),

  kawaiiEarthGlobe: (props) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="50" cy="50" r="44" fill="#60A5FA" stroke="#000000" strokeWidth="4" />
      {/* Continentes */}
      <path d="M22 36C28 32 40 38 42 46C44 54 34 60 26 56C18 52 16 40 22 36Z" fill="#4ADE80" stroke="#000000" strokeWidth="2" />
      <path d="M60 22C70 20 82 28 80 40C78 52 64 56 62 44C60 32 50 24 60 22Z" fill="#4ADE80" stroke="#000000" strokeWidth="2" />
      <path d="M48 68C58 64 74 72 70 82C66 92 50 88 44 82C38 76 38 72 48 68Z" fill="#4ADE80" stroke="#000000" strokeWidth="2" />
      {/* Ojitos Kawaii */}
      <circle cx="44" cy="48" r="3.5" fill="#000000" />
      <circle cx="58" cy="48" r="3.5" fill="#000000" />
      <circle cx="45" cy="46.5" r="1" fill="#FFFFFF" />
      <circle cx="59" cy="46.5" r="1" fill="#FFFFFF" />
      <path d="M48 55C50 57.5 52 57.5 54 55" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),

  kawaiiSunHero: (props) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Rayos */}
      <path d="M50 4V16M50 84V96M4 50H16M84 50H96M18 18L26 26M74 74L82 82M18 82L26 74M74 26L82 18" stroke="#F59E0B" strokeWidth="5" strokeLinecap="round" />
      {/* Sol central */}
      <circle cx="50" cy="50" r="32" fill="#FDE047" stroke="#000000" strokeWidth="4" />
      {/* Ojitos y gafas o sonrisa */}
      <circle cx="43" cy="47" r="3.5" fill="#000000" />
      <circle cx="57" cy="47" r="3.5" fill="#000000" />
      <circle cx="44" cy="45.5" r="1" fill="#FFFFFF" />
      <circle cx="58" cy="45.5" r="1" fill="#FFFFFF" />
      <path d="M47 55C49 58 51 58 53 55" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="36" cy="52" r="3" fill="#F43F5E" opacity="0.6" />
      <circle cx="64" cy="52" r="3" fill="#F43F5E" opacity="0.6" />
    </svg>
  )
};

/**
 * Función que selecciona el icono/ilustración más adecuado para el tema y materia
 */
export function getSubjectIllustration(materia = "", tema = "") {
  const norm = (materia + " " + tema).toLowerCase();

  if (norm.includes("matemát") || norm.includes("fracc") || norm.includes("cálculo") || norm.includes("xeometr") || norm.includes("figura")) {
    return norm.includes("fracc") ? ILLUSTRATIONS.fractionsPie : ILLUSTRATIONS.shapesGeometry;
  }
  if (norm.includes("natura") || norm.includes("medio") || norm.includes("ecosistem") || norm.includes("animal") || norm.includes("seres vivos") || norm.includes("fraga")) {
    return norm.includes("rías") || norm.includes("mar") || norm.includes("pez") ? ILLUSTRATIONS.fishWave : ILLUSTRATIONS.oakTree;
  }
  if (norm.includes("social") || norm.includes("historia") || norm.includes("xeografía") || norm.includes("comunidade")) {
    return ILLUSTRATIONS.globeMap;
  }
  if (norm.includes("lingua") || norm.includes("lengua") || norm.includes("literatura") || norm.includes("ortograf")) {
    return ILLUSTRATIONS.bookQuill;
  }

  // Fallback simpático
  return ILLUSTRATIONS.rocket;
}
