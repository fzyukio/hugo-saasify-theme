/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode toggling
  content: ["./layouts/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--colorPrimary-50)',
          100: 'var(--colorPrimary-100)',
          200: 'var(--colorPrimary-200)',
          300: 'var(--colorPrimary-300)',
          400: 'var(--colorPrimary-400)',
          500: 'var(--colorPrimary-500)',
          600: 'var(--colorPrimary-600)',
          700: 'var(--colorPrimary-700)',
          800: 'var(--colorPrimary-800)',
          900: 'var(--colorPrimary-900)',
        },
        text: {
          50: 'var(--colorTextPrimary-50)',
          100: 'var(--colorTextPrimary-100)',
          200: 'var(--colorTextPrimary-200)',
          300: 'var(--colorTextPrimary-300)',
          400: 'var(--colorTextPrimary-400)',
          500: 'var(--colorTextPrimary-500)',
          600: 'var(--colorTextPrimary-600)',
          700: 'var(--colorTextPrimary-700)',
          800: 'var(--colorTextPrimary-800)',
          900: 'var(--colorTextPrimary-900)',
        },
        bg: {
          50: 'var(--colorBgPrimary-50)',
          100: 'var(--colorBgPrimary-100)',
          200: 'var(--colorBgPrimary-200)',
          300: 'var(--colorBgPrimary-300)',
          400: 'var(--colorBgPrimary-400)',
          500: 'var(--colorBgPrimary-500)',
          600: 'var(--colorBgPrimary-600)',
          700: 'var(--colorBgPrimary-700)',
          800: 'var(--colorBgPrimary-800)',
          900: 'var(--colorBgPrimary-900)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
