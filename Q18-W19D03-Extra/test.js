const workIn = require("./main");
test("have a string, delete any characters that are not unique from the string", () => {
  expect(typeof workIn.removeNotUnique).toEqual("function");
});
test("have a string, delete any characters that are not unique from the string", () => {
  expect(workIn.removeNotUnique("hello lol")).toEqual("he");
});
test("have a string, delete any characters that are not unique from the string", () => {
  expect(workIn.removeNotUnique("xyzj")).toEqual("xyzj");
});
test("have a string, delete any characters that are not unique from the string", () => {
  expect(workIn.removeNotUnique("iiii")).toEqual("");
});
test("have a string, delete any characters that are not unique from the string", () => {
  expect(workIn.removeNotUnique("memory")).toEqual("eory");
});
test("have a string, delete any characters that are not unique from the string", () => {
  expect(workIn.removeNotUnique("")).toEqual(`it's empty`);
});
test("have a string, delete any characters that are not unique from the string", () => {
  expect(workIn.removeNotUnique("            ")).toEqual(`it's empty`);
});