import React, { useEffect, useState } from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import LaurelIcon from "../../app/global-components/LaurelIcon";


const ClientsGrid = () => {
  const allLogos = [
    [
      "chevrolet.webp",
      "cocacola.webp",
      "lexus.webp",
      "roya.webp",
      "dunkin.webp",
      "ey.webp",
      "eyeofriyadh.webp",
      "levis.webp",
    ],
    [
      "nestle.webp",
      "hyundai.webp",
      "adidas.webp",
      "samsung.webp",
      "kfc.webp",
      "sony.webp",
      "visa.webp",
      "starbucks.webp",
    ],
  ];

  const [activeSet, setActiveSet] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSet((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: { xs: 4, md: 2 },
        backgroundColor: "background.default",
        maxWidth: "1400px",
        mx: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          height: { md: 350, xs: "auto" },
          paddingTop: 3,
        }}
      >

        <Box sx={{ flex: 2, borderRadius: 3 }}>
          <Card
            sx={{
              width: "100%",
              height: "65%",
              borderRadius: 3,
              background: "transparent",
            }}
          >
            <CardMedia
              component="img"
              image="/images/deal.jpg"
              alt="Ministry of Investment"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                maxHeight: 300,
              }}
            />
          </Card>
        </Box>


        <Box
          sx={{
            flex: 3,
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: "10px", md: "1" },
            justifyContent: "space-between",
            alignContent: "flex-start",
          }}
        >
          {allLogos[0].map((_, index) => (
            <Box
              key={index}
              sx={{ width: { xs: "48%", md: "23%" }, position: "relative" }}
            >
              <Card
                sx={{
                  borderRadius: 3,
                  backgroundColor: "#71797E",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: { xs: 80, md: 100 },
                  width: { md: "100%" },
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {[0, 1].map((setIndex) => (
                  <CardMedia
                    key={setIndex}
                    component="img"
                    image={`/images/logos/${allLogos[setIndex][index]}`}
                    alt={`Client Logo ${index + 1}`}
                    sx={{
                      position: "absolute",
                      width: { xs: "60px", md: "80px" }, 
                      height: { xs: "60px", md: "80px" }, 
                      objectFit: "contain",
                      transition: "all 0.6s ease",
                      opacity: activeSet === setIndex ? 1 : 0,
                      transform: activeSet === setIndex ? "scale(1)" : "scale(0.8)",
                    }}
                  />
                ))}
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          mt: { xs: 6, md: 0 },
          px: { xs: 2, md: 6 },


          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
          color: "#d1d5db",
          textAlign: "center",
        }}
      >

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
            gap: 2,
            textAlign: "center",
            justifyItems: "center",
            paddingTop: 1,
          }}
        >
          {[
            "The legendary partnership of Smart Spatial × Bricksol Studios",
            "We take pride in delivering impactful solutions consistently",
            "Pioneering immersive excellence since 2021 with no limits ahead!",
          ].map((text, index) => (
            <Box
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              display="flex"
              alignItems="flex-start"
              justifyContent="center"
              sx={{
                transition: "color 0.1s",
                color: "rgb(137 147 163)",
              }}
            >
              <Box>
                <LaurelIcon hovered={hoveredIndex === index} />
              </Box>
              <Typography sx={{ fontSize: { xs: 10, md: 13 }, my: { xs: "8px", md: "-2px" } }}>
                {text}
              </Typography>
              <Box sx={{ transform: "scaleX(-1)" }}>
                <LaurelIcon hovered={hoveredIndex === index} />
              </Box>
            </Box>
          ))}
        </Box>


      </Box>

    </Box>

  );
};

export default ClientsGrid;
