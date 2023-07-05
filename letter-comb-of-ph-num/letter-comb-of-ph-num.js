
function letterCombinations(digits) {
    var phKeyboard = {1: ["o_o"], 
    2: ["a","b","c"], 
    3: ["d","e","f"], 
    4: ["g","h","i"], 
    5: ["j","k","l"],
    6: ["m","n","o"],
    7: ["p","q","r","s"],
    8: ["t","u","v"],
    9: ["w","x","y","z"]}
    if(digits.length === 0) {
        var output = []
        return output
    } else if (digits.length === 1) {
        let singleBtnSelection = phKeyboard[digits]
        var output = singleBtnSelection
        return output
    } else if (digits.length === 2) {
        var firstArr = phKeyboard[digits[0]]
        var secondArr = phKeyboard[digits[1]]
        var twoBtnSelection = []
        for(let i=0; i <= firstArr.length-1; i++) {
            for(let j=0; j <= secondArr.length-1; j++) {
                let element = ""
                element = firstArr[i] + secondArr[j]
                twoBtnSelection.push(element)
            } 
        }
        var output = twoBtnSelection
        return output
    } else if (digits.length === 3) {
        var firstArr = phKeyboard[digits[0]]
        var secondArr = phKeyboard[digits[1]]
        var thirdArr = phKeyboard[digits[2]]
        var twoBtnSelection = []
        var threeBtnSelection = []
        for(let i=0; i <= firstArr.length-1; i++) {
            for(let j=0; j <= secondArr.length-1; j++) {
                let element = ""
                element = firstArr[i] + secondArr[j]
                twoBtnSelection.push(element)
            } 
        }
        for(let k=0; k <= twoBtnSelection.length-1; k++) {
            for(let l=0; l <= thirdArr.length-1; l++) {
                let elementTwo = ""
                elementTwo = twoBtnSelection[k] + thirdArr[l]
                threeBtnSelection.push(elementTwo)
            }
        } 
        var output = threeBtnSelection
        return output
    } else if (digits.length === 4) {
        var firstArr = phKeyboard[digits[0]]
        var secondArr = phKeyboard[digits[1]]
        var thirdArr = phKeyboard[digits[2]]
        var fourthArr = phKeyboard[digits[3]]
        var twoBtnSelection = []
        var threeBtnSelection = []
        var fourBtnSelection = []
        for(let i=0; i <= firstArr.length-1; i++) {
            for(let j=0; j <= secondArr.length-1; j++) {
                let element = ""
                element = firstArr[i] + secondArr[j]
                twoBtnSelection.push(element)
            } 
        }
        for(let k=0; k <= twoBtnSelection.length-1; k++) {
            for(let l=0; l <= thirdArr.length-1; l++) {
                let elementTwo = ""
                elementTwo = twoBtnSelection[k] + thirdArr[l]
                threeBtnSelection.push(elementTwo)
            }
        } 
        for(let m=0; m <= threeBtnSelection.length-1; m++) {
            for(let n=0; n <= fourthArr.length-1; n++) {
                let elementThree = ""
                elementThree = threeBtnSelection[m] + fourthArr[n]
                fourBtnSelection.push(elementThree)
            }
        }   
        var output = fourBtnSelection
        return output
    }
}

module.exports = letterCombinations;
