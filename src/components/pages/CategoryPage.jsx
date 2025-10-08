import React from "react";
import HeroLayout from "./HeroLayout";
import Drag from "./utils/Drag";
import OurGoal from "./OurGoal";
import UseCases from "./UseCases";
import ReachoutSection from "../reachout/ReachoutSection";
import Footer from "../footer/Footer";
import WhyItMatters from "./WhyItMatters";

const CategoryPage = () => {
  return (
    <>
      <HeroLayout />
      <Drag />
      <OurGoal />
      <UseCases />
      <WhyItMatters />
      <ReachoutSection />
      <Footer />
    </>
  );
};

export default CategoryPage;
