"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

type Partner = {
  name: string;
  initials: string;
  accent: string;
};

export default function Partners() {
  const { language } = useLanguage();

  const partners: Partner[] = [
    { name: "Azal", initials: "AZ", accent: "from-[#1E3A8A] via-[#2563EB] to-[#60A5FA]" },
    { name: "Wesam Gulf", initials: "WG", accent: "from-[#B8860B] via-[#C8A15A] to-[#F7D98A]" },
    { name: "Tiger", initials: "TG", accent: "from-[#0F766E] via-[#14B8A6] to-[#5EEAD4]" },
    { name: "Top Jewels", initials: "TJ", accent: "from-[#7C2D12] via-[#C2410C] to-[#FDBA74]" },
    { name: "Khayrat", initials: "KH", accent: "from-[#4C1D95] via-[#7C3AED] to-[#C4B5FD]" },
    { name: "Sout Almoada", initials: "SM", accent: "from-[#BE185D] via-[#EC4899] to-[#F9A8D4]" },
    { name: "Dar Al Amoudi", initials: "DA", accent: "from-[#14532D] via-[#16A34A] to-[#86EFAC]" },
    { name: "Prime", initials: "PR", accent: "from-[#1F2937] via-[#374151] to-[#9CA3AF]" },
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-24 theme-surface-muted">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold theme-text">
            {language === "ar" ? "شركاؤنا في النجاح" : "Our Partners in Success"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl theme-text-muted">
            {language === "ar"
              ? "نتعاون مع مجموعة من الشركاء الذين يضيفون قيمة واحترافية لكل تجربة." 
              : "We collaborate with partners who bring quality, trust, and innovation to every experience."}
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-[#C8A15A]/20 bg-white/60 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="flex w-max gap-4"
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="w-56 shrink-0 rounded-2xl border border-white/70 bg-gradient-to-br p-5 text-center shadow-sm"
                style={{ backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.75))` }}
              >
                <div className={`rounded-2xl bg-gradient-to-br ${partner.accent} p-4`}>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/20 text-xl font-black tracking-[0.3em] text-white shadow-inner">
                    {partner.initials}
                  </div>
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-700">
                  {partner.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
