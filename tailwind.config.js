/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        galicia: {
          blue: '#0072CE',
          lightblue: '#E0F2FE',
          gold: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        comic: ['"Comic Neue"', 'cursive', 'sans-serif']
      }
    },
  },
  safelist: [
    {
      pattern: /^(bg|text|border|ring)-(slate|gray|zinc|neutral|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900)/,
      variants: ['hover', 'focus']
    },
    {
      pattern: /^(grid-cols|col-span)-(1|2|3|4|5|6|7|8|9|10|11|12)/,
      variants: ['sm', 'md', 'lg']
    },
    {
      pattern: /^(rounded)-(none|sm|md|lg|xl|2xl|3xl|full)/,
    },
    {
      pattern: /^(shadow)-(none|sm|md|lg|xl|2xl|inner)/,
    },
    {
      pattern: /^rotate-(-?[0-9]|12|45|90|180)/,
    },
    {
      pattern: /^-?rotate-(1|2|3|6|12)/,
    },
    {
      pattern: /^(border)-(0|2|3|4|6|8|dashed|dotted|double)/,
    },
    {
      pattern: /^(p|px|py|pt|pb|pl|pr|m|mx|my|gap)-(0|0\.5|1|1\.5|2|2\.5|3|3\.5|4|5|6|8|10|12|16)/,
    },
    'sticky-note',
    'cloud-badge',
    'brutal-card',
    'brutal-card-sm',
    'brutal-card-lg',
    'shadow-[6px_6px_0px_0px_#000]',
    'shadow-[8px_8px_0px_0px_#000]',
    'shadow-[5px_5px_0px_#000]',
    'shadow-[4px_4px_0px_#000]',
    'shadow-[3px_3px_0px_#000]',
    'shadow-[2px_2px_0px_#000]',
    '-rotate-1',
    '-rotate-2',
    '-rotate-3',
    '-rotate-6',
    '-rotate-12',
    'rotate-1',
    'rotate-2',
    'rotate-3',
    'rotate-6',
    'rotate-12'
  ],
  plugins: [],
}
