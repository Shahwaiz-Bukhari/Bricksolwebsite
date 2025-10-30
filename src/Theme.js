import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0d1117", 
      light: "#161b22",
      dark: "#000000",
    },
    secondary: {
      main: "#00eaff", 
      light: "#33f3ff",
      dark: "#00bcd4",
    },
    background: {
      default: "#03080f",
      paper: "rgba(10, 15, 25, 0.95)",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255,255,255,0.7)",
      disabled: "rgba(255,255,255,0.4)",
    },
  },
  typography: {
    fontFamily: '"Outfit", "Poppins", "Inter", "Roboto", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: "0.5px",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "0.5px",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.4rem",
      letterSpacing: "0.3px",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      color: "rgba(255,255,255,0.85)",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 25,
  },
  shadows: Array(25).fill("0 0 20px rgba(0, 234, 255, 0.15)"), 
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(0, 234, 255, 0.3)",
          background: "linear-gradient(145deg, #050b12, #0a111a)",
          boxShadow: "0 0 30px rgba(0, 234, 255, 0.08)",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 0 40px rgba(0, 234, 255, 0.25)",
            transform: "translateY(-4px)",
          },
        },
      },
    },
  },
});

export default theme;
