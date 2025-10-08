import React from "react";
import { Box, Typography } from "@mui/material";

const products = [
  {
    company: "JIIC",
    title: "JUBAIL ISLAND",
    tag: "villas",
    img: "/images/metaverse.jpg",
  },
  {
    company: "SOBHA",
    title: "THE S TOWER",
    tag: "high-rise",
    img: "/images/mixed.jpg",
  },
  {
    company: "DAMAC",
    title: "CAVALLI TOWER",
    tag: "high-rise",
    img: "/images/goals/realestate/industry-real-estate-slide-4.webp",
  },
  {
    company: "EMAAR",
    title: "BURJ RESIDENCE",
    tag: "luxury",
    img: "/images/goals/gamification/cgp-slide-6.webp",
  },
];

const ProductShowcase = () => {
  return (
    <Box sx={{ width: "97%", bgcolor: "black", py: 8, px: 3, maxWidth: "1400px", mx:"auto" }}>
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          mb: 6,
          textTransform: "uppercase",
          letterSpacing: 3,
        }}
      >
        Our Products
      </Typography>

      {/* CSS Grid for layout */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr 1fr",
          },
          gap: 3,
        }}
      >
        {products.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              height: "400px",
              borderRadius: "16px",
              overflow: "hidden",
              cursor: "pointer",
              "&:hover .img": {
                transform: "scale(1.1)",
              },
            }}
          >
            {/* Background Image with Hover Scale */}
            <Box
              className="img"
              component="img"
              src={item.img}
              alt={item.title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.6s ease",
              }}
            />

            {/* Gradient Overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
              }}
            />

            {/* Text Content at Bottom */}
            <Box
              sx={{
                position: "absolute",
                bottom: 20,
                left: 20,
                right: 20,
                color: "white",
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{ letterSpacing: 2, opacity: 0.9 }}
              >
                {item.company}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  mt: 1,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ mt: 0.5, opacity: 0.8, fontStyle: "italic" }}
              >
                {item.tag}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProductShowcase;
