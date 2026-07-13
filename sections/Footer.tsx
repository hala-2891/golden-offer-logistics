'use client';

import { FaInstagram, FaTiktok, FaXTwitter, FaSnapchat } from "react-icons/fa6";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const [showContactForm, setShowContactForm] = useState(false);
  const { language } = useLanguage();

  const isArabic = language === "ar";

  return (


    
    <footer
      id="contact"
      className="theme-surface py-12"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h3 className="text-3xl font-bold text-[#C8A15A]">
          {isArabic ? "مؤسسة العرض الذهبي" : "Golden Offer Company"}
        </h3>

        <p className="mt-4 theme-text-muted">
          {isArabic
            ? "خدمات التخليص الجمركي والخدمات اللوجستية."
            : "Customs clearance and logistics services."}
        </p>

        <p className="text-gray-300">
 <div className="space-y-3">

  <div className="text-gray-300 hover:text-[#C8A15A] transition cursor-pointer flex items-center gap-2">
    <span>{isArabic ? "السجل التجاري:" : "Commercial Registration:"}</span>
    <span className="theme-text font-medium">4030594087</span>
  </div>

  <div className="text-gray-300 hover:text-[#C8A15A] transition cursor-pointer flex items-center gap-2">
    <span>{isArabic ? "رخصة التخليص الجمركي:" : "Customs Clearance License:"}</span>
    <span className="theme-text font-medium">6138</span>
  </div>

  <div className="text-gray-300 hover:text-[#C8A15A] transition cursor-pointer leading-relaxed">
    {isArabic
      ? "تأمين النقل البري: يوجد لدينا تأمين للبضائع داخل الحاويات للمستوردين من خلال شركة تأمين معتمدة في المملكة العربية السعودية."
      : "Land transportation insurance: We provide insurance for cargo inside containers for importers through an approved insurance company in the Kingdom of Saudi Arabia."}
  </div>

</div>
</p>

        <div className="mt-8 space-y-2 theme-text">
          <p>
            <a href="tel:+966545052121" className="hover:text-[#C8A15A] transition">
              +966 54 505 2121
            </a>
          </p>
          <p>
            <button 
              onClick={() => setShowContactForm(true)}
              className="hover:text-[#C8A15A] transition cursor-pointer"
            >
             golden.offer2030@zohomail.sa 
             . 
            </button>
          </p>
          <p>📍 جدة، المملكة العربية السعودية</p>
        </div>

               <a href="/privacy" className="hover:text-[#C8A15A] transition">
  {isArabic ? "سياسة الخصوصية" : "Privacy Policy"}
</a>

        {/* Social Media */}
        <div className="flex justify-center gap-6 mt-8">

          <a
            href=" https://www.instagram.com/golden.offer2030/?igsh=NmRjczZmMG85b3hn&utm_source=qr"
            target="_blank"
            className="hover:text-[#C8A15A] transition"
          >
            <FaInstagram size={24} />
          </a>

          <a
            href="https://x.com/goldenofeer?s=21"
            target="_blank"
            className="hover:text-[#C8A15A] transition"
          >
            <FaXTwitter size={24} />
          </a>

          <a
            href="https://www.tiktok.com/@golden.offer2030"
            target="_blank"
            className="hover:text-[#C8A15A] transition"
          >
            <FaTiktok size={24} />
          </a>

          <a
            href="https://www.snapchat.com/add/golden.offer203?share_id=WOiIFBpOjj4&locale=ar-SA"
            target="_blank"
            className="hover:text-[#C8A15A] transition"
          >
            <FaSnapchat size={24} />
          </a>

        </div>

        <div className="border-t theme-border mt-8 pt-6 text-center theme-text-muted">

  {isArabic ? "تم تصميم هذا الموقع بواسطة" : "This website was designed by"}

  <a
    href="https://www.instagram.com/eng.hala204?igsh=NmRjczZmMG85b3hn&utm_source=qr"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#C8A15A] mx-2 hover:underline"
  >
    eng.hala204
  </a>

</div>

      </div>

      {showContactForm && <ContactForm />}
    </footer>
  );
}