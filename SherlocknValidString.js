//console.log(isValid('aabbcc'));
//console.log(isValid('baacdd'));
console.log(isValid('aabbcd'));
function isValid(s){
    dictionary = {}, charToDeleteSoFar = 0;
    for(var i=0; i<s.length; i++) {
        if(dictionary[s[i]]) {
            dictionary[s[i]] += 1
        }
        else {
            dictionary[s[i]] = 1
        }
    }
keys = Object.keys(dictionary);
count = dictionary[keys[0]]
for(var i=1; i<keys.length; i++)  {
  if(Math.abs(dictionary[keys[i]] - count)>1) {
      return 'NO';
  } else if(Math.abs(dictionary[keys[i]] - count)==1)  {
      charToDeleteSoFar += 1
      if(charToDeleteSoFar>1)
          return 'NO'
  }
}
    return 'YES'
}
