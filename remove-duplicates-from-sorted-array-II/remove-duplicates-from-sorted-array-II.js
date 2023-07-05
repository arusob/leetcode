
function removeDuplicate(nums) {   
    nums.sort()
    for(let i=1; i<=nums.length; i++) {
        var prev = nums[i-1]
        var curr = nums[i]
        var next = nums[i+1]
        if(prev === curr && curr === next) {
            var index = nums.indexOf(next)
            nums.splice(index,1,)
            nums.sort()
            i = 1
        }
    }
    return nums
}

module.exports = removeDuplicate;
