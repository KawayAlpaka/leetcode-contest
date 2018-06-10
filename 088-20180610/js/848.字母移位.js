/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(S, shifts) {
    var len1 = shifts.length;
    var r = "";
    var shifts2 = shifts;
    shifts2.reverse();
    for(let i=1;i<len1;i++){
        shifts2[i] = shifts2[i] + shifts2[i-1];
    }
    shifts2.reverse();
    for(let i=0;i<len1;i++){
        r = r + shift(S[i],shifts[i]);
    }
    return r;
};
var shift = function(p,n){
    var s = "abcdefghijklmnopqrstuvwxyz";
    var pIndex = s.indexOf(p);
    var r = s[(pIndex + n) % 26];
    return  r;
}

var testCases = [
    {
        input1:"abc",
        input2:[3,5,9],
        expect:"rpl"
    },{
        input1:"bad",
        input2:[10,20,30],
        expect:"jyh"
    },
];
var i = 0;
testCases.forEach(function(c){
    i++;
    var r = shiftingLetters(c.input1,c.input2);
    if(r == c.expect){
        console.log(i+":pass");
    }else{
        console.log(i+" error:input1=",c.input1," input2=",c.input2,"  result= ",r,"  expect=",c.expect);
    }
});