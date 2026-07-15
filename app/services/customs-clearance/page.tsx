export default function CustomsClearancePage() {
  return (
    <main className="min-h-screen pt-28 px-6 theme-surface-muted">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold theme-text">
          التخليص الجمركي
        </h1>

        <p className="mt-6 text-lg theme-text-muted leading-relaxed">
          نقدم خدمات التخليص الجمركي في جميع المنافذ السعودية بسرعة وكفاءة عالية،
          مع متابعة جميع الإجراءات حتى تسليم الشحنة بدون تأخير.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="theme-surface border theme-border p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-bold theme-text">مميزات الخدمة</h2>

            <ul className="mt-4 space-y-2 theme-text">
              <li>✓ إنهاء سريع للإجراءات الجمركية</li>
              <li>✓ تقليل وقت التخليص</li>
              <li>✓ متابعة الشحنات لحظة بلحظة</li>
              <li>✓ دعم كامل للاستيراد والتصدير</li>
            </ul>
          </div>

          <div className="theme-surface border theme-border p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-bold theme-text">المستندات المطلوبة</h2>

            <ul className="mt-4 space-y-2 theme-text">
              <li>✓ الفاتورة التجارية</li>
              <li>✓ رقم البوليصة</li>
              <li>✓ بيانات الشحنة</li>
              <li>✓ المستندات الجمركية</li>
            </ul>
          </div>
        </div>

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