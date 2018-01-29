function divide(arr) {
  if(arr.length<2)
    return arr

  var mid = Math.floor(arr.length/2)
  console.log("Mid "+mid)
  var leftArr = arr.slice(0, mid)
  var rightArr = arr.slice(mid, arr.length)
  return merge(divide(leftArr), divide(rightArr))
}
function merge(leftArr, rightArr) {
  var res = []
  console.log(leftArr+"   "+rightArr)
  while(leftArr.length && rightArr.length) {
    if(leftArr[0]<=rightArr[0]) {
      res.push(leftArr.shift())
    }
    else {
      res.push(rightArr.shift())
    }
  }
  while(leftArr.length) {
    res.push(leftArr.shift())
  }
  while(rightArr.length) {
    res.push(rightArr.shift())
  }
  return res
}
var a = [34, 203, 3, 746, 200, 984, 198, 764, 9]
console.log(divide(a))
