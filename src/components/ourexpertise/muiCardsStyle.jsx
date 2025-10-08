import { styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";

const CustomCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  position: "relative",
  borderRadius: "40px",
  border: "1px solid black",
}));

const VerticalText = styled(Typography)(({ theme }) => ({
  writingMode: "vertical-rl",
  transform: "rotate(180deg)",
  fontWeight: "bold",
  fontSize: "1.7rem",
  letterSpacing: "-0.04rem",
  cursor: "pointer",
  display: "flex",
  fontFamily: "var(--syne-font--)",
  flexDirection: "row-reverse",
  justifyContent: "space-between",
  height: "100%",
  padding: "25px",
  margin: "auto",
  "@media (max-width: 940px)": {
    writingMode: "horizontal-tb",
    transform: "rotate(0deg)",
    fontSize: "1.4rem",
    letterSpacing: "-0.01em",
    width: "100%",
  },
}));

export { CustomCard, VerticalText };
