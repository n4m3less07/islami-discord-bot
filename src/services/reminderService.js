const cron = require('node-cron');
const config = require('../config/config');
const { getPrayerTimes } = require('./prayerService');

class ReminderService {
  constructor(client) {
    this.client = client;
    this.scheduledJobs = [];
  }

  async setupPrayerReminders() {
    this.clearJobs();

    const times = await getPrayerTimes();
    if (!times) {
      console.error('could not fetch prayer times');
      return;
    }

    const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

    prayers.forEach((prayer) => {
      const time = times[prayer];
      if (time) {
        this.schedulePrayerReminder(prayer, time);
      }
    });

    this.scheduleDailyReset();

    console.log('real prayer reminders scheduled');
  }

  schedulePrayerReminder(prayer, time) {
    const [hours, minutes] = time.split(':').map(Number);
    const cronExpression = `${minutes} ${hours} * * *`;

    const job = cron.schedule(
      cronExpression,
      async () => {
        await this.sendPrayerReminder(prayer, time);
      },
      {
        timezone: config.TIMEZONE || 'Africa/Algiers',
        scheduled: true,
      }
    );

    this.scheduledJobs.push(job);

    console.log(`reminder for ${prayer} scheduled at ${time}`);
  }

  async sendPrayerReminder(prayer, time) {
    try {
      const channel = this.client.channels.cache.get(config.CHANNEL_ID);
      if (!channel) {
        console.error('channel not found');
        return;
      }

      await channel.send(`🕌 It's time for **${prayer}** prayer (${time})`);
      console.log(`📢 sent ${prayer} prayer reminder`);
    } catch (err) {
      console.error('error sending reminder:', err.message);
    }
  }

  scheduleDailyReset() {
    cron.schedule(
      '0 0 * * *',
      async () => {
        console.log('midnight reset refreshing prayer times');
        await this.setupPrayerReminders();
      },
      {
        timezone: config.TIMEZONE || 'Africa/Algiers',
        scheduled: true,
      }
    );
  }

  clearJobs() {
    this.scheduledJobs.forEach((job) => job.stop());
    this.scheduledJobs = [];
  }
}

module.exports = ReminderService;
