function minSubArrayLen(arr, num) {
  let max = Infinity;
  for (let i = 0; i < arr.length; i++) {
    let flag = 0;
    let sum = 0;
    let j = i;
    sum = arr[i];

    while (sum < num) {
      flag++;
      j++;
      sum += arr[j];
      if (isNaN(arr[j])) flag = Infinity;
    }
    max = Math.min(max, flag);
    if (max === Infinity) return 0;
  }
  return max + 1;
}

//bad solution

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
