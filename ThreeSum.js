function threeSum(arr, sum) {
let result = [];
for(let i=0; i<arr.length-2; i++) {
  let j=i+1, k=arr.length-1;
  while(j<k){
    if(arr[i]+arr[j]+arr[k]==sum){
    result.push([arr[i],arr[j],arr[k]]);
    j++, k--;
    }
    else if(arr[i]+arr[j]+arr[k]<sum)
    j++
    else {
      k--
    }
  }
}
return result;
}
arr = [-1,1, 2, -1, 0,4,-2]
arr.sort(function(a,b) {return a-b})
console.log(threeSum(arr, 0))
