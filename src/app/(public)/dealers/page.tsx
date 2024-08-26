import ContactSection from "@/components/dealers/contact-section";
import Features from "@/components/dealers/features";
import HeroSection from "@/components/dealers/hero-section";
import IntroSection from "@/components/dealers/intro-section";
import Products from "@/components/dealers/products";

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
