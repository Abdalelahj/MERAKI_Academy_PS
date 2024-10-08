const workIn = require("./main");
test("Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.", () => {
  expect(typeof workIn.firstReverse).toEqual("function");
});
test("return the string in reversed order.", () => {
  expect(workIn.firstReverse("I Love Code")).toEqual("edoC evoL I");
});
test("return the string in reversed order.", () => {
  expect(workIn.firstReverse("Hello World")).toEqual("dlroW olleH");
});
test("return the string in reversed order.", () => {
  expect(workIn.firstReverse("How are you?")).toEqual("?uoy era woH");
});
test("return the string in reversed order.", () => {
  expect(workIn.firstReverse("")).toEqual("");
});
