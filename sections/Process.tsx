"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Process() {
  const { language } = useLanguage();

  const steps =
    language === "ar"
      ? [
          "شحن أو استيراد السيارات والبضاعة",
          "إرسال المستندات المطلوبة",
          "ترتيب الشحن البحري",
          "التخليص الجمركي",
          "استلام الشحنة",
        ]
      : [
          "Shipping or importing vehicles and cargo",
          "Submitting the required documents",
          "Arranging ocean freight",
          "Customs clearance",
          "Receiving the shipment",
        ];

  return (
    <section className="py-24 theme-surface">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center theme-text">
          {language === "ar" ? "كيف نعمل؟" : "How We Work"}
        </h2>

        <p className="text-center theme-text-muted mt-4">
          {language === "ar"
            ? "خطوات بسيطة وواضحة حتى تصل شحنتك بأمان."
            : "Simple and clear steps to ensure your shipment arrives safely."}
        </p>

        <div className="mt-16 grid md:grid-cols-5 gap-6">

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center"
            >
              <div
                className="
                w-16
                h-16
                mx-auto
                rounded-full
                bg-[#C8A15A]
                text-white
                flex
                items-center
                justify-center
                text-xl
                font-bold
                "
              >
                {index + 1}
              </div>

              <p className="mt-4 theme-text font-medium">
                {step}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}