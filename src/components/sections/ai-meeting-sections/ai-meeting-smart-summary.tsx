export function AiMeetingSmartSummary() {
  return (
    <section
      className="py-20 px-6"
      style={{ background: '#0F1B2D' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-center text-[32px] font-semibold text-white mb-16">
          Smart Summary
        </h2>

        {/* Card */}
                    <div
            className="mx-auto grid items-center p-10 rounded-2xl"
            style={{
                width: '988px',
                gridTemplateColumns: '300px 297px 1fr',
                gap: '0px',
                marginTop: '60px',
            }}
            >
            {/* Left — image */}
            <div className="overflow-hidden" style={{ width: '350px', height: '300px' }}>
                <img
                src="/images/tgimg.webp"
                alt="Smart Summary"
                className="w-full h-full object-cover"
                />
            </div>

            {/* Spacer */}
            <div style={{ width: '297px' }} />

            {/* Right — text */}
            <div className="flex flex-col">
            <h3 className="text-[#00D4FF]" style={{ fontSize: '24px', fontWeight: 500 }}>
                Telegram Awareness
            </h3>
            <p className="text-gray-300" style={{ fontSize: '14px', lineHeight: '1.6', marginTop: '30px' }}>
                Замість довгих аудіозаписів — лаконічний (laconic) звіт у командному чаті. ШІ виділяє лише головне, щоб команда залишалася в контексті навіть удорозі.
            </p>
            <p className="text-gray-300" style={{ fontSize: '14px', lineHeight: '1.6', marginTop: '40px' }}>
                Результат: 100% залученість команди до прийнятих рішень.
            </p>
            </div>
            </div>
      </div>
    </section>
  );
}
