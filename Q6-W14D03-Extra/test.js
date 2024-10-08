const workIn = require("./main");
test("have an array of negative/positive integers, return the element in the middle position of the array If the array has an even number of elements, return the average of the two middle elements instead.", () => {
  expect(typeof workIn.arrayCenter).toEqual("function");
});
test("return the element in the middle position of the array", () => {
  expect(workIn.arrayCenter([2, 5, 1])).toEqual(5);
});
test("return the element in the middle position of the array", () => {
  expect(workIn.arrayCenter([2, 3, 2, 9, 2])).toEqual(2);
});
test("return the element in the middle position of the array", () => {
  expect(workIn.arrayCenter([2, 3])).toEqual(2.5);
});
test("return the element in the middle position of the array", () => {
  expect(workIn.arrayCenter([2, 3, -4, 6, 1, 5])).toEqual(1);
});
test("return the element in the middle position of the array", () => {
  expect(workIn.arrayCenter([2, 3, 4, -6, 2])).toEqual(4);
});
test("return the element in the middle position of the array", () => {
  expect(workIn.arrayCenter([])).toEqual("empty Array");
});
