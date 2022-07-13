function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let tmp = 0;
    for (let j = i; j < i + num; j++) {
      tmp += arr[j];
    }
    max = Math.max(max, tmp);
  }
  return max;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([2, 3], 3));
