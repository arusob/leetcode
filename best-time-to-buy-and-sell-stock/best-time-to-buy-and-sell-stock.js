// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/

var prices = [8, 9, 7, 6, 4, 6, 4, 5, 6, 7, 8, 3, 2, 0, 1];

function makeArrayPossibleTrades() {
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
  return objArray;
}

var possibleTrades = makeArrayPossibleTrades(prices);
var lastTrade = possibleTrades[possibleTrades.length - 1];
var firstLargestTransaction = possibleTrades[possibleTrades.length - 1].profit;

function findSecondLargestTransaction(possibleTrades) {
  let restOfTrades = possibleTrades.filter((obj) => obj.iMax < lastTrade.iMin);
  let secondLargestTransaction = 0;
  restOfTrades.forEach((obj) => {
    if (obj.profit > secondLargestTransaction) {
      secondLargestTransaction = obj.profit;
    }
  });
  return secondLargestTransaction;
}

var secondLargestTransaction = findSecondLargestTransaction(possibleTrades);
var output = firstLargestTransaction + secondLargestTransaction;
