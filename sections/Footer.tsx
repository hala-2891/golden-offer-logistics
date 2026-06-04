'use client';

import { FaInstagram, FaTiktok, FaXTwitter, FaSnapchat } from "react-icons/fa6";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";

export default function Footer() {
  const [showContactForm, setShowContactForm] = useState(false);
  return (
    <footer
      id="contact"
      className="bg-[#0F2744] text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h3 className="text-3xl font-bold text-[#C8A15A]">
          مؤسسة العرض الذهبي
        </h3>

        <p className="mt-4 text-gray-300">
          خدمات التخليص الجمركي والخدمات اللوجستية.

        </p>

        <p className="text-gray-300">
  السجل التجاري
  <title>4030594087</title>
</p>

<p className="text-gray-300">
  رخصة التخليص الجمركي
  <title>6138</title>
</p>

<p className="text-gray-300">
 يوجد لدينا تامين لبضاعة حاويات للمستوردين من خلال شركة تأمين معتمدة في المملكة العربية السعودية.
  
</p>

        <div className="mt-8 space-y-2">
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
              golden.offer2030@zohotmail.com
            </button>
          </p>
          <p>📍 جدة، المملكة العربية السعودية</p>
        </div>

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

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">

  تم تصميم هذا الموقع بواسطة

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