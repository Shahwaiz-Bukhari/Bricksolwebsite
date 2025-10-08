import React, { useState, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    company: "24 Mira Loma",
    title: "Unreal Engine Tour",
    tag: "villas",
    img: "/images/section/display/dp1.webp",
    gif: "/videos/gif/dp1.gif",
    stats: { app: "App", images: 4, videos: 15 },
  },
  {
    company: "PW Interior",
    title: "Interior VR",
    tag: "House",
    img: "/images/section/display/dp2.webp",
    gif: "/videos/gif/dp2.gif",
    stats: { app: "App", images: 8, videos: 11 },
  },
  {
    company: "350 Montiar Drive",
    title: "Danville CA",
    tag: "Villas",
    img: "/images/section/display/dp4.webp",
    gif: "/videos/gif/dp4.gif",
    stats: { app: "App", images: 16, videos: 15 },
  },
  {
    company: "NYE",
    title: "Meta City",
    tag: "City",
    img: "/images/section/display/dp5.webp",
    gif: "/videos/gif/dp5.gif",
    stats: { app: "App", images: 1, videos: 9 },
  },
  {
    company: "4144",
    title: "Canyon",
    tag: "villas",
    img: "/images/section/display/dp6.webp",
    gif: "/videos/gif/dp6.gif",
    stats: { app: "App", images: 5, videos: 6 },
  },
  {
    company: "10 Grand",
    title: "Royale",
    tag: "villas",
    img: "/images/section/display/dp7.webp",
    gif: "/videos/gif/dp7.gif",
    stats: { app: "App", images: 7, videos: 3 },
  },
];

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        position: "relative",
        height: { xs: "200px", md: "250px" },
        overflow: "hidden",
        cursor: "pointer",
        "&:hover .overlay": { opacity: 0 },
        "&:hover .stats": { opacity: 1, transform: "translateY(0)" },
      }}
    >
      {/* Image / Gif */}
      <img
        src={hovered ? project.gif : project.img}
        alt={project.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "0.4s ease",
        }}
      />

      {/* Dark overlay */}
      <Box
        className="overlay"
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          transition: "opacity 0.4s ease",
        }}
      >
        <Typography variant="subtitle2" sx={{ letterSpacing: 1 }}>
          {project.company}
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          {project.title}
        </Typography>

        {/* Tag */}
        <Box
          sx={{
            position: "absolute",
            bottom: 12,
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
            fontSize: "0.75rem",
            bgcolor: "rgba(255,255,255,0.15)",
          }}
        >
          {project.tag}
        </Box>
      </Box>

      {/* Stats */}
      <Box
        className="stats"
        sx={{
          position: "absolute",
          bottom: 20,
          left: 20,
          display: "flex",
          gap: 2,
          color: "white",
          opacity: 0,
          transform: "translateY(20px)",
          transition: "all 0.4s ease",
          fontSize: "0.85rem",
        }}
      >
        <Typography>{project.stats.app}</Typography>
        <Typography>📷 {project.stats.images}</Typography>
        <Typography>🎥 {project.stats.videos}</Typography>
      </Box>
    </Box>
  );
};

const Projects = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const elem = headingRef.current;

    gsap.fromTo(
      elem,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elem,
          start: "top 90%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <Box sx={{ width: "100%", background: "#000", py: 6 }}>
      {/* Animated Heading */}
      <Typography
        ref={headingRef}
        variant="h4"
        sx={{
          color: "#c9dbfdff",
          fontWeight: 700,
          fontSize: { xs: "28px", md: "36px" },
          lineHeight: 1.2,
          textAlign: "left",
          mx: 8,
          mb: 4,
        }}
      >
        Glimpse✨
      </Typography>

      {/* Projects Grid */}
      <Box
        id="projects"
        sx={{
          width: "90%",
          display: "grid",
          maxWidth: "1400px",
          mx: "auto",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 2,
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
