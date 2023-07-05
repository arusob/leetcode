
const findLargestNumber = require('./largest-number');

test('Return a string instead of an integer ', () => {
    expect(findLargestNumber([10,2])).toEqual("210")
    expect(findLargestNumber([3,30,34,5,9])).toEqual("9534330")
    expect(findLargestNumber([34,3,30,28,2,12,9,7,63,5,52,41])).toEqual("9763552413433028212")
});
