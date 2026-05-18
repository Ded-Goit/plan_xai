import Image from "next/image";
import Link from "next/link";
import { Anta } from 'next/font/google';

const anta = Anta({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anta'
});

export function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-gray-200" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto">

        {/* Top row */}
        <div className="flex items-start justify-between mb-10">

          {/* Logo */}
          <Link href="/" className={`flex items-center text-[60px] leading-none font-normal ${anta.className}`}>
            <Image
              src="/images/logo.webp"
              alt="PlanxAI logo"
              width={48}
              height={48}
              priority
            />
            <span className="text-black">plan</span>
            <span className="text-blue-500">x</span>
            <span className="text-black">Ai</span>
          </Link>

          {/* Nav columns */}
          <div className="flex gap-16">
            <div>
              <p className="text-[#121B2A] font-medium text-[14px] mb-3">Продукт</p>
              <ul className="flex flex-col gap-2">
                {['Можливості', 'Як це працює', 'Ролі'].map((item) => (
                  <li key={item} className="flex items-center gap-1.5 text-[#121B2A] text-[14px]">
                    <span className="text-[10px]">•</span>
                    <Link href="#" className="hover:text-[#6C5CE7] transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[#121B2A] font-medium text-[14px] mb-3">Компанія</p>
              <ul className="flex flex-col gap-2">
                {['Про нас', 'Контакти'].map((item) => (
                  <li key={item} className="flex items-center gap-1.5 text-[#121B2A] text-[14px]">
                    <span className="text-[10px]">•</span>
                    <Link href="#" className="hover:text-[#6C5CE7] transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[#121B2A] font-medium text-[14px] mb-3">Ресурси</p>
              <ul className="flex flex-col gap-2">
                {['Блог', 'Документація', 'Підтримка'].map((item) => (
                  <li key={item} className="flex items-center gap-1.5 text-[#121B2A] text-[14px]">
                    <span className="text-[10px]">•</span>
                    <Link href="#" className="hover:text-[#6C5CE7] transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* App section */}
          <div>
            <Link href="/" className={`flex  text-[60px] leading-none mb-4 font-normal ${anta.className}`}>
            
            <span className="text-black">plan</span>
            <span className="text-blue-500">x</span>
            <span className="text-black">Ai App</span>
          </Link>
            <div className="flex flex-row gap-3">
              <Link href="#">
                <img src="/icons/app-store-badge2.svg" alt="App Store" className="h-10 w-auto" />
              </Link>
              <Link href="#">
                <img src="/icons/Link.svg" alt="Google Play" className="h-10 w-auto" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between border-t border-gray-200 pt-6">
          <p className="text-[#121B2A] text-[14px]">© 2026 PlanxAi. All rights reserved.</p>
          <p className="text-[#121B2A] text-[14px]">Команда дизайнерів та розробників сайту planxAi</p>
        </div>

      </div>
    </footer>
  );
}   