
function reverseVowels (s) {
    var vowels = ["a", "e", "i", "o", "u"]
    var arrString = s.split('')
    var arrStringVowels = []          
    var arrStringVowelsIndex = []
    var arrStringNotVowels = []         
    var arrStringNotVowelsIndex = []   
    for(let i=0; i<=arrString.length-1; i++) {
        if(vowels.includes(arrString[i])) {
            arrStringVowelsIndex.push(i) 
            arrStringVowels.push(arrString[i]) 
        } else {
            arrStringNotVowelsIndex.push(i) 
            arrStringNotVowels.push(arrString[i]) 
        }
    }  
    
    if(arrStringVowels.length % 2 === 0) {
        var arrStrVowLength = (arrStringVowels.length)/2
        var saveLast = ['']
    } else if (arrStringVowels.length % 2 !== 0) {
        var lastElementIndex = arrStringVowels.indexOf(arrStringVowels[arrStringVowels.length-1])
        var saveLast = arrStringVowels.splice(lastElementIndex,1)
        var arrStrVowLength = (arrStringVowels.length)/2
    }
    
    for(let i=0; i<=arrStrVowLength; i++) {
        var curr = arrStringVowels[i]
        var replaceCurrNext = curr
        arrStringVowels.splice(i,1)
        arrStringVowels.splice(i+1, i, replaceCurrNext)
        i = i+1
    }
    
    var modArrStringVowels = [...arrStringVowels, ...saveLast]
    var arrStringVowels = modArrStringVowels
    var sumVowelsAndNot = arrStringNotVowels.length + arrStringVowels.length
    var newWord = ''
    for(let j=0; j<=sumVowelsAndNot; j++) {
        if(j === arrStringNotVowelsIndex[0]) {
            newWord = newWord + arrStringNotVowels[0]
            arrStringNotVowelsIndex.shift()
            arrStringNotVowels.shift()
        } else if(j === arrStringVowelsIndex[0]) {
            newWord = newWord + arrStringVowels[0]
            arrStringVowelsIndex.shift()
            arrStringVowels.shift()
        }
    }
    return newWord
}

module.exports = reverseVowels;
