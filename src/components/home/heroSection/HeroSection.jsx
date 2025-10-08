import React from "react";
import { Box, Typography } from "@mui/material";

const HeroSection = () => (
  <Box sx={{ gridColumn: { lg: '1 / 3' }, alignSelf: 'center' }}>
   <Typography
  variant="h1"
  component="h1"
  sx={{
    mb: 1,
    fontSize: {
      xs: '2rem',
      md: '2rem',
    },
    fontWeight: "600",
    color: "#97999cff",
    mt:{xs:"20%", md: "0"},
    width: {xs:"100%",md:"150%"},
  }}
>
  Building Tomorrow, Digitally Today.
</Typography>

<Typography
  variant="h4"
  component="p"
  sx={{
    fontSize: {
      xs: '1.3rem',
      md: '1.5rem',
    },
    // textIndent: '18%',
    lineHeight: 1.5,
    fontWeight: '500',
    color: "GrayText",
  }}
>
  We craft cutting-edge digital solutions, combining immersive XR,
  AI-driven systems, and creative design to empower businesses and
  redefine interactive experiences worldwide
</Typography>

  </Box>
);

export default HeroSection;
