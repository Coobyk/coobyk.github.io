/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'color-text': '#e4d1ff',
      'color-background': '#0c0a10',
      'color-primary': '#b380ff',
      'color-secondary': '#8893f7',
      'color-accent': '#ff85fd'
    },
    fontFamily: {
      'mono': ['JetBrains Mono', 'monospace'],
      'sans': ['Noto Sans', 'sans-serif'],
      'serif': ['Latin Modern Roman', 'Noto Serif', 'serif']
    },
    extend: {},
  },
  plugins: [
    require('@designbycode/tailwindcss-text-shadow')
  ]
}