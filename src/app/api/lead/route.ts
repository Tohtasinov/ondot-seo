// src/app/api/lead/route.ts
import { NextResponse } from "next/server";
import { sendTelegram } from "@/lib/integrations/telegram";
import { sendLeadToEmail } from "@/lib/integrations/email";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const city = String(body.city || "").trim();
    const service = String(body.service || "").trim();
    // берем note из формы, а если вдруг будет comment, то тоже поддерживаем
    const note = String(body.note || body.comment || "").trim();
    const source = String(body.source || "").trim();

    const lines = [
      "<b>New lead from site</b>",
      name && `Name: ${name}`,
      phone && `Phone: ${phone}`,
      city && `City: ${city}`,
      service && `Service: ${service}`,
      note && `Issue: ${note}`,
      source && `Source: ${source}`,
      "",
      `Time: ${new Date().toISOString()}`,
    ].filter(Boolean);

    const text = lines.join("\n");

    // отправляем и в телеграм, и на почту
    await Promise.all([
      sendTelegram(text),
      sendLeadToEmail({
        name,
        phone,
        city,
        service,
        note,
        source,
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead API error", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
