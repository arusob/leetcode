const findPlayetsWithZeroOrOneLosses = require("./find-players-with-zero-or-one-losses");
test("Print lists which not lost any matches and lost two ", () => {
  expect(
    findPlayetsWithZeroOrOneLosses([
      [1, 3],
      [2, 3],
      [3, 6],
      [5, 6],
      [5, 7],
      [4, 5],
      [4, 8],
      [4, 9],
      [10, 4],
      [10, 9],
    ])
  ).toEqual([
    [1, 2, 10],
    [4, 5, 7, 8],
  ]);
  expect(
    findPlayetsWithZeroOrOneLosses([
      [2, 3],
      [1, 3],
      [5, 4],
      [6, 4],
    ])
  ).toEqual([[1, 2, 5, 6], []]);
});
