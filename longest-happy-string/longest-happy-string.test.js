const createLongestHappyString = require("./longest-happy-string");
test("Return the longest possible happy string ", () => {
  expect(createLongestHappyString(1, 1, 7)).toEqual("ccaccbcc");
  expect(createLongestHappyString(7, 1, 0)).toEqual("aabaa");
});
