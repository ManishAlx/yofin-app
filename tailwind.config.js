/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        onyx: {
          950: '#07080B',
          900: '#0D0F17',
          850: '#10131E',
          800: '#141724',
          700: '#1E2336',
          600: '#2A314A',
        },
        fintech: {
          emerald: '#00F5A0',
          'emerald-glow': 'rgba(0, 245, 160, 0.3)',
          teal: '#00D084',
          cyan: '#00D8F6',
          'cyan-glow': 'rgba(0, 216, 246, 0.3)',
          purple: '#8B5CF6',
          'purple-glow': 'rgba(139, 92, 246, 0.3)',
          amber: '#FFB800',
          'amber-glow': 'rgba(255, 184, 0, 0.3)',
          coral: '#FF4757',
          'coral-glow': 'rgba(255, 71, 87, 0.3)',
        }
      },
      boxShadow: {
        'glow-emerald': '0 0 25px rgba(0, 245, 160, 0.28)',
        'glow-cyan': '0 0 25px rgba(0, 216, 246, 0.28)',
        'glow-purple': '0 0 25px rgba(139, 92, 246, 0.28)',
        'glow-coral': '0 0 25px rgba(255, 71, 87, 0.28)',
        'glow-amber': '0 0 25px rgba(255, 184, 0, 0.28)',
        'glass': '0 12px 40px -10px rgba(0, 0, 0, 0.65)',
        'glass-light': '0 10px 30px -10px rgba(15, 23, 42, 0.08)',
      },
      backdropBlur: {
        xs: '2px',
        md: '12px',
        xl: '20px',
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.015)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
