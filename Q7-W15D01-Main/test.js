const workIn = require("./main");
test("Write a function that returns the number of unique items in an array.", () => {
  expect(typeof workIn.uniqueItems).toEqual("function");
});
test("returns the number of unique items in an array.", () => {
  expect(workIn.uniqueItems([1, 1, 1, 1, 1])).toEqual(1);
});
test("returns the number of unique items in an array.", () => {
  expect(workIn.uniqueItems([3, 3, 5, 3])).toEqual(2);
});
test("returns the number of unique items in an array.", () => {
  expect(workIn.uniqueItems([5, 1, 1, 5, 1])).toEqual(2);
});
test("returns the number of unique items in an array.", () => {
  expect(workIn.uniqueItems([1, 6, 7])).toEqual(3);
});
test("returns the number of unique items in an array.", () => {
  expect(workIn.uniqueItems([5, 1, 2, 2, 1, 5])).toEqual(3);
});
test("returns the number of unique items in an array.", () => {
  expect(workIn.uniqueItems([5, 77, 1, 3])).toEqual(4);
});
