import ContactUs from "@/components/homepage/contact-us";
import CountAchievementSection from "@/components/homepage/count-achievement-section";
import HeroSection from "@/components/homepage/hero-section";
import ProductSliders from "@/components/dealers/product-sliders";
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
