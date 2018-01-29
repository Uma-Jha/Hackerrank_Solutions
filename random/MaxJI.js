function maxIndex(arr) {
var i = 0, j=arr.length-1;
while(i<j) {
  if(arr[i]<arr[j])
  return j-i;
  j--;
}
return -1;
}
console.log(maxIndex([34, 8, 10, 3, 2, 80, 30, 33, 1]));
