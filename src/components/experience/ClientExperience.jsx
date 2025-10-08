import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArcButton from "../../app/global-components/ctaButton/ArcButton";
import ClientRating from "./ClientRating";

gsap.registerPlugin(ScrollTrigger);

const ClientExperience = () => {
  const leftTextRef = useRef(null);

  useEffect(() => {
    const elem = leftTextRef.current;

    gsap.fromTo(
      elem,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elem,
          start: "top 90%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: { xs: 4, md: 8 },
        maxWidth: "1400px",
        margin: "auto",
      }}
    >
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
            ref={leftTextRef}
            variant="h4"
            sx={{
              color: "#e2e7f0ff",
              fontWeight: 500,
              fontSize: { xs: "28px", md: "36px" },
              lineHeight: 1.2,
            }}
          >
            Client{" "}
            <Box
              component="br"
              sx={{
                display: { xs: "none", md: "inline" },
              }}
            />
            Experiences.
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
              fontSize: { xs: "12.1px", md: "12.1px" },
              maxWidth: 350,
              margin: "0 auto",
              textAlign:"left",
            }}
          >
            Trusted by innovators, defined by impact. See what our clients say about us
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
      <ClientRating />
    </Box>
  );
};

export default ClientExperience;
