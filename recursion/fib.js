// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num) {
  //var fiboSum = 2;
  var fibArr = [1, 1];

  //피보나치 돌리는 회수
  function getFiboArr(num) {
    if (num <= 2) return 0;
    let pushNum = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
    fibArr.push(pushNum);
    //console.log(pushNum);
    //fiboSum += pushNum;
    return getFiboArr(num - 1);
  }
  getFiboArr(num);

  return fibArr[fibArr.length - 1];
}

console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));
