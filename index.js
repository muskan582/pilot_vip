const TelegramBot = require("node-telegram-bot-api");

// ✅ TOKEN FROM ENV (MANDATORY)
const token = process.env.BOT_TOKEN;

if (!token) {
  console.error("❌ BOT_TOKEN missing");
  process.exit(1);
}

// ✅ Create bot with polling
const bot = new TelegramBot(token, { polling: true });

console.log("🤖 PILOT BET VIP SIGNALS Bot Running...");

// 👉 Channel link
const CHANNEL_URL = "https://t.me/+Q4NY7aS-PEoxNDZl";

// /start command
bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;

  const welcomeText = `
<b>🦅✈️ PILOT BET VIP SIGNALS 🚀</b>

Welcome aboard Captain 👨‍✈️  
This is a disciplined & educational signal community.

📊 What you get:
• Carefully researched signals  
• Risk-aware guidance  
• Learning-focused approach  

We don’t sell dreams —  
We focus on <b>strategy, patience & consistency.</b>

Tap below to join the VIP Channel 👇
`;

  await bot.sendMessage(chatId, welcomeText, {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [{ text: "📢 Join VIP Channel", url: CHANNEL_URL }],
        [{ text: "I Joined 👍", callback_data: "joined" }]
      ]
    }
  });

  await bot.sendMessage(
    chatId,
    `⚠️ <b>Disclaimer:</b>\nAll content is for educational purposes only.`,
    { parse_mode: "HTML" }
  );
});

// Button handler
bot.on("callback_query", async (query) => {
  const chatId = query.message.chat.id;

  if (query.data === "joined") {
    await bot.sendMessage(
      chatId,
      "❤️ Thanks for joining PILOT BET VIP SIGNALS!\nFasten your seatbelt & stay tuned ✈️📈"
    );
  }

  bot.answerCallbackQuery(query.id);
});
