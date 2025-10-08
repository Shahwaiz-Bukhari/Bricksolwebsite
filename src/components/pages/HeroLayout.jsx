import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom"; // ✅ add useNavigate
import { pageData } from "../../data/pageData";
import ArcButton from "../../app/global-components/ctaButton/ArcButton";
import heroImage from "/images/hero_gray.webp";
import TrustedClients from "../../app/trustedclients/TrustedClients";
import { PopupModal } from "react-calendly";

const HeroLayout = () => {
  const [openCalendly, setOpenCalendly] = useState(false);
  const { categoryId } = useParams();
  const navigate = useNavigate(); // ✅

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
    <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
      <Box
        component="section"
        sx={{
          width: "97%",
          mt: "1.4vh",
          py: { xs: "10vh", md: "15vh" },
          px: { xs: "2.5vw", md: 0 },
          paddingTop: { xs: "10vh", md: "5vh" },
          borderRadius: "16px",
          border: "1px solid #CBD5E1",
          position: "relative",
          overflow: "hidden",
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: { xs: "flex-start", md: "space-between" },
          color: "white",
          mx: { xs: 0.5, md: 3 },
          gap: { xs: 3, md: 0 },
        }}
      >
        {/* LEFT CONTENT */}
        <Stack
          spacing={4}
          sx={{
            maxWidth: { lg: "680px", "3xl": "35.41vw" },
            alignItems: "flex-start",
            order: { xs: 1, md: 0 },
            width: "100%",
            mx: { xs: 0, md: "30px" },
          }}
        >
          {/* <AvailableBadge /> */}
          {data.subtitle && (
            <Typography variant="body1" color="white">
              {data.subtitle}
            </Typography>
          )}

          <Box>
            <Typography
              variant="h5"
              sx={{ fontWeight: 500, mb: 2 }}
              aria-label={data.title}
            >
              {data.title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: "grey" }}>
              {data.description}
            </Typography>

            {/* Action Buttons */}
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={2}
              sx={{ order: { xs: 2, md: 0 } }}
            >
              <ArcButton
                text="Get a Quote"
                onClick={() => navigate("/calculator")} // ✅ route to CalculatorMain
              />
              <ArcButton
                text="Talk to our Expert"
                onClick={() => setOpenCalendly(true)}
              />
            </Stack>

            {/* Calendly Popup */}
            <PopupModal
              url="https://calendly.com/YOUR_USERNAME/YOUR_EVENT"
              onModalClose={() => setOpenCalendly(false)}
              open={openCalendly}
              rootElement={document.getElementById("root")}
            />
          </Box>
        </Stack>

        {/* RIGHT IMAGE */}
        <Box
          sx={{
            flexShrink: 0,
            width: { xs: "100%", lg: "45%" },
            mx: { xs: 0, md: "30px" },
            order: { xs: 3, md: 0 },
          }}
        >
          <img
            src={data.image}
            alt={data.title}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>

        {/* Trusted Clients */}
        <Box
          sx={{
            position: { xs: "relative", md: "absolute" },
            bottom: { xs: "0", md: "3vh" },
            left: { xs: "0", md: "50%" },
            transform: { xs: "none", md: "translateX(-50%)" },
            mt: { xs: 3, md: 0 },
            order: { xs: 4, md: 0 },
            width: "100%",
            display: "flex",
            justifyContent: { xs: "center", md: "unset" },
          }}
        >
          <TrustedClients />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroLayout;
