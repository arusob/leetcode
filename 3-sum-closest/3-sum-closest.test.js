
const  countingThreeSumClosest = require('./3-sum-closest');

test('Return the sum of the three integers ', () => {
    expect(countingThreeSumClosest([-1,2,1,-4],1)).toEqual(2)
    expect(countingThreeSumClosest([0,0,0],1)).toEqual(0)
});
