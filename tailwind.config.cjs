/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#facc15',
        secondary: '#374151',
        pending: '#facc15',
        warning: '#f97316',
        inprogress: '#3b82f6',
        success: '#22c55e',
        error: '#ef4444',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #D00070, #210052)',
      },
    },
  },
  plugins: [],
};
