'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'حدث خطأ في الإرسال');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'حدث خطأ غير متوقع');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40" id="contact-form-backdrop">
      <div className="bg-[#0F2744] p-8 rounded-lg max-w-md w-full mx-4 border border-[#C8A15A]">
        <h2 className="text-2xl font-bold text-[#C8A15A] mb-6">اتصل بنا</h2>

        {submitted ? (
          <div className="text-center">
            <p className="text-green-400 text-lg mb-4">✅ تم إرسال الرسالة بنجاح!</p>
            <p className="text-gray-300 mb-6">سنرد عليك في أقرب وقت</p>
            <button
              onClick={() => {
                setSubmitted(false);
                document.getElementById('contact-form-backdrop')?.remove();
              }}
              className="w-full bg-[#C8A15A] text-white py-2 rounded font-semibold hover:bg-[#B8931F] transition"
            >
              إغلاق
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="الاسم"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-gray-600 focus:border-[#C8A15A] outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="البريد الإلكتروني"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-gray-600 focus:border-[#C8A15A] outline-none"
            />

            <textarea
              name="message"
              placeholder="الرسالة"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-gray-600 focus:border-[#C8A15A] outline-none"
            />

            {error && (
              <div className="p-3 rounded bg-red-900 text-red-200 text-sm">
                ❌ {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#C8A15A] text-white py-2 rounded font-semibold hover:bg-[#B8931F] transition disabled:opacity-50"
            >
              {loading ? 'جاري الإرسال...' : 'إرسال'}
            </button>
          </form>
        )}

        {!submitted && (
          <button
            onClick={() => document.getElementById('contact-form-backdrop')?.remove()}
            className="mt-4 w-full text-gray-400 hover:text-white transition"
          >
            إغلاق
          </button>
        )}
      </div>
    </div>
  );
}
