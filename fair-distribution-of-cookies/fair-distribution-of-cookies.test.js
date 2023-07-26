const checkSolution = require("./fair-distribution-of-cookies");
test("Return the minimum unfairness of all distributions ", () => {
  expect(checkSolution([8, 15, 10, 20, 8], 2)).toEqual(31);
  expect(checkSolution([6, 1, 3, 2, 2, 4, 1, 2], 3)).toEqual(7);
});
