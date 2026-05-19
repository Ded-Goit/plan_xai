import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Footer } from "@/components/layout/footer";
import { BusinessSection } from "@/components/sections/business-section";
import { RolesSection } from "@/components/sections/roles-section";
import { AiMeetingAssistant } from "@/components/sections/ai-meeting-assistant";
import { HowItWorks } from "@/components/sections/how-it-works";
import { DemoResults } from "@/components/demo/demo-results";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <CtaSection />
        <DemoResults />
        <BusinessSection />
        <RolesSection />
        <AiMeetingAssistant />
        <HowItWorks />
      </main>
      
      <Footer />

    </>
  );
}