const userTimestamps = new Map();

const MAX_CALLS = 10;
const WINDOW_TIME = 2 * 60 * 60 * 1000; 

function checkRateLimit(userId) {
  const now = Date.now();
  const timestamps = userTimestamps.get(userId) || [];

  const validTimestamps = timestamps.filter(ts => now - ts < WINDOW_TIME);

  if (validTimestamps.length >= MAX_CALLS) {
    return false;
  }

  validTimestamps.push(now);
  userTimestamps.set(userId, validTimestamps);
  return true;
}

module.exports = { checkRateLimit };
