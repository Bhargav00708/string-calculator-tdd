const { add } = require("./calculator");

test("should return 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("should return number when only one number is passed", () => {
  expect(add("1")).toBe(1);
});

test("should return sum when two numbers are passed", () => {
  expect(add("1,5")).toBe(6);
});
