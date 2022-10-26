const whoLikesIt = require("./whoLikesIt");

describe("#make statements for likes", () => {
  test("it handles empty array", () => {
    expect(whoLikesIt([])).toBe("no one likes this")
  })
  test("it handles one liker", () => {
    expect(whoLikesIt(['Peter'])).toBe('Peter likes this')
  })
  test("it handles two likers", () => {
    expect(whoLikesIt(['Peter', 'Alex'])).toBe('Peter and Alex like this')
  })
  test("it handles three likers", () => {
    expect(whoLikesIt(['Peter', 'Alex', "Jorge"])).toBe('Peter, Alex and Jorge like this')
  })
  test("it handles four likers", () => {
    expect(whoLikesIt(['Peter', 'Alex', 'Jorge', 'Gio'])).toBe('Peter, Alex and 2 others like this')
  })
  test("it handles five likers", () => {
    expect(whoLikesIt(['Peter', 'Alex', 'Jorge', 'Gio', 'Shi'])).toBe('Peter, Alex and 3 others like this')
  })
})