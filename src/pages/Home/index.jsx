import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FeatureSection } from "../../components/FeatureSection";
import { Header } from "../../components/Header";
import { HeroSection } from "../../components/HeroSection";

import { Footer } from "@/components/Footer";
import { NewLetterSection } from "@/components/NewLetterSection";
import { PriceSection } from "@/components/PriceSection";
import { StaticSection } from "@/components/StaticSection";

export const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div>
      <Header />

      <HeroSection />
      <FeatureSection />
      <StaticSection />
      <PriceSection />
      <NewLetterSection />
      <Footer />
    </div>
  );
};
