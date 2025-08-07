require('dotenv').config();

module.exports = {
    DISCORD_TOKEN: process.env.DISCORD_TOKEN,
    CHANNEL_ID: process.env.CHANNEL_ID,
    CITY: process.env.CITY || 'Algiers',
    COUNTRY: process.env.COUNTRY || 'Algeria',
    METHOD: process.env.PRAYER_METHOD || '2'
};