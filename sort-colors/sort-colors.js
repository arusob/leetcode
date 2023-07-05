
function sortColors (nums) {
    var inputNums = nums
    let templateNum = [0, 1, 2]
    var outPut = []
    for(let i = 0; i <= templateNum.length-1; i++) {
        for(let j=0; j<=inputNums.length-1; j++) {
            var el = inputNums[j]
            if(el === templateNum[i]) {
                outPut.push(el)
                inputNums.splice([j], 1, '-')
            }
        } 
    }
    return outPut
}

module.exports = sortColors;
