function caesarCipher(str, index) {
if(str.length==0)
return '';
 let newStr = '';
  for(let i=0; i<str.length;i++) {
    let x = str.charCodeAt(i)
    if(65<=x && 90>=x)
    newStr += String.fromCharCode((x-65+index)%26+65)
    else if(97<=x && 122>=x)
    newStr += String.fromCharCode((x-97+index)%26+97)
    else
    newStr += str.charAt(i)
  }
//  console.log("str "+newStr)
  return newStr
}
//console.log(caesarCipher("middle-Outz", 2))
console.log(caesarCipher("&*%#%###", 2))
