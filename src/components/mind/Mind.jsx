import React, { useState, useEffect, lazy, Suspense } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import theme from "../../styles/theme";

import NavBar from "../navbar/NavBar";
import Home from "../home/Home";
import ClientsGrid from "../clientsGrid/ClientsGrid";
import Featured from "../featuredwork/Featured";
import SliderSection from "../featuredwork/SliderSection";
import CarouselSection from "../carouselSection/CarouselSection";
import ServicesSection from "../servicessection/ServicesSection";
import ClientExperience from "../experience/ClientExperience";
import ReachoutSection from "../reachout/ReachoutSection";
import Footer from "../footer/Footer";
import BusinessCard from "../businesscard/BusinessCard";
import BossCard from "../bosscard/BossCard";

import { CalculatorMain } from "../calculator/calculatormain/CalculatorMain";
import Projects from "../projects/Projects";
import ProductShowcase from "../projects/ProductShowcase";
import { HashLoader } from "react-spinners"; 

const CategoryPage = lazy(() => import("../pages/CategoryPage"));
const ProductPage = lazy(() => import("../pages/ProductPage"));
const Portfolio = lazy(() => import("../portfolio/Portfolio"));
const About = lazy(() => import("../about/About"));

const Layout = () => {
  const location = useLocation();
  const hideNavbar =   location.pathname === "/asfand-card" || location.pathname === "/abdul-card";

  return (
    <>
      {!hideNavbar && <NavBar />}

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <ProductShowcase />
                <ClientsGrid />
                <Projects />
                <Featured />
                <SliderSection />
                <CarouselSection />
                <ServicesSection />
                <ClientExperience />
                <ReachoutSection />
                <Footer />
              </>
            }
          />
          <Route
            path="/services/:categoryId"
            element={<CategoryPage type="services" />}
          />
          <Route
            path="/industries/:categoryId"
            element={<CategoryPage type="industries" />}
          />
          <Route path="/products/:categoryId" element={<ProductPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculator" element={<CalculatorMain />} />
          <Route path="/asfand-card" element={<BusinessCard />} />
          <Route path="/abdul-card" element={<BossCard />} />
        </Routes>
      </Suspense>
    </>
  );
};

const Mind = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            bgcolor: "background.default",
            minHeight: "100vh",
            position: "relative",
          }}
        >
          <Layout />

          {showPreloader && (
            <Box
              sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bgcolor: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2000,
              }}
            >
              <HashLoader color="#97af90" size={80} />
            </Box>
          )}
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default Mind;
