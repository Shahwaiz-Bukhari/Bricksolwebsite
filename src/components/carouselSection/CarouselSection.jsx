import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Modal, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const images = [
  {
    src: "/images/carousel/immersive-realities.webp",
    title: "Immersive Realities",
    subtitle: "Step into new worlds.",
    description:
      "Immerse yourself in breathtaking digital environments where culture, history, and imagination come alive through interactive storytelling.",
    video: "https://www.youtube.com/embed/E68SV8q1f_k",
  },
  {
    src: "/images/carousel/parision-unrealengine.webp",
    title: "Virtual Craftsmanship",
    subtitle: "Design reimagined in 3D.",
    description:
      "Experience the art of architecture and property design with next-gen 3D visualization, blending creativity and precision in every detail.",
    video: "https://www.youtube.com/embed/jSQqItwx1DQ",
  },
  {
    src: "/images/carousel/al-awaly-tower.webp",
    title: "Al Awalay Rise",
    subtitle: "The future skyline revealed.",
    description:
      "Take a journey through Al Awalay Rise, where bold vision and cutting-edge design redefine modern urban living in a virtual showcase.",
    video: "https://www.youtube.com/embed/ScMzIvxBSi4",
  },
  {
    src: "/images/carousel/smartspatial.webp",
    title: "Smart Spatial",
    subtitle: "Virtual sales redefined.",
    description:
      "Transform client interactions with an intelligent, interactive virtual sales centre that delivers walkthroughs, demos, and real-time engagement.",
    video: "/videos/smartspatial.mp4",
  },
];


const CarouselSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const startX = useRef(0);
  const endX = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    let interval;

    if (!openModal) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 6000);
    }

    return () => clearInterval(interval);
  }, [openModal]);

  const handleStart = (x) => {
    startX.current = x;
    isDragging.current = true;
  };

  const handleEnd = (x) => {
    if (!isDragging.current) return;
    endX.current = x;
    isDragging.current = false;
    handleSwipe();
  };

  const handleSwipe = () => {
    const delta = startX.current - endX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) {
        setActiveIndex((prev) => (prev + 1) % images.length);
      } else {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    }
  };

  const getTransformStyles = (index) => {
    if (index === activeIndex) {
      return {
        transform: "scale(1.2)",
        opacity: 1,
        zIndex: 3,
      };
    } else if ((index + 1) % images.length === activeIndex) {
      return {
        transform: "translateX(-500px) translateY(100px) scale(1)",
        opacity: 0.7,
        zIndex: 2,
      };
    } else if ((index - 1 + images.length) % images.length === activeIndex) {
      return {
        transform: "translateX(500px) translateY(-100px) scale(1)",
        opacity: 0.7,
        zIndex: 1,
      };
    } else {
      return {
        transform: "translateX(0px) translateY(0px)",
        opacity: 0,
        zIndex: 0,
      };
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1400px",
        mx: "auto",
        py: 6,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
        flexDirection: "column",
        userSelect: "none",
        cursor: "grab",
      }}
      onTouchStart={(e) => handleStart(e.changedTouches[0].screenX)}
      onTouchEnd={(e) => handleEnd(e.changedTouches[0].screenX)}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseUp={(e) => handleEnd(e.clientX)}
      onMouseLeave={(e) => {
        if (isDragging.current) handleEnd(e.clientX);
      }}
    >
      {/* Titles */}
      <Box sx={{ mb: { xs: "5%", md: "0" } }}>
        <Typography
          variant="h6"
          sx={{
            position: "absolute",
            top: { xs: 0, md: -5 },
            left: 30,
            fontWeight: "300",
            color: "#5c697c",
            zIndex: 5,
          }}
        >
          Bricksol<sup>&reg;</sup>
        </Typography>

        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: { xs: 35, md: 25 },
            left: 30,
            fontWeight: "bold",
            color: "#dfe1e4ff",
            zIndex: 5,
          }}
        >
          Recent Projects
        </Typography>
        <Typography
          variant="p"
          sx={{
            position: "absolute",
            top: { xs: 80, md: 65 },
            left: 30,
            fontWeight: "400",
            color: "#5c697c",
            zIndex: 5,
            fontSize: { xs: "14px", md: "16px" },
            maxWidth: { xs: "90%", md: "none" },
          }}
        >
          We work as partners, every project we take on is designed{" "}
          <Box component="br" sx={{ display: { xs: "none", md: "inline" } }} />
          for long term success
        </Typography>
      </Box>

      {/* Carousel */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "400px", md: "600px" },
          position: "relative",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {images.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "80%", md: "95%" },
              height: "100%",
              mx: "auto",
              top: "8%",
              position: "absolute",
              transition:
                "transform 0.6s ease, opacity 0.6s ease, z-index 0.6s ease",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              ...getTransformStyles(index),
            }}
          >
            <Box
              component="img"
              src={item.src}
              alt={`carousel-${index}`}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                pointerEvents: "none",
              }}
            />

            {index === activeIndex && (
              <IconButton
                onClick={() => setOpenModal(true)}
                sx={{
                  position: "absolute",
                  zIndex: 7,
                  backgroundColor: "white",
                  borderRadius: "50%",
                  boxShadow: 3,
                  "&:hover": { backgroundColor: "#f0f0f0" },
                }}
              >
                <PlayArrowIcon fontSize="large" />
              </IconButton>
            )}
          </Box>
        ))}
      </Box>

      {/* Description */}
      <Box sx={{ zIndex: "999", width: { xs: "100%", md: "30%" } }}>
        <Typography
          variant="body1"
          sx={{
            mt: -5,
            textAlign: "center",
            maxWidth: "800px",
            px: 2,
            fontSize: "1.1rem",
            fontWeight: "700",
          }}
        >
          {images[activeIndex].subtitle}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: 2,
            textAlign: "center",
            maxWidth: "800px",
            px: 2,
            fontSize: "0.9rem",
          }}
        >
          {images[activeIndex].description}
        </Typography>
      </Box>

      {/* Video Modal */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "black",
            boxShadow: 24,
            outline: "none",
            width: "80%",
            height: "60%",
          }}
        >
          {/* ✅ Reset iframe when modal closes */}
          {openModal && (
            <iframe
              width="100%"
              height="100%"
              src={images[activeIndex].video}
              title="Video Player"
              allowFullScreen
              style={{ border: "none" }}
            />
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default CarouselSection;
