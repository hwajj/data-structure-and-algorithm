/* eslint-disable */

/* 
빈도 수 같으면 true
same([1,2,3], [4,1,9]) //true;
*/

function same(arr1, arr2) {
  //길이가 다르면 빈도 셀거 없이 false
  if (arr1.length !== arr2.length) {
    return false;
  }

  //1. 객체 만들기
  let freqencyCounter1 = {};
  let freqencyCounter2 = {};
  for (let val of arr1) {
    freqencyCounter1[val] = (freqencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    freqencyCounter2[val] = (freqencyCounter2[val] || 0) + 1;
  }

  for (let key in freqencyCounter1) {
    //2. frequencyCounter1 돌면서 fc2에 fc1의 2배인 key 있는지 확인
    if (!(key ** 2 in freqencyCounter2)) return false;

    //3. fc1과 fc2의 빈도 일치여부 확인 확인
    if (freqencyCounter2[key ** 2] !== freqencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [4, 9]));
console.log(same([1, 2, 3], [4, 4, 1]));
console.log(same([1, 2, 3], [1, 8, 9]));
