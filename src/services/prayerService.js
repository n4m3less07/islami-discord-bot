const axios = require('axios');
const config = require('../config/config')

async function getPrayerTimes() {
  try {
    const response = await axios.get(
        `https://api.aladhan.com/v1/timingsByCity?city=${config.CITY}&country=${config.COUNTRY}&method=${config.METHOD}`
    );

    return response.data.data.timings; 
  } catch (err) {
    console.error('failed to fetch prayer times:', err.message);
    return null;
  }
}

module.exports = { getPrayerTimes };
