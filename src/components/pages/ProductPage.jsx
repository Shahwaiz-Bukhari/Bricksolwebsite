import React from "react";
import HeroLayout from "./HeroLayout";
import Drag from "./utils/Drag";
import OurGoal from "./OurGoal";
import UseCases from "./UseCases";
import ReachoutSection from "../reachout/ReachoutSection";
import Footer from "../footer/Footer";
import WhyItMatters from "./WhyItMatters";
import Projects from "../projects/Projects";

const ProductPage = () => {

  return (
    <>
      <HeroLayout />
      <Drag />
      <OurGoal />
      <UseCases />
      <WhyItMatters />
      <Projects />
      <ReachoutSection />
      <Footer />
    </>
  );
};

export default ProductPage;
