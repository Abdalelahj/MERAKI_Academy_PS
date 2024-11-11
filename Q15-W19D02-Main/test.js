const workIn = require("./main");
test("Write a function calculates the Highest possible sum of any n consecutive numbers in an array arr of integers (where n ≥ 1).", () => {
  expect(typeof workIn.findHighestPossibleSum).toEqual("function");
});
test("return  the Highest possible sum of any n consecutive numbers in an array arr of integers.", () => {
  expect(workIn.findHighestPossibleSum([10, 2, 3, 4, 2, 6, 8], 1)).toEqual(10);
});
test("return  the Highest possible sum of any n consecutive numbers in an array arr of integers.", () => {
  expect(workIn.findHighestPossibleSum([10, 2, 3, 4, 2, 6, 8], 2)).toEqual(14);
});
test("return  the Highest possible sum of any n consecutive numbers in an array arr of integers.", () => {
  expect(workIn.findHighestPossibleSum([10, 2, 3, 4, 2, 6, 8], 3)).toEqual(16);
});
test("return  the Highest possible sum of any n consecutive numbers in an array arr of integers.", () => {
  expect(workIn.findHighestPossibleSum([10, 2, 3, 4, 2, 6, 8], 4)).toEqual(20);
});
test("return  the Highest possible sum of any n consecutive numbers in an array arr of integers.", () => {
  expect(workIn.findHighestPossibleSum([10, 2, 3, 4, 2, 6, 8], 5)).toEqual(23);
});
test("return  the Highest possible sum of any n consecutive numbers in an array arr of integers.", () => {
  expect(
    workIn.findHighestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 3)
  ).toEqual(22);
});
test("return  the Highest possible sum of any n consecutive numbers in an array arr of integers.", () => {
  expect(
    workIn.findHighestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 4)
  ).toEqual(26);
});
test("return  the Highest possible sum of any n consecutive numbers in an array arr of integers.", () => {
  expect(
    workIn.findHighestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 5)
  ).toEqual(29);
});

test("return  the Highest possible sum of any n consecutive numbers in an array arr of integers.", () => {
  expect(
    workIn.findHighestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 2)
  ).toEqual(19);
});
test("return  the Highest possible sum of any n consecutive numbers in an array arr of integers.", () => {
  expect(
    workIn.findHighestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 4)
  ).toEqual(32);
});
test("return  the Highest possible sum of any n consecutive numbers in an array arr of integers.", () => {
  expect(
    workIn.findHighestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 5)
  ).toEqual(36);
});



 
 