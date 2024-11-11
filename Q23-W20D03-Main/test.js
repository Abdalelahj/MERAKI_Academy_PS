const workIn = require("./main");
test("Have the function usernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules: 1. The username is between 4 and 25 characters.2. It must start with a letter. 3. It can only contain letters, numbers, and the underscore character. 4. It cannot end with an underscore character.If the username is valid then your program should return the string true, otherwise return the string false. ", () => {
  expect(typeof workIn.usernameValidation).toEqual("function");
});
test("If the username is valid then your program should return the string true, otherwise return the string false.", () => {
  expect(workIn.usernameValidation("aa_")).toBeFalsy();
});
test("If the username is valid then your program should return the string true, otherwise return the string false.", () => {
  expect(workIn.usernameValidation("3MaiYousef")).toBeFalsy();
});
test("If the username is valid then your program should return the string true, otherwise return the string false.", () => {
  expect(workIn.usernameValidation("#MaiYousef")).toBeFalsy();
});
test("If the username is valid then your program should return the string true, otherwise return the string false.", () => {
  expect(workIn.usernameValidation("3  MaiYousef")).toBeFalsy();
});
test("If the username is valid then your program should return the string true, otherwise return the string false.", () => {
  expect(workIn.usernameValidation("Mai4Yousef!_")).toBeFalsy();
});
test("If the username is valid then your program should return the string true, otherwise return the string false.", () => {
  expect(workIn.usernameValidation("u__hello_world123")).toBeTruthy();
});
test("If the username is valid then your program should return the string true, otherwise return the string false.", () => {
  expect(workIn.usernameValidation("John_123_H")).toBeTruthy();
});
