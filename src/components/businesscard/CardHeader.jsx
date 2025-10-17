import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

const CardHeader = ({ hovered, cardData, theme }) => (
  <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3, gap: 2 }}>
    <Avatar
      src={cardData.avatar}
      sx={{
        width: 88,
        height: 88,
        border: "3px solid rgba(255,255,255,0.15)",
        boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
        transform: hovered ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.4s ease",
      }}
    />
    <Box sx={{ flex: 1, pt: 0.5 }}>
      <Typography variant="h5" sx={{ color: "#fff", fontWeight: 700 }}>
        {cardData.name}
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: theme.palette.secondary.main, fontWeight: 500 }}
      >
        {cardData.title}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}
      >
        {cardData.company}
      </Typography>
    </Box>
  </Box>
);

export default CardHeader;
