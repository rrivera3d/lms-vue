import base from './base'

export default Object.assign({
  ...base}, {
  logo: {
    backgroundImage: 'url(/static/telus-logo.svg)',
    backgroundSize: 'auto 140%',
    backgroundPositionY: '-12px'
  },
  palette: {
    primary: {
      light: '#77429c',
      main: '#48166D',
      dark: '#1d0041',
      contrastText: '#fff'
    },
    secondary: {
      light: '#c0f972',
      main: '#8DC641',
      dark: '#5b9502',
      contrastText: '#FFF'
    },
    error: {
      light: '#ff793a',
      main: '#FF4200',
      dark: '#c30000',
      contrastText: '#fff'
    }
  }
})
