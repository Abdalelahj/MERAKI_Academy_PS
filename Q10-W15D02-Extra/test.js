const isPartOf = require("./main");
test("Make an array method that can return whether or not a context array is a part of an input array.To simplify the problem, you can assume that both arrays will contain only strings;", () => {
  expect(typeof isPartOf).toEqual("function");
});
test("return whether or not a context array is a part of an input array.", () => {
  expect(["car", "dog", "cow"].isPartOf(["dog", "cow", "fox"])).toBeFalsy();
});
test("return whether or not a context array is a part of an input array.", () => {
  expect([].isPartOf([1, 5, 2])).toBeTruthy();
});
test("return whether or not a context array is a part of an input array.", () => {
  expect(
    ["car", "dog", "cow"].isPartOf(["dog", "cow", "fox", "car"])
  ).toBeTruthy();
});