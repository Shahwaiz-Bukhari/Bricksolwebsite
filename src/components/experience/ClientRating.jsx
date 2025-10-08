import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, Avatar, Rating, Fade } from "@mui/material";
import ArcButton from "../../app/global-components/ctaButton/ArcButton";
import { PopupModal } from "react-calendly";

const COLORS = {
  primaryText: "white",
  secondaryText: "#94a3b8",
  yellow: "#fbbf24",
  darkBlue: "#1e293b",
  lightBlue: "#E9F0FF"
};

const AUTOPLAY_DELAY = 5000;

const ClientRating = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
     const [openCalendly, setOpenCalendly] = useState(false);

const testimonials = [
  {
    name: "Ayesha Khan",
    title: "Chief Technology Officer",
    avatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=face",
    text: "Partnering with Bricksol allowed us to integrate cutting-edge AI into our operations. Their ability to turn complex ideas into practical, immersive solutions has transformed how our teams collaborate and innovate.",
    industry: "Industry – Immersive Transformations",
  },
  {
    name: "Michael Rodriguez",
    title: "Head of Digital Innovation",
    avatar:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=150&h=150&fit=crop&crop=face",
    text: "Bricksol’s creative approach reshaped our digital presence. Their precision and focus on innovation elevated our brand experience far beyond what we thought possible.",
    industry: "Industry – Digital Transformation",
  },
  {
  name: "Emily Carter",
  title: "Founder & CEO",
  avatar:
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face",
  text: "What impressed me most about Bricksol was their commitment to results. Their tailored e-commerce solutions gave us the growth boost we needed while ensuring a seamless customer experience.",
  industry: "Industry – E-commerce Solutions",
},
];


  const stats = [
    { value: "100+", label: "Happy Clients Around the World" },
    { value: "$50 M+", label: "Gross Revenue Generated" },
    { value: "200+", label: "Successful Projects Launched" },
    { value: "95%", label: "Client Satisfaction Rate" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [currentSlide, testimonials.length]);

  return (
    <Box sx={{ color: COLORS.primaryText, py: 8, px: { xs: 2, md: 4 }, maxWidth: "1400px", mx: "auto", borderBottom: "1px solid rgba(255, 255, 255, 0.2)", }}>
      
      {/* Main Section */}
      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, mb: 4 }}>
        
        {/* Rating Card */}
        <Card sx={{ flex: { xs: "1 1 100%", sm: "0 0 35%" }, bgcolor: "#e5efff", borderRadius: 5, p: 2 }}>
          <CardContent sx={{ p: 0 }}>
            
            {/* Top Row */}
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Typography variant="subtitle1" color="text.secondary">Bricksol<sup>&reg;</sup></Typography>
              <Rating value={5} readOnly sx={{ color: COLORS.yellow }} />
            </Box>

            {/* Rating */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
              <Box component="img" src="/images/badge.svg" alt="Badge Left" sx={{ height: "5em" }} />
              <Typography variant="h3" fontWeight="500" color="black">4.9</Typography>
              <Typography variant="h6" color="text.secondary">/5</Typography>
              <Box component="img" src="/images/badge-right.svg" alt="Badge Right" sx={{ height: "5em" }} />
            </Box>

            {/* Description */}
            <Typography variant="body1" color="#181616" sx={{ mt: 2, mb: 4, fontSize: "0.9rem", lineHeight: 1.6 }}>
              Powering innovation that creates billions in value across industries.
            </Typography>

            {/* CTA */}
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Box sx={{ flex: 1 }}>
                <ArcButton text="Connect With Us" onClick={() => setOpenCalendly(true)}  />
              </Box>
              {/* Calendly Popup */}
      <PopupModal
        url="https://calendly.com/YOUR_USERNAME/YOUR_EVENT"
        onModalClose={() => setOpenCalendly(false)}
        open={openCalendly}
        rootElement={document.getElementById("root")}
      />
              <Typography variant="body2" color="text.secondary" sx={{ width: "30%" }}>
                Trusted by clients worldwide.
              </Typography>
            </Box>
          </CardContent>
        </Card>

        {/* Testimonial Card */}
        <Card sx={{ flex: { xs: "1 1 100%", sm: "0 0 65%" }, bgcolor: "#3d3f41ff", borderRadius: 5, p: 4,border: "1px solid rgb(156, 163, 175)", }}>
          <CardContent sx={{ p: 0, position: "relative" }}>
            
            {/* Only render current testimonial */}
            <Fade in timeout={500}>
              <Box key={currentSlide}>
                <Box display="flex" alignItems="center" mb={3}>
                  <Avatar src={testimonials[currentSlide].avatar} alt={testimonials[currentSlide].name} sx={{ width: 56, height: 56, mr: 2 }} />
                  <Box>
                    <Typography variant="h6" fontWeight="bold" color={COLORS.primaryText}>
                      {testimonials[currentSlide].name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: COLORS.secondaryText }}>
                      {testimonials[currentSlide].title}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body1" color={COLORS.primaryText} sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.6 }}>
                  {testimonials[currentSlide].text}
                </Typography>
                <Typography variant="body2" sx={{ color: COLORS.secondaryText }}>
                  {testimonials[currentSlide].industry}
                </Typography>
              </Box>
            </Fade>

            {/* Indicators */}
            <Box display="flex" gap={1} mt={4}>
              {testimonials.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  sx={{
                    width: index === currentSlide ? 32 : 24,
                    height: 4,
                    borderRadius: 1,
                    bgcolor: index === currentSlide ? COLORS.primaryText : "#475569",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": { bgcolor: index === currentSlide ? COLORS.primaryText : "#64748b" }
                  }}
                />
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>
              
      {/* Stats Section */}
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: 4, textAlign: "center" }}>
        {stats.map((stat, index) => (
            
          <Box key={index}>
            <Typography variant="h3"  fontWeight="500" color={COLORS.primaryText} sx={{ fontSize: { xs: "2.5rem", md: "2.5rem" }, mb: 1 }}>
              {stat.value}
            </Typography>
            <Typography variant="body2" sx={{ color: COLORS.secondaryText, fontSize: { xs: "0.875rem", md: "0.8rem" }, fontWeight: 600 }}>
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>
      
    </Box>
  );
};

export default ClientRating;
