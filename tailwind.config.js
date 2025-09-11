/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'space': ['"Space Grotesk"', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        'tech-blue': '#00d4ff',
        'tech-purple': '#8b5cf6',
        'tech-pink': '#f472b6',
        'tech-green': '#10b981',
        'tech-orange': '#f59e0b',
        'tech-cyan': '#06b6d4',
        'neon-blue': '#00ffff',
        'neon-purple': '#bf00ff',
        'neon-pink': '#ff1493',
        'bg-dark': '#030712',
        'bg-dark-secondary': '#111827',
        'bg-dark-tertiary': '#1f2937',
        'text-primary': '#f8fafc',
        'text-secondary': '#cbd5e1',
        'text-accent': '#00d4ff',
        'text-muted': '#64748b',
        'cyber-black': '#050A18',
        'cyber-blue': '#00BFFF',
        'cyber-pink': '#FF0080',
        'cyber-purple': '#6E00FF',
        'cyber-green': '#00FF9E',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        'secondary-gradient': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 50%, #667eea 100%)',
        'accent-gradient': 'linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%)',
        'neon-gradient': 'linear-gradient(135deg, #ff006e 0%, #8338ec 50%, #3a86ff 100%)',
        'cyber-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #191E2A 50%, #0A1A2F 100%)',
        'matrix-gradient': 'linear-gradient(180deg, rgba(0,255,140,0.15) 0%, rgba(0,0,0,0) 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        'grid-pattern': 'repeating-linear-gradient(0deg, rgba(0, 212, 255, 0.05) 0px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(0, 212, 255, 0.05) 0px, transparent 1px, transparent 40px)',
      },
      boxShadow: {
        'neon-sm': '0 2px 8px rgba(0, 212, 255, 0.15)',
        'neon-md': '0 8px 25px rgba(0, 212, 255, 0.25)',
        'neon-lg': '0 15px 35px rgba(0, 212, 255, 0.35)',
        'neon-xl': '0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.2)',
        'neon-inner': 'inset 0 0 10px rgba(0, 212, 255, 0.2)',
        'pink-glow': '0 0 15px rgba(244, 114, 182, 0.6)',
        'purple-glow': '0 0 15px rgba(139, 92, 246, 0.6)',
        'green-glow': '0 0 15px rgba(16, 185, 129, 0.6)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'type-cursor': 'type-cursor 1s infinite',
        'glitch': 'glitch 1s infinite',
        'cyber-pulse': 'cyber-pulse 2s infinite',
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'neuron-pulse': 'neuron-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0, 212, 255, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.8)' },
        },
        'type-cursor': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'cyber-pulse': {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'neuron-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.5' },
          '50%': { transform: 'scale(1.5)', opacity: '0' },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      backdropBlur: {
        'xs': '2px',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#f8fafc',
            a: {
              color: '#00d4ff',
              '&:hover': {
                color: '#00ffff',
              },
            },
            h1: {
              color: '#f8fafc',
            },
            h2: {
              color: '#f8fafc',
            },
            h3: {
              color: '#f8fafc',
            },
            h4: {
              color: '#f8fafc',
            },
            blockquote: {
              color: '#cbd5e1',
              borderLeftColor: '#1f2937',
            },
            code: {
              color: '#00d4ff',
              backgroundColor: 'rgba(0, 212, 255, 0.1)',
              padding: '0.25rem',
              borderRadius: '0.25rem',
              fontFamily: '"JetBrains Mono", monospace',
            },
            pre: {
              backgroundColor: '#111827',
              color: '#cbd5e1',
              fontFamily: '"JetBrains Mono", monospace',
            },
          },
        },
      },
    },
  },
  plugins: [],
}
