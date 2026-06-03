import {
  ShieldCheck,
  Clock3,
  Users,
  BadgeCheck,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
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
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#0F2744]">
          لماذا مؤسسة العرض الذهبي؟
        </h2>

        <p className="text-center text-gray-600 mt-4">
          نسعى لتقديم خدمات احترافية تسهل إجراءات العملاء وتوفر الوقت والجهد.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature, index) => (
            <div
              key={index}
              className="
              bg-gray-50
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

              <h3 className="mt-6 text-xl font-bold text-[#0F2744]">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}