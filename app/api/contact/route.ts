import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, subject, message } = body;

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const fullName = `${firstName} ${lastName}`;

    /* ── 1. Notify staff ── */
    await sendEmail({
      to: process.env.SMTP_USER!,
      replyTo: `"${fullName}" <${email}>`,
      subject: `[Website] ${subject} — ${fullName}`,
      template: {
        previewText: `New message from ${fullName}: ${message.slice(0, 80)}`,
        headerTagline: 'New Contact Form Submission',
        badge: subject,
        sections: [
          {
            html: `
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f8fafc;border-radius:10px;border:1px solid #e2e8f0;">
                <tr>
                  <td style="padding:20px 24px;">
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td width="50%">
                          <p style="margin:0;font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;font-weight:600;">From</p>
                          <p style="margin:4px 0 0;font-size:16px;font-weight:700;color:#0f172a;">${fullName}</p>
                        </td>
                        <td width="50%">
                          <p style="margin:0;font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;font-weight:600;">Email</p>
                          <p style="margin:4px 0 0;font-size:14px;">
                            <a href="mailto:${email}" style="color:#0F3E6D;text-decoration:none;">${email}</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>`,
          },
          {
            label: 'Message',
            html: `
              <div style="border-left:4px solid #0F3E6D;padding:16px 20px;border-radius:0 8px 8px 0;border:1px solid #e2e8f0;border-left:4px solid #0F3E6D;background:#fff;">
                <p style="margin:0;white-space:pre-wrap;">${message}</p>
              </div>`,
          },
        ],
        button: {
          label: `Reply to ${firstName}`,
          url: `mailto:${email}?subject=Re: ${subject}`,
        },
        footerText: 'This message was sent via the VLA AI Lab website contact form.',
      },
      text: `New contact form submission\n\nFrom: ${fullName}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    });

    /* ── 2. Confirm to sender ── */
    await sendEmail({
      to: email,
      subject: `We received your message — VLA AI Lab`,
      template: {
        previewText: `Hi ${firstName}, thanks for reaching out to VLA AI Lab!`,
        headerTagline: 'Message Received',
        greeting: `Hi ${firstName},`,
        sections: [
          {
            html: `<p style="margin:0;">Thank you for contacting <strong>VLA AI Lab</strong>. We have received your message and our team will review it shortly.</p>`,
          },
          {
            label: 'Your message',
            html: `
              <div style="border-left:4px solid #0F3E6D;padding:16px 20px;border-radius:0 8px 8px 0;border:1px solid #e2e8f0;border-left:4px solid #0F3E6D;background:#fff;">
                <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#0F3E6D;">${subject}</p>
                <p style="margin:0;white-space:pre-wrap;">${message}</p>
              </div>`,
          },
          {
            html: `<p style="margin:0;color:#64748b;font-size:14px;">We typically respond within <strong style="color:#0f172a;">1–2 business days</strong>. If your matter is urgent, feel free to reach us directly at <a href="mailto:contact@vla.et" style="color:#0F3E6D;text-decoration:none;font-weight:600;">contact@vla.et</a>.</p>`,
          },
        ],
        button: {
          label: 'Visit Our Website',
          url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vlaailab.com',
        },
        footerText: 'You received this email because you submitted a message through our website. No further emails will be sent unless you contact us again.',
      },
      text: `Hi ${firstName},\n\nThank you for contacting VLA AI Lab. We have received your message and our team will review it shortly.\n\nYour message:\nSubject: ${subject}\n${message}\n\nWe typically respond within 1–2 business days.\n\n— VLA AI Lab Team`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
