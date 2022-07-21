// SAMPLE INPUT / OUTPUT
const isOdd = (val) => val % 2 !== 0;

function someRecursive(array, callback) {
  let flag = false;
  function inner(array, callback) {
    if (array.length == 1) return;
    if (callback(array.length - 1)) {
      flag = true;
      return;
    }
    return inner(array.splice(array.length - 1, 1), callback);
  }
  inner(array, callback);

  return flag;
}

// let arr = [1, 2, 3, 4];
// console.log(arr.splice(arr.length - 1, 1));
// console.log(arr);
console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false
