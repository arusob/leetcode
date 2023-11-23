const maximumAmountOfMoney = require("./house-robber-II");
test("Return the maximum amount of money you can rob tonight without alerting the police ", () => {
  expect(maximumAmountOfMoney([2, 3, 2])).toEqual(3);
  expect(maximumAmountOfMoney([1, 2, 3, 1])).toEqual(4);
  expect(maximumAmountOfMoney([1, 2, 3])).toEqual(3);
});
