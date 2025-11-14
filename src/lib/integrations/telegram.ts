export async function sendLeadToTelegram(payload: Record<string, any>) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) return;

  const primary = process.env.TELEGRAM_CHAT_ID || "";
  const broadcast = process.env.TELEGRAM_BROADCAST_IDS || "";

  const targets = Array.from(
    new Set(
      [primary, ...broadcast.split(",")]
        .map(s => s.trim())
        .filter(Boolean)
    )
  );

  if (targets.length === 0) return;

  const lines = [
    "New lead",
    `Name: ${payload.name || ""}`,
    `Phone: ${payload.phone || ""}`,
    payload.city ? `City: ${payload.city}` : "",
    payload.service ? `Service: ${payload.service}` : "",
    payload.note ? `Note: ${payload.note}` : "",
  ].filter(Boolean);

  const text = lines.join("\n");
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  await Promise.allSettled(
    targets.map(chat_id =>
      fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ chat_id, text }),
        cache: "no-store",
      })
    )
  );
}
