const convertToMillisecs = require("./millisecs");

describe("#convert to milliseconds", () => {
  test("it handles basic case", () => {
    expect(convertToMillisecs(0, 1, 1)).toBe(61000)
  })
})