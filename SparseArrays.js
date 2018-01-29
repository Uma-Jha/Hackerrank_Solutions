function sparseArrays(arr) {
  var count = parseInt(arr[0])+1;
  givenArr = arr.slice(1, count);
  dict = {};
  for(var i=1; i<count; i++) {
    if(dict[arr[i]])
    dict[arr[i]] += 1;
    else
    dict[arr[i]] = 1;
  }
  for(i = count+1; i<arr.length; i++) {
    if(dict[arr[i]])
    console.log(dict[arr[i]]);
    else
    console.log('0');
  }
}
sparseArrays([ '4', 'aba', 'baba', 'aba', 'xzxb', '3', 'aba', 'xzxb', 'ab' ]);
