import base from './base'

export default Object.assign({
  ...base}, {
  logo: {
    backgroundImage: 'url(http://progressa.com/images/logo1-01.svg)'
  },
  palette: {
    primary: {
      light: '#5abcf4',
      main: '#008CC1',
      dark: '#005f90',
      contrastText: '#fff'
    },
    secondary: {
      light: '#a5f5ff',
      main: '#71c2df',
      dark: '#3b92ad',
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
