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

test("should support custom single-character delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("should throw an error when negative numbers are present", () => {
  expect(() => add("1,-2,3")).toThrow("negatives not allowed: -2");
});

test("should list all negative numbers in the error", () => {
  expect(() => add("1,-2,-5")).toThrow("negatives not allowed: -2,-5");
});

test("should ignore numbers greater than 1000", () => {
  expect(add("2,1001")).toBe(2);
});

test("should support delimiters of any length", () => {
  expect(add("//[***]\n1***2***3")).toBe(6);
});

test("should support multiple single-char delimiters", () => {
  expect(add("//[*][%]\n1*2%3")).toBe(6);
});

test("should support multiple multi-char delimiters", () => {
  expect(add("//[**][%%]\n1**2%%3")).toBe(6);
});
