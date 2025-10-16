import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./secondpart.css";

const cardData = [
  {
    title: "AR/VR Solutions",
    description:
      "Our AR/VR solutions revolutionize industries like real estate, tourism, and education with interactive simulations, virtual tours, and immersive learning tools.",
    image: "/images/expertise/second-part-icon1.webp",
    alt: "second-part-icon1",
  },
  {
    title: "Events Activation",
    description:
      "We create immersive activations for entertainment, retail, and corporate events, using AR, VR, and AI to enhance brand engagement and customer interaction.",
    image: "/images/expertise/second-part-icon2.webp",
    alt: "second-part-icon2",
  },
];

const SecondPart = () => {
  return (
    <div className="ourExpertiseSecondPartContainer">
      <Box sx={{ p: 3 }}>
        {/* ✅ Replace Grid container with Box using grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "7.5fr 4.5fr" },
            gap: 3,
          }}
        >
          {/* ✅ Left Section */}
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                "@media (max-width: 900px)": { flexDirection: "row" },
                "@media (max-width: 650px)": { flexDirection: "column" },
              }}
            >
              {cardData.map((card, index) => (
                <Box
                  key={index}
                  sx={{
                    border: "1px solid black",
                    borderRadius: "30px",
                    height: "270px",
                    p: 3,
                    ":hover": { backgroundColor: "rgb(188, 240, 255)" },
                    transition: "background-color 0.5s ease",
                    "@media (max-width: 950px)": { height: "auto" },
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="secondPartIcon"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "contain",
                      marginBottom: "10px",
                    }}
                  />
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{
                      fontFamily: "var(--syne-font--)",
                      color: "rgb(121 146 194)",
                      fontSize: "30px",
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      mt: 2,
                      fontFamily: "var(--description-font--)",
                      fontWeight: "400",
                    }}
                  >
                    {card.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* ✅ Right Section */}
          <Box>
            <Link to="/calculator">
              <Box
                className="secondPartRightSectionContainer"
                sx={{
                  border: "1px solid black",
                  borderRadius: "80px",
                  height: "560px",
                  backgroundColor: "black",
                  position: "relative",
                  overflow: "hidden",
                  "@media (max-width: 900px)": { height: "400px" },
                }}
              >
                <Box
                  className="pr-8 pt-8"
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <img
                    src="/images/expertise/hru.webp"
                    alt="arrow-icon"
                    className="secondPartIcon"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "contain",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    mt: 3,
                    height: "90%",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <img
                    src="/images/expertise/WomenWearingVR.webp"
                    alt="Women Wearing VR"
                    className="secondPartWomenWearingVr"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    color: "white",
                    height: "auto",
                    textAlign: "left",
                    background:
                      "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 5%, rgb(0, 0, 0) 100%)",
                    padding: "5px 0",
                  }}
                  className="getAQuoteTextContainer"
                >
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{
                      marginTop: "15%",
                      marginLeft: "10%",
                      "@media (max-width: 900px)": { marginTop: "0%" },
                    }}
                  >
                    Get A Quote
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export { SecondPart };
