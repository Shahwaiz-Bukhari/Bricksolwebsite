import React, { useState } from "react";
import { Box, Typography, IconButton, Tooltip } from "@mui/material";
import { ContentCopy } from "@mui/icons-material";

const ContactInfo = ({ icons }) => {
  const [copied, setCopied] = useState("");

  const handleCopy = async (text) => {
    if (!text) return;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed"; 
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(text);
      setTimeout(() => setCopied(""), 1500);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <Box sx={{ mb: 3, display: "flex", flexDirection: "column", gap: 1.5 }}>
      {icons.map(({ Icon, text, sx, copyText }, i) => (
        <Box
          key={i}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1.5,
            color: "rgba(255,255,255,0.75)",
            background: "rgba(0,234,255,0.05)",
            px: { xs: 1.5, sm: 2 },
            py: 1,
            borderRadius: 1,
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              minWidth: 0,
              flex: 1,
            }}
          >
            <Icon sx={{ fontSize: 20, color: "#00eaff", flexShrink: 0 }} />
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255,255,255,0.85)",
                fontSize: sx?.fontSize || "0.9rem",
                fontWeight: sx?.fontWeight || 400,
                overflowWrap: "anywhere",
                whiteSpace: "normal",
                flexShrink: 1,
              }}
            >
              {text}
            </Typography>
          </Box>

          {copyText && (
            <Tooltip
              title={copied === copyText ? "Copied!" : "Copy"}
              arrow
              placement="top"
            >
              <IconButton
                onClick={() => handleCopy(copyText)}
                sx={{
                  color: "#00eaff",
                  mt: { xs: 0.5, sm: 0 },
                  flexShrink: 0,
                }}
                size="small"
              >
                <ContentCopy fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ContactInfo;
