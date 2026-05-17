import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { RolesSection } from "@/components/sections/roles-section";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <RolesSection />

      </main>
    </>
  );
}