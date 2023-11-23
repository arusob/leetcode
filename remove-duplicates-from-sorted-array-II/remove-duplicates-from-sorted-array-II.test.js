const removeDuplicate = require("./remove-duplicates-from-sorted-array-II");
test("Print a single number without k-duplicate ", () => {
  expect(removeDuplicate([1, 1, 1, 2, 2, 3])).toEqual([1, 1, 2, 2, 3]);
  expect(removeDuplicate([0, 0, 1, 1, 1, 1, 2, 3, 3])).toEqual([
    0, 0, 1, 1, 2, 3, 3,
  ]);
});
