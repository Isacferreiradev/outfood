module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        primaria: '#FF3B1F',
        destaque: '#FFB627',
        base: '#0D0D0D',
        card: '#1A1A1A',
        textoclaro: '#F5F5F5',
        textosec: '#B5B5B5',
        sucesso: '#00C853',
        borda: '#2A2A2A'
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      }
    }
  },
  corePlugins: {
    preflight: true
  }
};
