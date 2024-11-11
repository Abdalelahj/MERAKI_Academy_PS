const workIn = require("./main");
test("Write a function returns the length of the longest sequence of 1s in an array of 1s and 0s", () => {
  expect(typeof workIn.longestSequence).toEqual("function");
});
test("return the length of the longest sequence of 1s in an array of 1s and 0s.", () => {
  expect(workIn.longestSequence([1, 0, 0, 1])).toEqual(1);
});

test("return the length of the longest sequence of 1s in an array of 1s and 0s.", () => {
  expect(workIn.longestSequence([0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1])).toEqual(
    5
  );
});
test("return the length of the longest sequence of 1s in an array of 1s and 0s.", () => {
  expect(workIn.longestSequence([1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1])).toEqual(3);
});
test("return the length of the longest sequence of 1s in an array of 1s and 0s.", () => {
  expect(workIn.longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1])).toEqual(
    4
  );
});
test("return the length of the longest sequence of 1s in an array of 1s and 0s.", () => {
  expect(
    workIn.longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1])
  ).toEqual(6);
});
test("return the length of the longest sequence of 1s in an array of 1s and 0s.", () => {
  expect(
    workIn.longestSequence([1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1])
  ).toEqual(5);
});
test("return the length of the longest sequence of 1s in an array of 1s and 0s.", () => {
  expect(workIn.longestSequence([0, 0, 0, 0])).toEqual(
    "There is no one sequenced"
  );
});
