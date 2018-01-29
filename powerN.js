function powerN(input) {
  for(let i=2; i<=Math.sqrt(input); i++) {
    let num = i;
    while(num<=input/2) {
      console.log("Num "+num+" Input "+input)
      num = num*i;
      if(num==input)
      return true
    }
  }
  return false
}
console.log(powerN(48))
