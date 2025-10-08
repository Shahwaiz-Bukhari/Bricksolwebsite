import React from "react";
import UseCases from "../pages/UseCases";
import ReachoutSection from "../reachout/ReachoutSection";
import Footer from "../footer/Footer";
import WhyItMatters from "../pages/WhyItMatters";
import SliderSection from "../featuredwork/SliderSection";
import PortfolioHero from "./PortfolioHero";
import PortfolioDrag from "./PortfolioDrag";
import CarouselSection from "../carouselSection/CarouselSection";

const Portfolio = () => {
  return (
    <>
      <PortfolioHero />
      <PortfolioDrag />
      <SliderSection />
      <CarouselSection />
      <UseCases />
      <WhyItMatters />
      <ReachoutSection />
      <Footer />
    </>
  );
};

export default Portfolio;
