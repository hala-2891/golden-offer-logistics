"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Partners() {
  const { language } = useLanguage();

  const partners = [
    "شركة ازال العربية",
    "شركة وسام الخليج التجارية",
    "تايجر",
    "شركة توب الجواهر",
    "خيرات الأسطورة",
    "صوت الموضة",
    "مؤسسة دار العامودي",
    "مؤسسة برايم",
  ];

  return (
    <section className="py-24 theme-surface-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold theme-text">
            {language === "ar" ? "شركاؤنا في النجاح" : "Our Partners in Success"}
          </h2>
          <p className="mt-4 theme-text-muted max-w-2xl mx-auto">
            {language === "ar"
              ? "نتعامل مع مجموعة من الشركاء الموثوقين الذين يشاركوننا قيم الجودة والاعتماد."
              : "We work with a group of trusted partners who share our values of quality and reliability."}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#C8A15A]/20 theme-surface p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-lg font-semibold theme-text">{partner}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
