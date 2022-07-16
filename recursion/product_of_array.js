// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(array) {
  if (array.length == 0) {
    return;
  } else if (array.length === 1) {
    return array[0];
  }
  let res = array.splice(0, 1);
  return productOfArray(array) * res;
}

console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));
