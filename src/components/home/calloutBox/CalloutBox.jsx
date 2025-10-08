import React, { useState } from "react";
import { Avatar, Box, Typography, Button } from "@mui/material";
import arcHoverStyles from "../../../styles/buttonHover";
import { PopupModal } from "react-calendly";


const CalloutBox = () => {
  const [openCalendly, setOpenCalendly] = useState(false);

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: {
          xs: '-10rem',
          md: '2rem',
        },
        right: {
          xs: '0',
          md: '2rem',
        },
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        transform: "translateY(-30px)",
        gap: {
          xs: 1.5,
          md: 2,
        },
        p: {
          xs: 1.5,
          md: 2,
        },
        backgroundColor: '#71797E',
        borderRadius: '16px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
        width: {
          xs: 'calc(91vw - 2rem)',
          md: '350px',
        },
        maxWidth: '400px',
      }}
    >
      <Avatar
        alt="Specialist"
        src="/images/specialist.jpeg"
        sx={{
          width: {
            xs: 60,
            md: 80,
          },
          height: {
            xs: 60,
            md: 80,
          },
          flexShrink: 0,
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          flexGrow: 1,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: {
              xs: '0.75rem',
              md: '0.875rem',
            },
          }}
        >
          Speak with a Specialist
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: 'white',
            mt: 0.5,
            fontSize: {
              xs: '1rem',
              md: '1.25rem',
            },
          }}
        >
          Asfand Yar Janjua
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: {
              xs: 1,
              md: 1.5,
            },
            borderRadius: '25px',
            px: {
              xs: 2,
              md: 3,
            },
            py: {
              xs: 0.75,
              md: 1,
            },
            fontWeight: 600,
            backgroundColor: '#3B82F6',
            textTransform: 'none',
            fontSize: {
              xs: '0.8rem',
              md: '0.9375rem',
            },
            ...arcHoverStyles, 
          }} onClick={() => setOpenCalendly(true)}
        >
          Connect With Us
        </Button>
      </Box>
      <PopupModal
        url="https://calendly.com/YOUR_USERNAME/YOUR_EVENT"
        onModalClose={() => setOpenCalendly(false)}
        open={openCalendly}
        rootElement={document.getElementById("root")}
      />
    </Box>
  );
};

export default CalloutBox;
