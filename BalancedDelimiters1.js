function balancedDelimiters(input) {
  var stack = []
  for(var i=0; i<input.length; i++) {
    if(input[i]=='(')
    stack.push(')')
    else if(input[i]=='{')
    stack.push('}')
    else if(input[i]=='[')
    stack.push(']')
    else {
      if(!stack.length || input[i]!=stack[stack.length-1])
      return 'False';
      stack.pop();
    }
  }
  if(stack.length)
  return 'False';
  return 'True';
}
console.log(balancedDelimiters('([)]'));
