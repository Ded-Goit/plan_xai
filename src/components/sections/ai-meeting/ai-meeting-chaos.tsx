export function AiMeetingChaos() {
  const cards = [
    {
      title: "Втрата фокусу",
      description: "42% критичних завдань втрачаються або забуваються протягом перших 24 годин після обговорення.",
    },
    {
      title: "Марнування часу",
      description: "Середній менеджер витрачає до 1.6 годин на тиждень на ручне перенесення задачу таск-менеджери.",
    },
  ];

  return (
    <section className="py-[100px] px-6" 
      style={{
        background: 'linear-gradient(135deg, #EEF2FF 0%, #ffffff 50%, #EEF2FF 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-center text-[32px] font-semibold text-[#121B2A] mb-16">
          Хаос після зустрічі
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-[200px] max-w-3xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-4 p-8 rounded-[30px]"
              style={{
                width: '300px',
                height: '232px',
                background: 'linear-gradient(white, white) padding-box, linear-gradient(0deg, #FFFFFF, #6A8DFF, #FFFFFF) border-box',
                border: '2px solid transparent',
                backdropFilter: 'blur(9px)',
              }}
            >
              <h3 className="text-[#121B2A] text-[20px] font-semibold">
                {card.title}
              </h3>
              <p className="text-gray-500 text-[16px] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}