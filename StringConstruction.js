function stringConstruction(str) {
  dict = {}, cnt = 0;
  for(let i=0; i<str.length; i++) {
    if(!dict[str[i]])
    {
      dict[str[i]] = 'true';
      cnt++;
    }
  }
  return cnt;
}
console.log(stringConstruction('abba'))
