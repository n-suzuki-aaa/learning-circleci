const getTimeZoneOffsetHours = require('./getTimeZoneOffsetHours');

test('getTimeZoneOffsetHours returns -9', () => {
  expect(getTimeZoneOffsetHours()).toBe(-9);
})