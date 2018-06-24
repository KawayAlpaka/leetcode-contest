/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    var aLen = A.length;
    var bLen = B.length;
    if(aLen != bLen){
        return false;
    }
    if(aLen<2){
        return false;
    }
    var diffCount = 0;
    var diffIndexs = [];
    var map = {};
    for(let i = 0;i<aLen;i++){
        if(map[A[i]]){
            map[A[i]]++; 
        }else{
            map[A[i]] = 1; 
        }
        if(A[i] != B[i]){
            diffCount++;
            diffIndexs.push(i);
            if(diffCount>2){
                return false;
            }
        }
    }
    if(diffCount == 1){
        return false;
    }
    if(diffCount == 0){
        var hasEQ  = false;
        Object.keys(map).forEach(function(key){
            if(map[key] > 1){
                hasEQ = true;
            }
        });
        return hasEQ;
    }
    if(diffCount == 2){
        var ca1 = A[diffIndexs[0]];
        var ca2 = A[diffIndexs[1]];
        var cb1 = B[diffIndexs[0]];
        var cb2 = B[diffIndexs[1]];
        if(ca1 == cb2 &&  ca2 == cb1){
            return true;
        }else{
            return false;
        }
    }
};

var testCases = [
    {
        input1:"aaaaaaabc",
        input2:"aaaaaaacb",
        expect:true
    },
    {
        input1:"ab",
        input2:"ba",
        expect:true
    },
    {
        input1:"ab",
        input2:"ab",
        expect:false
    },
    {
        input1:"aa",
        input2:"aa",
        expect:true
    },
    {
        input1:"",
        input2:"aa",
        expect:false
    },
];
var i = 0;
testCases.forEach(function(c){
    i++;
    var result = buddyStrings(c.input1,c.input2);
    if(result == c.expect){
        console.log(i+":pass");
    }else{
        console.log(i+" error:","  result= ",result,"  expect=",c.expect);
    }
});