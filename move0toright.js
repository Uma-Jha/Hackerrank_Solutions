arr = [1,0,3,4,0,0,6,7,4,6,7,0]
move_zeros(arr)
function move_zeros(arr) {
  left=0, right=arr.length-1
  while(left<right) {
    if(arr[left]==0)
    {
      arr[left] = arr[right]
      right--
    }
    if(arr[left]!=0)
    left++
    
  }
  while(right<arr.length) {
    arr[right] = 0
    right++
  }
console.log("Arr "+arr)
}
