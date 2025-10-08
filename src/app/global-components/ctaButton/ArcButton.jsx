import React from "react";
import { Box, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import arcHoverStyles from "../../../styles/buttonHover";

const ArcButton = ({ text = "Click Me", onClick }) => (
  
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        position: "relative", 
        overflow: "hidden",   
        backgroundColor: "#1A5CFF",
        textTransform: "none",
        borderRadius: "12px",
        fontSize: { xs: "0.85rem", md: "1rem" },
        px: { xs: 2.5, md: 3 },
        py: 1.2,
        fontWeight: 400,
        boxShadow: "none",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: "#1450E6",
          boxShadow: "0px 6px 12px rgba(26, 92, 255, 0.3)",
          transform: "scale(1.05)",
        },
        ...arcHoverStyles, 
      }}
      endIcon={
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <ArrowForward sx={{marginTop: "10px"}}/>
        </Box>
      }
    >
      <Box sx={{ position: "relative", zIndex: 2 }}>
        {text}
      </Box>
    </Button>
);

export default ArcButton;
