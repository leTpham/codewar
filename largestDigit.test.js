const largestDigit = require("./largestDigit");

describe("#largestDigit", () => {
  test("it handles basic case", () => {
    expect(largestDigit(45176)).toBe(76541)
  })
  test("it handles number with repeated digits", () => {
    expect(largestDigit(34020024186)).toBe(86443221000)
  })
})