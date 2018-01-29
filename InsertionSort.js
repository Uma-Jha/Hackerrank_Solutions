function insertionSort(arr) {
  for(var i=1; i<arr.length; i++) {
    var current = arr[i];
    j = i-1;
    while(j>=0 && arr[j]>current) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = current;
    console.log(arr.join(" "));
  }
}
insertionSort([4,1,3,5,6,2]);
/*sortArr(5, [2, 4, 6, 8, 1]);
function sortArr(n, arr) {
  value = arr[n-1];
  for(var i=arr.length-2; i>=0; i--) {
      if(arr[i]>value) {
        arr[i+1] = arr[i];
        console.log(arr.join(" "))
      }
      else {
        arr[i+1] = value;
        break;
      }
  }
  if(i==-1)
  arr[i+1] = value;
  console.log(arr.join(" "));
}*/
