const workIn = require("./main");
test(" write function check if the given number is Armstrong number and return true or false accordingly ", () => {
  expect(typeof workIn.isArmstrong).toEqual("function");
});
test("check if the given number is Armstrong number and return true or false accordingly", () => {
  expect(workIn.isArmstrong(407)).toEqual(true);
});
test("check if the given number is Armstrong number and return true or false accordingly", () => {
  expect(workIn.isArmstrong(370)).toEqual(true);});
test("check if the given number is Armstrong number and return true or false accordingly", () => {
  expect(workIn.isArmstrong(407)).toEqual(true);
});
test("check if the given number is Armstrong number and return true or false accordingly", () => {
  expect(workIn.isArmstrong(371)).toEqual(true);
});
test("check if the given number is Armstrong number and return true or false accordingly", () => {
  expect(workIn.isArmstrong(153)).toEqual(true);
});
test("check if the given number is Armstrong number and return true or false accordingly", () => {
  expect(workIn.isArmstrong(154)).toEqual(false);
});
test("check if the given number is Armstrong number and return true or false accordingly", () => {
  expect(workIn.isArmstrong(152514214)).toEqual(false);
});

