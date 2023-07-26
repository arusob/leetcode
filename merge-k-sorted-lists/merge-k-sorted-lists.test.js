const number = require("./merge-k-sorted-lists");
test("Merge all the linked-lists into one sorted linked-list and return it. ", () => {
  expect(
    number([
      [1, 4, 5],
      [1, 3, 4],
      [2, 6],
    ])
  ).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
  expect(number([])).toEqual([]);
  expect(number([[]])).toEqual([]);
});
