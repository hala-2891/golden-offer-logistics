'use client';

import Image from "next/image";
import { useState } from "react";
import { HiBars3, HiXMark, HiMoon, HiSun } from "react-icons/hi2";
import { useLanguage } from "@/components/LanguageProvider";
import { useTheme } from "@/components/ThemeProvider";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const links =
    language === "ar"
      ? [
          { href: "#home", label: "الرئيسية" },
          { href: "#services", label: "خدماتنا" },
          { href: "#documents", label: "المستندات المطلوبة" },
          { href: "#faq", label: "الأسئلة الشائعة" },
          { href: "#contact", label: "تواصل معنا" },
        ]
      : [
          { href: "#home", label: "Home" },
          { href: "#services", label: "Services" },
          { href: "#documents", label: "Required Documents" },
          { href: "#faq", label: "FAQ" },
          { href: "#contact", label: "Contact Us" },
        ];

  const brandTitle = language === "ar" ? "مؤسسة العرض الذهبي" : "Golden Offer Company";
  const brandSubtitle =
    language === "ar"
      ? "للتخليص الجمركي والخدمات اللوجستية"
      : "For customs clearance and logistics services";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <Image
            src="/WhatsApp-Image-2026-05-19-at-4.10.06-PM (1).png"
            alt="مؤسسة العرض الذهبي"
            width={55}
            height={55}
            priority
            className="object-contain"
          />

          <div>
            <h1 className="text-[#C8A15A] text-xl font-bold">{brandTitle}</h1>
            <p className="text-white text-xs">{brandSubtitle}</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4 theme-text font-medium">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[#C8A15A] transition">
              {link.label}
            </a>
          ))}

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-[var(--border)] p-2 text-sm theme-text hover:bg-[#ffffff1A] transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <HiSun size={18} /> : <HiMoon size={18} />}
          </button>

          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full border border-[var(--border)] px-3 py-1.5 text-sm theme-text hover:bg-[#ffffff1A] transition"
            aria-label={language === "ar" ? "Switch to English" : "التبديل للعربية"}
          >
            {language === "ar" ? "EN" : "ع"}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-[var(--border)] p-2 text-sm theme-text hover:bg-[#ffffff1A] transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <HiSun size={16} /> : <HiMoon size={16} />}
          </button>

          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full border border-[var(--border)] px-2.5 py-1 text-sm theme-text hover:bg-[#ffffff1A] transition"
            aria-label={language === "ar" ? "Switch to English" : "التبديل للعربية"}
          >
            {language === "ar" ? "EN" : "ع"}
          </button>

          <button
            type="button"
            className="text-white p-2 rounded-lg hover:bg-white/10 transition"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <HiXMark size={26} /> : <HiBars3 size={26} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-[#0F2744]/95 backdrop-blur-lg transition-all duration-300 ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col px-6 pb-4 space-y-3 text-white font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-2 hover:text-[#C8A15A] transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}