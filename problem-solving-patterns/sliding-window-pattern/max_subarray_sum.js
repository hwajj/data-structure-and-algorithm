//슬라이딩 윈도우가 아님. 다시 풀기
//연속하는 n개의 숫자를 더해서 가장 큰 값을 반환하는 문제
function maxSubarraySum(arr, num) {
  let sum = 0;
  let max = -Infinity;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }

  for (let i = 0; i < arr.length - num; i++) {
    sum += arr[i + num] - arr[i];
    max = Math.max(sum, max);
  }

  return max;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([2, 3], 3));
