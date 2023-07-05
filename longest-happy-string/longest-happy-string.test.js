
const makeLongestHappyString = require('./longest-happy-string');

test('Return the longest possible happy string ', () => {
    expect(makeLongestHappyString(1,1,7)).toEqual("ccaccbcc")
    expect(makeLongestHappyString(7,1,0)).toEqual("aabaa")
    expect(makeLongestHappyString(3,1,2)).toEqual("aabcc")
    expect(makeLongestHappyString(3,1,0)).toEqual("aab")
    expect(makeLongestHappyString(0,1,0)).toEqual("b")
});
