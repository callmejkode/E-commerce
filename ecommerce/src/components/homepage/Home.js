import React from "react";
import FourPromises from "./FourPromises";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Trusted from "./Trusted";

function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <FourPromises />
      <Trusted />
    </>
  );
}

export default Home;
