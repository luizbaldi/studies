const { sum, subtract } = require("./examples/math");

test("sum should sums", () => {
  const result = sum(3, 7);
  const expected = 10;

  expect(result).toBe(expected);
});

test("subtract should subtracts", () => {
  const result = subtract(7, 3);
  const expected = 4;

  expect(result).toBe(expected);
});
