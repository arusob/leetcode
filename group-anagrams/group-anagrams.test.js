const groupAnagrams = require("./group-anagrams");
test("group the anagrams together you can return the answer in any order ", () => {
  expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([
    ["bat"],
    ["nat", "tan"],
    ["ate", "eat", "tea"],
  ]);
  expect(groupAnagrams([""])).toEqual([[""]]);
  expect(groupAnagrams(["a"])).toEqual([["a"]]);
});
