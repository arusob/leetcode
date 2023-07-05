
// var s = "3[a]2[bc]" // aaabcbc
// var s = "3[a2[c]]" //accaccacc
//var s = "2[abc]3[cd]ef" // abcabccdcdcdef



function decodeString(s) {
var regex = /(\d*)(?:\[)([A-Za-z]*)(?:\])/
  while (regex.test(s)) {
    var matchStr = s.match(regex);
    var ind = matchStr.index;
    var str = matchStr[0];
    var matchLength = str.length;
    var stringCount = parseInt(matchStr[1]);
    var template = matchStr[2].repeat(stringCount);
    s = s.slice(0, ind) + template + s.slice(ind + matchLength, s.length);
    }
    return s;
}

// console.log(decodeString(s))
module.exports = decodeString;
