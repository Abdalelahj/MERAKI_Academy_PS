const workIn = require("./main");
test("Write a function that returns the sum of odd numbers in an array.", () => {
  expect(typeof workIn.sumOddNumber).toEqual("function");
});
test("returns the sum of odd numbers in an array.", () => {
  expect(workIn.sumOddNumber([1, 2, 3, 4, 5])).toEqual(9);
});
test("returns the sum of odd numbers in an array.", () => {
  expect(workIn.sumOddNumber([1, 5, 3, 4, 5])).toEqual(14);
});
test("returns the sum of odd numbers in an array.", () => {
  expect(workIn.sumOddNumber([12, 2, 3, 4, 5, 0])).toEqual(8);
});
test("returns the sum of odd numbers in an array.", () => {
  expect(workIn.sumOddNumber([2, 4, 6, 0])).toEqual(0);
});
test("returns the sum of odd numbers in an array.", () => { 
   expect(workIn.sumOddNumber([1, 5, 3, 4, 5])).toEqual(14);
});
test("returns the sum of odd numbers in an array.", () => {
  expect(workIn.sumOddNumber([-2, 0, 4, -3, 5])).toEqual(2);
});
test("returns the sum of odd numbers in an array.", () => {
  expect(workIn.sumOddNumber([-2, 0, 4, -3, 5])).toEqual(2);
});
test("returns the sum of odd numbers in an array.", () => {
  expect(workIn.sumOddNumber([])).toEqual(0);
});

