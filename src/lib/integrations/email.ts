import nodemailer from "nodemailer";

export async function sendLeadToEmail(payload: Record<string, any>) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "465");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.LEADS_TO;
  if (!host || !user || !pass || !to) return;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const subject = `Lead: ${payload.service || "Service"} ${payload.city ? `in ${payload.city}` : ""}`.trim();
  const text = [
    "New lead",
    `Name: ${payload.name || ""}`,
    `Phone: ${payload.phone || ""}`,
    payload.city ? `City: ${payload.city}` : "",
    payload.service ? `Service: ${payload.service}` : "",
    payload.note ? `Note: ${payload.note}` : "",
  ].filter(Boolean).join("\n");

  await transporter.sendMail({
    from: user,
    to,
    subject,
    text,
  });
}
