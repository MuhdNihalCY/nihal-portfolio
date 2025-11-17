/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Minimal professional dark theme
        'dark-bg': '#0d0d0d',
        'dark-surface': '#151515',
        'dark-elevated': '#1a1a1a',
        'dark-card': '#1f1f1f',
        'accent-primary': '#60a5fa', // Blue color - rgb(96, 165, 250)
        'accent-secondary': '#818cf8',
        'accent-tertiary': '#a78bfa',
        'accent-success': '#34d399',
        'accent-warning': '#fbbf24',
        'accent-error': '#f87171',
        'text-primary': '#fafafa',
        'text-secondary': '#d4d4d4',
        'text-muted': '#9ca3af',
        'border-primary': '#262626',
        'border-accent': '#3a3a3a',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Courier New', 'monospace'],
        'sans': ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'typewriter': 'typewriter 3s steps(40) 1s 1 normal both',
        'blink': 'blink 1s steps(2) infinite',
        'scanline': 'scanline 8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glow: {
          '0%': { textShadow: '0 0 5px rgba(96, 165, 250, 0.3)' },
          '100%': { textShadow: '0 0 20px rgba(96, 165, 250, 0.5), 0 0 30px rgba(129, 140, 248, 0.3)' },
        },
      },
    },
  },
  plugins: [],
}

