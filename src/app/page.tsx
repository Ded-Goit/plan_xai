import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <CtaSection />

      </main>
      <Footer />

    </>
  );
}