
function convertRomanToInteger (s) {
    var symbols = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    var exceptionsSymbols = {
        "CM": 900,
        "CD": 400,
        "XC": 90,
        "XL": 40,
        "IX": 9,
        "IV": 4
    };
    var output = []
    var exceptionsSymbolsArray = Object.entries(exceptionsSymbols)
    for(let i=0; i<=exceptionsSymbolsArray.length-1; i++) {
        var currArr = exceptionsSymbolsArray[i]
        if(s.includes(currArr[0])) {
            output.push(currArr[1])
            var strToRemove = currArr[0]
            var s = s.replace(strToRemove, ' ')
        }
    }
    var sArr = []
    for(let i=0; i<=s.length-1; i++) {
        var thisChar = s.charAt(i)
        sArr.push(thisChar)
    }
    var symbolsArray = Object.entries(symbols)
    for(let i=0; i<=sArr.length-1; i++) {
        for(let j=0; j<=symbolsArray.length-1; j++) {
            var currArr = symbolsArray[j]
            if(currArr[0] === sArr[i]) {
                output.push(currArr[1])
            }
        }
    }
    var sum = output.reduce((a,b) => a + b, 0);
    return sum
}

module.exports = convertRomanToInteger;
