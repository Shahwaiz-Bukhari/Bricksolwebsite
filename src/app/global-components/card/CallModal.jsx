import React from "react";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Button,
  useMediaQuery,
} from "@mui/material";
import { WhatsApp, Call, Close } from "@mui/icons-material";
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

const CallModal = ({ open, onClose, handleCallOption }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "rgba(10, 20, 30, 0.95)",
          borderRadius: isMobile ? 1.5 : 3,
          p: isMobile ? 2 : 4,
          width: isMobile ? "90%" : 320,
          maxWidth: "95%",
          boxShadow: isMobile
            ? "0 0 12px rgba(0,255,255,0.2)"
            : "0 0 30px rgba(0, 255, 255, 0.3)",
          textAlign: "center",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 12,
            color: "rgba(0, 255, 255, 0.6)",
            transition: "all 0.3s ease",
            "&:hover": { color: "#00ffff", transform: "rotate(90deg)" },
          }}
        >
          <Close />
        </IconButton>

        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            color: "#08c2d6ff",
            mb: isMobile ? 1.5 : 3,
            fontWeight: 600,
            fontSize: isMobile ? "1rem" : "1.25rem",
            textShadow: "0 0 8px rgba(0,255,255,0.5)",
            letterSpacing: 0.5,
          }}
        >
          Choose Call Method
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? 1 : 2,
          }}
        >
          <Button
            onClick={() => handleCallOption("whatsapp")}
            fullWidth
            startIcon={<WhatsApp fontSize={isMobile ? "small" : "medium"} />}
            sx={{
              py: isMobile ? 0.9 : 1.3,
              fontSize: isMobile ? "0.85rem" : "1rem",
              bgcolor: "linear-gradient(135deg, #00ffcc 0%, #00bfa5 100%)",
              color: "#1c4f68ff",
              fontWeight: 600,
              borderRadius: isMobile ? 1.5 : 3,
              boxShadow: "0 0 12px rgba(0,255,204,0.3)",
              "&:hover": {
                bgcolor: "linear-gradient(135deg, #00e0ff 0%, #00bcd4 100%)",
                transform: "scale(1.05)",
                boxShadow: "0 0 20px rgba(0,255,255,0.5)",
              },
            }}
          >
            WhatsApp
          </Button>

          <Button
            onClick={() => handleCallOption("tel")}
            fullWidth
            startIcon={<Call fontSize={isMobile ? "small" : "medium"} />}
            sx={{
              py: isMobile ? 0.9 : 1.3,
              fontSize: isMobile ? "0.85rem" : "1rem",
              bgcolor: "linear-gradient(135deg, #00ffff 0%, #00bcd4 100%)",
              color: "#1c4f68ff",
              fontWeight: 600,
              borderRadius: isMobile ? 1.5 : 3,
              boxShadow: "0 0 12px rgba(0,255,255,0.3)",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 0 20px rgba(0,255,255,0.5)",
              },
            }}
          >
            Direct Call
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CallModal;
