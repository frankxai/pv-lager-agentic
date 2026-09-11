import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#05070B',
          900: '#080C14',
          800: '#0F172A',
          700: '#1E293B',
        },
        solar: {
          300: '#FDE68A',
          400: '#F59E0B',
          500: '#D4AF37',
          600: '#B48E28',
        },
        gold: {
          300: '#FDE68A',
          400: '#F59E0B',
          500: '#D4AF37',
          600: '#B48E28',
        },
        emerald: {
          400: '#34D399',
          500: '#10B981',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        heading: ['Outfit', 'Inter', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
