import ContactSection from "@/components/contact-section";
import Features from "@/components/features";
import HeroSection from "@/components/hero-section";
import IntroSection from "@/components/intro-section";
import Products from "@/components/products";

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
