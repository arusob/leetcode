
const letterCombinations = require('./letter-comb-of-ph-num');

test('Return the answer in any order ', () => {
    expect(letterCombinations("")).toEqual([])
    expect(letterCombinations("2")).toEqual(["a","b","c"])
    expect(letterCombinations("23")).toEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"])
});
