export default function CarShippingPage() {
  return (
    <main className="min-h-screen pt-28 px-6 bg-white">

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#0F2744]">
          شحن السيارات
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          نوفر خدمات شحن السيارات من وإلى جميع الدول عبر الشحن البحري،
          مع متابعة كاملة للإجراءات الجمركية حتى وصول السيارة بأمان.
        </p>

        {/* Features */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">

          <div className="bg-gray-100 p-6 rounded-2xl">
            <h2 className="text-xl font-bold text-[#0F2744]">
              مميزات الخدمة
            </h2>

            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✓ شحن آمن ومؤمن</li>
              <li>✓ متابعة لحظية للشحنة</li>
              <li>✓ تخليص جمركي كامل</li>
              <li>✓ تغطية جميع الموانئ</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-6 rounded-2xl">
            <h2 className="text-xl font-bold text-[#0F2744]">
              المستندات المطلوبة
            </h2>

            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✓ صورة الهوية</li>
              <li>✓ فاتورة الشراء</li>
              <li>✓ بيانات السيارة</li>
            </ul>
          </div>

        </div>

        {/* CTA */}
        <a
          href="https://wa.me/966563591829?text=أرغب في شحن سيارة"
          target="_blank"
          className="inline-block mt-10 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition"
        >
          طلب الخدمة عبر واتساب
        </a>

      </div>
    </main>
  );
}