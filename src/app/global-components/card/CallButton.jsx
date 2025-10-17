import React from "react";
import { Box, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

const CallButton = ({ onClick }) => (
  <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        px: 3,
        py: 1.5,
        background: "linear-gradient(135deg, #00ffff 0%, #00bcd4 100%)",
        color: "#000",
        borderRadius: 2,
        cursor: "pointer",
        fontWeight: 700,
        transition: "all 0.4s ease",
        boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "-100%",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent)",
          transition: "all 0.6s ease",
        },
        "&:hover::before": {
          left: "100%",
        },
        "&:hover": {
          transform: "translateX(6px) scale(1.05)",
          boxShadow: "0 0 25px rgba(0, 255, 255, 0.8)",
        },
      }}
    >
      <Typography
        variant="body2"
        sx={{ color: "#001f2e", fontWeight: 700, letterSpacing: 0.5 }}
      >
        Give a Call
      </Typography>
      <ArrowForward sx={{ fontSize: 18, color: "#001f2e" }} />
    </Box>
  </Box>
);

export default CallButton;
