import React, { useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { ArrowForward, ChevronRight } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const CategoryDropdown = ({
  sectionsData = [],
  contentData,
  mainTitle,
  showLeftSection = true,
}) => {
  const location = useLocation();
  const initialSectionId = location.pathname.split("/").pop();

  const [activeSection, setActiveSection] = useState(() => {
    if (initialSectionId && sectionsData.some((s) => s.id === initialSectionId)) {
      return initialSectionId;
    }
    if (mainTitle === "Services" || mainTitle === "Industries") {
      return sectionsData[0]?.id || "";
    }
    return "";
  });

  if (sectionsData.length === 0) {
    return (
      <Paper
        elevation={8}
        sx={{ backgroundColor: "#e5efff", borderRadius: 3, p: 4 }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, color: "#1e293b" }}>
          No Sections Available
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper
      elevation={8}
      sx={{
        backgroundColor: "#e5efff",
        borderRadius: 3,
        overflow: "hidden",
        mx: 3,
        display: "flex",
        height: "450px",
        minHeight: "350px",
      }}
    >
      {/* Left Section with Scroll */}
      {showLeftSection && (
        <Box
          sx={{
            width: 280,
            borderRight: "1px solid #e2e8f0",
            backgroundColor: "#f8fafc",
            p: 2,
            height: "100%",
            overflowY: "auto",
          }}
        >
          {contentData &&
            Object.keys(contentData).map((sectionKey) => {
              const section = contentData[sectionKey];
              const sectionLink = `/${mainTitle.toLowerCase()}/${sectionKey.toLowerCase()}`;

              const isLinked =
                mainTitle === "Services" || mainTitle === "Industries";
              const SectionComponent = isLinked ? Link : "div";

              return (
                <Box
                  key={sectionKey}
                  component={SectionComponent}
                  to={isLinked ? sectionLink : undefined}
                  onMouseEnter={() => setActiveSection(sectionKey)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent:
                      mainTitle === "Products" ? "flex-start" : "space-between",
                    px: 3,
                    py: 2,
                    borderRadius: 2,
                    cursor: "pointer",
                    mb: 1,
                    textDecoration: "none",
                    color: "inherit",
                    transition: "all 0.2s ease",
                    backgroundColor:
                      activeSection === sectionKey ? "white" : "transparent",
                    "&:hover": {
                      backgroundColor: "white",
                      boxShadow:
                        activeSection === sectionKey
                          ? "0 4px 12px rgba(0,0,0,0.05)"
                          : "none",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: "#1e293b",
                      fontSize: "14px",
                    }}
                  >
                    {section.title}
                  </Typography>

                  {/* Hide ChevronRight for Products */}
                  {(mainTitle === "Services" || mainTitle === "Industries") && (
                    <ChevronRight sx={{ fontSize: 20, color: "#64748b" }} />
                  )}
                </Box>
              );
            })}
        </Box>
      )}

      {/* Right Section  */}
      <Box
        sx={{
          flex: 1,
          p: 4,
          backgroundColor: "white",
          overflowY: "auto",
          height: "100%",
        }}
      >
        {!showLeftSection ? (
          // Products 
          <>
            {mainTitle !== "Products" && (
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, mb: 2, color: "#0f172a" }}
              >
                {mainTitle}
              </Typography>
            )}

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 3,
              }}
            >
              {sectionsData.map((section) => {
                const sectionContent = contentData[section.id];
                return (
                  <Box key={section.id}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 700,
                        color: "#1e293b",
                        mb: 2,
                      }}
                    >
                      {sectionContent.title}
                    </Typography>

                    {sectionContent.items.map((item, idx) => {
                      const productLink = `/${mainTitle.toLowerCase()}/${item.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`;
                      return (
                        <Box
                          key={idx}
                          component={Link}
                          to={productLink}
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            cursor: "pointer",
                            textDecoration: "none",
                            transition: "all 0.2s ease",
                            ...(mainTitle !== "Products" && {
                            "&:hover": {
                              backgroundColor: "#f8fafc",
                              transform: "translateY(-2px)",
                              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                            },
                            }),
                          }}
                        >
                          <Typography
                            sx={{
                              fontWeight: 600,
                              color: "#1e293b",
                              mb: 1,
                              fontSize: "15px",
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            sx={{
                              color: "#64748b",
                              fontSize: "13px",
                              lineHeight: 1.4,
                            }}
                          >
                            {item.description}
                          </Typography>
                        </Box>
                      );
                    })}
                  </Box>
                );
              })}
            </Box>
          </>
        ) : (
          contentData[activeSection] && (
            <>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, color: "#1e293b" }}
                >
                  {contentData[activeSection].title}
                </Typography>

                <ArrowForward sx={{ fontSize: 20, color: "#64748b" }} />
              </Box>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 3,
                  mt: 2,
                }}
              >
                {contentData[activeSection].items.map((item, index) => {
                  const linkPath = `/${mainTitle.toLowerCase()}/${item.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`;

                  const isProduct = mainTitle === "Products";
                  const ItemComponent = isProduct ? Link : "div";

                  return (
                    <Box
                      key={index}
                      component={ItemComponent}
                      to={isProduct ? linkPath : undefined}
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        cursor: "pointer",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          backgroundColor: "#f8fafc",
                          transform: "translateY(-2px)",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "#1e293b",
                          mb: 1,
                          fontSize: "15px",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#64748b",
                          fontSize: "13px",
                          lineHeight: 1.4,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </>
          )
        )}
      </Box>
    </Paper>
  );
};

export default CategoryDropdown;
