// src/app/api/lead/route.ts
import { sendTelegram } from "@/lib/integrations/telegram";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = (body.name || "").toString().trim();
    const phone = (body.phone || "").toString().trim();
    const city = (body.city || "").toString().trim();
    const service = (body.service || "").toString().trim();
    const comment = (body.comment || "").toString().trim();
    const source = (body.source || "").toString().trim();

    const lines = [
      "<b>New lead from site</b>",
      name && `Name: ${name}`,
      phone && `Phone: ${phone}`,
      city && `City: ${city}`,
      service && `Service: ${service}`,
      comment && `Comment: ${comment}`,
      source && `Source: ${source}`,
      "",
      `Time: ${new Date().toISOString()}`,
    ].filter(Boolean);

    const text = lines.join("\n");

    await sendTelegram(text);

    // если у тебя есть отправка email, она может идти здесь
    // await sendEmail(body);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead API error", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
