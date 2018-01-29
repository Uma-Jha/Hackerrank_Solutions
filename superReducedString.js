function superReduced(str) {
  arr = []
  let top = -1;
  for(let i=0; i<str.length; i++) {
    if(top<0 || arr[top]!=str[i])
      arr[++top] = str[i];
    else
      --top;
  }
  return top<0 ? "Empty String":arr.join('').substring(0,top+1)
}
/*function superReduced(str) {
i = 0, len = str.length;
  while(i<len) {
    if(str[i]==str[i+1]) {
      console.log("Str before "+str)
      str = str.substring(0,i) + str.substring(i+2, len)
      len = str.length
      i = 0
      console.log("Str after "+str)
    }
    else
    i++
  }
  return str;
}*/
console.log(superReduced('aadghhhjj'));
//console.log(superReduced('aaddgghhhhjj'));
