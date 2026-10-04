/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#061B41',
          50: '#EEF2F9',
          100: '#D8E1F0',
          800: '#0A2557',
          900: '#061B41',
          950: '#041330',
        },
        lime: {
          DEFAULT: '#B8F500',
          300: '#D6FF66',
          400: '#C8FA33',
          500: '#B8F500',
          600: '#9CD100',
        },
        muted: '#718096',
        soft: '#F5F8FA',
      },
      fontFamily: {
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'ui-rounded', 'cursive'],
      },
      boxShadow: {
        card: '0 18px 40px -18px rgba(6,27,65,0.22)',
        float: '0 24px 60px -22px rgba(6,27,65,0.30)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        dash: {
          to: { strokeDashoffset: '0' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
