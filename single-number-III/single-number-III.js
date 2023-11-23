function printSingleNumber(nums) {
  let howMany = [];
  let howManyDupli = 0;
  nums.sort();
  let numLength = nums.length - 1;
  for (let i = 0; i <= numLength; i++) {
    for (let j = 0; j <= numLength; j++) {
      if (nums[i] === nums[j]) {
        howManyDupli = howManyDupli + 1;
      }
    }
    howMany.push(howManyDupli);
    howManyDupli = 0;
  }
  let whichIndexes = [];
  for (let i = 0; i <= howMany.length; i++) {
    if (howMany[i] === 1) {
      whichIndexes.push(nums[i]);
    }
  }
  return whichIndexes;
}
module.exports = printSingleNumber;
