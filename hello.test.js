const { test, expect } = require("@jest/globals");
const hello = require("./hello");

test('returns "hello world"', () => {
  expect(hello()).toBe("hello world");
});
