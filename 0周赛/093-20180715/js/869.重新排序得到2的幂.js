/**
 * @param {number} N
 * @return {boolean}
 */
var reorderedPowerOf2 = function(N) {
    for(let i=0;i<pow2.length;i++){
        var s = "" + N;
        var sArr = s.split("");
        var len = s.length;
        var sn2 = "" + pow2[i];
        var sn2Arr = sn2.split("");
        
        while(true){
            if(sn2Arr.length == 0 && sArr.length == 0){
                return true;
            }
            var index = sArr.indexOf(sn2Arr[0]);
            if(index>=0){
                sn2Arr.splice(0,1);
                sArr.splice(index,1);
            }else{
                break;
            }
        }
    }
    return false;
};
// var onlyZero = function(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>0){
//             return false;
//         }
//     }
//     return true;
// };


var pow2 = [];
var max = Math.pow(10,10);
for(let i=0;true;i++){
    var n = Math.pow(2,i);
    if(n>max ){
        break;
    }
    pow2.push(n);
    
}
// console.log(pow2);



var testCases = [
    {input1:1,expect:true}, 
    {input1:10,expect:false},
    {input1:16,expect:true}, 
    {input1:24,expect:false}, 
    {input1:46,expect:true}
];
var i = 0;
testCases.forEach(function(c){
    i++;
    var result = reorderedPowerOf2(c.input1);
    if(result == c.expect){
        console.log(i+":pass");
    }else{
        console.log(i+" error:"," input",c.input1,"  result= ",result,"  expect=",c.expect);
    }
});