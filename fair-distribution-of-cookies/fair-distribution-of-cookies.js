function checkSolution(cookies, k) {
  let sum = cookies.reduce((a, b) => {
    return a + b;
  });
  let averageFloor = Math.floor(sum / k);
  let sumNew = averageFloor * k;
  let difference = sum - sumNew;
  return averageFloor + difference;
}
module.exports = checkSolution;
