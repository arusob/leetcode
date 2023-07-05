
function findLargestNumber(nums) {
    var numsOneChar = [] 
    var numsTwoChar = []
    for(let i=0; i <= nums.length-1; i++) {
        if(nums[i] < 10) {
            numsOneChar.push(nums[i])
        } else if (nums[i] >= 10 && nums[i] < 100) {
            numsTwoChar.push(nums[i])
        }
    }
    numsOneChar.sort().reverse()
    numsTwoChar.sort().reverse()
    var output = []
    for(let k = 0; k < nums.length; k++) {
        if(numsOneChar.length>0) {
            var firstPartNumOneChar = numsOneChar[0].toString().charAt(0)
        }
        if(numsTwoChar.length>0) {
            var firstPartNumTwoChar = numsTwoChar[0].toString().charAt(0)
            var secondPartNumTwoChar = numsTwoChar[0].toString().charAt(1)
        }
        if(10*numsOneChar[0] >= numsTwoChar[0]) {
            output.push(numsOneChar[0])
            numsOneChar.shift()
        } else if (10*numsOneChar[0] < numsTwoChar[0]) {
            if(firstPartNumOneChar < firstPartNumTwoChar) {
                output.push(numsTwoChar[0])
                numsTwoChar.shift()
            }
            if(firstPartNumOneChar === firstPartNumTwoChar && secondPartNumTwoChar <= firstPartNumOneChar) {
                output.push(numsOneChar[0])
                numsOneChar.shift()
            } 
            if (firstPartNumOneChar === firstPartNumTwoChar && secondPartNumTwoChar > firstPartNumOneChar) {
                output.push(numsTwoChar[0])
                numsTwoChar.shift()
            } 
        } else if (numsOneChar.length === 0 && numsTwoChar.length > 0) {
            output.push(numsTwoChar[0])
            numsTwoChar.shift()
            break;
        } else if (numsTwoChar.length === 0 && numsOneChar.length > 0) {
            output.push(numsOneChar[0])
            numsOneChar.shift()
            break; 
        }
    } 
    var outputString = ''
    for(let j=0; j <= output.length-1; j++) {
        var num = output[j]
        var char = num.toString()
        outputString = outputString + char
    } 
    return outputString
}

module.exports = findLargestNumber;
