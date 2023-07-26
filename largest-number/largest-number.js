function whichIsBigger(nums) {
  let numsSorted = [...nums.sort().reverse()];
  let resultArr = [];
  let i = 0;
  do {
    if (numsSorted.length > 1) {
      var a = numsSorted[i];
      var b = numsSorted[i + 1];
      var strA = a.toString();
      var strB = b.toString();
    }
    if ((strA + strB) * 1 > (strB + strA) * 1) {
      resultArr.push(a.toString());
      numsSorted.splice(i, 1);
    } else if ((strA + strB) * 1 < (strB + strA) * 1) {
      resultArr.push(b.toString());
      numsSorted.splice(i + 1, 1);
    }
    if (numsSorted.length === 1) {
      resultArr.push(numsSorted[0].toString());
      numsSorted.splice(0, 1);
    }
  } while (resultArr.length <= nums.length - 1);
  return resultArr.join("");
}
module.exports = whichIsBigger;
