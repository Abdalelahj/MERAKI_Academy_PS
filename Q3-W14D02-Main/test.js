const workIn = require("./main");
test("Write a function reverses the characters of every word of a sentence. sentences contain only English letter and space characters.;", () => {
  expect(typeof workIn.reverseEachWord).toEqual("function");
});
test("reverses the characters of every word of a sentence.", () => {
  expect(workIn.reverseEachWord("Hello world")).toEqual("olleH dlrow");
});
test("reverses the characters of every word of a sentence.", () => {
  expect(workIn.reverseEachWord("Hello guys")).toEqual("olleH syug");
});
test("reverses the characters of every word of a sentence.", () => {
  expect(workIn.reverseEachWord("       ")).toEqual("Wrong!! it's empty string");
});