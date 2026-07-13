"use client";

import CountUp from "react-countup";
import { useLanguage } from "@/components/LanguageProvider";

export default function Stats() {
  const { language } = useLanguage();
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-wrap justify-center gap-10 md:gap-20">

          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-[#C8A15A]">
              +
              <CountUp
                end={1000}
                duration={3}
              />
            </h3>

            <p className="mt-2 text-[#0F2744]">
              {language === "ar" ? "معاملة منجزة" : "Completed transaction"}
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-[#C8A15A]">
              +
              <CountUp
                end={500}
                duration={3}
              />
            </h3>

            <p className="mt-2 text-[#0F2744]">
              {language === "ar" ? "عميل" : "Clients"}
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-[#C8A15A]">
              +
              <CountUp
                end={10}
                duration={3}
              />
            </h3>

            <p className="mt-2 text-[#0F2744]">
              {language === "ar" ? "سنوات خبرة" : "Years of experience"}
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-[#C8A15A]">
              24/7
            </h3>

            <p className="mt-2 text-[#0F2744]">
              {language === "ar" ? "دعم ومتابعة" : "Support and follow-up"}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}