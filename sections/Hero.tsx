"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Hero() {
  const { language } = useLanguage();

  const content =
    language === "ar"
      ? {
          title: "خدمات الشحن البحري",
          subtitle: "والتخليص الجمركي",
          description:
            "نوفر حلولاً احترافية للشحن البحري والتخليص الجمركي مع متابعة دقيقة لكافة الإجراءات.",
          primaryCta: "استكشف خدماتنا",
          secondaryCta: "تواصل واتساب",
        }
      : {
          title: "Ocean Freight Services",
          subtitle: "and Customs Clearance",
          description:
            "We provide professional ocean freight and customs clearance solutions with close follow-up on every step.",
          primaryCta: "Explore Our Services",
          secondaryCta: "Contact on WhatsApp",
        };

  return (
    <section
      id="home"
      className="
      relative
      h-screen
      flex
      items-center
      justify-center
      text-center
      overflow-hidden
      "
    >
      {/* Background Image */}
     <video
  autoPlay
  muted
  loop
  playsInline
  className="
  absolute
  inset-0
  w-full
  h-full
  object-cover
  "
>
  <source
    src="/hero-video.mp4"
    type="video/mp4"
  />
</video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0F2744]/75" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">

        <h1
          className="
          text-5xl
          md:text-7xl
          font-bold
          text-white
          leading-tight
          "
        >
          {content.title}
          <span className="block text-[#C8A15A]">{content.subtitle}</span>
        </h1>

        <p
          className="
          mt-6
          text-lg
          md:text-xl
          text-gray-200
          "
        >
          {content.description}
        </p>

        <div
          className="
          mt-10
          flex
          flex-col
          md:flex-row
          gap-4
          justify-center
          "
        >
          <a
            href="#services"
            className="
            bg-[#C8A15A]
            text-white
            px-8
            py-4
            rounded-full
            font-semibold
            hover:scale-105
            transition
            "
          >
            {content.primaryCta}
          </a>

          <a
            href="https://wa.me/966545052121"
            target="_blank"
            className="
            border
            border-white
            text-white
            px-8
            py-4
            rounded-full
            hover:bg-white
            hover:text-black
            transition
            "
          >
            {content.secondaryCta}
          </a>
        </div>

      </div>
    </section>
  );
}