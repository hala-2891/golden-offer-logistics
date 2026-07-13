"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Documents() {
  const { language } = useLanguage();

  const documents =
    language === "ar"
      ? [
          {
            title: "إستيراد السيارات",
            docs: ["صورة الهوية", "فاتورة الشراء", "بيانات السيارة"],
          },
          {
            title: "إصدار البطاقات الجمركية",
            docs: ["صورة الهوية", "بيانات الشحنة", "صور الشحنة (إن وجدت)"],
          },
          {
            title: "التخليص الجمركي",
            docs: [
              "الفاتورة",
              "رقم البوليصة",
              "بيان تعبئة",
              "شهادة سابر إذا كان البند خاضعًا",
              "شهادة منشأ",
            ],
          },
          {
            title: "تسجيل المنتجات لدى هيئة الغذاء والدواء",
            docs: ["تسجيل في منصة الغذاء والدواء", "إرسال المستندات المتعلقة بالشحنة"],
          },
          {
            title: "إصدار شهادة سابر",
            docs: ["تسجيل في منصة سابر", "إرسال المستندات المتعلقة بالشحنة"],
          },
          {
            title: "تخليص البضائع الشخصية",
            docs: ["صورة الهوية", "بيانات الشحنة", "صور الشحنة (إن وجدت)"],
          },
        ]
      : [
          {
            title: "Vehicle Import",
            docs: ["ID copy", "Purchase invoice", "Vehicle details"],
          },
          {
            title: "Customs Card Issuance",
            docs: ["ID copy", "Shipment details", "Shipment photos (if available)"],
          },
          {
            title: "Customs Clearance",
            docs: [
              "Invoice",
              "Bill of lading number",
              "Packing list",
              "Sabre certificate if applicable",
              "Certificate of origin",
            ],
          },
          {
            title: "Product Registration with SFDA",
            docs: ["Register on the SFDA platform", "Send shipment-related documents"],
          },
          {
            title: "Sabre Certificate Issuance",
            docs: ["Register on the Sabre platform", "Send shipment-related documents"],
          },
          {
            title: "Personal Goods Clearance",
            docs: ["ID copy", "Shipment details", "Shipment photos (if available)"],
          },
        ];

  return (
    <section
      id="documents"
      className="py-24 theme-surface-muted"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center theme-text">
          {language === "ar" ? "المستندات المطلوبة" : "Required Documents"}
        </h2>

        <p className="text-center theme-text-muted mt-4">
          {language === "ar"
            ? "تأكد من تجهيز المستندات التالية قبل التواصل معنا."
            : "Please make sure you have the following documents ready before contacting us."}
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {documents.map((item, index) => (
            <div
              key={index}
              className="
              theme-surface
              p-8
              rounded-3xl
              shadow-lg
              "
            >
              <h3 className="text-2xl font-bold theme-text">
                {item.title}
              </h3>

              <ul className="mt-6 space-y-3">
                {item.docs.map((doc, i) => (
                  <li
                    key={i}
                    className="theme-text-muted"
                  >
                    ✓ {doc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}