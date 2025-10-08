import React, { useState, Suspense, lazy, memo } from "react";
import { Box, Container } from "@mui/material";
import VideoModal from "./videoSection/VideoModal";
import SpiralBackground from "../../app/global-components/SpiralBackground";
import heroImage from "/images/hero_gray.webp";

const HeroSection = lazy(() => import("./heroSection/HeroSection"));
const RotatingText = lazy(() => import("./heroSection/RotatingText"));
const VideoSection = lazy(() => import("./videoSection/VideoSection"));
const CalloutBox = lazy(() => import("./calloutBox/CalloutBox"));

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);


  const bgImage = bgLoaded ? `url(${heroImage})` : "none";

  return (
    <>

      <Box
        className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
        sx={{
          backgroundImage: bgImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: { xs: 2, md: 6 },
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
          minHeight: "55vh",
          maxWidth: "1400px",
          mx: "auto",
          ml: { xs: "22px", md: "32px", xl: "auto" },
          mr: { xs: "22px", xl: "auto" },
          position: "relative",
          overflow: "hidden",
          py: 3,
        }}
      >
        {/* Preload background image */}
        <img
          src={heroImage}
          alt="background"
          style={{ display: "none" }}
          onLoad={() => setBgLoaded(true)}
        />

        {/* 🔲 Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0.3, 0.1)",
            zIndex: 1,
          }}
        />

        {/* 🔄 Spiral BG */}
        <Suspense fallback={null}>
          <SpiralBackground />
        </Suspense>

        {/* 📦 Content container */}
        <Container
          maxWidth="1400px"
          className="relative z-10"
          sx={{
            pl: { xs: "10px", md: "70px" },
            position: "relative",
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(4, 1fr)",
              },
              gridTemplateRows: {
                xs: "auto",
                md: "1fr auto",
              },
              gap: {
                xs: "2rem 0",
                md: "1rem 2rem",
              },
              minHeight: {
                xs: "unset",
                md: "50vh",
              },
              marginBottom: {
                xs: "25%",
                md: 0,
              },
              left: { xs: "2px", md: "35px" },
              top: "-30px",
              position: "relative",
            }}
          >
            <Suspense fallback={null}>
              <HeroSection />
              <RotatingText />
              <VideoSection onPlay={() => setOpenModal(true)} />
              <CalloutBox />
            </Suspense>
          </Box>
        </Container>

        {/* 🎥 Video Modal */}
        <VideoModal open={openModal} onClose={() => setOpenModal(false)} />
      </Box>
    </>
  );
};

export default memo(Home);
