import React, { useEffect, useState, useRef } from "react";
import { Box, Typography } from "@mui/material";

const marqueeItems = [
  "AI-Powered Solutions",
  "Smart Automation",
  "Metaverse Experiences",
  "Next-Gen Simulations",
  "Immersive Storytelling",
  "Intelligent Platforms",
  "Future Tech Innovations",
];

const ITEM_HEIGHT = 70;
const VISIBLE_COUNT = 5;
const TOTAL_ITEMS = marqueeItems.length;

const RotatingText = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [withTransition, setWithTransition] = useState(true);
  const containerRef = useRef(null);

  const extendedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeIndex >= TOTAL_ITEMS * 2) {
      setTimeout(() => {
        setWithTransition(false); 
        setActiveIndex((prev) => prev - TOTAL_ITEMS); 
      }, 700);
    } else {
      setWithTransition(true);
    }
  }, [activeIndex]);

  const translateY = -activeIndex * ITEM_HEIGHT;
  const centerIndex = Math.floor(VISIBLE_COUNT / 2);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        display: { xs: "none", md: "block" },
        overflow: "hidden",
        userSelect: "none",
        width: 400,
        height: ITEM_HEIGHT * VISIBLE_COUNT,
        perspective: "1200px",
        mx: "auto",
        left: "110px",
      }}
    >
      <Box
        sx={{
          transition: withTransition ? "transform 0.7s ease-out" : "none",
          transformStyle: "preserve-3d",
          transform: `translateY(${translateY}px)`,
        }}
      >
        {extendedItems.map((item, i) => {
          const relativePos = i - activeIndex;

          if (relativePos < 0 || relativePos >= VISIBLE_COUNT) {
            return (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  height: ITEM_HEIGHT,
                }}
              >
                <Typography variant="h6" sx={{ color: "grey.800" }}>
                  {item}
                </Typography>
              </Box>
            );
          }

          const offsetFromCenter = relativePos - centerIndex;
          const maxRotation = 30;
          const rotateX = (offsetFromCenter / centerIndex) * maxRotation;
          const scale = 1 - Math.abs(offsetFromCenter) * 0.08;
          const opacity = Math.max(0.25, 1 - Math.abs(offsetFromCenter) * 0.35);
          const isCenter = offsetFromCenter === 0;

          return (
            <Box
              key={i}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: ITEM_HEIGHT,
                transformOrigin: "center center",
                transform: `rotateX(${rotateX}deg) scale(${scale})`,
                opacity,
                transition: "all 0.7s ease-out",
              }}
            >
              <Typography
                variant={isCenter ? "h4" : "h6"}
                sx={{
                  fontWeight: isCenter ? 600 : 400,
                  color: isCenter ? "#C0C0C0" : "grey.600",
                  textAlign: "center",
                  lineHeight: 1.2,
                  transition: "all 0.7s ease-out",
                }}
              >
                {item}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default RotatingText;
