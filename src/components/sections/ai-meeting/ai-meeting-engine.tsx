export function AiMeetingEngine() {
  const items = [
    {
      title: "Миттєвий Summary",
      description: "Автоматичний звіт у Telegram через секунди після закінчення.",
    },
    {
      title: "Персональні задачі",
      description: "Кожен учасник отримує свою картку в Trello без жодного кліку.",
    },
    {
      title: "Diarization-Aware",
      description: "ШІ точно знає, хто що обіцяв зробити.",
    },
  ];

  return (
    <section
      className="px-6"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #E8EEFF 50%, #ffffff 100%)',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-[32px] font-bold text-[#121B2A] mb-16">
          Автоматизований "Двигун Дій"
        </h2>

        <div className="grid grid-cols-2 gap-16 items-start">

          {/* Left — list */}
            <div className="flex flex-col" style={{ gap: '33px' }}>
            {items.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                <span
                    className="mt-2 flex-shrink-0 rounded-full bg-[#6C5CE7]"
                    style={{ width: '7px', height: '7px' }}
                />
                <p style={{ fontFamily: 'var(--font-family)', fontWeight: 500, fontSize: '24px', lineHeight: '117%' }} className="text-[#121B2A]">
                    <span className="text-[#6C5CE7]">{item.title}:</span>{" "}
                    {item.description}
                </p>
                </div>
            ))}
            </div>

          {/* Right — device mockup frame */}
          <div
            className="overflow-hidden"
            style={{
                width: '674px',
                height: '504px',
                background: '#1a1a2e',
                padding: '10px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
            }}
          >
            <div className="rounded-[12px] overflow-hidden">
              <img
                src="/images/chart.webp"
                alt="Engine"
                className="w-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}