function sortArray(x) {
    var swapped = true;
    while (swapped) {
       swapped = false;
       for(var i=1; i<x.length; i++) {
           var temp=0;
           if(x[i-1] > x[i]) {
               temp = x[i-1];
                x[i-1] = x[i];
                x[i] = temp;
                swapped = true;
            }
        }
    }
    return x;
}
console.log(sortArray([100, 4, 65, 78, 92, 34, 56]));
