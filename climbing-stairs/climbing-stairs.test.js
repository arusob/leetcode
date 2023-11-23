const climbingStairs = require("./climbing-stairs");
test("In how many distinct ways can you climb to the top ", () => {
  expect(climbingStairs(2)).toEqual(2);
  expect(climbingStairs(3)).toEqual(3);
});
