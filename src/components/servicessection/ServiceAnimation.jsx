import React from "react";
import { Box } from "@mui/material";
import { AnimatedTextHighlight } from "../../app/global-components/animatedTextHighlight";

const motionText = `We've partnered with businesses worldwide,across every major industry, to help them achieve their goals.`

const ServiceAnimation = () => {
  return (  <Box
        className="colabSection"
        sx={{
          width: "auto",
          py:3,

        }}
      > 
       <Box sx={{ '& > div': { px:0 } }}> 
   <AnimatedTextHighlight
        text={motionText}
        highlightColor="#0d0d0d"
        paddingLeft={0}
      />
      </Box> 
      </Box>
  );
};

export { ServiceAnimation };
