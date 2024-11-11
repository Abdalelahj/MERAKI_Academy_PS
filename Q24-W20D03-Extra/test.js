const workIn = require("./main");
test(" Given an integer n, return n! (n factorial)", () => {
  expect(typeof workIn.findFactorial).toEqual("function");
});
test(" Given an integer n, return n! (n factorial)", () => {
  expect(workIn.findFactorial(1)).toEqual(1);
});
test(" Given an integer n, return n! (n factorial)", () => {
  expect(workIn.findFactorial(3)).toEqual(6);
});
test(" Given an integer n, return n! (n factorial)", () => {
  expect(workIn.findFactorial(4)).toEqual(24);
});
test(" Given an integer n, return n! (n factorial)", () => {
  expect(workIn.findFactorial(6)).toEqual(720);
});
test(" Given an integer n, return n! (n factorial)", () => {
  expect(workIn.findFactorial(11)).toEqual(39916800);
});



