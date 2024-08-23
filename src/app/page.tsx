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
        <Features />
        <ContactSection />
        <IntroSection />
      </main>
    </>
  );
}
