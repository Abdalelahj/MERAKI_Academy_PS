const workIn = require("./main");
test("Write a JavaScript function to check whether an `input` is an array or not.", () => {
  expect(typeof workIn.isItArray).toEqual("function");
});
test("check whether an `input` is an array or not", () => {
  expect(workIn.isItArray([1, 2, 4, 0])).toBeTruthy();
});
test("check whether an `input` is an array or not", () => {
  expect(workIn.isItArray("w3resource")).toBeFalsy();
});
test("check whether an `input` is an array or not", () => {
  expect(workIn.isItArray(3)).toBeFalsy();
});
test("check whether an `input` is an array or not", () => {
  expect(workIn.isItArray(false)).toBeFalsy();
});
test("check whether an `input` is an array or not", () => {
  expect(workIn.isItArray([true, 3, "Mai"])).toBeTruthy();

});