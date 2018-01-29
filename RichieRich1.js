function richieRich(number, maxChange) {
  numToStr = number.toString()
  //var mid = Math.floor(numToStr.length/2)
  var i = 0, j = numToStr.length-1;
  while(i<j) {
    if(numToStr[i]!=numToStr[j] && maxChange>0) {
      var right = parseInt(numToStr[j])
      var left = parseInt(numToStr[i])
      console.log("Left "+left+" Right "+right)
      if(maxChange>0) {
        if(right>left)
          numToStr = numToStr.substring(0, i)+ numToStr[j] + numToStr.substring(i+1, numToStr.length)
        else
          numToStr = numToStr.substring(0, j)+ numToStr[i] + numToStr.substring(j+1, numToStr.length)
          maxChange--;
          i++;
      }
      else if(numToStr[i]==numToStr[j]) {
        console.log("Inside elseif")
        i++;
      }
    }
    else {
      return -1;
    }
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
  return parseInt(numToStr)
}
console.log(richieRich(3943, 1))
