export default function CustomsClearancePage() {
  return (
    <main className="min-h-screen pt-32 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-[#0F2744]">
          التخليص الجمركي
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          إنهاء جميع الإجراءات الجمركية بسرعة وكفاءة لضمان تسليم الشحنة.
        </p>

        <div className="mt-10 bg-gray-100 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold">
            المستندات المطلوبة
          </h2>

          <ul className="mt-6 space-y-3">
            <li>✓ الفاتورة</li>
            <li>✓ رقم البوليصة</li>
            <li>✓ المستندات الجمركية</li>
          </ul>
        </div>

        <a
          href="https://wa.me/966563591829?text=السلام عليكم، أرغب في خدمة التخليص الجمركي."
          target="_blank"
          className="inline-block mt-10 bg-[#25D366] text-white px-8 py-4 rounded-full"
        >
          طلب الخدمة عبر واتساب
        </a>

      </div>
    </main>
  );
}