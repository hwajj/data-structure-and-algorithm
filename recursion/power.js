// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exp) {
  if (exp <= 0) return 1;

  return power(base, exp - 1) * base;
}

console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));
