function separateNumbers(str) {
  var j = 1;
  for(var i=0; i<(str.length/j-2); i++) {
    var previous = parseInt(str.substr(i+1,1))
    console.log("Prev : "+previous)
    console.log("Index "+str.indexOf((previous+1).toString()))
    if(str.indexOf((previous+1).toString())) {
      j++
      i = 0
    }
    if(j>((str.length/j-2)+1)) {
      console.log("J: "+((str.length/j-2)+1) )
      return false;
    }

  }
  return true
}
console.log(separateNumbers('99100'))
