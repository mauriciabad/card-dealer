import { createMuiTheme } from "@material-ui/core/styles";
import bgImage from "./assets/backgrounds/cheap_diagonal_fabric_green_4.png";

const webSafeFonts = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
]

// const roundedFonts = [
//   'Quicksand',
//   'Nunito Sans',
//   ...webSafeFonts,
// ].join(',');

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Catamaran',
      'Montserrat',
      ...webSafeFonts,
    ].join(','),
    body1: { fontWeight: 500 },
    body2: { fontWeight: 500 },
    h3: { fontWeight: 700 },
    h6: { fontWeight: 600 },
  },
  palette: {
    primary: {
      light: '#6f675f',
      main: '#4B4237',
      dark: '#342e26',
    },
    secondary: {
      light: '#ff6659',
      main: '#d32f2f',
      dark: '#9a0007',
    },
    background: {
      default: '#d9d9d9',
    }
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage:
            `url(${bgImage})`
        }
      }
    }
  }
});

export default theme;