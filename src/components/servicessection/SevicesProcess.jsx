import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, useMediaQuery, LinearProgress } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArcButton from "../../app/global-components/ctaButton/ArcButton";
import { useTheme } from "@mui/material/styles";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    id: 1,
    title: "Ideate",
    image: "/images/discover.svg",
    description:
      "We explore your vision, goals, and audience to uncover opportunities that spark innovation.",
  },
  {
    id: 2,
    title: "Create",
    image: "/images/design.svg",
    description:
      "We craft bold strategies and immersive designs built to connect, inspire, and engage.",
  },
  {
    id: 3,
    title: "Build",
    image: "/images/develop.svg",
    description:
      "We transform concepts into reality with advanced technology and seamless user experiences.",
  },
  {
    id: 4,
    title: "Elevate",
    image: "/images/grow.svg",
    description:
      "We refine, optimize, and scale your digital presence to amplify impact and ensure lasting growth.",
  },
];


const ServicesProcess = () => {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const leftTextRef = useRef(null);
  const processRef = useRef(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (isMobile) {
      setProgress(0); 
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % processSteps.length);
        setProgress(0);
      }, 4000);

      const progressInterval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 100 : prev + 100 / 50)); 
      }, 100);

      return () => {
        clearInterval(interval);
        clearInterval(progressInterval);
      };
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return; 
    const triggers = [];

    if (leftTextRef.current) {
      triggers.push(
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
        ).scrollTrigger
      );
    }

    if (processRef.current) {
      const steps = gsap.utils.toArray(".process-step");
      triggers.push(
        gsap.fromTo(
          steps,
          {
            x: (i) => (i % 1 === 0 ? -100 : 100),
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.25,
            ease: "power3.out",
            scrollTrigger: {
              trigger: processRef.current,
              start: "top 80%",
              end: "bottom 60%",
            },
          }
        ).scrollTrigger
      );
    }

    return () => {
      triggers.forEach((trigger) => trigger && trigger.kill());
    };
  }, [isMobile]);

  const renderStep = (step, index) => (
    <Box
      key={step.id}
      className="process-step"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        maxWidth: { xs: "280px", md: "300px" },
        ml: { xs: 0, md: index !== 0 ? "-3%" : 0 },
        zIndex: processSteps.length - index,
      }}
      onMouseEnter={() => setHoveredStep(step.id)}
      onMouseLeave={() => setHoveredStep(null)}
      onFocus={() => setHoveredStep(step.id)}
      onBlur={() => setHoveredStep(null)}
      tabIndex={0}
    >
      {/* Circle */}
      <Box
        sx={{
          width: { xs: 200, md:260, lg: 320 },
          height: { xs: 200, md: 260,lg:320 },
          borderRadius: "50%",
          border: "2px solid rgba(37,97,207,0.3)",
          backgroundColor:
            hoveredStep === step.id ? "rgba(37,97,207,0.15)" : "transparent",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.4s ease",
          position: "relative",
          px: hoveredStep === step.id ? 3 : 0,
          "&:hover": {
            backgroundColor: "rgba(37,97,207,0.15)",
          },
        }}
      >
        {/* Image */}
        <Box
          component="img"
          src={step.image}
          alt={step.title}
          sx={{
            width: { xs: 40, md: 50 },
            height: "auto",
            mb: hoveredStep === step.id ? 2 : 1,
            transition: "all 0.3s ease",
          }}
        />

        {/* Title */}
        <Typography
          variant="h6"
          fontWeight="600"
          color="#0d0d0d"
          sx={{
            fontSize: { xs: "18px", md: "22px" },
            mb: hoveredStep === step.id ? 2 : 0,
            transition: "all 0.3s ease",
            textAlign: "center",
          }}
        >
          {step.title}
        </Typography>

        {/* Description */}
        <Box
          sx={{
            opacity: hoveredStep === step.id ? 1 : 0,
            transform: hoveredStep === step.id ? "scaleY(1)" : "scaleY(0)",
            transformOrigin: "top",
            transition: "transform 0.4s ease, opacity 0.4s ease",
            overflow: "hidden",
          }}
        >
          <Typography
            variant="body2"
            color="#0d0d0d"
            sx={{
              textAlign: "center",
              fontSize: { xs: "13px", md: "15px" },
              lineHeight: 1.5,
              fontWeight: "400",
            }}
          >
            {step.description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ width: "100%", margin: "0 auto", mt: 6 }}>
      {/* Header Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ xs: "column", md: "row" }}
        gap={{ xs: 2, md: 0 }}
        mb={6}
      >
        <Typography
          variant="h4"
          fontWeight="400"
          color="#0d0d0d"
          ref={leftTextRef}
        >
          The Journey.
        </Typography>

        <Box sx={{ flex: 4, display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              color: "#0d0d0d",
              fontSize: { xs: "12px", md: "13px" },
              maxWidth: 350,
              textAlign: "left",
            }}
          >
            Trusted by businesses globally for our process-driven and innovative approach.
          </Typography>
        </Box>

        <ArcButton text="Work With Us" onClick={() => {
                const section = document.getElementById("reachout");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }} />
      </Box>

      {/* Process Steps */}
      <Box
        ref={processRef}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          py: 4,
          gap: { xs: 2, md: 0 },
        }}
      >
        {isMobile
          ? (
            <>
              {renderStep(processSteps[activeIndex], activeIndex)}
              {/* Progress bar for mobile */}
              <Box sx={{ width: "200px", mt: 2 }}>
                <LinearProgress
                  variant="determinate"
                  value={progress}
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: "grey.300",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#2561cf",
                    },
                  }}
                />
              </Box>
            </>
          )
          : processSteps.map((step, index) => renderStep(step, index))}
      </Box>
    </Box>
  );
};

export default ServicesProcess;
