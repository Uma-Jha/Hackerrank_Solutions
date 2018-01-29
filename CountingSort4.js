function countingSort4(arr) {
 var n = parseInt(arr[0]), newArr = [], onlyStrArr = [];
 for(var i=1; i<(n*2+1); i=i+2) {
   newArr.push({'index': arr[i], 'str': arr[i+1]});
 }
 sortedArr = newArr.sort(function(a,b) {
   if(a.index>b.index) return 1;
   if(a.index<b.index) return -1;
   return newArr.indexOf(a) - newArr.indexOf(b);
 });
 for(i=0; i<n;i++)
console.log(newArr[i]['index'], newArr[i]['str'])
 //onlyStrArr[i] = sortedArr[i]['str'];
 //console.log(onlyStrArr);
 /*for(var i=1; i<(n+1); i++) {
   if(onlyStrArr[i-1])
 }*/
}
arr = ['20','0','ab',
'6','cd',
'0','ef',
'6','gh',
'4','ij',
'0','ab',
'6','cd',
'0','ef',
'6','gh',
'0','ij',
'4','that',
'3','be',
'0','to',
'1','be',
'5','question',
'1','or',
'2','not',
'4','is',
'2','to',
'4','the'];
countingSort4(arr);
