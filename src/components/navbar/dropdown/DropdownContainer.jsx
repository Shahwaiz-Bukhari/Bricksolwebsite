import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { ServicesDropdown, IndustriesDropdown, ProductsDropdown } from "./CombinedCategoryDropdown";

const DropdownContainer = ({ activeMenu, setActiveMenu }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    if (activeMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeMenu, setActiveMenu]);

  const renderDropdown = () => {
    switch (activeMenu) {
      case "Services":
        return <ServicesDropdown />;
      case "Industries":
        return <IndustriesDropdown />;
      case "Products":
        return <ProductsDropdown />;
      default:
        return null;
    }
  };

  if (!activeMenu) return null;

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "absolute",
        top: "90%",
        left: 0,
        right: 0,
        zIndex: 1000,
        mt: 1,
        height: "450px",
        overflow: "hidden",
        transition: "opacity 0.3s ease",
        opacity: activeMenu ? 1 : 0,
      }}
    >
      {renderDropdown()}
    </Box>
  );
};

export default DropdownContainer;
