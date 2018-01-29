function richieRich(number, maxChange) {
  numToStr = number.toString()
  var mid = Math.floor(numToStr.length/2)
  var i = 0;
  while(mid-i>0) {
    console.log("While mid-i "+(mid-i))
    if(numToStr[mid-i]!=numToStr[mid+i]) {
      var right = parseInt(numToStr[mid+i])
      var left = parseInt(numToStr[mid-i])
      console.log("Left "+left+" Right "+right)
      if(maxChange>0) {
        if(right>left)
          numToStr = numToStr.substring(0, mid-i)+ numToStr[mid+i] + numToStr.substring(mid-i+1, numToStr.length)
        else
          numToStr = numToStr.substring(0, mid+i)+ numToStr[mid-i] + numToStr.substring(mid+i+1, numToStr.length)
          maxChange--;
      }
    }
    i++;
  }
  i = 0;
  var j = numToStr.length-1-i;
  while(i<j && maxChange>0) {
    if(numToStr[i]!='9' && numToStr[j]=='9') {
      numToStr = numToStr.substring(0, i)+ '9' + numToStr.substring(i+1, numToStr.length)
      maxChange--;
    }
    else if(numToStr[i]=='9' && numToStr[j]!='9' && maxChange>0) {
      numToStr = numToStr.substring(0, j)+ '9' + numToStr.substring(j+1, numToStr.length)
      maxChange--;
    }
    else if(numToStr[i]!='9' && numToStr[j]!='9' && maxChange>1) {
      numToStr = numToStr.substring(0, i)+ '9' + numToStr.substring(i+1, numToStr.length)
      numToStr = numToStr.substring(0, j)+ '9' + numToStr.substring(j+1, numToStr.length)
      maxChange-=2;
    }
  }
  flag = true;
  for(i=0; i<mid; i++) {
    if(numToStr[i]!=numToStr[numToStr.length-1-i])
    {
      flag = false
      break;
    }
  }
  if(flag)
  return parseInt(numToStr)
  return -1;
}
console.log(richieRich(3943, 1))
