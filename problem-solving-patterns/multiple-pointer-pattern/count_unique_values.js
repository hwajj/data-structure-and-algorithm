/* eslint-disable */

function countUniqueValues(arr) {
  let num;
  let left = 0;
  for (let right = 1; right < arr.length; right++) {
    if (arr[left] !== arr[right]) {
      left++;
      arr[left] = arr[right];
    }
  }

  return left + 1;
}

console.log(countUniqueValues([1, 1, 1, 2, 33, 4, 5, 5, 5, 5]));
