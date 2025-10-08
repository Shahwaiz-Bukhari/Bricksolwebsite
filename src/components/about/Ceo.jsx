import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArcButton from "../../app/global-components/ctaButton/ArcButton";
import { PopupModal } from "react-calendly";

gsap.registerPlugin(ScrollTrigger);

const Ceo = () => {
    const leftTextRef = useRef(null);
    const [openCalendly, setOpenCalendly] = useState(false);

    useEffect(() => {
        const elem = leftTextRef.current;

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
        <Box
            sx={{
                px: { xs: 2, md: 6 },
                py: { xs: 4, md: 8 },
                maxWidth: "1400px",
                margin: "auto",
            }}
        >
            {/* 2 Row Grid */}
            <Grid container spacing={6} direction="column">
                {/* Row 1 (Your Existing CEO Section) */}
                <Grid item>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
                            gap: 2,
                            alignItems: "center",
                        }}
                    >
                        <Box>
                            <Typography
                                ref={leftTextRef}
                                variant="h4"
                                sx={{
                                    color: "#c9dbfdff",
                                    fontWeight: 700,
                                    fontSize: { xs: "28px", md: "36px" },
                                    lineHeight: 1.2,
                                }}
                            >
                                CEO.
                            </Typography>
                        </Box>

                        <Box sx={{ textAlign: "center" }}>
                            <Typography
                                sx={{
                                    color: "#94a3b8",
                                    fontSize: { xs: "12.1px", md: "12.1px" },
                                    maxWidth: 350,
                                    margin: "0 auto",
                                }}
                            >
                                From our founder: the vision and values shaping the future of
                                BricksSol.
                            </Typography>
                        </Box>

                        <Box sx={{ textAlign: { xs: "center", md: "right" } }}>
                            <ArcButton
                                text="Connect With Us"
                                onClick={() => setOpenCalendly(true)}
                            />
                        </Box>
                    </Box>
                </Grid>

                {/* Row 2 ( MUI) */}
                <Grid item>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", lg: "row" },
                            gap: { xs: 3, md: "5.5vh", lg: "4.1vw" },
                        }}
                    >
                        {/* Left Image Card */}
                        <Box
                            sx={{
                                flex: "0 0 auto",
                                width: "100%",
                                maxWidth: { lg: "23.9vw" },
                                height: { xs: "38.8vh", lg: "44.4vh" },
                                borderRadius: "24px",
                                overflow: "hidden",
                                backgroundImage: `url(/images/basitbhai.webp)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                cursor: "pointer",
                            }}
                        >
                            {/* Overlay with Arrow (LinkedIn Link) */}
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    alignItems: "flex-end",
                                    width: "100%",
                                    mt: 0.5,
                                }}
                            >
                                <Box
                                    component="a"
                                    href="https://www.linkedin.com/in/metageek/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        width: 30,
                                        height: 30,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: "12px",
                                        position: "relative",
                                        cursor: "pointer",
                                        textDecoration: "none",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            transform: "scale(1.1)",
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            transform: "rotate(45deg)",
                                            position: "relative",
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    >
                                        {/* First Arrow */}
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                position: "absolute",
                                                inset: 0,
                                            }}
                                        >
                                            <img
                                                src="/images/right-up.webp"
                                                alt="arrow"
                                                width={24}
                                                height={24}
                                                style={{ transform: "rotate(-45deg)" }}
                                            />
                                        </Box>
                                        {/* Second Arrow */}
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                position: "absolute",
                                                inset: 0,
                                            }}
                                        >
                                            <img
                                                src="/images/right-up.webp"
                                                alt="arrow"
                                                width={24}
                                                height={24}
                                                style={{ transform: "rotate(-45deg)" }}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                        </Box>

                        {/* Right Text Content */}
                        <Box
                            sx={{
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                gap: { xs: 4, md: 6, lg: 8 },
                            }}
                        >
                            {/* Paragraphs */}
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: { xs: 2, md: 3, lg: 4 },
                                    fontSize: { xs: "16px", md: "20px", lg: "1.66vw" },
                                    lineHeight: { xs: "32px", lg: "4.4vh" },
                                    fontWeight: 500,
                                    color: "#94a3b8",
                                }}
                            >
                                <Typography>
                                    At BricksSol, we believe the future is not something to wait for it’s
                                    something we actively create. From the very beginning, our mission has been
                                    to redefine how people interact with the world through immersive technology
                                    and intelligent design.
                                </Typography>
                                <Typography>
                                    As XR and AI continue to transform industries, we remain committed to
                                    delivering solutions that are not only innovative and visually compelling,
                                    but also deeply human. From smart environments and interactive ecosystems
                                    to AI-powered digital twins, our goal is simple: to help organizations
                                    create meaningful impact through innovation.
                                </Typography>
                                <Typography>
                                    We are proud to stand at the intersection of creativity, strategy, and
                                    cutting-edge technology and we’re excited to keep shaping the future
                                    together.
                                </Typography>

                            </Box>

                            {/* CEO Info */}
                            <Box>
                                <Typography
                                    variant="h6"
                                    sx={{ color: "#c9dbfdff", fontWeight: 600 }}
                                >
                                    Abdul Basit
                                </Typography>
                                <Typography sx={{ color: "#94a3b8" }}>
                                    CEO - Bricksol
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            {/* Calendly Popup */}
            <PopupModal
                url="https://calendly.com/YOUR_USERNAME/YOUR_EVENT"
                onModalClose={() => setOpenCalendly(false)}
                open={openCalendly}
                rootElement={document.getElementById("root")}
            />
        </Box>
    );
};

export default Ceo;
