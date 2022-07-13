/* eslint-disable */
function search(array, val) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];
    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
}

let arr = [1, 2, 3, 8, 9, 12, 20];

console.log(search(arr, 12));
