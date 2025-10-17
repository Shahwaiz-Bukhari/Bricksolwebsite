import React from "react";
import { Box, IconButton } from "@mui/material";

const SocialIcons = ({ socialIcons, activeIcon, setActiveIcon }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      gap: 2,
      pt: 2,
      borderTop: "1px solid rgba(255,255,255,0.1)",
    }}
  >
    {socialIcons.map(({ Icon, key, color, url, onClick }) => (
      <IconButton
        key={key}
        component={!onClick ? "a" : "button"}
        href={!onClick ? url : undefined}
        onClick={onClick}
        target={!onClick ? "_blank" : undefined}
        onMouseEnter={() => setActiveIcon(key)}
        onMouseLeave={() => setActiveIcon(null)}
        sx={{
          backgroundColor:
            activeIcon === key ? color : "rgba(255,255,255,0.05)",
          color: activeIcon === key ? "#000" : "rgba(255,255,255,0.7)",
          transition: "all 0.3s ease",
          transform:
            activeIcon === key ? "translateY(-3px) scale(1.1)" : "translateY(0)",
          "&:hover": { backgroundColor: color, color: "#000" },
        }}
      >
        <Icon sx={{ fontSize: 22 }} />
      </IconButton>
    ))}
  </Box>
);

export default SocialIcons;
