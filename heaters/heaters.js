
function whereHeaters (houses, heaters) {
    if(houses.length == 2) {
        var housesNew = []
        for(let i = Math.min(...houses); i <= Math.max(...houses); i++) {
        housesNew.push(i)
        } 
    } 
    if(houses.length > 2) {
        housesNew = houses
    }
    if(heaters.length <= 1) {
        var leftSide = housesNew.indexOf(heaters[0]) - 0
        var placeOfHeater = housesNew.indexOf(heaters[0])
        var lastElement = housesNew[housesNew.length-1]
        var indexOfLastElement = housesNew.indexOf(lastElement)
        var rightSide = Math.abs(placeOfHeater - indexOfLastElement)
        if(leftSide === rightSide) {
            return leftSide
        } else if (leftSide > rightSide) {
            return leftSide
        } else if (leftSide < rightSide) {
            return rightSide
        }
    }
    if(heaters.length > 1) {
        var heatersMin = Math.min(...heaters)
        var heatersMax = Math.max(...heaters)
        var indexMinHousesNew = housesNew.indexOf(heatersMin)
        var indexMaxHousesNew = housesNew.indexOf(heatersMax)
        var distanceBetweenHeaters = housesNew.slice(indexMinHousesNew+1, indexMaxHousesNew)
        var minRadius = (distanceBetweenHeaters.length)/2
        return minRadius
    }
}

module.exports = whereHeaters;
