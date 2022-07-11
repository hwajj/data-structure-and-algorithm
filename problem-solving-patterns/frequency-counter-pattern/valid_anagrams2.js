/* eslint-disable */
function validAnagram2(txt1, txt2) {
  //0.
  if (txt1.length !== txt2.length) return false;

  let txtObj = {};
  let txtObj2 = {};
  for (let val of txt1) {
    if (!txtObj[val]) {
      txtObj[val] = 1;
    } else {
      txtObj[val]++;
    }
  }
  for (let val of txt2) {
    if (!txtObj2[val]) {
      txtObj2[val] = 1;
    } else {
      txtObj2[val]++;
    }
  }

  for (const key in txtObj) {
    if (!txtObj2[key]) return false;
    if (txtObj[key] !== txtObj2[key]) return false;
  }
  return true;
}

console.log(validAnagram('', '')); //true
console.log(validAnagram('aaz', 'zza')); //false
console.log(validAnagram('anagram', 'nagaram')); //true
