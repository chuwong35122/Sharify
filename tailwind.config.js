module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  mode: 'jit',
  theme: {
    colors: {
      green: '#1DB954',
      black: '#191414',
      orange: '##ff8f00',
      blue: '#2941ab',
      white: '#f5f5f5',
    },
    text: {
      white: '#f5f5f5',
      orange: '##ff8f00',
      blue: '#2941ab'
    }
  }
}