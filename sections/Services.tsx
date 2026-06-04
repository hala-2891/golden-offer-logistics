import {
  Car,
  FileCheck,
  ClipboardCheck,
  BadgeCheck,
  Package,
  Ship,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Ship,
      title: "التخليص الجمركي",
      description:
        "إنهاء جميع الإجراءات الجمركية للشحنات التجارية والشخصية.",
      whatsapp:
        "السلام عليكم، أرغب في خدمة التخليص الجمركي.",
    },
    {
      icon: Car,
      title: "تخليص السيارات",
      description:
        "تخليص المركبات المستوردة واستكمال جميع الإجراءات النظامية.",
      whatsapp:
        "السلام عليكم، أرغب في خدمة تخليص السيارات.",
    },
    {
      icon: BadgeCheck,
      title: "إصدار البطاقات الجمركية",
      description:
        "إصدار البطاقات الجمركية للمنشآت والأفراد.",
      whatsapp:
        "السلام عليكم، أرغب في إصدار بطاقة جمركية.",
    },
    {
      icon: ClipboardCheck,
      title: "تسجيل المنتجات لدى هيئة الغذاء والدواء",
      description:
        "تسجيل المنتجات واستكمال المتطلبات النظامية الخاصة بالهيئة.",
      whatsapp:
        "السلام عليكم، أرغب في تسجيل منتج لدى هيئة الغذاء والدواء.",
    },
    {
      icon: FileCheck,
      title: "إصدار شهادة سابر",
      description:
        "إصدار شهادات سابر وشهادات المطابقة للمنتجات المستوردة.",
      whatsapp:
        "السلام عليكم، أرغب في إصدار شهادة سابر.",
    },
    {
      icon: Package,
      title: "تخليص البضائع الشخصية",
      description:
        "تخليص الأمتعة والشحنات الشخصية واستكمال الإجراءات اللازمة.",
      whatsapp:
        "السلام عليكم، أرغب في خدمة تخليص البضائع الشخصية.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#0F2744]">
          خدماتنا
        </h2>

        <p className="text-center text-gray-600 mt-4">
          نقدم حلولاً احترافية في التخليص الجمركي والخدمات اللوجستية.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((service, index) => (
            <div
              key={index}
              className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >
              <div className="mb-6">
                <service.icon
                  size={60}
                  className="text-[#C8A15A]"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#0F2744]">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600 min-h-[80px]">
                {service.description}
              </p>

              <a
                href={`https://wa.me/+966545052121?text=${encodeURIComponent(
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
                اطلب الخدمة
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}