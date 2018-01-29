function longestConsecutive(arr) {
  const set = new Set(arr)
  longest = 0
  for (let x of set) {
    if(set.has(x+1)) {
       y = x+1
       while(set.has(y))
       y++
       longest = longest>y-x?longest:y-x
    }
  }
  return longest
}
arr = [2, 10, 3, 12, 5, 4, 11, 8, 7, 6, 15]
console.log(longestConsecutive(arr))
