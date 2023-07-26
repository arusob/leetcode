function medianTwoSortedArrays(nums1, nums2) {
  let nums = [...nums1, ...nums2];
  nums = nums.sort();
  if (nums.length % 2 === 0) {
    let middleSmalerIndex = (nums.length - 2) / 2;
    let middleLargerIndex = (nums.length - 2) / 2 + 1;
    let sum = nums[middleSmalerIndex] + nums[middleLargerIndex];
    let median = sum / 2;
    return median;
  }
  if (nums.length % 2 !== 0) {
    let middleIndex = (nums.length - 1) / 2;
    let median = nums[middleIndex];
    return median;
  }
}
module.exports = medianTwoSortedArrays;
