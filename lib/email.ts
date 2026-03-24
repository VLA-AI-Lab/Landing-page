import nodemailer from 'nodemailer';

/* ══════════════════════════════════════════════════════════════════════════════
   SHARED TRANSPORTER
   ══════════════════════════════════════════════════════════════════════════════ */

let _transporter: nodemailer.Transporter | null = null;

export function getTransporter() {
  if (!_transporter) {
    _transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return _transporter;
}

/* ══════════════════════════════════════════════════════════════════════════════
   GENERIC EMAIL TEMPLATE
   ──────────────────────────────────────────────────────────────────────────────
   A single, brand-consistent HTML shell that every outgoing email uses.
   Pass in content blocks to customise per use-case.
   ══════════════════════════════════════════════════════════════════════════════ */

export interface EmailButton {
  label: string;
  url: string;
}

export interface EmailSection {
  /** Optional small label above the content (rendered as uppercase grey text) */
  label?: string;
  /** HTML string for the section body */
  html: string;
}

export interface EmailTemplateOptions {
  /** Preview text shown in inbox list (before opening) */
  previewText?: string;
  /** Short uppercase subtitle shown in the header below the logo */
  headerTagline?: string;
  /** Optional pill badge rendered below the header (e.g. category) */
  badge?: string;
  /** Greeting line, e.g. "Hi Abebe," — rendered as a bold intro */
  greeting?: string;
  /** Main body sections — rendered in order */
  sections: EmailSection[];
  /** Primary CTA button */
  button?: EmailButton;
  /** Footer note — plain text, replaces the default */
  footerText?: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vlaailab.com';

export function buildEmailHtml(options: EmailTemplateOptions): string {
  const {
    previewText = '',
    headerTagline = '',
    badge,
    greeting,
    sections,
    button,
    footerText = 'This is an automated message from VLA AI Lab.',
  } = options;

  /* ── helper: render one section ── */
  function renderSection(s: EmailSection) {
    const labelHtml = s.label
      ? `<p style="margin:0 0 10px;font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;font-weight:600;">${s.label}</p>`
      : '';
    return `
      <tr>
        <td style="padding:20px 40px 0;">
          ${labelHtml}
          <div style="font-size:15px;line-height:1.7;color:#334155;">${s.html}</div>
        </td>
      </tr>`;
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <!--[if !mso]><!-->
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
  </style>
  <!--<![endif]-->
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Inter,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">

  ${previewText ? `<div style="display:none;max-height:0;overflow:hidden;">${previewText}${'&nbsp;'.repeat(80)}</div>` : ''}

  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f1f5f9;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);max-width:600px;width:100%;">

          <!-- ═══ HEADER ═══ -->
          <tr>
            <td style="background:linear-gradient(135deg,#0F3E6D 0%,#1a5a9e 100%);padding:32px 40px;text-align:center;">
              <!-- Logo -->
              <table cellpadding="0" cellspacing="0" role="presentation" style="margin:0 auto;">
                <tr>
                  <td>
                    <a href="${BASE_URL}" style="text-decoration:none;">
                      <span style="font-size:28px;font-weight:800;letter-spacing:1px;">
                        <span style="color:#1D9E75;">V</span><span style="color:#EF9F27;">L</span><span style="color:#7F77DD;">A</span>
                        <span style="color:rgba(255,255,255,0.7);font-weight:300;margin-left:4px;">AI Lab</span>
                      </span>
                    </a>
                  </td>
                </tr>
              </table>
              ${headerTagline ? `<p style="color:rgba(255,255,255,0.65);font-size:11px;letter-spacing:3px;text-transform:uppercase;margin:10px 0 0;font-weight:600;">${headerTagline}</p>` : ''}
            </td>
          </tr>

          ${badge ? `
          <!-- ═══ BADGE ═══ -->
          <tr>
            <td style="padding:24px 40px 0;">
              <table cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="background:#EFF6FF;color:#0F3E6D;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;padding:5px 14px;border-radius:20px;">
                    ${badge}
                  </td>
                </tr>
              </table>
            </td>
          </tr>` : ''}

          ${greeting ? `
          <!-- ═══ GREETING ═══ -->
          <tr>
            <td style="padding:28px 40px 0;">
              <p style="margin:0;font-size:18px;font-weight:700;color:#0f172a;">${greeting}</p>
            </td>
          </tr>` : ''}

          <!-- ═══ SECTIONS ═══ -->
          ${sections.map(renderSection).join('\n')}

          ${button ? `
          <!-- ═══ BUTTON ═══ -->
          <tr>
            <td style="padding:28px 40px 0;text-align:center;">
              <a href="${button.url}" style="display:inline-block;background:#0F3E6D;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:14px 36px;border-radius:8px;letter-spacing:0.3px;">
                ${button.label}
              </a>
            </td>
          </tr>` : ''}

          <!-- ═══ SPACER ═══ -->
          <tr><td style="padding:16px 0;"></td></tr>

          <!-- ═══ FOOTER ═══ -->
          <tr>
            <td style="background:#f8fafc;padding:24px 40px;border-top:1px solid #e2e8f0;">
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="text-align:center;">
                    <p style="margin:0 0 8px;font-size:12px;color:#94a3b8;line-height:1.5;">${footerText}</p>
                    <p style="margin:0;font-size:11px;color:#cbd5e1;">
                      <a href="${BASE_URL}" style="color:#64748b;text-decoration:none;">vlaailab.com</a>
                      &nbsp;&middot;&nbsp;
                      <a href="mailto:contact@vla.et" style="color:#64748b;text-decoration:none;">contact@vla.et</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/* ══════════════════════════════════════════════════════════════════════════════
   SEND HELPER
   ══════════════════════════════════════════════════════════════════════════════ */

export interface SendEmailOptions {
  to: string;
  subject: string;
  template: EmailTemplateOptions;
  /** Plain text fallback */
  text: string;
  replyTo?: string;
}

export async function sendEmail(options: SendEmailOptions) {
  const transporter = getTransporter();
  await transporter.sendMail({
    from: `"VLA AI Lab" <${process.env.SMTP_USER}>`,
    to: options.to,
    replyTo: options.replyTo,
    subject: options.subject,
    html: buildEmailHtml(options.template),
    text: options.text,
  });
}
