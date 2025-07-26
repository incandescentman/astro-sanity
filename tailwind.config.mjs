import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: '1.25rem', // px-5 equivalent
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1242px', // Match exact Sanity blog width
        '2xl': '1242px', // Keep same for larger screens
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
};