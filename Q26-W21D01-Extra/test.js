const workIn = require("./main");
test("Write a function returns the number of occurrences of the most frequent character in a sentence", () => {
  expect(typeof workIn.timesOfMostFreqChar).toEqual("function");
});
test("return the number of occurrences of the most frequent character in a sentence.", () => {
  expect(workIn.timesOfMostFreqChar("hello all")).toEqual(4);
});
test("return the number of occurrences of the most frequent character in a sentence.", () => {
  expect(workIn.timesOfMostFreqChar("hello all lol")).toEqual(6);
});

test("return the number of occurrences of the most frequent character in a sentence.", () => {
  expect(workIn.timesOfMostFreqChar("hello all lool woooow")).toEqual(7);
});

test("return the number of occurrences of the most frequent character in a sentence.", () => {
  expect(workIn.timesOfMostFreqChar("hello all lol wow www.com")).toEqual(6);
});

test("return the number of occurrences of the most frequent character in a sentence.", () => {
  expect(workIn.timesOfMostFreqChar("Hi Toqa")).toEqual(
    "no occurrences all return once"
  );
});
