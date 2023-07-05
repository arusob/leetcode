
function reverseInteger (x) {
    var xString = x.toString()
    var xStringReverse = ''
    if(x < 0) {
        var xWithoutMinus = x * (-1)
        var xWithoutMinusString = xWithoutMinus.toString()
        for(let i=xWithoutMinusString.length-1; i>=0; i--) {
            xStringReverse = xStringReverse + xWithoutMinusString[i]
        }
        var output = xStringReverse *(-1)
        return output
    }
    if(x === 0) {
        return 0
    }
    if(x > 0) {
        for(let i=xString.length-1; i>=0; i--) {
            xStringReverse = xStringReverse + xString[i]
        }
        var output = xStringReverse*1
        return output
    }
}
    
module.exports = reverseInteger;
