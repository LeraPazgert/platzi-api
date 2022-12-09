import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          height: '80px',
          backgroundColor: '#6B99C3',
        },
        message: {
          fontFamily: 'Dosis, sans-serif',
          fontSize: '20px',
        },
      },
    },
    MuiMobileStepper: {
      styleOverrides: {
        dotActive: {
          backgroundColor: '#6f6c6c',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontFamily: 'Dosis, sans-serif',
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontFamily: 'Dosis, sans-serif',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          fontFamily: 'Dosis, sans-serif',
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
        select: {
          display: 'none',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          fontSize: '15px',
          fontWeight: 300,
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#d6c5ad',
      light: '#bac7d1',
      dark: '#8396b1',
    },
    secondary: {
      main: '#6B99C3',
      light: '#cfcfcf',
      dark: '#022E66',
    },
    info: {
      main: '#d4ba9a',
      light: '#d7cdbf',
      dark: '#1d2941',
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
