function findPlayetsWithZeroOrOneLosses(matches) {
  let onlyWins = [];
  let onlyLosses = [];
  for (let i = 0; i <= matches.length - 1; i++) {
    let arr = matches[i];
    onlyWins.push(arr[0]);
    onlyLosses.push(arr[1]);
  }
  let arraysWinAndLose = [];
  arraysWinAndLose.push(onlyWins);
  arraysWinAndLose.push(onlyLosses);
  let allPlayers = arraysWinAndLose[0].concat(arraysWinAndLose[1]);
  let uniqueAllPlayers = [...new Set(allPlayers)];
  let matchesLosers = arraysWinAndLose[1];
  let uniqueMatchesLosers = [...new Set(matchesLosers)];
  let neverLost = uniqueAllPlayers.filter((obj) => {
    return uniqueMatchesLosers.indexOf(obj) === -1;
  });
  neverLost.sort((a, b) => a - b);
  let twoMatchesLoose = [];
  for (let i = 0; i <= matchesLosers.length - 1; i++) {
    matchesLosers.sort();
    if (matchesLosers[i] === matchesLosers[i + 1]) {
      twoMatchesLoose.push(matchesLosers[i]);
    }
  }
  let onlyOneLoser = uniqueMatchesLosers.filter((obj) => {
    return twoMatchesLoose.indexOf(obj) === -1;
  });
  onlyOneLoser.sort();
  let output = [];
  output.push(neverLost);
  output.push(onlyOneLoser);
  return output;
}
module.exports = findPlayetsWithZeroOrOneLosses;
