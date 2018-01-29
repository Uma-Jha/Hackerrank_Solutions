function compareTriplets(a0, a1, a2, b0, b1, b2) {
  var result = [], aliceScore = 0, bobScore = 0;
  if(a0>b0)
  aliceScore++;
  else if(b0>a0)
  bobScore++;
  if(a1>b1)
  aliceScore++;
  else if(a1<b1)
  bobScore++;
  if(a2>b2)
  aliceScore++;
  else if(a2<b2)
  bobScore++;
  result.push(aliceScore);
  result.push(bobScore);
  return result;
}
console.log(compareTriplets(5, 6, 7, 3 ,6 ,10).join(' '));
