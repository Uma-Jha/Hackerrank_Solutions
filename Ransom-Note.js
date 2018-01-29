function ransomNote(m,n,magazine,ransom) {
    if(magazine.length<1 && ransom.length>0)
     return 'No';
    dict = {};
    for(var i=0; i<magazine.length; i++) {
        if(!dict[magazine[i]])
            dict[magazine[i]] = 1;
        else
            dict[magazine[i]] += 1;
    }
    for(i=0; i<ransom.length; i++) {
        if(!dict[ransom[i]])
            return 'No';
        dict[ransom[i]] -= 1;
        if(dict[ransom[i]]<0)
            return 'No';
    }
    return 'Yes';
}
var magazine = ['two', 'times', 'three', 'is', 'not', 'four'];
var ransom = ['two','times','two','is', 'four'];
console.log(ransomNote(6,5,))
