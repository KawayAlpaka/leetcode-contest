/**
 * @param {number} N
 * @return {number}
 */
const max = Math.pow(10,8);
var primePalindrome = function(N) {
    if(N == 1){
       return 2;
    }
    var n = N;
    while(true){
        //console.log(n);
        if(isPrime(n) ){
            
            if(isHuiwen(""+n)){
               return n;
            }else{
                n = nextHuiwen(n);
                continue;
            }
        }else{
            n = nextHuiwen(n);
            continue;
        }
        n++;
        if(n>max){
           return null;
        }
    }
};
var isHuiwen = function(str){
    //console.log(str);
    var len = str.length;
    for(let i=0;i<len;i++){
        if(str[i] != str[len-1-i] ){
           return false;
        }
        if(i >= len-1-i ){
           return true;
        }
    }
    return true;
};

var isPrime = function(num)
{    
     if(num ==2|| num==3 )
                     return 1 ;
     if(num %6!= 1&&num %6!= 5)
                     return 0 ;
     let tmp = Math.sqrt( num);
     for(let i= 5;i <=tmp; i+=6 )
         if(num %i== 0||num %(i+ 2)==0 )
                 return 0 ;
     return 1 ;
}

var nextHuiwen = function(N){
    var str = "" + N;
    var len = ("" + str).length;
    var strArr = str.split("");
    var flag = false;
    for(let i=0;i<len;i++){
        if(strArr[i] > strArr[len-1-i]){
            flag = true;
        }else if(strArr[i] < strArr[len-1-i]){
            if(i !=  len-1-i){
                flag = false;
            }
        }
        strArr[len-1-i] = strArr[i];
        if(i >= len-1-i ){
            if(flag){

            }else{
                var f = false;
                for(let _i = len-1-i;_i>=0;_i--){
                    var _int = parseInt(strArr[_i]) + 1;
                    if(_int < 10){
                        strArr[_i] = _int;
                        f = true;
                        break;
                    }else{
                        strArr[_i] = 0;
                    }
                }
                if(f == false){
                    var r = "1";
                    for(let _i = 0;_i<len-1;_i++){
                        r = r + "0";
                    }
                    return parseInt(r + "1");
                }
                for(let _i = 0;_i<len;_i++){
                    strArr[len-1-_i] = strArr[_i];
                }
                break;
            }
        }
    }
    return parseInt(strArr.join(""));
};


// 本题的核心在于 找到下一个 回文数 。所以这里只测试 nextHuiwen 方法
var testCases = [
    {input1:1000,expect:1001}, 
    {input1:1002,expect:1111},
    {input1:2001,expect:2002}, 
    {input1:1234,expect:1331}, 
    {input1:12345,expect:12421}, 
    {input1:12945,expect:13031}, 
    {input1:19995,expect:20002}, 
    {input1:99995,expect:99999}, 
    {input1:99999,expect:100001}, 
    {input1:98390,expect:98489}, 
];
var i = 0;
testCases.forEach(function(c){
    i++;
    var result = nextHuiwen(c.input1);
    if(result == c.expect){
        console.log(i+":pass");
    }else{
        console.log(i+" error:"," input",c.input1,"  result= ",result,"  expect=",c.expect);
    }
});