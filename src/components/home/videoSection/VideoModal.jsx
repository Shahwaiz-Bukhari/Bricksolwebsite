import React from "react";
import { Box, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const VideoModal = ({ open, onClose }) => (
  <Modal open={open} onClose={onClose}>
    <Box
      sx={{
        width: { xs: '90%', sm: 400, md: 600 },
        height: { xs: 250, sm: 300, md: 360 },
        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "black",
                        boxShadow: 24,
                        outline: "none",
                       
                    
      }}
    >
      <video
        controls
        autoPlay
        className="rounded-lg"
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '8px',
        }}
      >
        <source src="/videos/video.webm" type="video/webm" />
      </video>
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          color: 'white',
          backgroundColor: '#1f2937',
          '&:hover': {
            backgroundColor: '#374151',
          },
        }}
      >
        <CloseIcon />
      </IconButton>
    </Box>
  </Modal>
);

export default VideoModal;
