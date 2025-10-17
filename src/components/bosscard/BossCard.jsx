import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  GlobalStyles,
  Card,
  CardContent,
  Divider,
  Zoom,
  useMediaQuery,
  Box,
  Typography,
} from "@mui/material";
import { Phone, LinkedIn, WhatsApp, Email, Language } from "@mui/icons-material";

import ParticleBackground from "../../app/global-components/card/ParticleBackground";
import ContactInfo from "../../app/global-components/card/ContactInfo";
import SocialIcons from "../../app/global-components/card/SocialIcons";
import CallModal from "../../app/global-components/card/CallModal";
import CallButton from "../../app/global-components/card/CallButton";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0d1117",
      light: "#161b22",
      dark: "#000000",
    },
    secondary: {
      main: "#00eaff",
      light: "#33f3ff",
      dark: "#00bcd4",
    },
    background: {
      default: "#03080f",
      paper: "rgba(10, 15, 25, 0.95)",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255,255,255,0.7)",
      disabled: "rgba(255,255,255,0.4)",
    },
  },
  typography: {
    fontFamily: '"Outfit", "Poppins", "Inter", "Roboto", sans-serif',
    h1: { fontWeight: 700, letterSpacing: "0.5px" },
    h2: { fontWeight: 700, letterSpacing: "0.5px" },
    h5: { fontWeight: 600, fontSize: "1.4rem", letterSpacing: "0.3px" },
    body1: { fontWeight: 400, fontSize: "1rem", color: "rgba(255,255,255,0.85)" },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 25 },
  shadows: Array(25).fill("0 0 20px rgba(0, 234, 255, 0.15)"),
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(0, 234, 255, 0.3)",
          background: "linear-gradient(145deg, #050b12, #0a111a)",
          boxShadow: "0 0 30px rgba(0, 234, 255, 0.08)",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 0 40px rgba(0, 234, 255, 0.25)",
            transform: "translateY(-4px)",
          },
        },
      },
    },
  },
});

export default function BossCard() {
  const [hovered, setHovered] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isXLScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

   const cardData = {
     name: "Abdul Basit",
     title: "CEO",
     company: "Bricksol",
     email1: "info@bricksol.net",
     email2: "abdul.basit@smartspatial.com",
     phone: "+92 301 1111226",
    website: "https://www.bricksol.net",
     avatar: "/images/basitbhai.webp",
     description:
       "Driving MENA’s Future with AI Spatial Intelligence | 100+ Real-World Deployments in Real Estate, Tourism, Infrastructure & Government | Vision 2030 Catalyst | Official AI Ecosystem Partner of HPE & NVIDIA",
     socialLinks: {
       linkedin: "https://www.linkedin.com/in/metageek/",
       whatsapp: "923011111226",
       website: "https://www.bricksol.net",
     },
   };

  const socialIcons = [
    {
      Icon: LinkedIn,
      key: "linkedin",
      color: "#00eaff",
      onClick: () => window.open(cardData.socialLinks.linkedin, "_blank"),
    },
    {
      Icon: WhatsApp,
      key: "whatsapp",
      color: "#00d85f",
      onClick: () => {
        const phoneNumber = cardData.socialLinks.whatsapp.replace(/[^\d]/g, "");
        window.open(`https://wa.me/${phoneNumber}`, "_blank");
      },
    },
    {
      Icon: Email,
      key: "email",
      color: "#00bcd4",
      onClick: () => {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${cardData.email1}`;
        const fallbackUrl = `mailto:${cardData.email1}`;
        const win = window.open(gmailUrl, "_blank");
        if (!win || win.closed || typeof win.closed === "undefined") {
          window.location.href = fallbackUrl;
        }
      },
    },
    {
      Icon: Language,
      key: "website",
      color: "#00eaff",
      onClick: () => window.open(cardData.website, "_blank"),
    },
  ];

  const handleCallOption = (type) => {
    setOpenModal(false);
    if (type === "whatsapp")
      window.open(`https://wa.me/${cardData.socialLinks.whatsapp}`, "_blank");
    else if (type === "tel")
      window.location.href = `tel:${cardData.phone.replace(/[^\d+]/g, "")}`;
  };

  return (
    <ThemeProvider theme={theme}>
      {/* Global page styling */}
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            backgroundColor: "#03080f",
            overflowY: isMobile ? "auto" : "hidden",
          },
          html: {
            height: "100%",
            overflowY: isMobile ? "auto" : "hidden",
          },
        }}
      />

        <ParticleBackground />

      {/* Main container */}
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: isMobile ? "auto" : "hidden",
          py: isMobile ? 5 : 0,
        }}
      >
      

        <Zoom in timeout={800}>
          <Card
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
              width: { xs: "88%", sm: "70%", md: "430px" },
              overflow: "hidden",
              background:
                "linear-gradient(145deg, rgba(5,10,15,0.9), rgba(10,15,25,0.95))",
              backdropFilter: "blur(18px)",
              border: "1px solid rgba(0,234,255,0.3)",
              transition: "all 0.5s ease",
              transform: `
                scale(${isXLScreen ? 1.12 : isLargeScreen ? 1.05 : 1})
                ${hovered && !isMobile ? "translateY(-6px)" : ""}
              `,
              boxShadow: hovered
                ? "0 0 30px rgba(0,234,255,0.35)"
                : "0 0 12px rgba(0,234,255,0.15)",
            }}
          >
            <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
              {/* Profile */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <img
                  src={cardData.avatar}
                  alt={cardData.name}
                  style={{
                    width: 85,
                    height: 85,
                    borderRadius: "50%",
                    border: "2px solid rgba(0,234,255,0.3)",
                    boxShadow: "0 0 15px rgba(0,234,255,0.25)",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                    transform: hovered ? "scale(1.08)" : "scale(1)",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: "#fff",
                    fontWeight: 600,
                    mt: 1.5,
                    letterSpacing: "0.4px",
                    fontSize: { xs: "1.1rem", sm: "1.2rem" },
                  }}
                >
                  {cardData.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#00eaff",
                    fontWeight: 500,
                    mt: 0.3,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                  }}
                >
                  {cardData.title}, {cardData.company}
                </Typography>
              </Box>

              {/* Description */}
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: { xs: "0.8rem", sm: "0.85rem" },
                  lineHeight: 1.5,
                  mb: 2,
                  textAlign: "center",
                }}
              >
                {cardData.description}
              </Typography>

              <Divider sx={{ mb: 2, borderColor: "rgba(0,234,255,0.15)" }} />

              {/* Contact Info */}
              <ContactInfo
                icons={[
                  { Icon: Phone, text: cardData.phone, copyText: cardData.phone },
                  { Icon: Email, text: cardData.email1, copyText: cardData.email1 },
                  { Icon: Email, text: cardData.email2, copyText: cardData.email2 },
                ]}
              />

              {/* Social Icons + Call Button */}
              <SocialIcons
                socialIcons={socialIcons}
                activeIcon={activeIcon}
                setActiveIcon={setActiveIcon}
              />
              <CallButton onClick={() => setOpenModal(true)} />
            </CardContent>
          </Card>
        </Zoom>

        <CallModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          handleCallOption={handleCallOption}
        />
      </Box>
    </ThemeProvider>
  );
}
