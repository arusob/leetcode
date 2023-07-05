
function findPlayetsWithZeroOrOneLosses (matches) {
    var onlyWins = []
    var onlyLosses = []
    for(let i=0; i <= matches.length-1; i++) {
        var arr = matches[i]
        onlyWins.push(arr[0])
        onlyLosses .push(arr[1])
    } 
    var arraysWinAndLose = []
    arraysWinAndLose.push(onlyWins)
    arraysWinAndLose.push(onlyLosses)
    var allPlayers = arraysWinAndLose[0].concat(arraysWinAndLose[1])
    var uniqueAllPlayers = [...new Set(allPlayers)];
    var matchesLosers = arraysWinAndLose[1]
    var uniqueMatchesLosers = [...new Set(matchesLosers)]
    var neverLost = uniqueAllPlayers.filter((obj) => {
        return uniqueMatchesLosers.indexOf(obj) === -1;
    }); 
    neverLost.sort((a, b) => a-b)
    var twoMatchesLoose = []
    for(let i=0; i<=matchesLosers.length-1; i++) {
        matchesLosers.sort();
        if(matchesLosers[i] === matchesLosers[i+1]) {
            twoMatchesLoose.push(matchesLosers[i])
        }
    } 
    var onlyOneLoser = uniqueMatchesLosers.filter((obj) => {
        return twoMatchesLoose.indexOf(obj) === -1;
    });
    onlyOneLoser.sort()
    var output = []
    output.push(neverLost)
    output.push(onlyOneLoser)
    return output
}

module.exports = findPlayetsWithZeroOrOneLosses;
