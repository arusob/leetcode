function maximumDifference(nums) {
  nums.sort();
  if (nums.length <= 2) {
    return 0;
  } else {
    let differentNums = [];
    for (i = 0; i <= nums.length - 2; i++) {
      var different = nums[i + 1] - nums[i];
      differentNums.push(different);
    }
    return Math.max(...differentNums);
  }
}
module.exports = maximumDifference;
