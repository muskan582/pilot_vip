
const TelegramBot = require("node-telegram-bot-api");

// 👉 Your Bot Token
const token = "YOUR_BOT_TOKEN_HERE";

// 👉 Create bot
const bot = new TelegramBot(token, { polling: true });

console.log("🤖 PILOT BET VIP SIGNALS Bot Running...");

// 👉 Channel
const CHANNEL_URL = "https://t.me/+Q4NY7aS-PEoxNDZl";

// /start command
bot.onText(/\/start/, (msg) => {
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

  const options = {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "📢 Join VIP Channel", url: CHANNEL_URL }
        ],
        [
          { text: "I Joined 👍", callback_data: "joined" }
        ]
      ]
    }
  };

  bot.sendMessage(chatId, welcomeText, options);

  bot.sendMessage(
    chatId,
    `⚠️ <b>Disclaimer:</b>\nAll content is for educational purposes only.`,
    { parse_mode: "HTML" }
  );
});

// Button Action
bot.on("callback_query", (query) => {
  const chatId = query.message.chat.id;

  if (query.data === "joined") {
    bot.sendMessage(
      chatId,
      "❤️ Thanks for joining PILOT BET VIP SIGNALS!\nFasten your seatbelt & stay tuned ✈️📈"
    );
  }

  bot.answerCallbackQuery(query.id);
});
