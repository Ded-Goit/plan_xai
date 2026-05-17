import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AiMeetingHero } from "@/components/sections/ai-meeting/ai-meeting-hero";
import { AiMeetingChaos } from "@/components/sections/ai-meeting/ai-meeting-chaos";
import { AiMeetingEngine } from "@/components/sections/ai-meeting/ai-meeting-engine";
import { AiMeetingSmartSummary } from "@/components/sections/ai-meeting/ai-meeting-smart-summary";
import { AiMeetingArchitecture } from "@/components/sections/ai-meeting/ai-meeting-architecture";
import { AiMeetingTasks } from "@/components/sections/ai-meeting/ai-meeting-tasks";


export default function AiMeetingPage() {
  return (
    <>
      <Header />
      <main>
        <AiMeetingHero />
        <AiMeetingChaos />
        <AiMeetingEngine />
      <AiMeetingSmartSummary />
      <AiMeetingArchitecture />
      <AiMeetingTasks />

      </main>
      <Footer />
    </>
  );
}