import ContactSection from "@/components/homepage/contact-section";
import Features from "@/components/homepage/features";
import HeroSection from "@/components/homepage/hero-section";
import IntroSection from "@/components/homepage/intro-section";
import Products from "@/components/homepage/products";

export default function Home() {
  return (
    <>
      <main className="">
        <HeroSection />
        <Products />
        <div
          className="relative z-10 w-full h-64"
          style={{
            background: "url('/home-bg-mobile.png') no-repeat",
            backgroundPositionY: "-200%",
          }}
        />
        <Features />
        <ContactSection />
        <IntroSection />
      </main>
    </>
  );
}
