/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        term: {
          bg: '#0b1120',
          panel: '#0f172a',
          bar: '#1e293b',
          line: '#334155',
          text: '#e2e8f0',
          bright: '#f8fafc',
          muted: '#94a3b8',
          teal: '#5eead4',
          violet: '#a78bfa',
          rose: '#fb7185',
          amber: '#fbbf24',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
