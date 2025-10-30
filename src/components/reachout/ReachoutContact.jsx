import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Slide,
} from "@mui/material";

const ReachoutContact = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format (e.g. abc@mail.com)";
    }
    if (!formData.message.trim())
      newErrors.message = "Message field cannot be empty";

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }


    setTimeout(() => {
      setOpen(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
      setTimeout(() => setOpen(false), 3000);
    }, 500);
  };

  const getFieldSx = (field) => ({
    mb: 2,
    "& .MuiInputBase-input": { color: "#0f172a" },
    "& .MuiInputLabel-root": { color: "#334155" },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: errors[field] ? "#ef4444" : "#94a3b8",
      },
      "&:hover fieldset": {
        borderColor: errors[field] ? "#ef4444" : "#2563eb",
      },
      "&.Mui-focused fieldset": {
        borderColor: errors[field] ? "#ef4444" : "#2563eb",
      },
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        color: "whitesmoke",
        p: { xs: 3, md: 6 },
        gap: { xs: 4, md: 6 },
        borderRadius: 3,
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          gap: 2,
          px: 4,
          py: { xs: 2, md: 0 },
          backgroundColor: "#505355ff",
          borderRadius: "14px",
          border: "1px solid rgb(156, 163, 175)",
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Let’s hear about your project, your team & your dreams!
          </Typography>

          {/* Highlights */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", md: "flex-start" },
              gap: 4,
              mt: 3,
            }}
          >
            <Box flex={1}>
              <Box display="flex" alignItems="center" gap={2}>
                <Box
                  component="img"
                  src="/images/quick-response.svg"
                  alt="Quick response"
                  sx={{ width: 24, height: 24 }}
                />
                <Typography fontWeight="bold">Rapid Support.</Typography>
              </Box>
              <Typography variant="body2" color="grey.400" sx={{ mt: 0.5 }}>
                Ready to design the future? We’re here to listen.
              </Typography>
            </Box>

            <Box flex={1}>
              <Box display="flex" alignItems="center" gap={2}>
                <Box
                  component="img"
                  src="/images/next-step.svg"
                  alt="Clear next steps"
                  sx={{ width: 24, height: 24 }}
                />
                <Typography fontWeight="bold">Next Steps, Simplified</Typography>
              </Box>
              <Typography variant="body2" color="grey.400" sx={{ mt: 0.5 }}>
                Post-consultation, you’ll receive a customized roadmap and
                timeline designed for you.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Quote Box */}
        <Box
          sx={{
            backgroundColor: "#71797E",
            p: 3,
            borderRadius: 2,
          }}
        >
          <Typography variant="body1" sx={{ fontStyle: "italic", mb: 2 }}>
            “We embrace challenges that spark bold ideas, fuel innovation, and
            drive us to redefine what’s possible. Together, let’s create the
            extraordinary.”
          </Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar src="/images/basitbhai.webp" alt="CEO" />
            <Box>
              <Typography fontWeight="bold">Abdul Basit</Typography>
              <Typography variant="body2" color="grey.400">
                Founder, CEO
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Right Form */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#e5efff",
          borderRadius: 3,
          p: { xs: 3, md: 4 },
          color: "#0f172a",
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Send us a message!
        </Typography>

        <TextField
          label="Your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          sx={getFieldSx("name")}
          error={Boolean(errors.name)}
          helperText={errors.name}
        />

        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          sx={getFieldSx("email")}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />

        <TextField
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          sx={getFieldSx("phone")}
        />

        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          sx={getFieldSx("message")}
          error={Boolean(errors.message)}
          helperText={errors.message}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#3b82f6",
            "&:hover": { backgroundColor: "#2563eb" },
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          Send Message
        </Button>

        <Typography
          variant="caption"
          sx={{
            display: "block",
            mt: 1,
            textAlign: "center",
            color: "grey.600",
          }}
        >
          By submitting you agree to our friendly{" "}
          <Typography
            component="span"
            color="primary"
            sx={{ cursor: "pointer" }}
          >
            Privacy Policy.
          </Typography>
        </Typography>
      </Box>

      {/* ✅ Capsule Notification */}
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <Box
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            bgcolor: "#0f172a",
            color: "#e2e8f0",
            px: 3,
            py: 1.5,
            borderRadius: "999px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            fontWeight: "bold",
            zIndex: 2000,
            border: "1px solid #3b82f6",
          }}
        >
          <Typography sx={{ color: "#60a5fa" }}>✅ Message Sent!</Typography>
          <Typography sx={{ fontSize: "0.9rem" }}>
            We’ll get back to you shortly.
          </Typography>
        </Box>
      </Slide>
    </Box>
  );
};

export default ReachoutContact;
