import React from "react";
import { IconButton, Box } from "@mui/material";

const HamburgerMenu = ({ isOpen, toggle }) => {
  return (
    <IconButton
      onClick={toggle}
      sx={{
        display: { xs: "flex", md: "none" },
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
        width: "40px",
        height: "40px",
        zIndex: 1300,
      }}
    >
      <Box
        sx={{
          width: "24px",
          height: "2px",
          backgroundColor: "white",
          transform: isOpen ? "rotate(45deg) translateY(10px)" : "none",
          transition: "transform 0.3s",
        }}
      />
      <Box
        sx={{
          width: "24px",
          height: "2px",
          backgroundColor: "white",
          opacity: isOpen ? 0 : 1,
          transition: "opacity 0.3s",
        }}
      />
      <Box
        sx={{
          width: "24px",
          height: "2px",
          backgroundColor: "white",
          transform: isOpen ? "rotate(-45deg) translateY(-10px)" : "none",
          transition: "transform 0.3s",
        }}
      />
    </IconButton>
  );
};

export default HamburgerMenu;
