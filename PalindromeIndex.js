function palindromeIndex(str) {
  var len = str.length;
  for(var i=0, j=len-1; i<=j; i++, j--) {
    if(str[i]!=str[j]) {
      if(checkPalindrome(str.substring(0,i)+str.substring(i+1, len)))
        return i;
      else if(checkPalindrome(str.substring(i,j)+str.substring(j+1, len)))
        return j;
    }
  }
  return -1;
}
function checkPalindrome(str) {
  for(var i=0; i<Math.floor(str.length/2); i++) {
    if(str[i]!=str[str.length-1-i])
      return false;
  }
  return true;
}
console.log(palindromeIndex('cbwcbc'))
