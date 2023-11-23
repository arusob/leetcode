function jumps(nums) {
  let newMax = 0;
  let jumpsCount = 0;
  let oldMax = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    newMax = Math.max(newMax, i + nums[i]);
    if (i == oldMax) {
      jumpsCount++;
      oldMax = newMax;
    }
  }
  return jumpsCount;
}
module.exports = jumps;
