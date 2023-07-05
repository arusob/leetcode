
function attendanceReward(s) {
    let sArr = []
    for(let i = 0; i <= s.length-1; i++) {
        sArr.push(s[i])
    }
    var counterAbsent = 0
    for(let i=0; i <= sArr.length-1; i++) { 
        if(sArr[i] === "A") {
            counterAbsent ++
        }
    }
    var counterLate = 0
    for(let i=0; i <= s.length-1; i++){
        if(sArr[i] === "L" && sArr[i+1] === "L" && sArr[i+2] === "L") {
            counterLate ++
        } 
    }
    if(counterAbsent < 2 && counterLate === 0) {
        return true
    } else {
        return false
    }    
}

module.exports = attendanceReward;
