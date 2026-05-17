import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-12 mb-10">

          {/* Logo */}
          <div>
            <Image
              src="/images/logo.webp"
              alt="PlanxAi"
              width={140}
              height={40}
            />
          </div>

          {/* Продукт */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[#121B2A] font-semibold text-sm">Продукт</h4>
            {["Можливості", "Як це працює", "Ролі"].map((item) => (
              <Link key={item} href="#" className="text-gray-500 text-sm hover:text-[#6C5CE7] transition-colors">
                {item}
              </Link>
            ))}
          </div>

          {/* Компанія */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[#121B2A] font-semibold text-sm">Компанія</h4>
            {["Про нас", "Контакти"].map((item) => (
              <Link key={item} href="#" className="text-gray-500 text-sm hover:text-[#6C5CE7] transition-colors">
                {item}
              </Link>
            ))}
          </div>

          {/* Ресурси + App */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[#121B2A] font-semibold text-sm">Ресурси</h4>
            {["Блог", "Документація", "Підтримка"].map((item) => (
              <Link key={item} href="#" className="text-gray-500 text-sm hover:text-[#6C5CE7] transition-colors">
                {item}
              </Link>
            ))}

            <div className="mt-4">
              <p className="text-[#121B2A] font-semibold text-sm mb-3">planxAi App</p>
              <div className="flex flex-col gap-2">
                <a href="#">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-9" />
                </a>
                <a href="#">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-9" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-100 pt-6">
          <p className="text-gray-400 text-sm">
            © 2026 PlanxAi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}