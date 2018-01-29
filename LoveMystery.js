function loveMystery(str) {
  let count = 0;
  for(let i=0; i<Math.floor(str.length/2); i++) {
    count += Math.abs(str.charCodeAt(i) - str.charCodeAt(str.length-1-i))
  }
  return count;
}
console.log(loveMystery('abcd'));
