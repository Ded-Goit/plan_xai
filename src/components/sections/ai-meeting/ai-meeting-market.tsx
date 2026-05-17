'use client';

export function AiMeetingMarket() {
    const reasons = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="1.5">
          <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      text: "Гібридна робота: 60% компаній перейшли на віддалений або змішаний формат.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="1.5">
          <rect x="2" y="2" width="20" height="20" rx="4" />
          <path d="M8 12h8M12 8v8" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      text: "Точність ASR: Точність розпізнавання мови досягла 94% у 2024 році.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="1.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      text: "Швидкість ШІ: Моделі як Gemini Flash обробляють години тексту за мілісекунди.",
    },
  ];

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

        {/* Productivity stats */}
        <div style={{ marginTop: '200px' }}>
          <p className="text-center text-white font-semibold text-center" style={{ fontSize: '32px' }}>
            Вплив на продуктивність
          </p>

          <div className="flex justify-around items-start" style={{ marginTop: '36px' }}>

            <div className="flex flex-col items-center gap-4">
              <span style={{ fontSize: '200px', fontWeight: 400, lineHeight: '100%', color: '#00D4FF' }}>
                30%
              </span>
              <p className="text-white text-center" style={{ fontSize: '32px' }}>
                Зменшення прострочених дедлайнів
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <span style={{ fontSize: '200px', fontWeight: 400, lineHeight: '100%', color: '#00D4FF' }}>
                14%
              </span>
              <p className="text-white text-center" style={{ fontSize: '32px' }}>
                Економія робочого часу на тиждень
              </p>
            </div>

          </div>
        </div>

        {/* Why now block */}
        <div style={{ marginTop: '200px' }} className="max-w-4xl mx-auto">
        <h2 className="text-white font-semibold" style={{ fontSize: '55px', fontWeight: 400, marginBottom: '60px' }}>
            Чому це актуально саме зараз?
        </h2>

        <div className="flex flex-col" style={{ gap: '60px' }}>
            {reasons.map((reason, i) => (
            <div key={i} className="flex items-center gap-5">
                <span className="flex-shrink-0">{reason.icon}</span>
                <p className="text-white" style={{ fontSize: '24px', lineHeight: '140%' }}>
                {reason.text}
                </p>
            </div>
            ))}
        </div>
        </div>

      </div>
    </section>
  );
}