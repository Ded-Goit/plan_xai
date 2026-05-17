import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { BusinessSection } from "@/components/sections/business-section";
import { RolesSection } from "@/components/sections/roles-section";
import { AiMeetingAssistant } from "@/components/sections/ai-meeting-assistant";
import { HowItWorks } from "@/components/sections/how-it-works";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <BusinessSection />
        <RolesSection />
        <AiMeetingAssistant />
        <HowItWorks />
      </main>
    </>
  );
}