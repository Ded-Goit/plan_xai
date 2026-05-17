import Image from "next/image";

const roles = [
  {
    image: "/images/entrepreneur.webp",
    title: "Підприємець",
    subtitle: "Стратегія та рішення",
    items: [
      "Дашборд та KPI",
      "AI рекомендації",
      "Контроль ризиків",
      "Прийняття рішень",
    ],
  },
  {
    image: "/images/manager.webp",
    title: "Менеджер",
    subtitle: "Управління командою",
    items: [
      "Планування задач",
      "Розподіл ресурсів",
      "Контроль виконання",
      "Звітність",
    ],
  },
  {
    image: "/images/employee.webp",
    title: "Працівник",
    subtitle: "Виконання задач",
    items: [
      "Мої задачі",
      "Інструкції та матеріали",
      "Звіт про виконання",
      "Особистий прогрес",
    ],
  },
  {
    image: "/images/robot.webp",
    title: "AI Mentor",
    subtitle: "Ваш AI-помічник",
    items: [
      "Рекомендації AI",
      "Аналіз даних",
      "Прогнози та ризики",
      "Навчання команди",
    ],
  },
];

export function RolesSection() {
  return (
    <section className="py-20 px-6 bg-[#F0F4FF]">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-3xl font-semibold text-gray-900 mb-16">
          Ролі
        </h2>

        <div className="grid grid-cols-4 gap-6">
          {roles.map((role) => (
           <div
            key={role.title}
           className="flex flex-col gap-[22px] bg-transparent backdrop-blur-[9px] relative"
            style={{
            width: '300px',
            borderRadius: '30px',
            padding: '20px 18px',
            background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #FFFFFF, #6A8DFF, #FFFFFF) border-box',
            border: '2px solid transparent'
            }}
            >
            <Image
                src={role.image}
                alt={role.title}
                width={40}
                height={40}
                className="rounded-full object-cover w-[40px] h-[40px]"
            />

            <div>
                <h3 className="text-[#121B2A] text-lg font-semibold">
                {role.title}
                </h3>
                <p className="text-[#6C5CE7] text-sm">
                {role.subtitle}
                </p>
            </div>

            <ul className="flex flex-col gap-2">
                {role.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[#121B2A]">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                    {item}
                </li>
                ))}
            </ul>

            <a href="#" className="text-sm text-[#6C5CE7] transition-colors mt-auto">
                Дізнатися більше →
            </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}