export function CtaSection() {
  return (
    <section className="py-20 px-6">
      <div
        className="max-w-7xl mx-auto rounded-3xl py-16 px-12 flex flex-col items-center gap-10"
        style={{ background: '#0F1B2D' }}
      >
        {/* Title */}
        <h2 className="text-center text-2xl font-semibold text-white">
          Готові вивести бізнес на новий рівень з{" "}
          <span className="text-[#6C5CE7]">PlanxAi?</span>
        </h2>

        {/* Badge buttons */}
        <div className="flex items-center gap-6">
          {["Швидкий старт", "Підтримка 24/7", "Гнучкі тарифи"].map((label) => (
            <button
              key={label}
              className="px-6 py-3 rounded-full text-white text-sm border border-white/30 hover:border-white transition-colors"
            >
              {label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <button className="px-8 py-3 rounded-full bg-[#6C5CE7] text-white text-base font-medium hover:bg-[#5a4bd1] transition-colors">
          Спробувати демо
        </button>
      </div>
    </section>
  );
}