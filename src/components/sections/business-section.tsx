import Image from "next/image";

const features = [
  {
    title: "Зростання бізнесу",
    description: "Менше хаосу — більше результатів.",
    items: null,
  },
  {
    title: "PlanxAi підходить для:",
    description: null,
    items: [
      "виробництва",
      "логістики",
      "стартапів",
      "малого та середнього бізнесу",
      "компаній, що масштабуються",
    ],
  },
  {
    title: "Інтерфейс",
    description: "Інтуїтивний інтерфейс дозволяє почати роботу за кілька хвилин.",
    items: null,
  },
  {
    title: "Безпека",
    description: "Ваші дані надійно захищені.",
    items: [
      "сучасні стандарти безпеки",
      "контроль доступу",
      "захист даних",
    ],
  },
];

export function BusinessSection() {
  return (
    <section id='business' className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-center text-3xl font-semibold text-[#121B2A] mb-16">
          Все, що потрібно для{" "}
          <span className="text-[#6C5CE7]">зростання</span>{" "}
          бізнесу
        </h2>

        <div className="grid grid-cols-2 gap-12 items-start">

          {/* Left — features */}
          <div className="flex flex-col gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-2 pl-4  p-4"
                style={{
                background: 'linear-gradient(0deg, rgba(200,210,255,0.15), rgba(0, 0, 0, 0))',
                backdropFilter: 'blur(9px)',
                }}

              >
                <h3 className="text-[#121B2A] text-lg font-semibold">
                  {feature.title}
                </h3>
                {feature.description && (
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                )}
                {feature.items && (
                  <ul className="flex flex-col gap-1">
                    {feature.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Right — dashboard images */}
          <div className="relative h-[500px]">
            {/* Back image */}
            <div className="absolute top-0 right-0 w-[85%]  overflow-hidden shadow-xl">
              <Image
                src="/images/screenshot.webp"
                alt="Dashboard"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>
            {/* Front image */}
            <div className="absolute bottom-0 left-0 w-[70%] overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/images/dashboard.webp"
                alt="Board"
                width={500}
                height={350}
                className="w-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}