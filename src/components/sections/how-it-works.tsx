export function HowItWorks() {
  const steps = [
    {
      number: "1.",
      title: "Дашборд",
      description: "Огляд бізнесу в реальному часі: KPI, команда, задачі, ризики.",
    },
    {
      number: "2.",
      title: "AI знаходить ризики",
      description: "PlanxAi аналізує дані та допомагає приймати обґрунтовані рішення.",
    },
    {
      number: "3.",
      title: "AI пропонує рішення",
      description: "Ви отримаєте зрозумілі рекомендації та варіанти дій.",
    },
    {
      number: "4.",
      title: "Створення задач",
      description: "Система автоматично створює задачі та призначає відповідальних.",
    },
    {
      number: "5.",
      title: "Контроль та результат",
      description: "Відстежуйте виконання, KPI та отримуйте аналітику для кращих рішень.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-6">
      <div className="max-w-7xl mx-auto bg-[#0F1B2D] rounded-3xl px-12 py-16">
        
        {/* Title */}
        <h2 className="text-center text-3xl font-semibold text-white mb-16">
          Як працює{" "}
          <span className="text-blue-500">PlanxAi</span>
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-5 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-3">
              <span className="text-white text-xl font-semibold">
                {step.number}
              </span>
              <h3 className="text-white text-lg font-semibold leading-tight">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}