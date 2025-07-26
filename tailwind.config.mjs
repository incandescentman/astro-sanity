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
        'xl': '1282px', // 1242px + 40px padding = 1282px container
        '2xl': '1282px', // Keep same for larger screens
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      fontSize: {
        '4xl-custom': ['44px', '53px'], // Match Sanity blog exactly
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
};