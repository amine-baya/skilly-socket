module.exports = {
  important: true,
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        monts: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        pink: '#FC4D6D',
        silver_linear: '#ffffff66',
        silver_linear_end: '#ffffff1a',
        gradient_yellow: '#FDA02F',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
