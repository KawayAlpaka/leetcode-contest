/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function(A, K) {
    var len = A.length;
    var sum = 0;
    var short = Infinity;
    var start = 0;
    for(let i=0;i<len;i++){
        sum += A[i];
        if(sum>=K){
            var _short = i - start + 1;
            if(_short < short){
                short = _short;
            }
            var _sum = sum;
            var _start = start;
            while(_start < i){
                _sum -= A[_start];
                _start = _start+1;
                if(_sum>=K){
                    _short = i - _start + 1;
                    if(_short < short){
                        short = _short;
                    }
                    sum = _sum;
                    start = _start;
                }
            }
        }
        if(sum<=0){
            sum = 0;
            start = i+1;
        }
    }
    if(short == Infinity){
        return -1;
    }
    return short;
};
var testCases = [
    {
        input1:[1],
        input2:1,
        expect:1
    },
    {
        input1:[1,2],
        input2:4,
        expect:-1
    },
    {
        input1:[2,-1,2],
        input2:3,
        expect:3
    },
    {
        input1:[17,85,93,-45,-21],
        input2:150,
        expect:2
    },
    {
        input1:[77,19,35,10,-14],
        input2:19,
        expect:1
    },
    {
        input1:[84,-37,32,40,95],
        input2:167,
        expect:3
    },
    {
        input1:[48,99,37,4,-31],
        input2:140,
        expect:2
    },
    {
        input1:[-28,81,-20,28,-29],
        input2:89,
        expect:3
    },
    
];
var i = 0;
testCases.forEach(function(c){
    i++;
    var result = shortestSubarray(c.input1,c.input2);
    if(result == c.expect){
        console.log(i+":pass");
    }else{
        console.log(i+" error:","  result= ",result,"  expect=",c.expect);
    }
});