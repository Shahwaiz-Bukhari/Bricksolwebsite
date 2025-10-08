import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NavItems = ({ navItems, activeMenu, handleOpen, handleClose }) => {
  const handleClick = (item, isDropdown) => {
    if (isDropdown) {
      if (activeMenu === item) {
        handleClose();
      } else {
        handleOpen(item);
      }
    }
  };
  
  return (
    <Box
      sx={{
        flex: 1,
        display: { xs: "none", md: "flex" },
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: 2, md: 4 },
      }}
    >
      {navItems.map((item) => {
        const isDropdown = ["Services", "Industries", "Products"].includes(item);

        return (
          <Box
            key={item}
            onMouseEnter={() => isDropdown && handleOpen(item)}
            onMouseLeave={() => isDropdown && handleClose()}
            onClick={() => handleClick(item, isDropdown)} 
            sx={{ position: "relative", cursor: "pointer" }}
          >
            <Typography
              component={isDropdown ? "span" : Link}
              to={isDropdown ? undefined : `/${item.toLowerCase()}`}
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                color: "white",
                fontWeight: 500,
                display: "inline-flex",
                alignItems: "flex-start",
                gap: 0.5,
                textDecoration: "none",
              }}
            >
              {item}
              {isDropdown && (
                <Box
                  component="span"
                  sx={{
                    fontSize: "10px",
                    color: "#888",
                    fontWeight: 500,
                    position: "relative",
                    top: "-6px",
                    ml: 0.5,
                  }}
                >
                  {item === "Services" && "05"}
                  {item === "Industries" && "07"}
                  {item === "Products" && "09"}
                </Box>
              )}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default NavItems;
