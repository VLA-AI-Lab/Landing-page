import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const htmlBody = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0F3E6D 0%,#1a5a9e 100%);padding:32px 40px;text-align:center;">
              <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
                <tr>
                  <td style="font-size:28px;font-weight:800;letter-spacing:1px;">
                    <span style="color:#1D9E75;">V</span><span style="color:#EF9F27;">L</span><span style="color:#7F77DD;">A</span>
                    <span style="color:rgba(255,255,255,0.7);font-weight:300;margin-left:4px;">AI Lab</span>
                  </td>
                </tr>
              </table>
              <p style="color:rgba(255,255,255,0.7);font-size:11px;letter-spacing:3px;text-transform:uppercase;margin:8px 0 0;">
                New Contact Form Submission
              </p>
            </td>
          </tr>

          <!-- Subject badge -->
          <tr>
            <td style="padding:28px 40px 0;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#EFF6FF;color:#0F3E6D;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;padding:6px 14px;border-radius:20px;">
                    ${subject}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Sender info -->
          <tr>
            <td style="padding:24px 40px 0;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:10px;border:1px solid #e2e8f0;">
                <tr>
                  <td style="padding:20px 24px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="50%" style="padding-bottom:12px;">
                          <p style="margin:0;font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;font-weight:600;">From</p>
                          <p style="margin:4px 0 0;font-size:16px;font-weight:700;color:#0f172a;">${firstName} ${lastName}</p>
                        </td>
                        <td width="50%" style="padding-bottom:12px;">
                          <p style="margin:0;font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;font-weight:600;">Email</p>
                          <p style="margin:4px 0 0;font-size:14px;color:#0F3E6D;">
                            <a href="mailto:${email}" style="color:#0F3E6D;text-decoration:none;">${email}</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message body -->
          <tr>
            <td style="padding:24px 40px;">
              <p style="margin:0 0 10px;font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;font-weight:600;">Message</p>
              <div style="background:#ffffff;border-left:4px solid #0F3E6D;padding:16px 20px;border-radius:0 8px 8px 0;border:1px solid #e2e8f0;border-left:4px solid #0F3E6D;">
                <p style="margin:0;font-size:15px;line-height:1.7;color:#334155;white-space:pre-wrap;">${message}</p>
              </div>
            </td>
          </tr>

          <!-- Reply button -->
          <tr>
            <td style="padding:0 40px 32px;text-align:center;">
              <a href="mailto:${email}?subject=Re: ${subject}" style="display:inline-block;background:#0F3E6D;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:12px 32px;border-radius:8px;letter-spacing:0.5px;">
                Reply to ${firstName}
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc;padding:20px 40px;border-top:1px solid #e2e8f0;text-align:center;">
              <p style="margin:0;font-size:12px;color:#94a3b8;">
                This message was sent via the VLA AI Lab website contact form.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    await transporter.sendMail({
      from: `"VLA AI Lab Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: `"${firstName} ${lastName}" <${email}>`,
      subject: `[Website] ${subject} — ${firstName} ${lastName}`,
      html: htmlBody,
      text: `New contact form submission\n\nFrom: ${firstName} ${lastName}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
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
