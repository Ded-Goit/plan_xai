'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { User} from 'lucide-react';
import { Anta } from 'next/font/google';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const anta = Anta({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anta'
});

const navLinks = [
  { label: 'Продукт', href: '#product' },
  { label: 'Як це працює', href: '#how-it-works' },
  { label: 'Ролі', href: '#roles' },
  { label: 'Можливості', href: '#features' },
  { label: 'Ціни', href: '#pricing' },
  { label: 'Про нас', href: '#about' },
];

const languages = [
  { label: 'Українська', value: 'uk', code: 'ua' },
  { label: 'English', value: 'en', code: 'gb' },
  { label: 'Polski', value: 'pl', code: 'pl' },
];

function Flag({ code }: { code: string }) {
  return (
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      width={28}
      height={20}
      alt={code}
      className="object-cover"
    />
  );
}


export function Header() {
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className={`flex items-center text-[32px] leading-none font-normal ${anta.className}`}>
          <Image
            src="/images/logo.webp"
            alt="PlanxAI logo"
            width={80}
            height={80}
            priority
          />
            <span className="text-black">plan</span>
            <span className="text-blue-500">x</span>
            <span className="text-black">Ai</span>
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[16px] leading-[20px] text-#121B2A-700 hover:text-blue-600 transition-colors font-normal"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">

           {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 text-[16px] text-#121B2A-700 hover:text-blue-600 transition-colors"
            >
              <Flag code={selectedLang.code} />
              {selectedLang.label}
              <ChevronDown size={14} />
            </button>

            {langOpen && (
              <div className="absolute top-10 right-0 bg-white border border-gray-100 rounded-lg shadow-md py-2 w-44 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.value}
                    onClick={() => {
                      setSelectedLang(lang);
                      setLangOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-#121B2A-700 hover:bg-gray-50 hover:text-blue-600 transition-colors flex items-center gap-2"
                  >
                    <Flag code={lang.code} />
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Login */}
          <Link href="/login">
          <Button variant="ghost" className="rounded-2xl flex items-center gap-1">
            <User size={16} />
            Увійти
          </Button>
        </Link>

        </div>
      </div>
    </header>
  );
}