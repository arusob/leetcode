function createLongestHappyString(a, b, c) {
  let happyString = "";
  const map = { a, b, c };
  let mapSortByEntires = (map) => {
    return Object.entries(map).sort((a, b) => b[1] - a[1]);
  };
  let mapSorted = Object.fromEntries(mapSortByEntires(map));
  let mapSortedClone = { ...mapSorted };
  for (let i = 1; i <= Object.values(mapSortedClone)[0]; i++) {
    let firstKey = Object.keys(mapSorted)[0];
    let firstValue = Object.values(mapSorted)[0];
    if (
      happyString.length === 0 ||
      (happyString[i] !== happyString[i - 1] &&
        happyString[i - 1] === happyString[i - 2])
    ) {
      Object.defineProperty(mapSorted, firstKey, {
        value: (value = firstValue - 1),
      });
      happyString = happyString + firstKey + firstKey;
    }
    let secondKey = Object.keys(mapSorted)[1];
    let secondValue = Object.values(mapSorted)[1];
    if (secondValue > 0 && happyString[i] === happyString[i - 1]) {
      Object.defineProperty(mapSorted, secondKey, {
        value: (value = secondValue - 1),
      });
      happyString = happyString + secondKey;
    }
    let thirdKey = Object.keys(mapSorted)[2];
    let thirdValue = Object.values(mapSorted)[2];
    if (thirdValue > 0 && happyString[i + 1] === happyString[i]) {
      Object.defineProperty(mapSorted, thirdKey, {
        value: (value = thirdValue - 1),
      });
      happyString = happyString + thirdKey;
    }
    if (
      secondValue === 0 &&
      thirdValue === 0 &&
      happyString[i - 1] === happyString[i - 2]
    ) {
      return happyString;
    }
  }
}
module.exports = createLongestHappyString;
