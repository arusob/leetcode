
function medianTwoSortedArrays (nums1, nums2) {
    var nums = [...nums1, ...nums2]
    nums = nums.sort()
    if (nums.length % 2 === 0) {
        var middleSmalerIndex = (nums.length-2)/2
        var middleLargerIndex = ((nums.length-2)/2)+1
        var sum = nums[middleSmalerIndex] + nums[middleLargerIndex]
        var median = sum/2
        return median
    }
    if (nums.length % 2 !== 0) {
        var middleIndex = (nums.length - 1)/2
        var median = nums[middleIndex]
        return median
    }
}

module.exports = medianTwoSortedArrays;
