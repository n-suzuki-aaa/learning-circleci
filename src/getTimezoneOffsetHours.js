function getTimeZoneOffsetHours() {
  return new Date().getTimezoneOffset() / 60;
}

module.exports = getTimeZoneOffsetHours;
