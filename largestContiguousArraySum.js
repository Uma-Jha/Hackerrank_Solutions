function sum(arr) {
  curr_max = 0
  max_so_far = 0
  for(var i=0; i<arr.length; i++) {
    curr_max += arr[i]
    if(curr_max>max_so_far) {
      max_so_far = curr_max
    }
    if(curr_max<0)
      curr_max = 0
  }
  console.log("Max is "+max_so_far)
}
sum([-2, -3, 4, -1, -2, 1, 5, -3])
