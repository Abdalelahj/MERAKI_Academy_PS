const workIn = require("./main");
test("Write a JavaScript function to copy an array", () => {
  expect(typeof workIn.array_Copy).toEqual("function");
});
test("return a copy of an array.", () => {
  expect(workIn.array_Copy(["string", true, 3])).toEqual(["string", true, 3]);
});
test("return a copy of an array.", () => {
  expect(workIn.array_Copy([1, 2, 3])).toEqual([1, 2, 3]);
});
test("return a copy of an array.", () => {
  expect(workIn.array_Copy([1, 9, 8])).toEqual([1, 9, 8]);;
});
test("return a copy of an array.", () => {
  expect(workIn.array_Copy([])).toEqual([]);
});