"use client";

import {
  ShieldCheck,
  Clock3,
  Users,
  BadgeCheck,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function WhyChooseUs() {
  const { language } = useLanguage();

  const features =
    language === "ar"
      ? [
          {
            icon: ShieldCheck,
            title: "موثوقية عالية",
            description:
              "نلتزم بإنجاز المعاملات وفق الأنظمة والإجراءات المعتمدة.",
          },
          {
            icon: Clock3,
            title: "سرعة في الإنجاز",
            description:
              "متابعة مستمرة للمعاملات لتقليل الوقت وتسريع الإجراءات.",
          },
          {
            icon: Users,
            title: "خدمة عملاء متميزة",
            description:
              "دعم مباشر واستجابة سريعة للاستفسارات والمتابعة.",
          },
          {
            icon: BadgeCheck,
            title: "خبرة ومعرفة",
            description:
              "خبرة في التخليص الجمركي وخدمات الاستيراد والتصدير.",
          },
        ]
      : [
          {
            icon: ShieldCheck,
            title: "High Reliability",
            description:
              "We are committed to completing transactions in accordance with approved regulations and procedures.",
          },
          {
            icon: Clock3,
            title: "Fast Execution",
            description:
              "Continuous follow-up on transactions to reduce time and speed up procedures.",
          },
          {
            icon: Users,
            title: "Outstanding Customer Service",
            description:
              "Direct support and quick responses to inquiries and follow-up.",
          },
          {
            icon: BadgeCheck,
            title: "Experience and Knowledge",
            description:
              "Expertise in customs clearance and import/export services.",
          },
        ];

  return (
    <section className="py-24 theme-surface">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center theme-text">
          {language === "ar" ? "لماذا مؤسسة العرض الذهبي؟" : "Why Golden Offer Company?"}
        </h2>

        <p className="text-center theme-text-muted mt-4">
          {language === "ar"
            ? "نسعى لتقديم خدمات احترافية تسهل إجراءات العملاء وتوفر الوقت والجهد."
            : "We strive to provide professional services that simplify customer procedures and save time and effort."}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature, index) => (
            <div
              key={index}
              className="
              theme-surface-muted
              rounded-3xl
              p-8
              text-center
              shadow-md
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >
              <feature.icon
                size={55}
                className="mx-auto text-[#C8A15A]"
              />

              <h3 className="mt-6 text-xl font-bold theme-text">
                {feature.title}
              </h3>

              <p className="mt-4 theme-text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}