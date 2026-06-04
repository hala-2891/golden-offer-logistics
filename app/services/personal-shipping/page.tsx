export default function PersonalShippingPage() {
  return (
    <main className="min-h-screen pt-28 px-6 bg-white">

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#0F2744]">
          الشحن الشخصي
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          نوفر خدمة الشحن الشخصي للأغراض والبضائع بطريقة آمنة وسريعة،
          مع متابعة كاملة للشحنة من الاستلام حتى التسليم.
        </p>

        {/* Sections */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">

          <div className="bg-gray-100 p-6 rounded-2xl">
            <h2 className="text-xl font-bold text-[#0F2744]">
              مميزات الخدمة
            </h2>

            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✓ شحن آمن وسريع</li>
              <li>✓ متابعة لحظية للشحنة</li>
              <li>✓ تغليف وحماية للبضائع</li>
              <li>✓ خدمة من الباب إلى الباب</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-6 rounded-2xl">
            <h2 className="text-xl font-bold text-[#0F2744]">
              المستندات المطلوبة
            </h2>

            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✓ صورة الهوية</li>
              <li>✓ بيانات الشحنة</li>
              <li>✓ صور الشحنة (إن وجدت)</li>
            </ul>
          </div>

        </div>

        {/* CTA */}
        <a
          href="https://wa.me/966563591829?text=أرغب في خدمة الشحن الشخصي"
          target="_blank"
          className="inline-block mt-10 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition"
        >
          طلب الخدمة عبر واتساب
        </a>

      </div>
    </main>
  );
}