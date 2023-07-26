const maximumDifference = require("./maximum-gap");
test("You must write an algorithm that runs in linear time and uses linear extra space ", () => {
  expect(maximumDifference([3, 6, 9, 1])).toEqual(3);
  expect(maximumDifference([10])).toEqual(0);
});
