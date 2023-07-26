function reverseVowels(s) {
  const vowels = "aeiou";
  var s = s.toLocaleLowerCase();
  var sVowels = "";
  for (let i = 0; i <= s.length - 1; i++) {
    if (vowels.includes(s[i])) {
      sVowels = sVowels + s[i];
      s = s.replace(s[i], "_");
    }
  }
  let sVowelsNew = "";
  for (let j = 0; j <= sVowels.length + 3; j++) {
    let sSecFir = sVowels[1] + sVowels[0];
    let sRest = sVowels.slice(2, sVowels.length);
    sVowels = sSecFir + sRest;
    if (sRest.length === 0 && sVowels.length <= 2) {
      sVowelsNew = sVowelsNew + sVowels;
    }
    if (sRest.length > 0 && sVowels.length > 2) {
      sVowelsNew = sVowelsNew + sVowels[0];
    }
    sVowels = sVowels.slice(1, sVowels.length);
  }
  var sVowels = sVowelsNew;
  for (let i = 0; i <= s.length - 1; i++) {
    if (s[i] === "_") {
      s = s.replace(s[i], sVowels[0]);
      sVowels = sVowels.slice(1, sVowels.length);
    }
  }
  return s;
}
module.exports = reverseVowels;
