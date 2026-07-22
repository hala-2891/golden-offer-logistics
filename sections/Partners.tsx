"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

type Partner = {
  name: string;
  initials: string;
  accent: string;
  tag: string;
};

export default function Partners() {
  const { language } = useLanguage();

  const partners: Partner[] = [
    { name: "Azal", initials: "AZ", accent: "from-[#1E3A8A] via-[#2563EB] to-[#60A5FA]", tag: "Global Trade" },
    { name: "Wesam Gulf", initials: "WG", accent: "from-[#B8860B] via-[#C8A15A] to-[#F7D98A]", tag: "Logistics" },
    { name: "Tiger", initials: "TG", accent: "from-[#0F766E] via-[#14B8A6] to-[#5EEAD4]", tag: "Retail" },
    { name: "Top Jewels", initials: "TJ", accent: "from-[#7C2D12] via-[#C2410C] to-[#FDBA74]", tag: "Luxury" },
    { name: "Khayrat", initials: "KH", accent: "from-[#4C1D95] via-[#7C3AED] to-[#C4B5FD]", tag: "Community" },
    { name: "Sout Almoada", initials: "SM", accent: "from-[#BE185D] via-[#EC4899] to-[#F9A8D4]", tag: "Fashion" },
    { name: "Dar Al Amoudi", initials: "DA", accent: "from-[#14532D] via-[#16A34A] to-[#86EFAC]", tag: "Heritage" },
    { name: "Prime", initials: "PR", accent: "from-[#1F2937] via-[#374151] to-[#9CA3AF]", tag: "Innovation" },
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="relative overflow-hidden py-24 theme-surface-muted">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,161,90,0.14),_transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="mx-auto mb-4 inline-flex items-center rounded-full border border-[#C8A15A]/25 bg-white/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#8B6A1F] shadow-sm backdrop-blur">
            {language === "ar" ? "شركاء موثوقون" : "Trusted partners"}
          </div>
          <h2 className="text-4xl font-bold theme-text sm:text-5xl">
            {language === "ar" ? "شركاؤنا في النجاح" : "Our Partners in Success"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg theme-text-muted">
            {language === "ar"
              ? "نتعاون مع كوكبة من الشركاء الذين يضيفون ثقة ومهنية واحترافية لكل مشروع."
              : "We collaborate with a network of partners who bring trust, professionalism, and excellence to every project."}
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-[0_25px_70px_rgba(15,23,42,0.10)] backdrop-blur-xl">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="flex w-max gap-4"
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                whileHover={{ y: -6, scale: 1.02 }}
                className="w-60 shrink-0 rounded-[1.5rem] border border-[#E7D5A7] bg-gradient-to-br from-white via-[#fffdf8] to-[#f8f0dd] p-5 shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
              >
                <div className={`rounded-[1.2rem] bg-gradient-to-br ${partner.accent} p-4`}>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/20 text-lg font-black tracking-[0.3em] text-white shadow-inner">
                    {partner.initials}
                  </div>
                </div>
                <div className="mt-4 text-left">
                  <p className="text-[0.95rem] font-semibold uppercase tracking-[0.25em] text-slate-700">
                    {partner.name}
                  </p>
                  <p className="mt-2 text-sm text-slate-500">{partner.tag}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
