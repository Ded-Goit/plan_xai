import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { HowItWorks } from "@/components/sections/how-it-works";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <HowItWorks />

      </main>
    </>
  );
}