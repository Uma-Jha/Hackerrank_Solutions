function CountingSort1(arr) {
  result = [];
  for(var i=0; i<arr.length; i++) {
    if(result[arr[i]])
    result[arr[i]] += 1;
    else {
      result[arr[i]] = 1;
    }
  }
  for(var i=0; i<100; i++) {
  if(!result[i])
    result[i] = 0;
   }
   return result;
}
arr = [63, 25, 73, 1, 98, 73, 56, 73, 86, 57, 56, 1];
console.log(CountingSort1(arr).join(' '));
