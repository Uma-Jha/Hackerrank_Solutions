function strings(str) {
  for(let i=0; i<str.length; i++)
  {
    for(let j=i+1; j<=str.length; j++) {
      console.log(str.substring(i,j))
    }
  }
}
function stringsRec(str) {
  if(str.length!=0)
  subsequence("",str)
}
function subsequence(prefix, suffix) {
  if(suffix.length==0)
  console.log(prefix)
  else
  return subsequence(prefix+suffix.charAt(0), suffix.substring(1))
}
stringsRec("abcd")
strings("abcd")
