function whereHeaters(houses, heaters) {
  if (houses.length == 2) {
    var housesNew = [];
    for (let i = Math.min(...houses); i <= Math.max(...houses); i++) {
      housesNew.push(i);
    }
  }
  if (houses.length > 2) {
    housesNew = houses;
  }
  if (heaters.length <= 1) {
    let leftSide = housesNew.indexOf(heaters[0]) - 0;
    let placeOfHeater = housesNew.indexOf(heaters[0]);
    let lastElement = housesNew[housesNew.length - 1];
    let indexOfLastElement = housesNew.indexOf(lastElement);
    let rightSide = Math.abs(placeOfHeater - indexOfLastElement);
    if (leftSide === rightSide) {
      return leftSide;
    } else if (leftSide > rightSide) {
      return leftSide;
    } else if (leftSide < rightSide) {
      return rightSide;
    }
  }
  if (heaters.length > 1) {
    let distanceBetweenHeaters = housesNew.slice(
      housesNew.indexOf(Math.min(...heaters)) + 1,
      housesNew.indexOf(Math.max(...heaters))
    );
    let minRadius = distanceBetweenHeaters.length / 2;
    return minRadius;
  }
}
module.exports = whereHeaters;
