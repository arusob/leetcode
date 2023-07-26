const whichIsBigger = require("./largest-number");
test("Return a string instead of an integer ", () => {
  expect(whichIsBigger([10, 2])).toEqual("210");
  expect(whichIsBigger([3, 30, 34, 5, 9])).toEqual("9534330");
});
