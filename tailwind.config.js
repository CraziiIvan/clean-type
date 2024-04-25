/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors : {
        "tone-100": "#000000",
        "tone-200": "#0e0e0e",
        "tone-300": "#1c1c1c",
        "tone-400": "#2b2b2b",
        "tone-500": "#393939",
        "tone-600": "#474747",
      }
    },
  },
  plugins: [],
}