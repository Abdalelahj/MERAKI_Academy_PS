const workIn = require("./main");
test("Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by recurrence and then by ascending order by character. ", () => {
  expect(typeof workIn.characterRecurrence).toEqual("function");
});
test("take input as string and return an array of arrays sorted in descending order by recurrence and then by ascending order by character", () => {
  expect(workIn.characterRecurrence("mississippi")).toEqual([
    ["i", 4],
    ["s", 4],
    ["p", 2],
    ["m", 1],
  ]);
});
test("take input as string and return an array of arrays sorted in descending order by recurrence and then by ascending order by character", () => {
  expect(workIn.characterRecurrence("miaaiaiaippi")).toEqual([
    ["i", 5],
    ["a", 4],
    ["p", 2],
    ["m", 1],
  ]);
});
test("take input as string and return an array of arrays sorted in descending order by recurrence and then by ascending order by character", () => {
  expect(workIn.characterRecurrence("miaaiamaippi")).toEqual([
    ["a", 4],
    ["i", 4],
    ["m", 2],
    ["p", 2],
  ]);
});
test("take input as string and return an array of arrays sorted in descending order by recurrence and then by ascending order by character", () => {
  expect(workIn.characterRecurrence("miaaiaaippi")).toEqual([
    ["a", 4],
    ["i", 4],
    ["p", 2],
    ["m", 1],
  ]);
});


