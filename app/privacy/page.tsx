export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-28 px-6 theme-surface-muted">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold theme-text">سياسة الخصوصية</h1>

        <p className="mt-6 theme-text-muted leading-relaxed">
          نحن نحترم خصوصية زوار موقعنا. يتم جمع المعلومات فقط لتحسين الخدمة والتواصل مع العملاء.
        </p>

        <h2 className="mt-10 text-2xl font-bold theme-text">استخدام البيانات</h2>

        <p className="mt-4 theme-text-muted">
          يتم استخدام البيانات المقدمة من العملاء فقط لتقديم الخدمات المطلوبة ولا يتم مشاركتها مع أي طرف ثالث.
        </p>

        <h2 className="mt-10 text-2xl font-bold theme-text">حماية المعلومات</h2>

        <p className="mt-4 theme-text-muted">
          نستخدم إجراءات أمان لحماية البيانات من الوصول غير المصرح به.
        </p>
      </div>
    </main>
  );
}