'use client';

import Image from "next/image";
import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            <h1 className="text-[#C8A15A] text-xl font-bold">
              مؤسسة العرض الذهبي
            </h1>
            <p className="text-white text-xs">
              للتخليص الجمركي والخدمات اللوجستية
            </p>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-white font-medium">
          <a href="#home" className="hover:text-[#C8A15A] transition">
            الرئيسية
          </a>
          <a href="#services" className="hover:text-[#C8A15A] transition">
            خدماتنا
          </a>
          <a href="#documents" className="hover:text-[#C8A15A] transition">
            المستندات المطلوبة
          </a>
          <a href="#faq" className="hover:text-[#C8A15A] transition">
            الأسئلة الشائعة
          </a>
          <a href="#contact" className="hover:text-[#C8A15A] transition">
            تواصل معنا
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
        >
          {menuOpen ? <HiXMark size={26} /> : <HiBars3 size={26} />}
        </button>
      </div>

      <div
        className={`md:hidden bg-[#0F2744]/95 backdrop-blur-lg transition-all duration-300 ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col px-6 pb-4 space-y-3 text-white font-medium">
          <a href="#home" onClick={() => setMenuOpen(false)} className="py-2 hover:text-[#C8A15A] transition">
            الرئيسية
          </a>
          <a href="#services" onClick={() => setMenuOpen(false)} className="py-2 hover:text-[#C8A15A] transition">
            خدماتنا
          </a>
          <a href="#documents" onClick={() => setMenuOpen(false)} className="py-2 hover:text-[#C8A15A] transition">
            المستندات المطلوبة
          </a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className="py-2 hover:text-[#C8A15A] transition">
            الأسئلة الشائعة
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="py-2 hover:text-[#C8A15A] transition">
            تواصل معنا
          </a>
        </div>
      </div>
    </nav>
  );
}