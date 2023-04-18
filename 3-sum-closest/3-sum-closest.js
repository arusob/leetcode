// https://leetcode.com/problems/3sum-closest/

const nums = [-1, 2, 1, -4]
const target = 1

function countingThreeSumClosest (nums) {
    let lastIndex = nums.length-1
    let i = 0
    let threeSumClosestObj = {}  
    do {                          
        let start = nums[i], middle = nums[i+1], end = nums[i+2]
        let sum = start + middle + end;
        let key = i;
        let value = sum
        Object.assign(threeSumClosestObj, {[key]: value });
        i++
    } while (i+2 <= lastIndex)
    return threeSumClosestObj
}    

var threeSumClosestObj = countingThreeSumClosest (nums)

function findClosestVariant (target, threeSumClosestObj) {
    let arrayOfValues = Object.values(threeSumClosestObj)
    arrayOfValues.push(target)
    arrayOfValues.sort()
    return arrayOfValues
}

var arrayOfValues = findClosestVariant (target, threeSumClosestObj)

function findFirstClosest(arrayOfValues) {
    let maxValue = Math.max(...arrayOfValues)
    let minValue = Math.min(...arrayOfValues)
    let maxDifferent = Math.abs(maxValue) + Math.abs(minValue)
    let count = 0
    while (count <= maxDifferent) {
        count ++
        let positive = target + count
        let negative = target - count
        if(arrayOfValues.includes(positive)) {
            return positive
        } 
        if(arrayOfValues.includes(negative)) {
            return negative
        }
    }   
}

var threeSumClosest = findFirstClosest(arrayOfValues)
