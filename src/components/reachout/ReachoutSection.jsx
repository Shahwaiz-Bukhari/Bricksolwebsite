import React, { useState,useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArcButton from "../../app/global-components/ctaButton/ArcButton";
import ReachoutContact from "./ReachoutContact";
import { PopupModal } from "react-calendly";

gsap.registerPlugin(ScrollTrigger);

const ReachoutSection = () => {
   const [openCalendly, setOpenCalendly] = useState(false);
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
     id="reachout"
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
            variant="h5"
            sx={{
              color: "#e5edfcff",
              fontWeight: 500,
              fontSize: { xs: "28px", md: "36px" },
              lineHeight: 1.2,
            }}
          >
            Let’s Connect.
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
              textAlign: "left",
            }}
          >
            We're always ready to connect and create. Reach out, and we’ll get back to you!
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: { xs: "center", md: "right" },
          }}
        >
          <ArcButton text="Connect With Us" onClick={() => setOpenCalendly(true)} />
        </Box>
      </Box>
       {/* Calendly Popup */}
            <PopupModal
              url="https://calendly.com/YOUR_USERNAME/YOUR_EVENT" 
              onModalClose={() => setOpenCalendly(false)}
              open={openCalendly}
              rootElement={document.getElementById("root")}
            />
      <ReachoutContact />
    </Box>
  );
};

export default ReachoutSection;
