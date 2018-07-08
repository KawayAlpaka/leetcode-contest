/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    var hasMon10 = 0;
    var hasMon5 = 0;
    var sort = function(a,b){
        return b-a;
    };
    var len = bills.length;
    for(let i =0;i<len;i++){
        var mon = bills[i];
        if(mon == 10){
            hasMon10++;
        }
        if(mon == 5){
            hasMon5++;
        }
        var repay = mon - 5;
        if(repay == 15){
            if(hasMon10>=1){
                hasMon10--;
                hasMon5--;
            }else{
                hasMon5 -= 3;
            }
        }
        if(repay == 5){
            hasMon5--;
        }
        if(hasMon5<0 || hasMon10<0){
            return false;
        }
    }
    return true;
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