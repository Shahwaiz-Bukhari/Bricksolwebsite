import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { pageData } from "../../../data/pageData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArcButton from "../../../app/global-components/ctaButton/ArcButton";

gsap.registerPlugin(ScrollTrigger);

const Drag = () => {
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
          start: "top+=100 90%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  }, []);

  const { categoryId } = useParams();
  
    const heroData = {
      ...pageData.services,
      ...pageData.industries,
      ...pageData.products,
    };
  
    const data = heroData[categoryId];
    if (!data) {
        return (
          <Box sx={{ p: 5, textAlign: "center" }}>
            <Typography variant="h4">Category not found</Typography>
          </Box>
        );
      }

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
          gridTemplateColumns: { xs: "1fr", md: "1fr 2fr" },
          gap: 1,
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            ref={leftTextRef}
            variant="h3"
            sx={{
              color: "#c9dbfdff",
              fontWeight: 700,
              fontSize: { xs: "28px", md: "36px" },
              lineHeight: 1.2,
              mb:{xs:0, md: 10},
            }}
          >
            Highlights
          </Typography>
        </Box>


        <Box
          sx={{
            textAlign: "left",
          }}
        >
          <Typography
            sx={{
              color: "#94a3b8",
              fontSize: { xs: "12.1px", md: "1.2rem" },
              maxWidth: 800,
              margin: "0 auto",
              mb: 1,
            }}
          >
            {data.paragraph}
          </Typography>
          <ArcButton text="Connect With Us" />
        </Box>
      </Box>
    </Box>
  );
};

export default Drag;
