import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

const SpiralBackground = () => {
  const [showGifs, setShowGifs] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGifs(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!showGifs) {
    return null;
  }

  return (
    <>
      {/* Right Spiral */}
      <Box
        component="img"
        src="/videos/spiral_right.gif"
        alt="Right Spiral"
        sx={{
          position: "absolute",
          top: "50%",
          right: { xs: "-70px", lg: 0 },
          transform: "translateY(-50%)",
          zIndex: 0,
          height: "100%",
          objectFit: "cover",
          mixBlendMode: "screen",
          opacity: 0.6,
          maxWidth: "100%",
          display: { xs: "none", lg: "block" },
          verticalAlign: "middle",
          pointerEvents: "none",
        }}
      />

      {/* Left Spiral */}
      <Box
        component="img"
        src="/videos/spiral_left.gif"
        alt="Left Spiral"
        sx={{
          position: "absolute",
          top: "50%",
          left: { xs: "-70px", lg: 0 },
          transform: "translateY(-50%)",
          zIndex: 0,
          height: "100%",
          objectFit: "cover",
          mixBlendMode: "screen",
          opacity: 0.6,
          maxWidth: "100%",
          display: { xs: "none", lg: "block" },
          verticalAlign: "middle",
          pointerEvents: "none",
        }}
      />
    </>
  );
};

export default SpiralBackground;
