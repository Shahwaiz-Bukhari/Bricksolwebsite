import React, { useState, useRef } from 'react';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import ArcButton from "../../app/global-components/ctaButton/ArcButton";
import ServicesProcess from '../servicessection/SevicesProcess';
import { PopupModal } from "react-calendly";


const WhyItMatters = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const theme = useTheme();

  const leftTextRef = useRef(null);
  const [openCalendly, setOpenCalendly] = useState(false);

  const handleToggle = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

 const faqData = [
  {
    id: "➜",
    title: "Next-Level Engagement",
    img: "/images/icons/enhanced-user-engagement.webp",
    desc: "Immersive experiences captivate audiences, keeping them emotionally and mentally connected to your brand like never before.",
  },
  {
    id: "➜",
    title: "Interactive in Real Time",
    img: "/images/icons/real-time-interactivity.svg",
    desc: "Dynamic environments let users shape their journey, creating personalized, memorable experiences every time.",
  },
  {
    id: "➜",
    title: "Elevated Brand Storytelling",
    img: "/images/icons/stronger-brand-storytelling.svg",
    desc: "Tell your story across multiple senses, moving beyond flat visuals to create a truly impactful brand narrative.",
  },
  {
    id: "➜",
    title: "Future-Ready Spaces",
    img: "/images/icons/future-ready-experiences.svg",
    desc: "Designed for scalability and innovation, your immersive space can evolve with emerging tech like AI, spatial computing, and the metaverse.",
  },
];


  return (
    <Box
      sx={{
        backgroundColor: '#e0eafc',
        p: { xs: 2, md: 6 },
        borderRadius: 4,
        maxWidth: '1400px',
        width: "95%",
        margin: '0 auto'
      }}
    >
      {/* Header Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ xs: 'column', md: 'row' }}
        gap={{ xs: 2, md: 0 }}
      >
        <Typography
          variant="h4"
          fontWeight="400"
          color="#0d0d0d"
          ref={leftTextRef}
        >
          Significance.
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
            Transform how users experience your brand and drive growth with cutting-edge immersive solutions.
          </Typography>
        </Box>

        <ArcButton text="Connect With Us" onClick={() => setOpenCalendly(true)} />
      </Box>
      {/* Calendly Popup */}
      <PopupModal
        url="https://calendly.com/YOUR_USERNAME/YOUR_EVENT" 
        onModalClose={() => setOpenCalendly(false)}
        open={openCalendly}
        rootElement={document.getElementById("root")}
      />

      {/* FAQ List */}
      <Box mt={4}>
        {faqData.map((item, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <Box
              key={index}
              sx={{
                mb: 2,
                borderRadius: 2,
                backgroundColor: 'transparent',
              }}
            >
              {/* Row layout with hover effect + water fill */}
              <Box
                onClick={() => handleToggle(index)}
                sx={{
                  position: "relative",
                  overflow: "hidden", 
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr 8fr 3fr", md: "0.5fr 9.5fr 1fr" },
                  alignItems: "center",
                  gap: 2,
                  p: 2,
                  borderRadius: 2,
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "0%",
                    backgroundColor: "#2561cf",
                    borderRadius: 2,
                    zIndex: 0,
                    transition: "height 0.5s ease",
                  },

                  "&:hover::before": {
                    height: "100%",
                  },

                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
                  },

                  "& *": {
                    position: "relative",
                    zIndex: 1,
                    transition: "color 0.3s ease",
                  },

                  "&:hover h6": {
                    color: "#ffffff",
                  },
                  "&:hover p": {
                    color: "#e0e0e0",
                  },
                }}
              >
                <Typography variant="body2" sx={{ opacity: 0.5, color: "#0d0d0d" }}>
                  {item.id}
                </Typography>

                <Typography variant="h6" fontWeight="400" color="#0d0d0d">
                  {item.title}
                </Typography>

                <Box sx={{ textAlign: "right" }}>
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggle(index);
                    }}
                    sx={{
                      color: "#0d0d0d",
                      transition: "color 0.3s ease",
                      zIndex: 1,
                    }}
                  >
                    {isExpanded ? <Remove /> : <Add />}
                  </IconButton>
                </Box>
              </Box>

              {/* Expanded Content */}
              {isExpanded && (
                <Grid container spacing={2} alignItems="center" sx={{ mt: 2, px: 2 }}>
                  <Grid item xs={12} md={4}>
                    <Box
                      component="img"
                      src={item.img}
                      alt={item.title}
                      sx={{
                        width: { xs: '100%', md: '50%' },
                        height: 'auto',
                        borderRadius: 2
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Typography variant="body1" mb={1} color="#0d0d0d">
                      {item.desc}
                    </Typography>
                  </Grid>
                </Grid>
              )}
            </Box>
          );
        })}
      </Box>
      <ServicesProcess />
    </Box>
  );
};

export default WhyItMatters;
