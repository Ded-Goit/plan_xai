import Link from "next/link";

export function AiMeetingHero() {
  return (
    <section className="pt-[150px] pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto relative">

        {/* Center image — absolutely centered behind content */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src="/images/people_and_their_thoughts.webp"
            alt="AI Meeting"
            className="w-[500px] h-auto object-contain"
            style={{ border: 'none', outline: 'none' }}
          />
        </div>

        {/* Top row — title left, description right */}
        <div className="flex justify-between items-start mb-10 relative z-10">

          {/* Title */}
          <div>
            <h1 className="text-[#121B2A] block" style={{ fontSize: '64px', fontWeight: 400, lineHeight: '100%', letterSpacing: '-0.02em' }}>
              AI Meeting
            </h1>
            <h1 className="text-[#6C5CE7] block" style={{ fontSize: '64px', fontWeight: 400, lineHeight: '100%', letterSpacing: '-0.02em' }}>
              Orchestrator
            </h1>
          </div>

          {/* Description */}
          <p className="text-[#121B2A] text-right text-[18px] max-w-[300px]">
            Перетворення пасивних розмов на миттєві результати в Trello та Telegram
          </p>
        </div>

        {/* Bottom row — left buttons, spacer, right buttons */}
        <div className="flex items-end justify-between relative z-10 mt-[220px]">

          {/* Left buttons */}
          <div className="flex flex-col gap-3">
            <Link
              href="https://drive.google.com/file/d/133eELLSJSoCq-DgOtF9-LJKzbNLLXNPR/view"
              className="px-6 py-2.5 rounded-[12px] border border-[#121B2A] text-[#121B2A] text-[14px] hover:bg-gray-50 transition-colors text-center"
            >
              Огляд проекту
            </Link>
             <Link
              href="/demo"
              className="px-6 py-2.5 rounded-[12px] bg-[#6C5CE7] text-white text-[14px] hover:bg-[#5a4bd1] transition-colors text-center"
            >
              Спробувати демо
            </Link>
          </div>

          {/* Spacer for center image area */}
          <div className="flex-1" />

          {/* Right buttons */}
          <div className="flex flex-col gap-3">
            <Link
              href="/ai-meeting"
              className="px-5 py-2 rounded-[12px] text-[14px] text-[#121B2A] text-center"
              style={{
                background:
                  'linear-gradient(white, white) padding-box, linear-gradient(135deg, #1A0F91, #89FFB2, #1A0F91) border-box',
                border: '4px solid transparent',
              }}
            >
              Ai-Meeting
            </Link>
            
            <Link
              href="/ai-assistant"
              className="px-5 py-2 rounded-[12px] text-[14px] text-[#121B2A] text-center"
              style={{
                background:
                  'linear-gradient(white, white) padding-box, linear-gradient(135deg, #1A0F91, #89FFB2, #1A0F91) border-box',
                border: '4px solid transparent',
              }}
            >
              Ai-помічник
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
