arr = [1,2,3,4,5,6,7]
console.log(rotate(arr,4))
function rotate(arr, k) {
  var res = [], len = arr.length;
      for(let i=0; i<len; i++) {
        if((i+k)<len)
        res[i] = arr[i+k];
        else
        res[i] = arr[(len+i+k)%len];
    }
  return res;
}
