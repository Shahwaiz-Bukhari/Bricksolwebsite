import React from "react";
import UseCases from "../pages/UseCases";
import ReachoutSection from "../reachout/ReachoutSection";
import Footer from "../footer/Footer";
import WhyItMatters from "../pages/WhyItMatters";
import SliderSection from "../featuredwork/SliderSection";
import AboutDrag from "./AboutDrag";
import AboutHero from "./AboutHero";
import Ceo from "./Ceo";

const About = () => {
  return (
    <>
      <AboutHero />
      <AboutDrag />
      <SliderSection />
      <UseCases />
      <WhyItMatters />
      <Ceo />
      <ReachoutSection />
      <Footer />
    </>
  );
};

export default About;
