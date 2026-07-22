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
    <section className="py-20 theme-surface-muted overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold theme-text">
            {language === "ar"
              ? "شركاؤنا في النجاح"
              : "Our Partners"}
          </h2>

          <p className="mt-3 theme-text-muted">
            {language === "ar"
              ? "نفخر بثقة شركائنا ونجاحنا المشترك"
              : "Trusted partners who grow with us"}
          </p>

        </div>


        <div className="relative">

          <div className="
            flex
            gap-20
            w-max
            animate-partners
            hover:[animation-play-state:paused]
          ">

            {[...partners,...partners].map((item,index)=>(

              <div
                key={index}
                className="
                  text-xl
                  font-semibold
                  theme-text-muted
                  opacity-70
                  hover:opacity-100
                  transition
                  whitespace-nowrap
                "
              >
                {item}
              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}