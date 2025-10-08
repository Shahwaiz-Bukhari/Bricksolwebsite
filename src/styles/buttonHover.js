const arcHoverStyles = {
  position: "relative",
  overflow: "hidden",
  zIndex: 0,
  transition: "background-color 0.3s ease",

  "&::before": {
    content: '""',
    position: "absolute",
    bottom: "-100%",
    left: 0,
    width: "100%",
    height: "400%",
    backgroundImage: 'url("/images/button/button-bubbles.svg")',
    backgroundRepeat: "repeat-y",
    backgroundSize: "cover",
    opacity: 0.7,
    transform: "translateY(100%)", 
    transition: "transform 0.6s ease-in-out",
    zIndex: 1,
  },

  "&:hover::before": {
    transform: "translateY(-60%)",
  },

  "&:hover": {
    backgroundColor: "#2563EB",
  },
};
export default arcHoverStyles;
