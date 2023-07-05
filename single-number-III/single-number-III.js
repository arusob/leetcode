
function printSingleNumber (nums) {
    var howMany = []
    var howManyDupli = 0
    nums.sort()
    for(let i=0; i <= nums.length-1; i++) { 
        for(let j = 0; j <= nums.length-1; j++) { 
            if(nums[i] === nums[j]) {
                howManyDupli = howManyDupli + 1
            } 
        } 
        howMany.push(howManyDupli)
        howManyDupli = 0
    } 
    var whichIndexes = []
    for(let i = 0; i <= howMany.length; i++) {
        if(howMany[i] === 1) {
        whichIndexes.push(nums[i])
        }
    }
    return whichIndexes
}

module.exports = printSingleNumber;
