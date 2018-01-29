console.log(balancedParen('))'))
//console.log(balancedParen(null))
function balancedParen(input) {
  var regex = /^(){}[]*$/
  var arr = []
  if(input==null || input.length==0 || regex.test(input))
  return 'invalid input'
  if(input[0]==')' || input[0]=='}' || input[0]==']')
  return false
  for(let i=0; i<input.length; i++) {
    console.log("i is "+i)
    if(input[i]=='(' || input[i]=='{' || input[i]=='[')
    arr.push(input[i])
    else {
      //console.log("Popped "+arr.pop())
      if(!checkBraces(arr.pop(), input[i]))
      return false
    }
  }
if(arr.length)
return false;
  return true;
}
function checkBraces(start, end) {
  //console.log("Inside "+start+" "+end)
  if(start=='(' && end==')')
  return true
  else if(start=='{' && end=='}')
  return true
  if(start=='[' && end==']')
  return true
  return false
}
