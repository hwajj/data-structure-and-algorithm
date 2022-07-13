/* eslint-disable */

function isSubsequence(firstString, secondString) {
  let arr1 = Array.from(String(firstString));
  let arr2 = Array.from(String(secondString));
  let pointer1 = 0;

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] == arr1[pointer1]) {
      pointer1++;
    }
  }

  if (pointer1 == arr1.length) return true;
  return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));
