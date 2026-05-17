import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { AiMeetingAssistant } from "@/components/sections/ai-meeting-assistant";
import { HowItWorks } from "@/components/sections/how-it-works";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <AiMeetingAssistant />
        <HowItWorks />
      </main>
    </>
  );
}