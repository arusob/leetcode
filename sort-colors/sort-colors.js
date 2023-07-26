function sortColors(nums) {
  let inputNums = nums;
  let templateNum = [0, 1, 2];
  let outPut = [];
  for (let i = 0; i <= templateNum.length - 1; i++) {
    for (let j = 0; j <= inputNums.length - 1; j++) {
      let el = inputNums[j];
      if (el === templateNum[i]) {
        outPut.push(el);
        inputNums.splice([j], 1, "-");
      }
    }
  }
  return outPut;
}
module.exports = sortColors;
