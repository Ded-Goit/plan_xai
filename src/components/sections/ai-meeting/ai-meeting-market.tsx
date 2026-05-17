'use client';

export function AiMeetingMarket() {
  return (
    <section className="py-20 px-6" style={{ background: "#0F1B2D" }}>
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-center text-[32px] font-semibold text-white mb-16">
          Ринок AI Meeting Assistants
        </h2>

        {/* Chart image */}
        <div className="flex justify-center">
          <img
            src="/images/frame.webp"
            alt="AI Meeting Market Chart"
            className="w-full max-w-4xl object-contain"
          />
        </div>


      </div>
    </section>
  );
}