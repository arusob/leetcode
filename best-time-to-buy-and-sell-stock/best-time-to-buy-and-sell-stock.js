function makeArrayPossibleTrades(prices) {
  let tradeOne = 0;
  let minArray = [];
  let minIndexArray = [];
  let maxArray = [];
  let maxIndexArray = [];
  let arrDiff = [];
  let objArray = [];
  for (let i = 0; i <= prices.length - 1; i++) {
    const getMax = prices[i];
    if (i > 0) {
      for (j = 0; j < i; j++) {
        const different = getMax - prices[j];
        if (different > 0 && different >= tradeOne) {
          tradeOne = different;
          arrDiff.push(tradeOne);
          minArray.push(prices[j]);
          minIndexArray.push(j);
          maxArray.push(getMax);
          maxIndexArray.push(i);
          const obj = {
            iMin: j,
            iMax: i,
            min: prices[j],
            max: getMax,
            profit: different,
          };
          objArray.push(obj);
        }
      }
    }
  }
  var possibleTrades = objArray;
  if (objArray.length === 0) {
    var lastTrade = 0;
    return 0;
  } else {
    var lastTrade = possibleTrades[possibleTrades.length - 1];
    let firstLargestTransaction =
      possibleTrades[possibleTrades.length - 1].profit;
    let restOfTrades = possibleTrades.filter(
      (obj) => obj.iMax < lastTrade.iMin
    );
    let secondLargestTransaction = 0;
    restOfTrades.forEach((obj) => {
      if (obj.profit > secondLargestTransaction) {
        secondLargestTransaction = obj.profit;
      }
    });
    output = firstLargestTransaction + secondLargestTransaction;
    return output;
  }
}
module.exports = makeArrayPossibleTrades;
