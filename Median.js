function median(arr) {
  arr.sort(function(a, b) {return a-b});
   var index = (arr.length-1)/2;
   return arr[index];
}
console.log(median([0, 1, 2, 4, 6, 5, 3]));
