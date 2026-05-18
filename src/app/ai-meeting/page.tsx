import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AiMeetingHero } from "@/components/sections/ai-meeting-sections/ai-meeting-hero";
import { AiMeetingChaos } from "@/components/sections/ai-meeting-sections/ai-meeting-chaos";
import { AiMeetingEngine } from "@/components/sections/ai-meeting-sections/ai-meeting-engine";
import { AiMeetingSmartSummary } from "@/components/sections/ai-meeting-sections/ai-meeting-smart-summary";
import { AiMeetingArchitecture } from "@/components/sections/ai-meeting-sections/ai-meeting-architecture";
import { AiMeetingTasks } from "@/components/sections/ai-meeting-sections/ai-meeting-tasks";
import { AiMeetingMarket } from "@/components/sections/ai-meeting-sections/ai-meeting-market";
import {AiMeetingAdvantages} from "@/components/sections/ai-meeting-sections/ai-meeting-advantages";
import {AiMeetingVision} from "@/components/sections/ai-meeting-sections/ai-meeting-vision";


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
      <AiMeetingMarket />
      <AiMeetingAdvantages />
      <AiMeetingVision />
      </main>
      <Footer />
    </>
  );
}