/* eslint-disable */

function same(arr1, arr2) {
  //길이가 다르면 빈도 다름
  if (arr1.length !== arr2.length) return false;

  //1. 객체 만들기
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    //2. fc2 에 fc2 제곱인 key 있는지 확인
    if (!frequencyCounter2[key ** 2]) return false;
    // 아래코드와 같음
    //if (!(key ** 2 in freqencyCounter2)) return false;

    //3. 빈도 확인
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) return false;
  }
  return true;
}

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [4, 9]));
console.log(same([1, 2, 3], [4, 4, 1]));
console.log(same([1, 2, 3], [1, 8, 9]));
