import React, { useState, useEffect, memo } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Collapse,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Logo from "../../app/global-components/Logo";
import ArcButton from "../../app/global-components/ctaButton/ArcButton";
import DropdownContainer from "./dropdown/DropdownContainer";
import HamburgerMenu from "./menu/HamburgerMenu";
import {
  servicesData,
  industriesData,
  productsData,
} from "./dropdown/CombinedCategoryDropdown";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".desktop-nav") && !event.target.closest(".dropdown-container")) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        py: 1,
        width: "97%",
        pl: { xs: 0, md: 2 },
        maxWidth: "1400px",
        mx: "auto",
      }}
    >
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.55)", 
          backdropFilter: "blur(12px) saturate(160%)",
          WebkitBackdropFilter: "blur(12px) saturate(160%)",
          px: { xs: 1, md: 0.5 },
          py: { xs: 1, md: 0.5 },
          borderRadius: "16px",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.6)", 
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 2, md: 1 },
          }}
        >
          <Logo />

          {/* Mobile Hamburger */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <HamburgerMenu isOpen={menuOpen} toggle={toggleMenu} />
          </Box>

          {/* Desktop Nav */}
          <Box
            className="desktop-nav"
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
              flex: 3,
              justifyContent: "center",
            }}
          >
            <Typography
              onClick={() =>
                setActiveMenu(activeMenu === "Services" ? null : "Services")
              }
              sx={{
                color: "white",
                textDecoration: "none",
                fontWeight: 500,
                cursor: "pointer",
                "& .dropdown-icon": {
                  opacity: 0,
                  transition: "opacity 0.2s ease",
                },
                "&:hover .dropdown-icon": {
                  opacity: 1,
                },
              }}
            >
              Services <span className="dropdown-icon">▼</span>
            </Typography>

            <Typography
              onClick={() =>
                setActiveMenu(activeMenu === "Industries" ? null : "Industries")
              }
              sx={{
                color: "white",
                textDecoration: "none",
                fontWeight: 500,
                cursor: "pointer",
                "& .dropdown-icon": {
                  opacity: 0,
                  transition: "opacity 0.2s ease",
                },
                "&:hover .dropdown-icon": {
                  opacity: 1,
                },
              }}
            >
              Industries <span className="dropdown-icon">▼</span>
            </Typography>

            <Typography
              onClick={() =>
                setActiveMenu(activeMenu === "Products" ? null : "Products")
              }
              sx={{
                color: "white",
                textDecoration: "none",
                fontWeight: 500,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px",

                "& .dropdown-icon": {
                  opacity: 0,
                  transition: "opacity 0.2s ease",
                },
                "&:hover .dropdown-icon": {
                  opacity: 1,
                },
              }}
            >
              Products <span className="dropdown-icon">▼</span>
            </Typography>


            <Link
              to="/portfolio"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              About
            </Link>
          </Box>

          {/* Desktop CTA */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <ArcButton
              text="Work With Us"
              onClick={() => {
                const section = document.getElementById("reachout");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu */}
      {menuOpen && (
        <Box
          sx={{
            position: "fixed",
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            width: "97%",
            gap: 2,
            px: 2,
            py: 2,
            backgroundColor: "rgba(92, 93, 97, 0.95)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderRadius: "16px",
            animation: "fadeIn 0.3s ease-in-out",
            zIndex: 1200,
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          {/* Services */}
          <Box>
            <Box
              onClick={() => setServicesOpen(!servicesOpen)}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "white",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              <Typography>Services</Typography>
              {servicesOpen ? <ExpandLess /> : <ExpandMore />}
            </Box>
            <Collapse in={servicesOpen}>
              <Box sx={{ pl: 2, display: "flex", flexDirection: "column" }}>
                {servicesData.sections.map((section) => (
                  <Link
                    key={section.id}
                    to={`/services/${section.id}`}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      color: "#ccc",
                      textDecoration: "none",
                      fontSize: "14px",
                      padding: "6px 0",
                    }}
                  >
                    {section.title}
                  </Link>
                ))}
              </Box>
            </Collapse>
          </Box>

          {/* Industries */}
          <Box>
            <Box
              onClick={() => setIndustriesOpen(!industriesOpen)}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "white",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              <Typography>Industries</Typography>
              {industriesOpen ? <ExpandLess /> : <ExpandMore />}
            </Box>
            <Collapse in={industriesOpen}>
              <Box sx={{ pl: 2, display: "flex", flexDirection: "column" }}>
                {industriesData.sections.map((section) => (
                  <Link
                    key={section.id}
                    to={`/industries/${section.id}`}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      color: "#ccc",
                      textDecoration: "none",
                      fontSize: "14px",
                      padding: "6px 0",
                    }}
                  >
                    {section.title}
                  </Link>
                ))}
              </Box>
            </Collapse>
          </Box>

          {/* Products */}
          <Box>
            <Box
              onClick={() => setProductsOpen(!productsOpen)}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "white",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              <Typography>Products</Typography>
              {productsOpen ? <ExpandLess /> : <ExpandMore />}
            </Box>
            <Collapse in={productsOpen}>
              <Box sx={{ pl: 2, display: "flex", flexDirection: "column" }}>
                {productsData.sections.map((section) => (
                  <Link
                    key={section.id}
                    to={`/products/${section.id}`}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      color: "#ccc",
                      textDecoration: "none",
                      fontSize: "14px",
                      padding: "6px 0",
                    }}
                  >
                    {section.title}
                  </Link>
                ))}
              </Box>
            </Collapse>
          </Box>

          {/* Other links */}
          <Link
            to="/portfolio"
            onClick={() => setMenuOpen(false)}
            style={{
              color: "white",
              fontSize: "16px",
              fontWeight: 500,
              marginTop: "10px",
            }}
          >
            Portfolio
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            style={{
              color: "white",
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            About
          </Link>

          <Box sx={{ mt: 2 }}>
            <ArcButton
              text="Work With Us"
              onClick={() => {
                const section = document.getElementById("reachout");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />
          </Box>
        </Box>
      )}

      {/* Desktop Dropdown Container */}
      <DropdownContainer
        className="dropdown-container"
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />
    </Box>
  );
};

export default memo(Navbar);
