function threeClosestSum(arr, sum) {
  n = arr.length
  arr.sort()
  for(i=0; i<n-2; i++) {
    j = i+1
    k=n-1
    while(k>j)
    {
      if(arr[i]+arr[j]+arr[k]==sum)
        return [arr[i],arr[j],arr[k]]
      else if(arr[i]+arr[j]+arr[k]>sum)
        k--
      else j++
    }
  }
  return false
}
console.log(threeClosestSum([1, 4, 45, 6, 10, 8], 17))
