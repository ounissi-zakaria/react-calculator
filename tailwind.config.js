module.exports = {
  mode: 'jit',
  purge: ["index.html", "./src/**/*.{tsx, jsx, ts, js}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Orbitron', "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}
