function subStringFinder(str, subStr){
      i = 0,
      j = 0,
      len = str.length,
      subLen = subStr.length;
    for(; i<len; i++){
      if(str[i] == subStr[j])
         j++;
      else {
        i = i-j+1
        j = 0
      }
        // j = 0;
    if (j == subLen) {
         return i-subLen+1
       }
  }
  return -1;
}
subStringFinder('abbcdabbbbbck', 'bbbck')
