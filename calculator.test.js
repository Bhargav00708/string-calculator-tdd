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

test("should return sum when multiple numbers are passed", () => {
  expect(add("1,2,3")).toBe(6);
  expect(add("1,2,3,4,5")).toBe(15);
});

test("should handle newlines as delimiters", () => {
  expect(add("1\n2,3")).toBe(6);
});
