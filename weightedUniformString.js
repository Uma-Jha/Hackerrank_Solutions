function weightedUniformString(str, weight) {
weightArray = [];
weightArray.push(str.charCodeAt(0)-96)
var sum = 0;
for(var i=1; i<str.length; i++) {
  if(str[i].charCodeAt(0)==str[i-1].charCodeAt(0)) {
    sum += str[i].charCodeAt(0)-96
    weightArray.push(sum)
  }
  else {
    sum = str[i].charCodeAt(0)-96;
    weightArray.push(sum);
  }
}
console.log(weightArray)
if(weightArray.indexOf(weight)!=-1)
return 'Yes'
return 'No'
}
console.log(weightedUniformString('abccddde', 9))
