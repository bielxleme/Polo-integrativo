/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        linen: {
          50: '#FAF7F2',
          100: '#F3EDE2',
          200: '#E6DBC8',
        },
        sage: {
          50: '#F2F6F3',
          100: '#E3ECE5',
          500: '#5F7464',
          600: '#4B5E50',
          700: '#3A4A3E',
        },
        terracotta: {
          400: '#A46D52',
          500: '#8C583E',
          700: '#5A3626',
          900: '#3D251B',
        },
        champagne: {
          300: '#E5CFA8',
          400: '#C8A97E',
          500: '#B08D5B',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
