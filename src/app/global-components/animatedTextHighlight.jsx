"use client";

import React, { useRef, useEffect } from "react";
import { Box } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTextHighlight = ({
  text = "",
  indent = "15%",
  align = "left",
  fontSize = { xs: "24px", md: "35px" },
  baseColor = "#5c697c",
  highlightColor = "#dfe1e4ff",
  paddingLeft= { xs: "5px", md: "35px" },
}) => {
  const containerRef = useRef();

  useEffect(() => {
    const chars = containerRef.current.querySelectorAll(".char");

    gsap.fromTo(
      chars,
      { color: baseColor },
      {
        color: highlightColor,
        stagger: 0.04,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top-100 85%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  }, [text, baseColor, highlightColor]);

  const lines = text.split("\n");

  return (
    <Box sx={{ width: "100%", py: 6, px: 2, paddingBottom: "10px" }}>
      <Box
        ref={containerRef}
        sx={{
          maxWidth: "1400px",
          margin: "auto",
          fontSize,
          textAlign: align,
          letterSpacing: "-0.01em",
          lineHeight: 1.4,
          wordWrap: "break-word",
          paddingLeft,
        }}
      >
        {lines.map((line, lineIndex) => (
          <Box
            key={lineIndex}
            component="div"
            sx={{
              display: "block",
              width: "100%",
              overflowWrap: "break-word",
              whiteSpace: "normal", 
            }}
          >

            {line.split("").map((char, i) => (
              <span
                key={`${lineIndex}-${i}`}
                className="char"
                style={{
                  display: "inline-block",
                  whiteSpace: char === " " ? "pre" : "normal",
                }}
              >
                {char}
              </span>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export { AnimatedTextHighlight };
