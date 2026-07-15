export default function CarShippingPage() {
  return (
    <main className="min-h-screen pt-28 px-6 theme-surface-muted">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold theme-text">
          شحن السيارات
        </h1>

        <p className="mt-6 text-lg theme-text-muted leading-relaxed">
          نوفر خدمات شحن السيارات من وإلى جميع الدول عبر الشحن البحري،
          مع متابعة كاملة للإجراءات الجمركية حتى وصول السيارة بأمان.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="theme-surface border theme-border p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-bold theme-text">مميزات الخدمة</h2>

            <ul className="mt-4 space-y-2 theme-text">
              <li>✓ شحن آمن ومؤمن</li>
              <li>✓ متابعة لحظية للشحنة</li>
              <li>✓ تخليص جمركي كامل</li>
              <li>✓ تغطية جميع الموانئ</li>
            </ul>
          </div>

          <div className="theme-surface border theme-border p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-bold theme-text">المستندات المطلوبة</h2>

            <ul className="mt-4 space-y-2 theme-text">
              <li>✓ صورة الهوية</li>
              <li>✓ فاتورة الشراء</li>
              <li>✓ بيانات السيارة</li>
            </ul>
          </div>
        </div>

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