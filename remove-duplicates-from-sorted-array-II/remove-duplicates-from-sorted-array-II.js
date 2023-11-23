function removeDuplicate(nums) {
  nums.sort();
  for (let i = 1; i <= nums.length; i++) {
    let prev = nums[i - 1];
    let curr = nums[i];
    let next = nums[i + 1];
    if (prev === curr && curr === next) {
      let index = nums.indexOf(next);
      nums.splice(index, 1);
      nums.sort();
      i = 1;
    }
  }
  return nums;
}
module.exports = removeDuplicate;
