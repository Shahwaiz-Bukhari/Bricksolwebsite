import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Chip, Modal, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import gsap from "gsap";

const slides = [
  {
    title: "Virtual House Tour",
    description:
      "Experience an interactive 3D walkthrough of modern architecture, where every detail of the house design comes to life in a fully immersive environment.",
    tags: ["3D", "Virtual Tour", "Architecture", "Immersive", "Experience"],
    image: "/images/pad/Dream.webp",
    video: "https://youtu.be/4BEk21TOayE",
  },
  {
    title: "AR-VR Future",
    description:
      "Discover how Augmented and Virtual Reality are shaping the future—bridging digital and physical worlds to create smarter, more engaging experiences.",
    tags: ["AR", "VR", "Innovation", "Technology", "Future"],
    image: "/images/pad/NBA.webp",
    video: "/videos/arvr.webm",
  },
  {
    title: "Gamification",
    description:
      "Unleash the power of play by integrating game mechanics into learning and design. Gamification makes experiences more engaging, interactive, and rewarding.",
    tags: ["Gamification", "UI/UX", "Engagement", "Interactive", "Design"],
    image: "/images/pad/DGA.webp",
    video: "https://youtu.be/cwMXo7jgaJk",
  },
];


const SliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoOpen) return;

    const interval = setInterval(() => {
      const nextIndex = (currentSlide + 1) % slides.length;
      animateSlide(nextIndex);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide, videoOpen]);

  useEffect(() => {
    if (!videoOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [videoOpen]);

  const animateSlide = (newIndex) => {
    gsap.to([contentRef.current, imageRef.current], {
      opacity: 0,
      y: 30,
      duration: 0.4,
      onComplete: () => {
        setCurrentSlide(newIndex);
        gsap.fromTo(
          [contentRef.current, imageRef.current],
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, delay: 0.1 }
        );
      },
    });
  };

  const { title, description, tags, image, video } = slides[currentSlide];

  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      <Box sx={{ background: "transparent", py: 8, display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            position: "relative",
            width: "90%",
            maxWidth: "1400px",
            background: "#e5efff",
            borderRadius: "16px",
            overflow: "hidden",
            px: { xs: 2, md: 4 },
            py: { xs: 4, md: 6 },
          }}
        >
          {/* Stand Top */}
          <Box
            component="img"
            src="/images/stand-top.png"
            alt="Top Stand"
            sx={{
              position: "absolute",
              top: { xs: "-100px", md: "-110px" },
              left: { xs: "50%", md: "67%" },
              transform: "translateX(-50%)",
              width: { xs: "100px", md: "180px" },
              zIndex: 1,
            }}
          />

          {/* Image Box with Button */}
          <Box
            ref={imageRef}
            sx={{
              position: "absolute",
              top: { xs: "260px", md: "150px", xl: "120px" },
              right: { xs: "50%", md: "30px", lg: "95px", xl: "120px" },
              transform: { xs: "translateX(50%)", md: "none" },
              zIndex: 5,
              width: { xs: "80%", md: "325px", xl: "400px" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={image}
              alt="Slide"
              sx={{
                width: "100%",
                borderRadius: "16px",
                objectFit: "cover",
              }}
            />
            <IconButton
              onClick={() => setVideoOpen(true)}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "#fff",
                zIndex: 6,
                width: 50,
                height: 50,
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              }}
            >
              <PlayArrowIcon sx={{ fontSize: 30, color: "#000" }} />
            </IconButton>
          </Box>

          {/* Stand Bottom */}
          <Box
            component="img"
            src="/images/stand-bottom.png"
            alt="Bottom Stand"
            sx={{
              position: "absolute",
              bottom: { xs: "320px", md: 0 },
              left: { xs: "50%", md: "93%" },
              transform: "translateX(-50%)",
              width: { xs: "100px", md: "180px" },
              zIndex: 0,
            }}
          />

          {/* Main Content */}
          <Box
            ref={contentRef}
            sx={{
              background: "#e5efff",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: { xs: "100%", md: "50%" },
              zIndex: 3,
              minHeight: { xs: "auto", md: "450px" },
            }}
          >
            <Box sx={{ px: { xs: 2, md: 5 }, pt: { xs: 2, md: 4 }, pb: { xs: 4, md: 0 } }}>
              <Typography variant="h5" fontWeight="600" mb={2} color="text.secondary">
                {title}
              </Typography>
              <Typography variant="body1" mb={{ xs: 3, md: 6 }} color="text.secondary">
                {description}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Services Provided
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                {tags.map((tag, i) => (
                  <Chip
                    key={i}
                    label={tag}
                    size="small"
                    sx={{
                      backgroundColor: "#cbd5e1",
                      color: "#1e293b",
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>

          {/* Slide Dots */}
          <Box sx={{ textAlign: "center", mt: 4 }}>
            {slides.map((_, index) => (
              <Box
                key={index}
                onClick={() => animateSlide(index)}
                sx={{
                  display: "inline-block",
                  width: 12,
                  height: 12,
                  mx: 0.5,
                  borderRadius: "50%",
                  backgroundColor: currentSlide === index ? "#000" : "#94a3b8",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
              />
            ))}
          </Box>

          {/* Video Modal */}
          <Modal open={videoOpen} onClose={() => setVideoOpen(false)}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "90%",
                maxWidth: "900px",
                bgcolor: "background.paper",
                boxShadow: 24,
                borderRadius: 2,
                p: 1,
                outline: "none",
              }}
            >
              {video.includes("youtube.com") || video.includes("youtu.be") ? (
                <Box
                  component="iframe"
                  src={video.replace("youtu.be/", "www.youtube.com/embed/")}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  sx={{
                    width: "100%",
                    height: "500px",
                    borderRadius: "12px",
                    border: "none",
                  }}
                />
              ) : (
                <video
                  ref={videoRef}
                  src={video}
                  controls
                  autoPlay
                  style={{ width: "100%", borderRadius: "12px" }}
                />
              )}
            </Box>
          </Modal>

        </Box>
      </Box>
    </Box>
  );
};

export default SliderSection;
