const printSingleNumber = require("./single-number-III");
test("Print a single number without duplicate ", () => {
  expect(printSingleNumber([1, 2, 1, 3, 2, 5])).toEqual([3, 5]);
  expect(printSingleNumber([-1, 0])).toEqual([-1, 0]);
  expect(printSingleNumber([0, 1])).toEqual([0, 1]);
});
