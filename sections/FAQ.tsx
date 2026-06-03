"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "هل تقومون بشراء السيارات؟",
      answer:
        "لا، العميل يقوم بشراء السيارة بنفسه ونحن نتولى الشحن والتخليص.",
    },
    {
      question: "هل توفرون الشحن الجوي؟",
      answer:
        "لا، نقدم خدمات الشحن البحري فقط.",
    },
    {
      question: "كيف يمكنني التواصل؟",
      answer:
        "يمكن التواصل معنا عبر الواتساب أو وسائل التواصل المتاحة بالموقع.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-24 bg-white"
    >
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#0F2744]">
          الأسئلة الشائعة
        </h2>

        <div className="mt-12 space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-2xl overflow-hidden"
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
                bg-gray-50
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
                <div className="p-5 text-[#0F2744]">
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