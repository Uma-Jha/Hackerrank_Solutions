function twoString(str1, str2, cnt) {
  count = 0;
  for(let i=97; i<(97+26); i++) {
    if(str1.indexOf(String.fromCharCode(i))!=-1 && str2.indexOf(String.fromCharCode(i))!=-1) {
      count++
      if(count==cnt)
      return true
    }
  }
  return false
}
console.log(twoString('uma', 'atul', 3))
