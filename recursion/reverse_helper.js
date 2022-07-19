function reverse(str) {
  var answerArr = [];
  function getReverse(str) {
    if (str.length <= 0) return;
    answerArr.push(str.slice(-1));
    str = str.slice(0, str.length - 1);

    getReverse(str);
  }
  getReverse(str);
  return answerArr.join('');
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'
