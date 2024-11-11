const workIn = require("./main");

test("findPrime function is defined", () => {
  expect(workIn.findPrime).toBeDefined();
});

test("Calling findPrime with 7 prints out 4 statements", () => {
  workIn.findPrime(7);
  expect(console.log.mock.calls.length).toEqual(4);
});

beforeEach(() => {
  jest.spyOn(console, "log");
});
test("Calling findPrime with 7 prints out the correct values", () => {
  workIn.findPrime(7);

  expect(console.log.mock.calls[0][0]).toBe(2);
  expect(console.log.mock.calls[1][0]).toBe(3);
  expect(console.log.mock.calls[2][0]).toBe(5);
  expect(console.log.mock.calls[3][0]).toBe(7);
});

afterEach(() => {
  console.log.mockRestore();
});
