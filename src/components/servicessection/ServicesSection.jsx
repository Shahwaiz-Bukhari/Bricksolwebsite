import React, { useState, useRef, useEffect, memo } from "react";
import {
  Box,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArcButton from "../../app/global-components/ctaButton/ArcButton";
import { ServiceAnimation } from "./ServiceAnimation";
import Marquee from "react-fast-marquee";
import ServicesProcess from "./SevicesProcess";
import { PopupModal } from "react-calendly";
import {OurExpertise} from "../ourexpertise/ourExpertise"; 

gsap.registerPlugin(ScrollTrigger);

const marqueeRowOne = [
  { title: "Sports", image: "/images/marquee/sports.webp" },
  { title: "Entertainment", image: "/images/marquee/entertainment.webp" },
  { title: "Web3", image: "/images/marquee/web3.webp" },
  { title: "Tourism & Hospitality", image: "/images/marquee/tourism.webp" },
  { title: "Digital Marketing", image: "/images/marquee/marketing.webp" },
];

const marqueeRowTwo = [
  { title: "Events", image: "/images/marquee/events.webp" },
  { title: "Healthcare", image: "/images/marquee/healthcare.webp" },
  { title: "Immersive Transformations", image: "/images/marquee/immersive.webp" },
  { title: "Defence", image: "/images/marquee/defence.webp" },
  { title: "E-commerce", image: "/images/marquee/ecommerce.webp" },
];

const ServicesSection = () => {
  const theme = useTheme();
  const leftTextRef = useRef(null);
  const [openCalendly, setOpenCalendly] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        leftTextRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftTextRef.current,
            start: "top 90%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const MarqueeItem = ({ item }) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 3,
        mx: 5,
        textDecoration: "none",
        overflow: "hidden",
        color: "inherit",
        height: "100%",
      }}
    >
      <Box
        component="img"
        src={item.image}
        alt={item.title}
        sx={{
          width: { xs: 80, md: 250 },
          height: { xs: 80, md: 120 },
          borderRadius: "50px",
          objectFit: "cover",
          flexShrink: 0,
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          transition: "transform 0.3s ease",
          "&:hover": { transform: "scale(1.05)" },
        }}
      />
      <Box
        sx={{
          backgroundColor: "rgba(37,97,207,0.1)",
          px: { xs: 4, md: 5 },
          py: { xs: 2, md: 2.5 },
          borderRadius: "50px",
          height: { xs: 80, md: 120 },
          display: "flex",
          alignItems: "center",
          whiteSpace: "nowrap",
          boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
          transition: "background-color 0.3s ease",
          "&:hover": {
            backgroundColor: "#2561cf",
            "& h6": { color: "#fff" },
          },
        }}
      >
        <Typography
          variant="h6"
          fontWeight="500"
          color="#0d0d0d"
          sx={{ fontSize: { xs: "14px", md: "18px" } }}
        >
          {item.title}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        backgroundColor: "#e5efff",
        p: { xs: 2, md: 6 },
        borderRadius: 4,
        maxWidth: "1400px",
        width: "95%",
        margin: "0 auto",
      }}
    >
      {/* Header Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ xs: "column", md: "row" }}
        gap={{ xs: 2, md: 0 }}
      >
        {/* Left Heading */}
        <Typography
          variant="h4"
          fontWeight="400"
          color="#0d0d0d"
          ref={leftTextRef}
        >
          Services.
        </Typography>

        {/* Middle Description */}
        <Box sx={{ flex: 4, display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              color: "#0d0d0d",
              fontSize: { xs: "12px", md: "13px" },
              maxWidth: 350,
              textAlign: "left",
            }}
          >
            We bridge ideas and audiences through engaging, immersive digital experiences.
          </Typography>
        </Box>

        {/* Right Button */}
        <ArcButton
          text="Connect With Us"
          onClick={() => setOpenCalendly(true)}
        />
      </Box>

      {/* Calendly Popup */}
      <PopupModal
        url="https://calendly.com/YOUR_USERNAME/YOUR_EVENT"
        onModalClose={() => setOpenCalendly(false)}
        open={openCalendly}
        rootElement={document.getElementById("root")}
      />

      {/* ✅ Replaced service rows with OurExpertise */}
      <Box mt={6}>
        <OurExpertise />
      </Box>

      <ServiceAnimation />

      {/* Dual Direction Marquee Section */}
      <Box sx={{ mt: 6 }}>
        <Box sx={{ mb: 4, height: { xs: 140, md: 180 } }}>
          <Marquee pauseOnHover gradient={false} speed={50} direction="right">
            {marqueeRowOne.map((item, index) => (
              <MarqueeItem key={`row1-${index}`} item={item} />
            ))}
          </Marquee>
        </Box>
        <Box sx={{ height: { xs: 140, md: 180 } }}>
          <Marquee pauseOnHover gradient={false} speed={50} direction="left">
            {marqueeRowTwo.map((item, index) => (
              <MarqueeItem key={`row2-${index}`} item={item} />
            ))}
          </Marquee>
        </Box>
      </Box>

      <ServicesProcess />
    </Box>
  );
};

export default memo(ServicesSection);
