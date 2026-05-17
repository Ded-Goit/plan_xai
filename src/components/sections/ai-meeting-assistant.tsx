export function AiMeetingAssistant() {
  const features = [
    {
      title: "Автоматичний запис та транскрипція",
      description: "AI записує зустрічі та перетворює її в точний текстовий транскрипт.",
    },
    {
      title: "Розумні підсумки",
      description: "Отримуйте короткий підсумок зустрічі з ключовими моментами за кілька секунд.",
    },
    {
      title: "Action items",
      description: "AI автоматично знаходить задачі та відповідальних у розмові.",
    },
    {
      title: "Пошук по зустрічах",
      description: "Знаходьте потрібну інформацію в минулих дзвінках за секунди.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#F0F4FF]">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-center text-3xl font-semibold text-gray-900 mb-6">
          <span className="text-blue-500 font-semibold">AI Meeting Assistant</span>{" "}
          для ваших дзвінків
        </h2>

        {/* Description */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <p className="text-gray-600 text-base leading-relaxed">
            Ваш розумний помічник автоматично записує зустрічі, створює підсумки та
            формує задачі — щоб ви могли зосередитись на розмові, а не на нотатках.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            AI підключається до ваших онлайн-зустрічей, аналізує розмову та миттєво
            створює структурований підсумок: ключові рішення, важливі інсайти та список задач.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-4 gap-6 mb-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#1A2236] rounded-2xl p-6 flex flex-col gap-4"
            >
              <h3 className="text-white text-base font-semibold leading-snug">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="px-8 py-3 rounded-full border-2 border-blue-500 text-blue-500 text-base font-medium hover:bg-blue-500 hover:text-white transition-colors">
            Спробувати AI Meeting
          </button>
        </div>

      </div>
    </section>
  );
}