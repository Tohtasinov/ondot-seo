// src/lib/telegram.ts

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_IDS =
  process.env.TELEGRAM_CHAT_IDS ?? process.env.TELEGRAM_CHAT_ID ?? "";

export async function sendTelegram(text: string) {
  if (!TELEGRAM_TOKEN || !TELEGRAM_CHAT_IDS) {
    console.error("Telegram: missing env TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_IDS");
    return;
  }

  const ids = TELEGRAM_CHAT_IDS.split(",")
    .map((id) => id.trim())
    .filter(Boolean);

  if (!ids.length) {
    console.error("Telegram: no chat ids parsed from TELEGRAM_CHAT_IDS");
    return;
  }

  const urlBase = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

  await Promise.all(
    ids.map(async (chatId) => {
      try {
        const res = await fetch(urlBase, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: "HTML",
          }),
        });

        let data: any = null;
        try {
          data = await res.json();
        } catch {
          // если не json, просто пропускаем
        }

        if (!res.ok) {
          console.error(
            "Telegram error",
            chatId,
            res.status,
            data || (await res.text().catch(() => null))
          );
        }
      } catch (err) {
        console.error("Telegram fetch failed", chatId, err);
      }
    })
  );
}
