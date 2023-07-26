const medianTwoSortedArrays = require("./median-of-two-sorted-arrays");
test("Return the median of the two sorted arrays ", () => {
  expect(medianTwoSortedArrays([1, 3], [2])).toEqual(2);
  expect(medianTwoSortedArrays([1, 2], [3, 4])).toEqual(2.5);
});
