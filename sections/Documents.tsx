export default function Documents() {
  const documents = [
    {
      title: "أستيرادسيارات",
      docs: [
        "صورة الهوية",
        "فاتورة الشراء",
        "بيانات السيارة",
      ],
    },
    {
      title: "إصدارالبطاقات الجمركية",
      docs: [
        "صورة الهوية",
        "بيانات الشحنة",
        "صور الشحنة (إن وجدت)",
      ],
      
    },
    {
      title: "التخليص الجمركي",
      docs: [
        "الفاتورة",
        "رقم البوليصة",
        "بيان تعبئة",
        "شهادة سابر اذا البند خاضع",
        "شهادة منشأه",
      ],
    },

    {
      title: "تسجيل المنتجات لدى هيئة الغذاء والدواء",
      docs: [
        "تسجيل في منصة الغذاء والدواء",
        "إرسال المستندات المتعلقة في الشحنة",
        
      ],
    },
    {
      title: "إصدار شهادة سابر",
      docs: [
        "تسجيل في منصةسابر",
        "إرسال المستندات المتعلقة في الشحنة",
      ],
    },
    {
      title: "تخليص البضائع الشخصية",
      docs: [
        "صورة الهوية",
        "بيانات الشحنة",
        "صور الشحنة (إن وجدت)",
      ],
    },
  ];

  return (
    <section
      id="documents"
      className="py-24 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#0F2744]">
          المستندات المطلوبة
        </h2>

        <p className="text-center text-gray-600 mt-4">
          تأكد من تجهيز المستندات التالية قبل التواصل معنا.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {documents.map((item, index) => (
            <div
              key={index}
              className="
              bg-white
              p-8
              rounded-3xl
              shadow-lg
              "
            >
              <h3 className="text-2xl font-bold text-[#0F2744]">
                {item.title}
              </h3>

              <ul className="mt-6 space-y-3">
                {item.docs.map((doc, i) => (
                  <li
                    key={i}
                    className="text-gray-700"
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