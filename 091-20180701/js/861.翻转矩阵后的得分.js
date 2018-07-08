/**
 * @param {number[]} bills
 * @return {boolean}
 */
/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
    var rLen = A.length;
    var cLen = A[0].length;
    var hrLen = rLen/2;
    var fanzhuanCol = function(index){
        for(let i =0;i<rLen;i++){
            A[i][index] = A[i][index] == 0? 1:0;
        }
    };
    var fanzhuanRow = function(index){
        for(let i =0;i<cLen;i++){
            A[index][i] = A[index][i] == 0? 1:0;
        }
    };
    for(let i =0;i<rLen;i++){
        if(A[i][0] == 0){
            fanzhuanRow(i);
        }
    }
    for(let i =1;i<cLen;i++){
        var count1 = 0;
        for(let j =0;j<rLen;j++){
            if(A[j][i] == 1){
                count1++;
            }
        }
        if(count1 < hrLen){
            fanzhuanCol(i);
        }
    }
    var r = 0;
    for(let i =0;i<rLen;i++){
        var r1 = 0;
        for(let j = 0 ;j<cLen;j++){
            if(A[i][cLen-j-1] == 1){
                r1 = r1 + Math.pow(2,j);
            }
        }
        r += r1;
    }
    console.log(A);
    return r;
};
// var testCases = [
//     {
//         input1:"()",
//         expect:1
//     },
//     {
//         input1:"(())",
//         expect:2
//     },
//     {
//         input1:"()()",
//         expect:2
//     },
//     {
//         input1:"(()(()))",
//         expect:6
//     },
// ];
// var i = 0;
// testCases.forEach(function(c){
//     i++;
//     var result = scoreOfParentheses(c.input1);
//     if(result == c.expect){
//         console.log(i+":pass");
//     }else{
//         console.log(i+" error:","  result= ",result,"  expect=",c.expect);
//     }
// });