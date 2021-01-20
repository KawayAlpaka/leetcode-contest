/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    var len = A.length;
    for(let i =1 ;i<len;i++){
        if(A[i+1] < A[i]){
            return i;
        }
    }
};


var testCases = [
    {
        input1:[0,1,0],
        expect:1
    },
    {
        input1:[0,2,1,0],
        expect:1
    },
];
var i = 0;
testCases.forEach(function(c){
    i++;
    var r = peakIndexInMountainArray(c.input1);
    if(r == c.expect){
        console.log(i+":pass");
    }else{
        console.log(i+" error:input1=",c.input1,"  result= ",r,"  expect=",c.expect);
    }
});