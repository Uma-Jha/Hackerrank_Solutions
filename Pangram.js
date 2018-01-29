console.log(pangram('We promptly judged antique ivory buckles for the next prize'))
//console.log(pangram('We promptly judged antique ivory buckles for the prize'))
//console.log(pangram(null))
//console.log(pangram('6865'))
function pangram(str) {
  if(str==null)
  return 'not pangram'
  dictionary = {}, alpha_Count = 0;
  for(var i=0; i<str.length; i++) {
    if(/[a-z]/i.test(str[i])) {
      if(!dictionary[str[i].toLowerCase()])
      dictionary[str[i].toLowerCase()] = 'present'
      alpha_Count++;
    }
  }
  if(Object.keys(dictionary).length==26)
   return 'pangram'
   return 'not pangram'
}
