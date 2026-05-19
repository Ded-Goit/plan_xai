const cards = [
  {
    image: "/images/board.webp",
    title: "TrelloCards",
    description: 'Автоматичне створення карток у списку "To Do".',
  },
  {
    image: "/images/search.webp",
    title: "Assignees",
    description: "Прив'язка задачі до конкретного учасника за іменем.",
  },
  {
    image: "/images/timing_diagram.webp",
    title: "Deadlines",
    description: "Інтелектуальне визначення термінів виконання.",
  },
];

export function AiMeetingTasks() {
  return (
    <section
      className="py-20 px-6"
      style={{ background: 'rgba(234, 241, 255, 1)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-center text-[32px] font-semibold text-[#121B2A] mb-16">
          Точне призначення задач
        </h2>

        {/* Cards */}
        <div className="flex justify-center" style={{ gap: '97px' }}>
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-2xl overflow-hidden"
              style={{
                width: '402px',
                height: '440px',
                background: 'rgba(227, 236, 255, 1)',
                padding: '40px',
              }}
            >
              {/* Image */}
              <div
                className="rounded-xl overflow-hidden flex-shrink-0"
                style={{ width: '100%', height: '182px' }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div
                className="flex flex-col gap-3 text-center"
                style={{ marginTop: '40px' }}
              >
                <h3
                  className="text-[#121B2A] text-[22px] font-medium"
                  style={{ letterSpacing: '0.15em' }}
                >
                  {card.title}
                </h3>
                <p className="text-#121B2A-500 text-[16px] leading-relaxed">
                  {card.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}