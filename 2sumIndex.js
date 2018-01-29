var a = [2,4,5,63,4,5,63,2,4,43];
console.log(quicksort(a,0, a.length-1))
console.log(a)
console.log(find2Sum(a, 68))
function find2Sum(a, sum) {
  l=0;
  r=a.length-1;
  while(l<r) {
    if(a[l]+a[r]==sum)
    return [l,r]
    else if(a[l]+a[r]>sum)
    r--
    else
    l++
  }
  return []
}
function quicksort(a, start, end) {
  if(start<end) {
    let partition = partitionIndex(a,start, end)
    quicksort(a, start, partitionIndex-1)
    quicksort(a, partitionIndex+1, end)
  }
  return a
}
function partitionIndex(a, start, end) {
  pivot = a[end]
  index = start
  for(let i=start; i<end; i++) {
    if(a[i]<=pivot) {
      swap(a, i, index)
      console.log("Swapped "+a)
      index++
    }
  }
  swap(a, index, end)
  return index
}
function swap(a, x, y) {
  let temp = a[x]
  a[x] = a[y]
  a[y] = temp
}
