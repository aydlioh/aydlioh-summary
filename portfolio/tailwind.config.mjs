/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      colors: {
        heading: '#444',
        primary: '#333',
        secondary: 'rgba(0,0,0,0.6)',
        accent: '#007DFF',
      },
      fontFamily: {
        jb_mono: ['JetBrains Mono'],
      },
    },
  },
	plugins: [],
}
