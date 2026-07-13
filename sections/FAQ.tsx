"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function FAQ() {
  const { language } = useLanguage();

  const faqs =
    language === "ar"
      ? [
          {
            question: "هل تقومون بشراء السيارات؟",
            answer:
              "لا، العميل يقوم بشراء السيارة بنفسه ونحن نتولى الشحن والتخليص.",
          },
          {
            question: "هل توفرون الشحن الجوي؟",
            answer: "لا، نقدم خدمات الشحن البحري فقط.",
          },
          {
            question: "كيف يمكنني التواصل؟",
            answer: "يمكن التواصل معنا عبر الواتساب أو وسائل التواصل المتاحة بالموقع.",
          },
        ]
      : [
          {
            question: "Do you buy cars?",
            answer: "No, the customer purchases the car themselves and we handle shipping and clearance.",
          },
          {
            question: "Do you provide air freight?",
            answer: "No, we only provide ocean freight services.",
          },
          {
            question: "How can I contact you?",
            answer: "You can contact us via WhatsApp or the communication channels available on the website.",
          },
        ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-24 theme-surface"
    >
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center theme-text">
          {language === "ar" ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
        </h2>

        <div className="mt-12 space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border theme-border rounded-2xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(
                    openIndex === index ? null : index
                  )
                }
                className="
                w-full
                flex
                justify-between
                items-center
                p-5
                theme-surface-muted
                text-right
                "
              >
                <span className="font-semibold">
                  {faq.question}
                </span>

                <span>
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="p-5 theme-text">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}