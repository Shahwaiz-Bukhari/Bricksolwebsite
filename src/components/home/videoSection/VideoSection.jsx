import React from "react";
import { Box, Button } from "@mui/material";

const VideoSection = ({ onPlay }) => (
  <Box sx={{ gridColumn: { md: "1 / 3" }, alignSelf: "end" }}>
    <Box
      sx={{
        position: "relative",
        borderRadius: "16px",
        overflow: "hidden",
        height: { xs: 150, md: 280 },
      }}
    >
      {/* 🎞️ Background GIF */}
      <Box
        component="img"
        src="/videos/video.gif"
        alt="Background Animation"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "16px",
          zIndex: 0,
        }}
      />

      {/* Dark overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1,
          borderRadius: "16px",
        }}
      />

      {/* Center Play Button */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        <Button
          onClick={onPlay}
          sx={{
            width: { xs: 80, md: 120 },
            height: { xs: 80, md: 120 },
            borderRadius: "50%",
            backgroundColor: "transparent",
            padding: 0,
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)", 
            },
          }}
        >
          <img
            src="/images/video_play.webp"
            alt="Play"
            style={{
              width: "30%",
              height: "30%",
            }}
          />
        </Button>
      </Box>

    </Box>
  </Box>
);

export default VideoSection;
