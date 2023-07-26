const checkNumber = require("./decode-ways");
test("Given a string s containing only digits, return the number of ways to decode it ", () => {
  expect(checkNumber("12")).toEqual(2);
  expect(checkNumber("226")).toEqual(3);
  expect(checkNumber("06")).toEqual(0);
});
