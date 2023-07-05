
const numberOfDistinctLetters = require('./decode-ways');

test('Given a string s containing only digits, return the number of ways to decode it ', () => {
    expect(numberOfDistinctLetters("12")).toEqual(2)
    expect(numberOfDistinctLetters("226")).toEqual(3)
    expect(numberOfDistinctLetters("06")).toEqual(0)
});
