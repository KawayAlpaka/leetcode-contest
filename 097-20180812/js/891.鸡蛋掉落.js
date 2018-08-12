/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function(K, N) {
    var r = 0;
    var n = N + 1;
    while(true){
        // if(n == 3){
        //     return 2 + r ;
        // }
        if(K>1){
            // n = n - parseInt(n/2);
            n = parseInt(n/2);
        }else{
            return n + r - 1;
        }
        r++;
        K--;

        if(n <= 1){
            return r ;
        }
    }
};

var testCases = [
    {input1:1,input2:2,expect:2}, 
    {input1:2,input2:6,expect:3}, 
    {input1:3,input2:14,expect:4}, 
    {input1:2,input2:2,expect:2}, 
    {input1:2,input2:4,expect:3}, 
];
var i = 0;
testCases.forEach(function(c){
    i++;
    var result = superEggDrop(c.input1,c.input2);
    if(result == c.expect){
        console.log(i+":pass");
    }else{
        console.log(i+" error:"," input1",c.input1," input2",c.input2,"  result= ",result,"  expect=",c.expect);
    }
});