
function checkSolution (cookies, k) {
    var sum = cookies.reduce((a,b) => {
        return a + b;
    })
    var averageFloor = Math.floor(sum / k) 
    var sumNew = averageFloor * k  
    var difference = sum - sumNew 
    return  averageFloor + difference 
}

module.exports = checkSolution;
