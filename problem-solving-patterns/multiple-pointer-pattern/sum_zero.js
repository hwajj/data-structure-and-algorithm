/* eslint-disable */

//sum이 0이 되는 첫번째 쌍을 찾는것
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  let sum = arr[left] + arr[right];
  while (left < right) {
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); //[-3,3]
console.log(sumZero([-2, 0, 1, 3])); //undefined
console.log(sumZero([1, 2, 3])); //undef ined
