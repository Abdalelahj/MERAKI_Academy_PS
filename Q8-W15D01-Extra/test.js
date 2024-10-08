const workIn = require("./main");
test("Write a function that accept a positive number and returns true if the number is only divisible by 1 and itself.", () => {
  expect(typeof workIn.isPrime).toEqual("function");
});
test("returns true if the number is positive and only divisible by 1 and itself.", () => {
  expect(workIn.isPrime(7)).toEqual(true);
});
test("returns true if the number is positive and only divisible by 1 and itself.", () => {
  expect(workIn.isPrime(1)).toEqual(false);
});
test("returns true if the number is positive and only divisible by 1 and itself.", () => {
  expect(workIn.isPrime(4)).toEqual(false);
});
test("returns true if the number is positive and only divisible by 1 and itself.", () => {
  expect(workIn.isPrime(-23)).toEqual("The number is negative.");
});

test("returns true if the number is positive and only divisible by 1 and itself.", () => {
  expect(workIn.isPrime(11)).toEqual(true);
});