// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(num) {
  if (num === 0) return 0;

  return recursiveRange(num - 1) + num;
}

console.log(recursiveRange(6));
console.log(recursiveRange(10));
