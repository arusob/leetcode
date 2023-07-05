
function groupAnagrams(strs) {
    var wordAZ = []
    for(let i = 0; i <= strs.length-1; i++) {
        let oneWordArr = []
        let oneWord = strs[i]
        for(let j = 0; j <= oneWord.length-1; j++) {
            oneWordArr.push(oneWord.charAt(j))
        } 
        oneWordArr.sort()
        var word = ""
        for(let j = 0; j <= oneWordArr.length-1; j++) {
            word += oneWordArr[j]
        }
        wordAZ.push(word)
    } 
    var strsObj = []
    for(let j=0; j <= strs.length-1; j++) {
        let objOne = {word: strs[j], wordAZ: wordAZ[j]}
        strsObj.push(objOne)
    }
    var wordAZSorted = wordAZ.sort()
    const uniqueWordAZSorted = [...new Set(wordAZSorted)]
    var arrayOfWord = []
    for(let i=0; i<=uniqueWordAZSorted.length-1; i++){
        var thisArr = []
        for(let j=0; j<=strsObj.length-1; j++) {
            if(uniqueWordAZSorted[i] === strsObj[j].wordAZ) {
                thisArr.push(strsObj[j].word)
            }
        }
        arrayOfWord.push(thisArr.sort())
    } 
    arrayOfWord.sort((a, b) => {
        return a.length - b.length;
    });
    return arrayOfWord
}

module.exports = groupAnagrams;
