
function maximumAmountOfMoney(nums){
    var numsMax = Math.max(...nums)
    if(nums.length <= 3) {
        var numsMax = Math.max(...nums)
        return numsMax
    }
    if(nums.length > 3) {
        var numsNotBeNeighbors = []
        for(let i = 0; i <= nums.length-1; i++) {
            if(i != nums.indexOf(numsMax) && i != nums.indexOf(numsMax)-1 && i != nums.indexOf(numsMax)+1) {
                numsNotBeNeighbors.push(nums[i])
            }
        } 
        var firstNumMax = numsMax
        var secondNumMax = Math.max(...numsNotBeNeighbors)
        var totalAmount = firstNumMax + secondNumMax
        return totalAmount
    }
}

module.exports = maximumAmountOfMoney;
