const workIn = require("./main");
test("write a function to return the longest word in the string", () => {
  expect(typeof workIn.longestWord).toEqual("function");
});
test("return the longest word in the string.", () => {
  expect(workIn.longestWord("time dog cat")).toEqual("time");
});
test("return the longest word in the string.", () => {
  expect(workIn.longestWord("we love cats")).toEqual("love");
});
test("return the longest word in the string.", () => {
  expect(workIn.longestWord("dogs and cats are cute")).toEqual("dogs");
});
test("return the longest word in the string.", () => {
  expect(workIn.longestWord("")).toEqual(`it's empty string`);
});