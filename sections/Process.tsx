export default function Process() {
  const steps = [
    "شحن أو استيراد السيارات والبضاعة",
    "إرسال المستندات المطلوبة",
    "ترتيب الشحن البحري",
    "التخليص الجمركي",
    "استلام الشحنة",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#0F2744]">
          كيف نعمل؟
        </h2>

        <p className="text-center text-gray-600 mt-4">
          خطوات بسيطة وواضحة حتى تصل شحنتك بأمان.
        </p>

        <div className="mt-16 grid md:grid-cols-5 gap-6">

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center"
            >
              <div
                className="
                w-16
                h-16
                mx-auto
                rounded-full
                bg-[#C8A15A]
                text-white
                flex
                items-center
                justify-center
                text-xl
                font-bold
                "
              >
                {index + 1}
              </div>

              <p className="mt-4 text-[#0F2744] font-medium">
                {step}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}