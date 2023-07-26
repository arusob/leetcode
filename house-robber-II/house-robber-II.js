function maximumAmountOfMoney(nums) {
  let numsMax = Math.max(...nums);
  if (nums.length <= 3) {
    let numsMax = Math.max(...nums);
    return numsMax;
  }
  if (nums.length > 3) {
    let numsNotBeNeighbors = [];
    for (let i = 0; i <= nums.length - 1; i++) {
      let indexNumMax = nums.indexOf(numsMax);
      if (i != indexNumMax && i != indexNumMax - 1 && i != indexNumMax + 1) {
        numsNotBeNeighbors.push(nums[i]);
      }
    }
    let firstNumMax = numsMax;
    let secondNumMax = Math.max(...numsNotBeNeighbors);
    let totalAmount = firstNumMax + secondNumMax;
    return totalAmount;
  }
}
module.exports = maximumAmountOfMoney;
