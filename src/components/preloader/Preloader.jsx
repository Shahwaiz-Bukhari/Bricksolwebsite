import React, { useEffect, useState } from "react";
import { Box, Fade } from "@mui/material";

const Preloader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <Fade in={!fadeOut} timeout={1000} unmountOnExit>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          bgcolor: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1300,
        }}
      >
        <Box sx={{ position: "relative", width: 200, height: 200 }}>
          {/* Top Glow Arc */}
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              borderTopLeftRadius: "100%",
              borderTopRightRadius: "100%",
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              border: "10px solid #fff",
              borderBottom: "none",
              boxShadow: "0 0 60px #a47dff",
              animation: "glowPulse 2s infinite",
              background: "transparent",
            }}
          />
          {/* Bottom Reflection */}
          <Box
            sx={{
              position: "absolute",
              bottom: -100,
              width: "100%",
              height: 100,
              borderTopLeftRadius: "50%",
              borderTopRightRadius: "50%",
              background: "linear-gradient(to bottom, rgba(164,125,255,0.2), transparent)",
              transform: "scaleY(-1)",
              filter: "blur(4px)",
              animation: "rippleWave 3s infinite ease-in-out",
            }}
          />
        </Box>

        {/* Keyframes */}
        <style>
          {`
            @keyframes glowPulse {
              0% { box-shadow: 0 0 30px #a47dff; }
              50% { box-shadow: 0 0 70px #a47dff; }
              100% { box-shadow: 0 0 30px #a47dff; }
            }

            @keyframes rippleWave {
              0%, 100% { transform: scale(1) scaleY(-1); opacity: 0.6; }
              50% { transform: scale(1.05) scaleY(-1); opacity: 1; }
            }
          `}
        </style>
      </Box>
    </Fade>
  );
};

export default Preloader;
