function flatten(array) {
  let flattenArray = [];

  function inner(array) {
    //만약 array의 첫번째 수가 숫자이면 flattenArray에 붙이고
    //그게 아니면 다시 inner함수에 돌려준다
    //종료는 마지막 하나 남았을때.

    if (Array.isArray(array[0])) {
      inner(array[0]);
    } else {
      flattenArray.push(array[0]);
    }
    if (array.length == 1) return;
    inner(array.splice(1, array.length - 1));
  }
  inner(array);
  return flattenArray;
}

console.log(flatten([1, 2, 3, [4, 5]])); //[(1, 2, 3, 4, 5)];
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
