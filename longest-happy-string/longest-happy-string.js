
function makeLongestHappyString (a,b,c) {
    var output = ''
    var sumAbc = a + b + c
    var arrA = []; var arrB = []; var arrC = []
    for(let i=0; i<a; i++) {
        arrA.push('a')
    }
    for(let j=0; j<b; j++) {
        arrB.push('b')
    }
    for(let k=0; k<c; k++) {
        arrC.push('c')
    }
    if(arrA.length > arrB.length && arrA.length > arrC.length) {
        var arrBig = arrA
        if(arrB.length > arrC.length) {
            var arrMid = arrB; var arrSmall = arrC
        } else if (arrB.length < arrC.length) {
            var arrMid = arrC; var arrSmall = arrB
        } else if (arrB.length === arrC.length) {
            var arrMid = [...arrB, ...arrC]; var arrSmall = []
        }
    } else if (arrB.length > arrA.length && arrB.length > arrC.length) {
        var arrBig = arrB
        if(arrA.length > arrC.length) {
            var arrMid = arrA; var arrSmall = arrC
        } else if (arrA.length < arrC.length) {
            var arrMid = arrC; var arrSmall = arrA
        } else if (arrA.length === arrC.length) {
            var arrMid = [...arrA, ...arrC]; var arrSmall = []
        }
    } else if (arrC.length > arrA.length && arrC.length > arrB.length){
        var arrBig = arrC
        if(arrA.length > arrB.length) {
            var arrMid = arrA; var arrSmall = arrB
        } else if (arrA.length < arrB.length) {
            var arrMid = arrB; var arrSmall = arrA
        } else if (arrA.length === arrA.length) {
            var arrMid = [...arrA, ...arrB]; var arrSmall = []
        }
    }
    if(arrBig.length % 2 === 0) {
        arrBig
    }
    if (arrBig.length % 2 != 0 && arrBig.length > 2) {
        arrBig.shift()
        arrBig
    }
    for(let m=0; m<=(sumAbc/3); m++) {
        if(output.charAt(output.length-1) !== arrBig[0] && arrBig.length > 0 && arrBig.length < 2){
            output = output + arrBig[0] 
            arrBig.shift()
        }
        if(output.charAt(output.length-1) !== arrBig[0] && arrBig.length >= 2){
            output = output + arrBig[0] + arrBig[1]
            arrBig.shift()
            arrBig.shift()
        }
        if(arrMid.length > 2 && output.charAt(output.length-2) !== output.charAt(output.length-1)) {
            output = output + arrMid[0] + arrMid[1] 
            arrMid.shift()
            arrMid.shift()
        }
        if(arrMid.length > 0 && arrMid.length <= 2 && arrSmall.length === 0) {
            output = output + arrMid[0]
            arrMid.shift()
        } 
        if(arrSmall.length > 0 && arrSmall.length < 2) {
            output = output + arrSmall[0]
            arrSmall.shift()
        }
        if (arrSmall.length >= 2) {
            output = output + arrSmall[0] + arrSmall[1]
            arrMid.shift()
            arrMid.shift()
        }
    }
    return output;
}

module.exports = makeLongestHappyString;
