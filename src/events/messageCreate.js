const Hadith = require('../services/hadith');
const { checkRateLimit } = require('../utils/rateLimiter');

const hadith = new Hadith();

module.exports = async function messageHandler(message) {
  if (message.author.bot) return;

  if (message.content.trim() === "$wa") {
    const allowed = checkRateLimit(message.author.id);

    if (!allowed) {
      return message.reply(`⚠️ You’ve reached the 2-hour limit for using \`$wa\`.`);
    }

    try {
      const result = await hadith.getRandomHadith();

      if (result) {
        const responseMessage = `📖 **Hadith from ${result.collection}**\n\n**Arabic:**\n${result.hadith}\n\n**Translation:**\n${result.translation}`;

        await message.reply(responseMessage);
      } else {
        await message.reply('❌ Failed to fetch a hadith. Try again later.');
      }
    } catch (err) {
      console.error('❌ Error in $wa handler:', err);
      await message.reply('❌ Internal error occurred.');
    }
  }
};
