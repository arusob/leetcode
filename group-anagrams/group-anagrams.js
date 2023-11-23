function groupAnagrams(strs) {
  let strsWithAnagrams = [];
  let anagramArr = [];
  for (let i = 0; i <= strs.length - 1; i++) {
    let oneTypeCharacters = [];
    let word = strs[i];
    let strsAnagram = word.split("").sort().join("");
    anagramArr.push(strsAnagram);
    oneTypeCharacters.push(strsAnagram, word);
    strsWithAnagrams.push(oneTypeCharacters);
  }
  let anagramArrUnique = Array.from(new Set(anagramArr)).sort();
  let output = [];
  for (let j = 0; j <= anagramArrUnique.length - 1; j++) {
    let itemAnagram = anagramArrUnique[j];
    let filtredItems = strsWithAnagrams.filter((item) => {
      return item[0] === itemAnagram;
    });
    let groupStrs = [];
    for (let k = 0; k <= filtredItems.length - 1; k++) {
      let insideItem = filtredItems[k];
      insideItem.shift();
      groupStrs = groupStrs.concat(insideItem);
    }
    output.push(groupStrs.sort());
  }
  output = output.sort((a, b) => {
    return a.length - b.length;
  });
  return output;
}
module.exports = groupAnagrams;
