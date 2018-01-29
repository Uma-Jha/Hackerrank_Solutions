arr = [1, -2, 3, 2, 7, -8, -2]
console.log(maxProduct(arr))
function maxProduct(arr) {
  max_pos = 1
  min_neg = 1
  for(let i=0; i<arr.length; i++) {
    if(arr[i]>0) {
      max_pos *= arr[i]
      min_neg = min(min_neg*arr[i], 1)
    }
    else if(arr[i]==0) {
      max_pos = 1
      min_neg = 1
    }
    else {
      let temp = max_pos
      max_pos = max(min_neg*arr[i], max_pos)
      min_neg = temp*arr[i]
    }
  }
  return max_pos
}
function max(x, y) {
  return x>y ? x:y
}
function min(x, y) {
  return x<y ? x:y
}
