/* eslint-disable */
function averagePair(arr, targetAverage) {
  let left = 0;
  let right = arr.length - 1;
  let compareNum = targetAverage * 2;
  while (left < right) {
    if (arr[left] + arr[right] > compareNum) {
      right--;
    } else if (arr[left] + arr[right] < compareNum) {
      left++;
    } else return true;
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));
