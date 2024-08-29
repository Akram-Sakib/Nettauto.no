import ContactUs from "@/components/homepage/contact-us";
import CountAchievementSection from "@/components/homepage/count-achievement-section";
import HeroSection from "@/components/homepage/hero-section";
import ProductSliders from "@/components/homepage/product-sliders";
import React from "react";

const InfoSenter = () => {
  return (
    <div>
      <HeroSection />
      <CountAchievementSection />
      <ProductSliders />
      <div
        className="relative z-10 w-full h-64 hidden sm:block"
        style={{
          background: "url('/home-bg-mobile-2.png') no-repeat",
          backgroundPositionY: "-200%",
        }}
      />
      <ContactUs />
    </div>
  );
};

export default InfoSenter;
