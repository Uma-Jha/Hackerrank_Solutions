function grading(grades) {
  var grade = 0, roundGrade = 0, div = 0;
  for(var i=0; i<grades.length; i++) {
      if(grades[i]%5!=0 && grades[i]>37) {
        div = Math.floor(grades[i]/5);
        next = (div+1)*5;
        if(next-grades[i]<3) {
          grades[i] = next;
        }
      }
  }
  return grades;
}
console.log(grading([73,67,38,33, 20, 50]).join('\n'));
