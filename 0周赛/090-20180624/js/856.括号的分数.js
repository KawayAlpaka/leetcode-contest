/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
    var arr = S.split("");
    var len = arr.length;
    let i = 0;
    var re = function(){
        i = -1;
        len = arr.length;
    }
    for(;i<len;i++){
        if(len == 1){
            return arr[0];
        }
        if(arr[i] == "(" && arr[i+1] == ")"){
            arr.splice(i,2,1);
            re();
            continue;
        }
        if(typeof arr[i] == "number" && typeof arr[i+1] == "number"){
            arr.splice(i,2,arr[i]+arr[i+1]);
            re();
            continue;
        }
        if(arr[i] == "(" && typeof arr[i+1] == "number" && arr[i+2] == ")"){
            arr.splice(i,3,arr[i+1] * 2);
            re();
            continue;
        }
        
    }
};
var testCases = [
    {
        input1:"()",
        expect:1
    },
    {
        input1:"(())",
        expect:2
    },
    {
        input1:"()()",
        expect:2
    },
    {
        input1:"(()(()))",
        expect:6
    },
];
var i = 0;
testCases.forEach(function(c){
    i++;
    var result = scoreOfParentheses(c.input1);
    if(result == c.expect){
        console.log(i+":pass");
    }else{
        console.log(i+" error:","  result= ",result,"  expect=",c.expect);
    }
});