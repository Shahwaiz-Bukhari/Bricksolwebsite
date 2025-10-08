import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import ArcButton from "../../app/global-components/ctaButton/ArcButton";
import { PopupModal } from "react-calendly";

const useCases = [
  {
    icon: "/images/icons/immersive-env.svg",
    title: "Immersive Mixed Reality Spaces",
    desc: "Craft dynamic environments that captivate through sight, sound, and interaction leaving lasting impressions.",
  },
  {
    icon: "/images/icons/virtual-showrooms.svg",
    title: "Virtual Showrooms & Digital Replicas",
    desc: "Showcase products or spaces in real-time 3D replicas, enabling exploration and engagement beyond physical limits.",
  },
  {
    icon: "/images/icons/power-brand-experience.svg",
    title: "AR/VR Brand Experiences",
    desc: "Transform audience interaction with immersive AR/VR journeys that spark deeper connections and brand loyalty.",
  },
  {
    icon: "/images/icons/learning-and-traning-space.svg",
    title: "Immersive Learning & Training",
    desc: "Boost retention and engagement with interactive, hands-on training and educational experiences in virtual spaces.",
  },
];

const UseCases = () => {
   const [openCalendly, setOpenCalendly] = useState(false);


  return (
    <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
      <Box
        component="section"
        id="use-cases"
        sx={{
          py: { xs: "5.5vh", md: "7.4vh" },
          width: "100%",
          px: { xs: 1, md: 4 }
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
            gap: 2,
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                color: "#c9dbfdff",
                fontWeight: 700,
                fontSize: { xs: "28px", md: "36px", lg: "44px" },
                lineHeight: 1.2,
              }}
            >
              Real-World Impact.
            </Typography>
          </Box>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: "#94a3b8",
                fontSize: { xs: "12.1px", md: "12.1px", lg: "20px" },
                maxWidth: 350,
                margin: "0 auto",
              }}
            >
              Immersive experiences aren’t just seen, they redefine industries and shape the future
            </Typography>
          </Box>
          <Box
            sx={{
              textAlign: { xs: "center", md: "right" },
            }}
          >
            <ArcButton text="Work With Us" onClick={() => {
                const section = document.getElementById("reachout");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }} />
          </Box>
        </Box>

        {/* Use Case Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: { xs: 2, md: 4, lg: 2 },
            mt: { xs: "3.9vh", md: "5.5vh", lg: "7.4vh" },
            overflowX: "hidden",
          }}
        >
          {useCases.map((item, idx) => (
            <Box
              key={idx}
              sx={{
                minWidth: 0,
                border: "1px solid",
                borderColor: "grey.400",
                borderRadius: { xs: "24px", lg: "1.25vw" },
                p: { xs: "3vw", md: "3vw", lg: "1.5vw" },
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: { xs: "7.4vh", lg: "5vh" },
                boxSizing: "border-box",
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Box
                  component="img"
                  src={item.icon}
                  alt={item.title}
                  sx={{ width: 69, height: 69, maxWidth: "100%" }}
                />
              </Box>

              <Box sx={{ minWidth: 0 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: 20, lg: "1.25vw" },
                    lineHeight: { xs: "32px", lg: "3.3vh" },
                    fontWeight: 500,
                    overflowWrap: "anywhere",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    mt: 2,
                    color: "grey.600",
                    fontSize: { xs: 16, md: 18, lg: "1.04vw" },
                    lineHeight: { xs: "24px", md: "28px", lg: "2.9vh" },
                    fontWeight: 400,
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Call to Action */}
        <Box
          sx={{
            mt: { xs: "5.5vh", md: "5vh" },
            p: { xs: "3.5vw", md: "2.5vw" },
            borderRadius: { xs: "24px", lg: "1.25vw" },
            backgroundColor: "#e0eafc",
            display: "flex",
            flexWrap: { xs: "wrap", lg: "nowrap" },
            gap: { xs: "4.2vh", lg: "2.5vw" },
            alignItems: "center",
          }}
        >
          <Box flex={1}>
            <Stack direction="row" spacing={{ xs: "3.25vw", md: "1.25vw" }} alignItems="center">
              <Box
                component="img"
                src="/images/icons/book-a-discovery.svg"
                alt="Book a discovery"
                sx={{ width: 56, height: 56 }}
              />
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "20px", lg: "1.25vw" },
                  fontWeight: 500,
                  color: "black",
                  maxWidth: { md: "405px", "3xl": "21.09vw" },
                }}
              >
                Let’s grab a virtual coffee and explore how we can shape your next big move.
              </Typography>
            </Stack>
          </Box>
          <Stack direction="row" spacing={1} alignItems="center" flexWrap={{ xs: "wrap", md: "nowrap" }}>
            <Box sx={{ width: { xs: "100%", md: "50%" } }} >
              <ArcButton text="Connect With Us" onClick={() => setOpenCalendly(true)}/>
            </Box>
            <Typography
              sx={{
                color: "grey.500",
                fontSize: { xs: "14px", md: "16px" },
                textAlign: { xs: "center", md: "left" },
                width: "50%",
              }}
            >
              Chosen by innovators across the globe.
            </Typography>
          </Stack>
          {/* Calendly Popup */}
                <PopupModal
                  url={import.meta.env.VITE_CALENDLY_URL || "https://calendly.com/example"} 
                  onModalClose={() => setOpenCalendly(false)}
                  open={openCalendly}
                  rootElement={document.getElementById("root")}
                />
        </Box>
      </Box>
    </Box>
  );
};

export default UseCases;
