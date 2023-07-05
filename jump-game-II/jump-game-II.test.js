
const jumps = require('./jump-game-II');

test('Return the minimum number of jumps to reach ', () => {
    expect(jumps([2,3,1,1,4])).toEqual(2)
    expect(jumps([2,3,0,1,4])).toEqual(2)
});
 