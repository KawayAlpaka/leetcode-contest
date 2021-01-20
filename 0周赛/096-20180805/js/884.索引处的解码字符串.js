/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var decodeAtIndex = function(S, K) {

    var index = 0;
    while(true){
        
    }

    // // 最后得到的字符串太长，超出允许长度
    // var _S = "";
    // var _len = 0;
    // while(true){
    //     let indexs = S.match(/\d/);
    //     if(indexs){
    //         _S = _S + S.substring(0,indexs.index);
    //         let __S = _S;
    //         for(let i=1;i<indexs[0];i++){
    //             _S += __S;
    //             if(_S.length >= K){
    //                 console.log(_S);
    //                 return _S[K-1];
    //             }
    //         }
    //         S = S.substring(indexs.index+1);
    //     }else{
    //         _S = _S + S;
    //         break;
    //     }
    //     if(_S.length >= K){
    //         // console.log(_S);
    //         return _S[K-1];
    //     }
    //     // else{
    //     //     _len = _len + _S.length;
    //     //     _S = "";
    //     // }
    // }
    // return _S[K-1];
};



var testCases = [
    // {input1:"leet2code3",input2:10,expect:"o"}, 
    // {input1:"ha22",input2:5,expect:"h"}, 
    // {input1:"a2345678999999999999999",input2:1,expect:"a"}, 
    {input1:"y959q969u3hb22odq595",input2:222280369,expect:"a"}, 
];
var i = 0;
testCases.forEach(function(c){
    i++;
    var result = decodeAtIndex(c.input1,c.input2,c.input3);
    if(result == c.expect){
        console.log(i+":pass");
    }else{
        console.log(i+" error:"," input",c.input1,"  result= ",result,"  expect=",c.expect);
    }
});