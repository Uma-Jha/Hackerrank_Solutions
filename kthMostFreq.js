function kthMostFreq(arr, k) {
  dict = {}
  for(let i=0; i<arr.length; i++) {
    if(!dict[arr[i]])
    dict[arr[i]] = 1
    else {
      dict[arr[i]] += 1
    }
  }
}
arr = [1,2,3,2,1,2,2,2,3]
