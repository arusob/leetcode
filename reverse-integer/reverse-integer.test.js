
const reverseInteger = require('./reverse-integer');

test('Print reverse integer ', () => {
    expect(reverseInteger(123)).toEqual(321)
    expect(reverseInteger(-123)).toEqual(-321)
    expect(reverseInteger(120)).toEqual(21)
    expect(reverseInteger(0)).toEqual(0)
    expect(reverseInteger(-120)).toEqual(-21)
});
