const steps = [
  {
    title: "Webhook",
    description: "Прийом аудіо або транскрипту з Google Meet/Zoom.",
    position: "bottom",
  },
  {
    title: "Gemini 2.0",
    description: "Обробка тексту з а мілісекунди через модель Flash.",
    position: "top",
  },
  {
    title: "JSON Parser",
    description: "Структурування даних для різних сервісів.",
    position: "bottom",
  },
  {
    title: "Distribution",
    description: "Паралельна відправка в Telegram та Trello API.",
    position: "top",
  },
];

export function AiMeetingArchitecture() {
  return (
    <section className="py-20 px-6" style={{ background: '#0F1B2D' }}>
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-center text-[32px] font-semibold text-white mb-20">
          Технічна архітектура (Make.com)
        </h2>

        {/* Timeline */}
        <div className="relative flex items-center justify-between">

          {/* Line */}
          <div
            className="absolute left-0 right-0 h-[2px]"
            style={{ background: '#00D4FF', top: '50%', transform: 'translateY(-50%)' }}
          />

          {steps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col items-center" style={{ width: '220px' }}>

              {/* Top text */}
              {step.position === "top" && (
                <div className="flex flex-col gap-2 mb-8 text-left" style={{ minHeight: '100px' }}>
                  <h3 className="text-[#00D4FF] text-[24px] font-medium">{step.title}</h3>
                  <p className="text-gray-300 text-[14px] leading-relaxed">{step.description}</p>
                </div>
              )}
              {step.position === "bottom" && (
                <div style={{ minHeight: '100px' }} className="mb-8" />
              )}

              {/* Dot */}
              <div
                className="rounded-full z-10"
                style={{ width: '38px', height: '38px', background: '#00D4FF', flexShrink: 0 }}
              />

              {/* Bottom text */}
              {step.position === "bottom" && (
                <div className="flex flex-col gap-2 mt-8 text-left" style={{ minHeight: '100px' }}>
                  <h3 className="text-[#00D4FF] text-[18px] font-medium">{step.title}</h3>
                  <p className="text-gray-300 text-[14px] leading-relaxed">{step.description}</p>
                </div>
              )}
              {step.position === "top" && (
                <div style={{ minHeight: '100px' }} className="mt-8" />
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}