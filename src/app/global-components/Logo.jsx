import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Box
      component={Link}
      to="/"
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "flex-start", md: "flex-start" },
        gap: 2,
        textDecoration: "none",
        color: "inherit",
        width: "auto", 
      }}
    >
      <Box
        sx={{
          width: 150,
          height: 40,
          borderRadius: 1,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0, 
        }}
      >
        <img
          src="/images/logos/logo.webp"
          alt="Company Logo"
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Box>
    </Box>
  );
};

export default Logo;