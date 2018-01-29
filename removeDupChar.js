function removeDupChar(str) {
  arr = []
  for(let i=0; i<str.length; i++) {
    if(arr.indexOf(str[i])==-1)
    arr.push(str[i])
  }
  str = arr.join('')
  return str
}
//console.log(removeDupChar("geeksforgeeks"))
console.log(removeHash("geeksforgeeks"))
function removeHash(str) {
  dict = {}
  for(let i=0; i<str.length; i++) {
    if(dict[str.charAt(i)])
    dict[str.charAt(i)]+=1
    else {
      dict[str.charAt(i)] = 1
    }
  }
  str = ''
  for(var key in dict) {
    str+=key
  }
  return str
}
