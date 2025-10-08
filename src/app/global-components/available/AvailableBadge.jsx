import React from "react";
import { Box, Typography } from "@mui/material";

const AvailableBadge = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        borderRadius: { xs: "32px", lg: "1.66vw" },
        border: "1px solid",
        borderColor: "grey.500",
        px: { xs: "0.75rem", md: "1rem" }, 
        py: "6px", 
        pb: "4px", 
        width: "fit-content",
      }}
    >
      <Box
        component="span"
        sx={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "blue", 
        }}
      />
      <Typography variant="body2" sx={{ color: "text.primary" }}>
        Available
      </Typography>
    </Box>
  );
};

export default AvailableBadge;
