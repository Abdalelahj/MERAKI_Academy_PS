const workIn = require("./main");

test("floydTriangle function is defined", () => {
  expect(workIn.floydTriangle).toBeDefined();
});

test("Calling floydTriangle with 5 prints out 5 statements", () => {
  workIn.floydTriangle(5);
  expect(console.log.mock.calls.length).toEqual(5);
});

beforeEach(() => {
  jest.spyOn(console, "log");
});
test("Calling floydTriangle with 5 prints out the correct values", () => {
  workIn.floydTriangle(5);

  expect(console.log.mock.calls[0][0].trim()).toBe("1");
  expect(console.log.mock.calls[1][0].trim()).toBe("2 3");
  expect(console.log.mock.calls[2][0].trim()).toBe("4 5 6");
  expect(console.log.mock.calls[3][0].trim()).toBe("7 8 9 10");
  expect(console.log.mock.calls[4][0].trim()).toBe("11 12 13 14 15");
});

afterEach(() => {
  console.log.mockRestore();
});
