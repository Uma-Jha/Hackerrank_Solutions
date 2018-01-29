function smallestDiff(arr) {
  arr.sort(function(a, b){return a-b});
  var min = 100000, newArr = [];
  for(let i=1; i<arr.length; i++) {
    if(arr[i]-arr[i-1]<min) {
      min = arr[i] - arr[i-1];
    }
  }
  for(let i=1; i<arr.length; i++) {
    if(arr[i]-arr[i-1]==min) {
      newArr.push(arr[i-1]);
      newArr.push(arr[i]);
  }
}
  return newArr;
}
console.log(smallestDiff([5, 4, 3, 2]).join(' '));
