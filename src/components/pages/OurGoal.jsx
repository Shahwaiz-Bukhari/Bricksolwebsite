import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useParams } from "react-router-dom";
import { pageData } from "../../data/pageData";

import "swiper/css";
import "swiper/css/pagination";

const allData = {
  ...pageData.services,
  ...pageData.industries,
  ...pageData.products,
};

const OurGoal = () => {
  const { categoryId } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);

  const data = allData[categoryId];

  if (!data?.slide?.length) {
    return (
      <Box sx={{ p: 5, textAlign: "center" }}>
        <Typography variant="h4">No slides available</Typography>
      </Box>
    );
  }

  const swiperConfig = {
    modules: [Pagination, Autoplay],
    pagination: { clickable: true },
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    onSlideChange: (swiper) => setActiveIndex(swiper.realIndex),
    className: "ourGoalsSlider",
  };

  return (
    <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
      <Box
        component="section"
        id="our-goal"
        sx={{
          pb: { xs: "5.5vh", md: "7.4vh", lg: "12.9vh" },
          position: "relative",
          width: "100%",
          mx: "auto",
          maxWidth: {
            md: "100%",
            lg: "calc(100% - 7.08vw)",
            "1xl": "calc(100% - 10.78vw)",
          },
        }}
      >
        {/* Outer border container */}
        <Box
          sx={{
            border: "1px solid",
            borderColor: "grey.500",
            borderRadius: { xs: "24px", lg: "1.25vw" },
            overflow: "hidden",
            position: "relative",
            width: "100%",
          }}
        >
          {/* Swiper Carousel */}
          <Swiper {...swiperConfig}>
            {data.slide.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <Box
                  sx={{
                    height: { xs: "352px", md: "510px", lg: "75vh" },
                    display: "flex",
                    alignItems: "flex-end",
                    background: `linear-gradient(
                      rgb(0, 10, 25) 0%, 
                      rgba(0,10,25,0) 50%, 
                      rgb(0,10,25) 100%
                    ), url(${slide.image}) center / cover no-repeat`,
                    p: { xs: "2.2vh .75rem", md: "4.4vh 28px" },
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Content Overlay */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={{ xs: "18px", md: "60px", lg: "3vw" }}
            sx={{
              px: { xs: 3, md: "28px" },
              position: "absolute",
              bottom: { xs: "2.2vh", md: "4.4vh" },
              zIndex: 3,
              width: "100%",
            }}
          >
            {/* Left Text */}
            <Box
              sx={{
                flex: 1,
                maxWidth: { xs: "800px", "3xl": "41.66vw" },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "16px", md: "24px", lg: "1.87vw" },
                  lineHeight: { xs: "24px", md: "36px", lg: "4.4vh" },
                  fontWeight: 500,
                }}
              >
                {data.slide[activeIndex].text}
              </Typography>
            </Box>

            {/* Explore Work Button */}
            <Box sx={{ position: "relative", cursor: "pointer" }}
              onClick={() => {
                const section = document.getElementById("reachout");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}>
              {/* Rotating Circle */}
              <Box
                component="img"
                src="/images/icons/explore-work.svg"
                alt="Explore Work Icon"
                sx={{
                  maxWidth: { xs: "48px", md: "90px", lg: "112px" },
                  width: "100%",
                  height: "auto",
                  animation: "spin 12s linear infinite",
                  "@keyframes spin": {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                  },
                }}
              />

              {/* Static Arrow */}
              <Box
                component="img"
                src="/images/icons/explore-work-arrow.svg"
                alt="Explore Work Arrow"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  maxWidth: { xs: "16px", md: "30px" },
                  width: "100%",
                  height: "auto",
                  pointerEvents: "none",
                }}
              />
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default OurGoal;
