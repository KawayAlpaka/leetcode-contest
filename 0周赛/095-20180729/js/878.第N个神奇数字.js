/**
 * @param {number} N
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var d = Math.pow(10,9)+7;
var nthMagicalNumber = function(N, A, B) {
    //假设A和B是倍数关系
    if(A%B ==0 || B % A == 0){
        var min = Math.min(A,B);
        return (N * min)%d;
    }
    //假设A和B不是倍数关系
    var fA = 1/A;
    var fB = 1/B;
    var f = fA+ fB;
    var guji= parseInt(N/f) ;
    var hasA = parseInt(guji / A);
    var hasB = parseInt(guji / B);
    var f = false;
    if(guji % A == 0){
        hasA--;
        f = true;
    }

    if(guji % B == 0){
        hasB--;
        f = true;
    }
    var has = hasA + hasB;
    // if(f == false){
    //     guji = Math.min( (hasA + 1) * A ,(hasB + 1) * B);
    //     has++;
    // }
    var n = guji;
    
    //还要减掉A和B的倍数的个数
    var beishu = getGongBeishu(A,B);
    if(guji > beishu ){
        var beishuCount = parseInt(guji / beishu);
        has = has - beishuCount;
    }
    while(true){
          if(n%A == 0){
             has++;
              if(has == N){
                 break;
              }
          }
          if(n%B == 0){
            has++;
             if(has == N){
                break;
             }
         }
         n = Math.min(n+A,n+B);
    }
    return n%d;
};

var getGongBeishu = function(A,B){
    let m, n,a,b, t, c;
    a = A;
    b = B;
    m=a;   
    n=b;
    while(b!=0)  
    { 
        c=a%b; 
        a=b;  
        b=c;
    }
    return m*n/a;
};




var testCases = [
    {input1:1,input2:2,input3:3,expect:2}, 
    {input1:4,input2:2,input3:3,expect:6}, 
    {input1:5,input2:2,input3:4,expect:10}, 
    {input1:3,input2:6,input3:4,expect:8}, 
    {input1:3,input2:8,input3:3,expect:8}, 
    {input1:10,input2:10,input3:8,expect:50}, 
    // {input1:710589597,input2:20244,input3:29648,expect:50}, 
];
var i = 0;
testCases.forEach(function(c){
    i++;
    var result = nthMagicalNumber(c.input1,c.input2,c.input3);
    if(result == c.expect){
        console.log(i+":pass");
    }else{
        console.log(i+" error:"," input",c.input1," input2",c.input2," input3",c.input3,"  result= ",result,"  expect=",c.expect);
    }
});