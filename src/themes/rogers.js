import base from './base'

export default Object.assign({
  ...base}, {
  logo: {
    backgroundImage: 'url(/static/rogers-logo.svg)',
    backgroundSize: 'auto 200%',
    backgroundPositionY: '-17px'
  },
  palette: {
    primary: {
      light: '#ff6247',
      main: '#DA291C',
      dark: '#a00000',
      contrastText: '#fff'
    },
    secondary: {
      light: '#93f6ff',
      main: '#5DC3D5',
      dark: '#1c92a4',
      contrastText: '#fff'
    },
    error: {
      light: '#ff793a',
      main: '#FF4200',
      dark: '#c30000',
      contrastText: '#fff'
    }
  }
})
