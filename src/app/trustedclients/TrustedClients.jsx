import { Box, Typography } from "@mui/material";

export default function TrustedClients() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexWrap: { xs: "wrap", lg: "nowrap" },
        flexDirection: { xs: "column-reverse", lg: "row" },
        justifyContent: "space-between",
        alignItems: "flex-end",
        gap: {
          xs: "5.2vh", 
          md: "7.1vh", 
          lg: "0.75rem", 
        },
        columnGap: "0.83vw",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
          maxWidth: { lg: "620px", "3xl": "35.41vw" }, 
          gap: "4.4vh",
          marginLeft: {xs: 0 ,md:"50px"},
        }}
      >
        <Typography
          sx={{
            width: "100%",
            textAlign: { xs: "center", lg: "left" },
            color: "grey.600",
          }}
        >
          Trusted by 100+ Happy clients around the world
        </Typography>

        <Box sx={{ position: "relative", width: "100%", height: "43px" }}>
          <Box
            component="img"
            src="/images/icons/immersive-transformation-logos.svg"
            alt="Immersive Transformations"
            loading="lazy"
            width="608"
            height="40"
            sx={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          width: "100%",
          flexShrink: 0,
          flex: { lg: 1 },
        }}
      >
        <Box sx={{ position: "relative", width: "100%", maxWidth: "548px" }}>
          <Box
            component="img"
            src="/images/icons/immersive-transformation-rating.webp"
            alt="Client Rating"
            loading="lazy"
            width="408"
            height="60"
            sx={{
              display: "block",
              mx: "auto",
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
