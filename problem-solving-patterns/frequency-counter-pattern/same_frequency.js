/* eslint-disable */
function sameFrequency(num1, num2) {
  let obj1 = {};
  let obj2 = {};
  let numArr1 = Array.from(String(num1));
  let numArr2 = Array.from(String(num2));
  if (numArr1.length !== numArr2.length) {
    return false;
  }

  for (let val of numArr1) {
    obj1[val] = obj1[val] || 0;
    obj1[val]++;
  }

  for (let i = 0; i < numArr2.length; i++) {
    if (!obj1[numArr2[i]]) {
      return false;
    } else {
      obj1[numArr2[i]]--;
    }
  }

  return true;
}

console.log(sameFrequency(182, 281)); //true
console.log(sameFrequency(34, 14)); //false
console.log(sameFrequency(3589578, 5879385)); //true
console.log(sameFrequency(22, 222)); //false
console.log(sameFrequency(284, 444)); //false
