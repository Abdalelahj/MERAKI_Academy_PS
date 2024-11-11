const workIn = require("./main");
test("have a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.If the url does not contain a query string, return undefined ", () => {
  expect(typeof workIn.getQueryString).toEqual("function");
});
test("return the query string data as an array of key-value pairs, in the order that they appear.If the url does not contain a query string, return undefined", () => {
  expect(workIn.getQueryString("http://example.com?a=lol")).toEqual([
    ["a", "lol"],
  ]);
});
test("return the query string data as an array of key-value pairs, in the order that they appear.If the url does not contain a query string, return undefined", () => {
  expect(workIn.getQueryString("http://example.com?a=lol&b=88")).toEqual([
    ["a", "lol"],
    ["b", "88"],
  ]);
});
test("return the query string data as an array of key-value pairs, in the order that they appear.If the url does not contain a query string, return undefined", () => {
  expect(workIn.getQueryString("http://example.com?msg=lol%20world")).toEqual([
    ["msg", "lol world"],
  ]);
});
test("return the query string data as an array of key-value pairs, in the order that they appear.If the url does not contain a query string, return undefined", () => {
  expect(workIn.getQueryString("http://example.com")).toEqual(undefined);
});