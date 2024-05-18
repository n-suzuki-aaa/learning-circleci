const getTimezoneOffsetHours = require('./getTimezoneOffsetHours');

test('getTimezoneOffsetHours returns -9', () => {
  expect(getTimezoneOffsetHours()).toBe(-9);
})