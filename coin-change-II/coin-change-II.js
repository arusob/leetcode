
function howManyCoins(amount, coins) {
    var arrayOfSolutions = []
    for(let i = coins.length; i>0; i--) {
        var thisCoin = coins[i-1]
        var thisArr = []
        if(amount / thisCoin === 1) {
            thisArr.push(thisCoin)
            arrayOfSolutions.push(thisArr)
        } else if (amount / thisCoin > 1 && amount / thisCoin < amount && coins.length >= 2) {
            if(amount % thisCoin)
            var howMany = amount / thisCoin
            var howManyDown = Math.floor(howMany);
            for(let k=howManyDown; k>=1; k--) {
                var thisArr = []
                for(let l=0; l<=k-1; l++){
                    thisArr.push(howManyDown)
                }
                let sum = thisArr.reduce((a,b) => {
                    return a+b
                })
                let restOfAmonuntMinusSumArr = amount - sum
                for(let m=0; m<restOfAmonuntMinusSumArr; m++){
                    thisArr.push(coins[0])
                }
                arrayOfSolutions.push(thisArr)
            }
        } else if(amount / thisCoin === amount) {
            for(let j=0; j<=amount-1; j++){
                thisArr.push(thisCoin)
            }
            arrayOfSolutions.push(thisArr)
        }
    }
    return arrayOfSolutions.length
}

module.exports =  howManyCoins;
