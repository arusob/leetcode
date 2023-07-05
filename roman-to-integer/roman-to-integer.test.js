
const convertRomanToInteger = require('./roman-to-integer');

test('Given a roman numeral, convert it to an integer ', () => {
    expect(convertRomanToInteger('III')).toEqual(3)
    expect(convertRomanToInteger('LVIII')).toEqual(58)
    expect(convertRomanToInteger('MCMXCIV')).toEqual(1994)
});
