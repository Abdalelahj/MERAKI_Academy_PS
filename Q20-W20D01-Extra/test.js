const workIn = require("./main");
test("Write a function accepts an array of integers and returns the Maximum product possible from three of those numbers. ", () => {
  expect(typeof workIn.maximumProductOfThree).toEqual("function");
});
test("return the Maximum product possible from three of numbers in array", () => {
  expect(workIn.maximumProductOfThree([3, 1, 3, 7])).toEqual(63);
});
test("return the Maximum product possible from three of numbers in array", () => {
  expect(workIn.maximumProductOfThree([0, 2, 3])).toEqual(0);
});
test("return the Maximum product possible from three of numbers in array", () => {
  expect(workIn.maximumProductOfThree([2, 3, 5])).toEqual(30);
});
test("return the Maximum product possible from three of numbers in array", () => {
  expect(workIn.maximumProductOfThree([10, 4, 5])).toEqual(200);
});
test("return the Maximum product possible from three of numbers in array", () => {
  expect(workIn.maximumProductOfThree([7, 0, 5])).toEqual(0);
});