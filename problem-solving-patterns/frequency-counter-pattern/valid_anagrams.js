/* eslint-disable */
function validAnagram(txt1, txt2) {
  //0.
  if (txt1.length !== txt2.length) return false;

  const lookup = {};

  for (let i = 0; i < txt1.length; i++) {
    let letter = txt1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < txt2.length; i++) {
    let letter = txt2[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

console.log(validAnagram('', '')); //true
console.log(validAnagram('aaz', 'zza')); //false
console.log(validAnagram('anagram', 'nagaram')); //true
