import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    primary: {
      main: '#bfa14c', // Gold
    },
    secondary: {
      main: '#4a90e2', // Blue
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#a0a0a0',
    },
    action: {
      disabled: '#555',
      selected: '#2a2a2a',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    button: {
      textTransform: 'none',
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          '&.Mui-selected': {
            backgroundColor: '#bfa14c22', // Light gold highlight
          },
        },
        disabled: {
          textDecoration: 'line-through',
          color: '#777',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#4a90e233', // Light blue highlight
            '&:hover': {
              backgroundColor: '#4a90e244',
            },
          },
        },
      },
    },
  },
});

export default theme;