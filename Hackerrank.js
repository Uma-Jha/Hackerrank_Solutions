function hackerRank(str) {
  strToFind = 'hackerrank';
  len = strToFind.length;
  var i=0, j = 0;
  while(i<str.length && j<len) {
    if(str[i]==strToFind[j]) {
      j++;
    }
    i++;
  }
  if(j==10)
  return 'YES'
  return 'NO'
}
console.log(hackerRank('hackerworld'))
