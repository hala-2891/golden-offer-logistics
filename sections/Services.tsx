"use client";

import {
  Car,
  FileCheck,
  ClipboardCheck,
  BadgeCheck,
  Package,
  Ship,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Services() {
  const { language } = useLanguage();

  const services =
    language === "ar"
      ? [
          {
            icon: Ship,
            title: "التخليص الجمركي",
            description:
              "إنهاء جميع الإجراءات الجمركية للشحنات التجارية والشخصية بسرعة وكفاءة.",
            whatsapp: "السلام عليكم، أرغب في خدمة التخليص الجمركي.",
            cta: "اطلب الخدمة",
          },
          {
            icon: Car,
            title: "تخليص السيارات",
            description:
              "تخليص المركبات المستوردة واستكمال جميع الإجراءات النظامية حتى التسليم.",
            whatsapp: "السلام عليكم، أرغب في خدمة تخليص السيارات.",
            cta: "اطلب الخدمة",
          },
          {
            icon: BadgeCheck,
            title: "إصدار البطاقات الجمركية",
            description:
              "إصدار البطاقات الجمركية للمنشآت والأفراد بطريقة نظامية معتمدة.",
            whatsapp: "السلام عليكم، أرغب في إصدار بطاقة جمركية.",
            cta: "اطلب الخدمة",
          },
          {
            icon: ClipboardCheck,
            title: "تسجيل المنتجات (هيئة الغذاء والدواء)",
            description:
              "تسجيل المنتجات واستكمال متطلبات هيئة الغذاء والدواء داخل السعودية.",
            whatsapp: "السلام عليكم، أرغب في تسجيل منتج لدى هيئة الغذاء والدواء.",
            cta: "اطلب الخدمة",
          },
          {
            icon: FileCheck,
            title: "إصدار شهادة سابر",
            description:
              "إصدار شهادات سابر وشهادات المطابقة للمنتجات المستوردة.",
            whatsapp: "السلام عليكم، أرغب في إصدار شهادة سابر.",
            cta: "اطلب الخدمة",
          },
          {
            icon: Package,
            title: "تخليص البضائع الشخصية",
            description:
              "تخليص الأمتعة والشحنات الشخصية بسرعة مع متابعة الإجراءات حتى التسليم.",
            whatsapp: "السلام عليكم، أرغب في خدمة تخليص البضائع الشخصية.",
            cta: "اطلب الخدمة",
          },
        ]
      : [
          {
            icon: Ship,
            title: "Customs Clearance",
            description:
              "Completing all customs procedures for commercial and personal shipments quickly and efficiently.",
            whatsapp: "Hello, I would like customs clearance services.",
            cta: "Request Service",
          },
          {
            icon: Car,
            title: "Vehicle Clearance",
            description:
              "Clearing imported vehicles and completing all required procedures until delivery.",
            whatsapp: "Hello, I would like vehicle clearance services.",
            cta: "Request Service",
          },
          {
            icon: BadgeCheck,
            title: "Customs Card Issuance",
            description:
              "Issuing customs cards for companies and individuals in an official and approved manner.",
            whatsapp: "Hello, I would like to issue a customs card.",
            cta: "Request Service",
          },
          {
            icon: ClipboardCheck,
            title: "Product Registration (SFDA)",
            description:
              "Registering products and completing Saudi Food and Drug Authority requirements within Saudi Arabia.",
            whatsapp: "Hello, I would like to register a product with the SFDA.",
            cta: "Request Service",
          },
          {
            icon: FileCheck,
            title: "Sabre Certificate Issuance",
            description:
              "Issuing Sabre certificates and conformity certificates for imported products.",
            whatsapp: "Hello, I would like to issue a Sabre certificate.",
            cta: "Request Service",
          },
          {
            icon: Package,
            title: "Personal Goods Clearance",
            description:
              "Clearing luggage and personal shipments quickly while following the process through delivery.",
            whatsapp: "Hello, I would like personal goods clearance services.",
            cta: "Request Service",
          },
        ];

  return (
    <section id="services" className="py-24 theme-surface-muted">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#0F2744]">
          {language === "ar" ? "خدماتنا" : "Our Services"}
        </h2>

        <p className="text-center text-gray-600 mt-4">
          {language === "ar"
            ? "حلول احترافية في التخليص الجمركي والخدمات اللوجستية داخل المملكة."
            : "Professional solutions for customs clearance and logistics services within the Kingdom."}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((service, index) => (
            <div
              key={index}
              className="
                theme-surface
                rounded-3xl
                p-8
                shadow-lg
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="mb-6">
                <service.icon size={60} className="text-[#C8A15A]" />
              </div>

              <h3 className="text-2xl font-bold theme-text">
                {service.title}
              </h3>

              <p className="mt-4 theme-text-muted min-h-[80px]">
                {service.description}
              </p>

              <a
                href={`https://wa.me/966545052121?text=${encodeURIComponent(
                  service.whatsapp
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block
                  mt-6
                  bg-[#25D366]
                  text-white
                  px-6
                  py-3
                  rounded-full
                  hover:scale-105
                  transition
                "
              >
                {service.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}