const numberOfDistinctLetters = require("./best-time-to-buy-and-sell-stock");
test("Find the maximum profit you can achieve. You may complete at most two transactions ", () => {
  expect(numberOfDistinctLetters([3, 3, 5, 0, 0, 3, 1, 4])).toEqual(6);
  expect(numberOfDistinctLetters([1, 2, 3, 4, 5])).toEqual(4);
  expect(numberOfDistinctLetters([7, 6, 4, 3, 1])).toEqual(0);
});
