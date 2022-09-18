/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#0085FF',
        secondaryColor: '#48C4FA',
        thirdColor: '#2FC0AF',
        blankColor: '#FBF6F6',
      },
    },
  },
  plugins: [],
}
