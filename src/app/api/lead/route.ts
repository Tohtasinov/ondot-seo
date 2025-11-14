import { NextResponse } from "next/server";
import { sendLeadToTelegram } from "@/lib/integrations/telegram";
import { sendLeadToEmail } from "@/lib/integrations/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body?.name || !body?.phone) {
      return NextResponse.json({ ok: false, error: "name and phone required" }, { status: 400 });
    }

    // Параллельно отправляем в Telegram и на Email
    await Promise.allSettled([
      sendLeadToTelegram(body),
      sendLeadToEmail(body),
    ]);

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Lead error", e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
