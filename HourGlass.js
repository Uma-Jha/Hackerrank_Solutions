function hourGlass(arr) {
  var max = -100000,temp=0;
  for(var i=0; i<arr.length-2; i++) {
    for(var j=0; j<arr[0].length-2; j++) {
      temp = arr[i][j]+arr[i][j+1]+arr[i][j+2]+arr[i+1][j+1]+arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2];
      if(temp>max) {
        max = temp;
      }
    }
  }
  console.log(max);
}
arr = [ [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0 ],
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 9, 2, -4, -4, 0 ],
  [ 0, 0, 0, -2, 0, 0 ],
  [ 0, 0, -1, -2, -4, 0 ] ];
hourGlass(arr);
