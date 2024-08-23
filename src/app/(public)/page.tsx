import ContactUs from "@/components/dealers/contact-us";
import CountAchievementSection from "@/components/dealers/count-achievement-section";
import HeroSection from "@/components/dealers/hero-section";
import ProductSliders from "@/components/homepage/product-sliders";
import React from "react";

const InfoSenter = () => {
  return (
    <main>
      <HeroSection />
      <CountAchievementSection />
      <ProductSliders />
      <div
        className="relative z-10 w-full h-64"
        style={{
          background: "url('/home-bg-mobile-2.png') no-repeat",
          backgroundPositionY: "-200%",
        }}
      />
      <ContactUs />
    </main>
  );
};

export default InfoSenter;
