// import React from "react";
// import { Box, Typography, TextField, Button, Avatar } from "@mui/material";

// const ReachoutContact = () => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: { xs: "column", md: "row" },
//         color: "whitesmoke",
//         p: { xs: 3, md: 6 },
//         gap: { xs: 4, md: 6 },
//         borderRadius: 3,
//       }}
//     >
//       {/* Left Section */}
//       <Box
//   sx={{
//     flex: 2,
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-around",
//     gap: 2,
//     px: 4,
//     py: {xs: 2, md: 0},
//     backgroundColor: "#505355ff",
//     borderRadius: "14px",
//     border: "1px solid rgb(156, 163, 175)",
//   }}
// >
//   <Box>
//     <Typography variant="h5" fontWeight="bold" gutterBottom>
//       Let’s hear about your project, your team & your dreams!
//     </Typography>
// {/* Parent flex row for both points */}
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: { xs: "column", md: "row" },
//         justifyContent: "space-between",
//         alignItems: { xs: "flex-start", md: "flex-start" },
//         gap: 4,
//         mt: 3,
//       }}
//     >
//       {/* First point */}
//       <Box flex={1}>
//         <Box display="flex" alignItems="center" gap={2}>
//           <Box
//             component="img"
//             src="/images/quick-response.svg"
//             alt="Quick response"
//             sx={{ width: 24, height: 24 }}
//           />
//           <Typography fontWeight="bold">Rapid Support.</Typography>
//         </Box>
//         <Typography variant="body2" color="grey.400" sx={{ mt: 0.5 }}>
//           Ready to design the future? We’re here to listen.
//         </Typography>
//       </Box>

//       {/* Second point */}
//       <Box flex={1}>
//         <Box display="flex" alignItems="center" gap={2}>
//           <Box
//             component="img"
//             src="/images/next-step.svg"
//             alt="Clear next steps"
//             sx={{ width: 24, height: 24 }}
//           />
//           <Typography fontWeight="bold">Next Steps, Simplified</Typography>
//         </Box>
//         <Typography variant="body2" color="grey.400" sx={{ mt: 0.5 }}>
//           Post-consultation, you’ll receive a customized roadmap and timeline designed for you.
//         </Typography>
//       </Box>
//     </Box>
//   </Box>

//   {/* Quote Box */}
//   <Box
//     sx={{
//       backgroundColor: "#71797E",
//       p: 3,
//       borderRadius: 2,
//     }}
//   >
//     <Typography variant="body1" sx={{ fontStyle: "italic", mb: 2 }}>
//       “We embrace challenges that spark bold ideas, fuel innovation, and drive us to redefine what’s possible. Together, let’s create the extraordinary.”
//     </Typography>
//     <Box display="flex" alignItems="center" gap={2}>
//       <Avatar src="/images/basitbhai.webp" alt="CEO" />
//       <Box>
//         <Typography fontWeight="bold">Abdul Basit</Typography>
//         <Typography variant="body2" color="grey.400">
//           Founder, CEO
//         </Typography>
//       </Box>
//     </Box>
//   </Box>
// </Box>

//       {/* Right Section (Form) */}
//       <Box
//         sx={{
//           flex: 1,
//           backgroundColor: "#e5efff",
//           borderRadius: 3,
//           p: { xs: 3, md: 4 },
//           color: "#0f172a",
//         }}
//       >
//         <Typography variant="h6" fontWeight="bold" mb={2}>
//           Send us a message!
//         </Typography>

//         <TextField
//           label="Your name"
//           fullWidth
//           variant="outlined"
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           label="Email"
//           fullWidth
//           variant="outlined"
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           label="Phone"
//           fullWidth
//           variant="outlined"
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           label="Message"
//           multiline
//           rows={4}
//           fullWidth
//           variant="outlined"
//           sx={{ mb: 3 }}
//         />

//         <Button
//           variant="contained"
//           fullWidth
//           sx={{
//             backgroundColor: "#3b82f6",
//             "&:hover": { backgroundColor: "#2563eb" },
//             textTransform: "none",
//             fontWeight: "bold",
//           }}
//         >
//           Send Message
//         </Button>

//         <Typography
//           variant="caption"
//           sx={{ display: "block", mt: 1, textAlign: "center", color: "grey.600" }}
//         >
//         By submitting you agree to our friendly{" "}
//           <Typography component="span" color="primary" sx={{ cursor: "pointer" }}>
//             Privacy Policy.
//           </Typography>
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default ReachoutContact;



import React from "react";
import { Box, Typography, TextField, Button, Avatar } from "@mui/material";

const ReachoutContact = () => {
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

          {/* Parent flex row for both points */}
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
            {/* First point */}
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

            {/* Second point */}
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

      {/* Right Section (Form) */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#e5efff",
          borderRadius: 3,
          p: { xs: 3, md: 4 },
          color: "#0f172a",
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Send us a message!
        </Typography>

        {/* ✅ Changed input text color here */}
        <TextField
          label="Your name"
          fullWidth
          variant="outlined"
          sx={{
            mb: 2,
            "& .MuiInputBase-input": { color: "#0f172a" }, // text color
            "& .MuiInputLabel-root": { color: "#334155" }, // label color
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#94a3b8" }, // border color
              "&:hover fieldset": { borderColor: "#2563eb" }, // hover border
              "&.Mui-focused fieldset": { borderColor: "#2563eb" }, // focused border
            },
          }}
        />

        <TextField
          label="Email"
          fullWidth
          variant="outlined"
          sx={{
            mb: 2,
            "& .MuiInputBase-input": { color: "#0f172a" },
            "& .MuiInputLabel-root": { color: "#334155" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#94a3b8" },
              "&:hover fieldset": { borderColor: "#2563eb" },
              "&.Mui-focused fieldset": { borderColor: "#2563eb" },
            },
          }}
        />

        <TextField
          label="Phone"
          fullWidth
          variant="outlined"
          sx={{
            mb: 2,
            "& .MuiInputBase-input": { color: "#0f172a" },
            "& .MuiInputLabel-root": { color: "#334155" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#94a3b8" },
              "&:hover fieldset": { borderColor: "#2563eb" },
              "&.Mui-focused fieldset": { borderColor: "#2563eb" },
            },
          }}
        />

        <TextField
          label="Message"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          sx={{
            mb: 3,
            "& .MuiInputBase-input": { color: "#0f172a" },
            "& .MuiInputLabel-root": { color: "#334155" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#94a3b8" },
              "&:hover fieldset": { borderColor: "#2563eb" },
              "&.Mui-focused fieldset": { borderColor: "#2563eb" },
            },
          }}
        />

        <Button
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
    </Box>
  );
};

export default ReachoutContact;
