/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var advantageCount = function(A, B) {
    var _sortA = A.sort(function(a,b){ return a-b;})
    console.log(_sortA);
    var r = [];
    var len = B.length;
    for(let i=0;i<len;i++){
        var index = _sortA.findIndex(function(value, index, arr) {
            return value > B[i];
        });
        if(index<0){
            var min = Math.min(..._sortA);
            index = _sortA.findIndex(function(value){
                return value == min;
            });
        }else{

        }
        r.push(A[index]);
        A.splice(index,1);
    }

    return r;
};



var testCases = [
    {input1:[2,7,11,15],input2:[1,10,4,11],expect:[2,11,7,15]}, 
    {input1:[12,24,8,32],input2:[13,25,32,11],expect:[24,32,8,12]}, 
    {input1:[0],input2:[0],expect:[0]}, 
];
var i = 0;
testCases.forEach(function(c){
    i++;
    var result = advantageCount(c.input1,c.input2);
    if(result.join(",") == c.expect.join(",")){
        console.log(i+":pass");
    }else{
        console.log(i+" error:"," input1",c.input1," input2",c.input2,"  result= ",result,"  expect=",c.expect);
    }
});