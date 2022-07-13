/*eslint-disable */
function areThereDuplicates(...arg) {
  let obj = {};

  for (let val of arg) {
    //obj 에 val 없었던 경우는
    if (!obj[val]) {
      obj[val] = 1;
    } else {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));
