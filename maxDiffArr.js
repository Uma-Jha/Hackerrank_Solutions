function maxDiffArr(arr) {
  n = arr.length
  max = arr[n-1]
  min = -1
  for(let i = n-2; i>0 ; i-- ) {
    if(arr[i]>max)
      max = arr[i]
    else {
      if(max-arr[i]>min)
        min = max-arr[i]
    }
  }
  return min
}
console.log(maxDiffArr([80, 2, 6, 3, 100]))
