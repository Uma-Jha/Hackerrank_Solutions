var dict = {};
function fibonnaci(n) {
    if(n<2)
        return n;
    if(!dict[n])
    dict[n] = fibonnaci(n-1)+fibonnaci(n-2);
    return dict[n];
}
console.log(fibonnaci(12));
