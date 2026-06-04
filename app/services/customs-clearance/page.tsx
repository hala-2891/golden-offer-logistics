export default function CustomsClearancePage() {
  return (
    <main className="min-h-screen pt-28 px-6 bg-white">

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#0F2744]">
          التخليص الجمركي
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          نقدم خدمات التخليص الجمركي في جميع المنافذ السعودية بسرعة وكفاءة عالية،
          مع متابعة جميع الإجراءات حتى تسليم الشحنة بدون تأخير.
        </p>

        {/* Sections */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">

          <div className="bg-gray-100 p-6 rounded-2xl">
            <h2 className="text-xl font-bold text-[#0F2744]">
              مميزات الخدمة
            </h2>

            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✓ إنهاء سريع للإجراءات الجمركية</li>
              <li>✓ تقليل وقت التخليص</li>
              <li>✓ متابعة الشحنات لحظة بلحظة</li>
              <li>✓ دعم كامل للاستيراد والتصدير</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-6 rounded-2xl">
            <h2 className="text-xl font-bold text-[#0F2744]">
              المستندات المطلوبة
            </h2>

            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✓ الفاتورة التجارية</li>
              <li>✓ رقم البوليصة</li>
              <li>✓ بيانات الشحنة</li>
              <li>✓ المستندات الجمركية</li>
            </ul>
          </div>

        </div>

        {/* CTA */}
        <a
          href="https://wa.me/966563591829?text=أرغب في خدمة التخليص الجمركي"
          target="_blank"
          className="inline-block mt-10 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition"
        >
          طلب الخدمة عبر واتساب
        </a>

      </div>
    </main>
  );
}