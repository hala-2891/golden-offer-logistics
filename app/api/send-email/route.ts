import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'جميع الحقول مطلوبة' },
        { status: 400 }
      );
    }

    // Create transporter for Zoho Mail
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `رسالة جديدة من ${name}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
          <h2 style="color: #C8A15A; border-bottom: 2px solid #C8A15A; padding-bottom: 10px;">رسالة جديدة من نموذج الاتصال</h2>
          
          <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 15px;">
            <p style="margin: 10px 0;"><strong style="color: #0F2744;">الاسم:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong style="color: #0F2744;">البريد الإلكتروني:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong style="color: #0F2744;">الرسالة:</strong></p>
            <p style="background-color: #f9f9f9; padding: 10px; border-right: 3px solid #C8A15A; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #999; font-size: 12px; margin-top: 20px; text-align: center;">
            تم الإرسال من موقع مؤسسة العرض الذهبي
          </p>
        </div>
      `,
    };

    // Send email
    const result = await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, id: result.messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'فشل إرسال الرسالة. يرجى المحاولة لاحقاً.' },
      { status: 500 }
    );
  }
}
