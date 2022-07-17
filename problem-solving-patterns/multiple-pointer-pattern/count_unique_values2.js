/* eslint-disable */
//어려움.다시풀기
function countUniqueValues(arr) {
  let left = 0;
  let count;
  let right = 1;
  while (right < arr.length) {
    if (arr[left] != arr[right]) {
      console.log(arr[left]);
      left++;
      arr[left] = arr[right];
    }
    right++;
  }

  return left + 1;
}

console.log(countUniqueValues([1, 1, 1, 2, 33, 4, 5, 5, 5, 5]));
