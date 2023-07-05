
function countingThreeSumClosest (nums, target) {
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

    let arrayOfValues = Object.values(threeSumClosestObj)
    arrayOfValues.push(target)
    arrayOfValues.sort()

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

module.exports =  countingThreeSumClosest;
