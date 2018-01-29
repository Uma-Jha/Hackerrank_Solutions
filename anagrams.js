function checkAnagrams(str1, str2) {
  if(str1.length!=str2.length)
    return false
    let dict = {};
    for(i=0; i<str1.length; i++) {
      if(dict[str1.charCodeAt(i)])
       dict[str1.charCodeAt(i)] += 1
      else
      dict[str1.charCodeAt(i)] = 1
    }
    for(i=0; i<str2.length; i++) {
      if(dict[str2.charCodeAt(i)])
       dict[str2.charCodeAt(i)] -= 1
      else
      dict[str2.charCodeAt(i)] = 1
    }
      for(var key in dict)
      console.log(i+"  "+String.fromCharCode(key)+"  "+dict[key])

    for(var key in dict) {
      if(dict[key])
        return false
    }
    return true
}
//console.log(checkAnagrams("Umajha", "khamaU"))
console.log(checkAnagrams("Umajha", "jhamaU"))
