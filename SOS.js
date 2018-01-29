function sos(str) {
  count = 0;
  for(var i=0; i<str.length-2; i=i+3) {
    if(str[i]!='S')
    count++;
    if(str[i+1]!='O')
    count++;
    if(str[i+2]!='S')
    count++;
    console.log((i+1)+" "+count)
  }
  return count;
}
console.log(sos('SOSSPSSQSSOR'))
