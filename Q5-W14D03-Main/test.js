const workIn = require("./main");
test("Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.", () => {
  expect(typeof workIn.findIntersection).toEqual("function");
});
test("return a comma-separated string containing the numbers that occur in elements of strArr in sorted order.", () => {
  expect(workIn.findIntersection(["", "1, 2, 4, 13, 15"])).toBeFalsy();
});
test("return a comma-separated string containing the numbers that occur in elements of strArr in sorted order.", () => {
  expect(
    workIn.findIntersection(["2, 5, 7, 14", "1, 25, 4, 13, 15"])
  ).toBeFalsy();
});
test("return a comma-separated string containing the numbers that occur in elements of strArr in sorted order.", () => {
  expect(
    workIn.findIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"])
  ).toEqual("1,4,13");
});
test("return a comma-separated string containing the numbers that occur in elements of strArr in sorted order.", () => {
  expect(
    workIn.findIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"])
  ).toEqual("1,9,10");
});