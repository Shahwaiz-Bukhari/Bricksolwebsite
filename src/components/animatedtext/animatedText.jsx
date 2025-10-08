import React from "react";
import { Box } from "@mui/material";
import { AnimatedTextHighlight } from "../../app/global-components/animatedTextHighlight";

const motionText = `The first international AI-powered immersive tech company to enter \nSaudi Arabia under the IGNITE Program.`

const AnimatedText = () => {
  return (  <Box
        className="colabSection"
        sx={{
          width: "auto",
        }}
      > 
         
  <AnimatedTextHighlight text={motionText} />
      </Box>
  );
};

export { AnimatedText };
