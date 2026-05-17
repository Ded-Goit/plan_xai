import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { BusinessSection } from "@/components/sections/business-section";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <BusinessSection />

      </main>
    </>
  );
}