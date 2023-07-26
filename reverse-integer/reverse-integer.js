function reverseInteger(x) {
  let xString = x.toString();
  let xStringReverse = "";
  if (x < 0) {
    let xWithoutMinus = x * -1;
    let xWithoutMinusString = xWithoutMinus.toString();
    for (let i = xWithoutMinusString.length - 1; i >= 0; i--) {
      xStringReverse = xStringReverse + xWithoutMinusString[i];
    }
    let output = xStringReverse * -1;
    return output;
  }
  if (x === 0) {
    return 0;
  }
  if (x > 0) {
    for (let i = xString.length - 1; i >= 0; i--) {
      xStringReverse = xStringReverse + xString[i];
    }
    let output = xStringReverse * 1;
    return output;
  }
}
module.exports = reverseInteger;
