
const reverseVowels = require('./reverse-vowels-of-a-string');

test('Print reverse vowels in a string ', () => {
    expect(reverseVowels("hello")).toEqual("holle")
    expect(reverseVowels("leatcode")).toEqual("laetcedo")
    expect(reverseVowels("leatcodei")).toEqual("laetcedoi")
});
