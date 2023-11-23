const decodeString = require("./decode-string");
test("Given an encoded string, return its decoded string ", () => {
  expect(decodeString("3[a]2[bc]")).toEqual("aaabcbc");
  expect(decodeString("3[a2[c]]")).toEqual("accaccacc");
  expect(decodeString("2[abc]3[cd]ef")).toEqual("abcabccdcdcdef");
});
