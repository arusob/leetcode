const howManyCoins = require("./coin-change-II");
test("Return the number of combinations that make up that amount ", () => {
  expect(howManyCoins(5, [1, 2, 5])).toEqual(4);
  expect(howManyCoins(3, [2])).toEqual(0);
  expect(howManyCoins(10, [10])).toEqual(1);
});
