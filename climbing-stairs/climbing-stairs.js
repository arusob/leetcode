
function climbingStairs(n) {
    let arr = [1,2]; 
    for (var i = 2; i<n; i++) {
        arr[i]= arr[i-1] + arr[i-2];
    }
    return arr[n-1];
};

module.exports =  climbingStairs;
