/* function quickSort(arr, start, end) {
  if(start<end)
  pivot = partition(arr, start, end)
  quickSort(arr, start, pivot-1)
  quickSort(arr, pivot, end)
  return arr
}*/
var a = [2,4,5,63,4,5,63,2,4,43];
console.log(quicksort(a, 0, a.length-1))
function quicksort(a, start, end) {
  if(start<end) {
    let partitionIndex = partition(a, start, end)
    quicksort(a, start, partitionIndex-1)
    quicksort(a, partitionIndex+1, end)
  }
  return a
}
function partition(a, start, end) {
  let pivot = a[end]
  let index = start
  for(let i=start; i<end; i++)
  {
    if(a[i]<=pivot) {
      swap(a, i , index)
      console.log("Swapped "+a)
      index++
    }
  }
  swap(a, end, index)
  return index
}
function swap(a, x, y) {
  let temp = a[x]
  a[x] = a[y]
  a[y] = temp
}
