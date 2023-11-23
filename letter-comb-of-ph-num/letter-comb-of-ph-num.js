function letterCombinations(digits) {
  const phKeyboard = {
    1: [""],
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  var digitsArr = digits.split("");
  var digitsArr = digitsArr.map((number) => {
    return number * 1;
  });
  let numOne = digitsArr[0],
    numTwo = digitsArr[1],
    numThree = digitsArr[2],
    numFour = digitsArr[3];
  let arrOne = phKeyboard[numOne],
    arrTwo = phKeyboard[numTwo],
    arrThree = phKeyboard[numThree],
    arrFour = phKeyboard[numFour];
  let resultOne = [],
    resultTwo = [],
    resultThree = [];
  let resultFour = [];
  if (digits.length === 0) {
    return [];
  }
  if (digits.length === 1) {
    for (let i = 0; i <= arrOne.length - 1; i++) {
      resultOne.push(arrOne[i]);
    }
    return resultOne;
  }
  if (digits.length === 2) {
    for (let i = 0; i <= arrOne.length - 1; i++) {
      for (let j = 0; j <= arrTwo.length - 1; j++) {
        resultTwo.push(arrOne[i] + arrTwo[j]);
      }
    }
    return resultTwo;
  }
  if (digits.length === 3) {
    for (let i = 0; i <= arrOne.length - 1; i++) {
      for (let j = 0; j <= arrTwo.length - 1; j++) {
        for (let k = 0; k <= arrThree.length - 1; k++) {
          resultThree.push(arrOne[i] + arrTwo[j] + arrThree[k]);
        }
      }
    }
    return resultThree;
  }
  if (digits.length === 4) {
    for (let i = 0; i <= arrOne.length - 1; i++) {
      for (let j = 0; j <= arrTwo.length - 1; j++) {
        for (let k = 0; k <= arrThree.length - 1; k++) {
          for (let l = 0; l <= arrFour.length - 1; l++) {
            resultFour.push(arrOne[i] + arrTwo[j] + arrThree[k] + arrFour[l]);
          }
        }
      }
    }
    return resultFour;
  }
}
module.exports = letterCombinations;
