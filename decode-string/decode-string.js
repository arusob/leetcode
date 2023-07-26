function decodeString(s) {
  const regex = /(\d*)(?:\[)([A-Za-z]*)(?:\])/;
  while (regex.test(s)) {
    let matchStr = s.match(regex);
    let ind = matchStr.index;
    let str = matchStr[0];
    let matchLength = str.length;
    let stringCount = parseInt(matchStr[1]);
    let template = matchStr[2].repeat(stringCount);
    s = s.slice(0, ind) + template + s.slice(ind + matchLength, s.length);
  }
  return s;
}
module.exports = decodeString;
