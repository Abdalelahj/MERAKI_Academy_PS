
const workIn = require("./main");
test("Find the first item which appear an even number of times in an array.", () => {
  expect(typeof workIn.evenAppearance).toEqual("function");
});
test("return first item which appear an even number of times in an array.", () => {
  expect(workIn.evenAppearance([1, 9, 7, 3, 6, 6, 8, 9, 9])).toEqual(6);
});
test("return first item which appear an even number of times in an array.", () => {
  expect(workIn.evenAppearance([1, 2, 2, 9, 8, 8, 6, 6])).toEqual(2);
});
test("return first item which appear an even number of times in an array.", () => {
  expect(workIn.evenAppearance([1, 1, 2, 6, 6])).toEqual(1);
})