const workIn = require("./main");
test("Write a function returns true if a number is a power of 2, and false if not ", () => {
  expect(typeof workIn.isPowerOfTwo).toEqual("function");
});
test("return true if a number is a power of 2, and false if not", () => {
  expect(workIn.isPowerOfTwo(4)).toBeTruthy();
});
test("return true if a number is a power of 2, and false if not", () => {
  expect(workIn.isPowerOfTwo(6)).toBeFalsy();
});
test("return true if a number is a power of 2, and false if not", () => {
  expect(workIn.isPowerOfTwo(11)).toBeFalsy();
});
test("return true if a number is a power of 2, and false if not", () => {
  expect(workIn.isPowerOfTwo(18)).toBeFalsy();
});
test("return true if a number is a power of 2, and false if not", () => {
  expect(workIn.isPowerOfTwo(16)).toBeTruthy();
});
test("return true if a number is a power of 2, and false if not", () => {
  expect(workIn.isPowerOfTwo(24)).toBeFalsy();
});
test("return true if a number is a power of 2, and false if not", () => {
  expect(workIn.isPowerOfTwo(25)).toBeFalsy();
});
test("return true if a number is a power of 2, and false if not", () => {
  expect(workIn.isPowerOfTwo(28)).toBeFalsy();
});
test("return true if a number is a power of 2, and false if not", () => {
  expect(workIn.isPowerOfTwo(32)).toBeTruthy();
});
test("return true if a number is a power of 2, and false if not", () => {
  expect(workIn.isPowerOfTwo(64)).toBeTruthy();
});
test("return true if a number is a power of 2, and false if not", () => {
  expect(workIn.isPowerOfTwo(1023)).toBeFalsy();
});
test("return true if a number is a power of 2, and false if not", () => {
  expect(workIn.isPowerOfTwo(1024)).toBeTruthy();
});
test("return true if a number is a power of 2, and false if not", () => {
  expect(workIn.isPowerOfTwo(1)).toBeTruthy();
});
test("return true if a number is a power of 2, and false if not", () => {
  expect(workIn.isPowerOfTwo(2)).toBeTruthy();
});
test("return true if a number is a power of 2, and false if not", () => {
  expect(workIn.isPowerOfTwo(0)).toBeFalsy();
});
