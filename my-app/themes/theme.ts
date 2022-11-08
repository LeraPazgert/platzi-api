import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiMobileStepper: {
      styleOverrides: {
        dotActive: {
          backgroundColor: '#6f6c6c',
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          overflow: 'hidden',
        },
        displayedRows: {
          display: 'none',
        },
        selectLabel: {
          display: 'none',
        },
        selectIcon: {
          display: 'none',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#F2ADC5',
      dark: '#D88BA9',
    },
    secondary: {
      main: '#89DBEF',
      dark: '#16AFC4',
    },
    info: {
      main: '#d8d6d8',
      light: '#C9D1CF',
      dark: '#2F423F',
      contrastText: '#88A795',
    },
  },
  typography: {
    fontFamily: 'Dosis, sans-serif',
    overline: {
      fontFamily: 'Dosis, sans-serif',
      fontSize: '18px',
    },
    body1: {
      fontFamily: 'Libre Bodoni, serif',
      lineHeight: '25px',
      fontSize: '18px',
      color: '#2F423F',
    },
    body2: {
      fontFamily: 'Caveat, cursive',
    },
    caption: {
      fontFamily: 'Dosis, sans-serif',
      fontSize: '18px',
      fontWeight: 700,
    },
  },
});
