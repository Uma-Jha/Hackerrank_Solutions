function bigSorting(arr) {
    arr.sort(function(a, b){
    if(a.length>b.length) return 1;
    else if(b.length>a.length) return -1;
    else {
      if(a < b) return -1;
      if(a > b) return 1;
      return 0;
    }
})
return arr;
}
arr = ["31415926535897932384626433832795", "1", "6", "6","9","5"]
console.log(bigSorting(arr))
