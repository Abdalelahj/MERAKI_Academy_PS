const workIn = require("./main");

test("Have the function LongestWord(str) take the str parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.", () => {
  expect(typeof workIn.longestWord_2).toEqual("function");
});
test("return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length.", () => {
  expect(workIn.longestWord_2("lol!- time.")).toEqual("time");
});
;test("return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length.", () => {
  expect(workIn.longestWord_2("I** love, cats")).toEqual("love");
});test("return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length.", () => {
  expect(workIn.longestWord_2("coding&& is awesome")).toEqual("awesome");
});
test("return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length.", () => {
  expect(workIn.longestWord_2("hello|| world")).toEqual("hello");
});




