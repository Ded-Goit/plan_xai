import Link from "next/link";
import Image from "next/image";
import { Anta } from 'next/font/google';

const navLinks = [
  { label: "Задачі", href: "/dashboard/tasks" },
  { label: "KPI", href: "/dashboard/kpi" },
  { label: "Команда", href: "/dashboard/team" },
  { label: "Ризики", href: "/dashboard/risks" },
  { label: "Звіти", href: "/dashboard/reports" },
];

const anta = Anta({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anta'
});
export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#EEF2FF] flex flex-col">

      {/* Header */}
      <header className="px-8 py-4 flex items-center justify-between border-b border-gray-200 bg-white">
        <Link href="/" className={`flex items-center text-[48px] leading-none font-normal ${anta.className}`}>
            <Image
              src="/images/logo.webp"
              alt="PlanxAI logo"
              width={60}
              height={60}
              priority
            />
            <span className="text-black">plan</span>
            <span className="text-blue-500">x</span>
            <span className="text-black">Ai</span>
          </Link>

        <Link
          href="/"
          className="flex items-center gap-2 text-[14px] text-sm text-gray-500 hover:text-[#121B2A] transition-colors"
        >
          <Image src="/icons/arrow-left.svg" alt="back" width={60} height={1} />
          Повернутись назад
        </Link>
      </header>

      {/* Content */}
    <div className="flex-1 flex flex-col items-center justify-center gap-6 text-center px-6">
        <div className="flex flex-col items-center gap-6 max-w-[400px] w-full mx-auto">
            <h1
            className="text-[#121B2A]-400"
            style={{ fontSize: '200px', lineHeight: '1', letterSpacing: '-0.02em' }}
            >
            404
            </h1>

            <h2 className="text-[#121B2A] text-[24px] font-semibold">
            Ми це зламали... жартуємо 🙂
            </h2>

            <p className="text-[#121B2A]-500 text-[18px] ">
            Але не хвилюйтесь — потрібні сторінки ще попереду.
            </p>

            {/* Navigation */}
            <div className="flex flex-col items-center gap-4 mt-8">
            <p className="text-[#121B2A]-400 text-[12px]">скористайтесь навігацією:</p>
            <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                <Link
                    key={link.label}
                    href={link.href}
                    className="text-[#6C5CE7] text-[14px] hover:underline transition-colors"
                >
                    {link.label}
                </Link>
                ))}
            </div>
            </div>

        </div>
    </div>
    </ div>
  );
}