import React, { useState } from "react";
import {
  CardContent,
  Typography,
  Box,
  Container,
  useMediaQuery,
} from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; 

import { CustomCard, VerticalText } from "./muiCardsStyle";
import { CardData } from "./cardsData";
import { SecondPart } from "./secondPart";
import "./ourexpertise.css";

const OurExpertise = () => {
  const [selectedCard, setSelectedCard] = useState(1);
  const isMobile = useMediaQuery("(max-width: 940px)");

  const toggleCard = (cardId) => {
    setSelectedCard(cardId);
  };

  return (
    <section className="homeOurExpertiseSectionContainer">
      <Container
        sx={{
          "@media (max-width: 940px)": {
            padding: "0px",
          },
        }}
      >
        <div className="homeOurExpertiseSectionSubContainer">

          {/* Card Container */}
          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
              borderRadius: "30px",
              marginTop: "30px",
              gap: "20px",
              "@media (max-width: 940px)": {
                flexDirection: "column",
              },
              "@media (min-width: 940px)": {
                height: "500px",
              },
            }}
          >
            {CardData.map((card) => (
              <CustomCard
                key={card.id}
                onClick={() => toggleCard(card.id)}
                style={{
                  width: isMobile
                    ? "100%"
                    : selectedCard === card.id
                    ? "70%"
                    : "20%",
                  backgroundColor:
                    selectedCard === card.id ? "rgb(235, 242, 255)" : "black",
                  height: isMobile
                    ? selectedCard === card.id
                      ? "700px"
                      : "100px"
                    : "500px",
                }}
              >
                {selectedCard === card.id ? (
                  // Expanded Card
                  <CardContent
                    sx={{
                      display: "flex",
                      padding: "30px",
                      width: "100%",
                      height: isMobile ? "600px" : "100%",
                      flexDirection: "row",
                      "@media (max-width: 940px)": {
                        flexDirection: "column",
                      },
                      "@media (max-width: 540px)": {
                        height: isMobile ? "max-content" : "100%",
                        padding: "15px",
                      },
                    }}
                    className={`${
                      selectedCard === card.id
                        ? "ourExpertiseContentCardOpened"
                        : ""
                    }`}
                  >
                    {/* Left side - Text */}
                    <Box
                      sx={{
                        width: "60%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: "0px 10px",
                        "@media (max-width: 940px)": {
                          width: "90%",
                          paddingBottom: "20px",
                          height: "50%",
                          margin: "auto",
                        },
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontFamily: "var(--syne-font--)",
                          fontWeight: "bold",
                          color: "rgb(121 146 194)",
                          fontSize: "2.5rem",
                          "@media (max-width: 940px)": {
                            fontSize: "2.5rem",
                          },
                          "@media (max-width: 540px)": {
                            fontSize: "1.5rem",
                          },
                        }}
                      >
                        {card.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="p"
                        sx={{
                          marginTop: "8px",
                          fontFamily: "var(--description-font--)",
                          "@media (max-width: 540px)": {
                            fontSize: "1rem",
                          },
                        }}
                      >
                        {card.description}
                      </Typography>
                    </Box>

                    {/* Right side - Video */}
                    <Box
                      component="iframe"
                      src={`https://www.youtube-nocookie.com/embed/${card.video}?autoplay=1&controls=1&mute=1`}
                      title="Embedded Content"
                      loading="lazy"
                      sx={{
                        width: "40%",
                        height: "100%",
                        border: "none",
                        transition: "all 0.3s ease-in-out",
                        borderRadius: "30px",
                        "@media (max-width: 940px)": {
                          width: "90%",
                          height: "50%",
                          margin: "auto",
                        },
                        "@media (max-width: 540px)": {
                          height: "300px",
                        },
                      }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </CardContent>
                ) : (
                  // Collapsed Card with Vertical Title + Icon
                  <VerticalText className="ourExpertiseVerticalText">
                    {!isMobile ? (
                      <>
                        {card.id === 1 && (
                          <ChevronLeftIcon
                            sx={{ fontSize: 40, color: "white" }}
                          />
                        )}
                        {card.id === 2 &&
                          (selectedCard === 3 ? (
                            <ChevronLeftIcon
                              sx={{ fontSize: 40, color: "white" }}
                            />
                          ) : (
                            <ChevronRightIcon
                              sx={{ fontSize: 40, color: "white" }}
                            />
                          ))}
                        {card.id === 3 && (
                          <ChevronRightIcon
                            sx={{ fontSize: 40, color: "white" }}
                          />
                        )}
                      </>
                    ) : (
                      <ExpandMoreIcon sx={{ fontSize: 40, color: "white" }} />
                    )}
                    {card.title}
                  </VerticalText>
                )}
              </CustomCard>
            ))}
          </Container>

          {/* Second Part */}
          <SecondPart />
        </div>
      </Container>
    </section>
  );
};

export { OurExpertise };
