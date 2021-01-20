/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    var rs = getResult(S);
    var rt = getResult(T);
    // console.log("rs=",rs,"  rt=",rt);
    return rs == rt;
};
var getResult = function(s){
    var len = s.length;
    var r = "";
    for(let i=0;i<len;i++){
        if(s[i] != "#"){
            r = r + s[i];
        }else{
            r = r.substr(0,r.length-1);
        }
        // console.log(r);
    }
    return r;
}


var testCases = [
    {
        input1:"ab#c",
        input2:"ad#c",
        expect:true
    },
    {
        input1:"ab##",
        input2:"c#d#",
        expect:true
    },
    {
        input1:"a##c",
        input2:"#a#c",
        expect:true
    },
    {
        input1:"a#c",
        input2:"b",
        expect:false
    },
    {
        input1:"xywrrmp",
        input2:"xywrrmu#p",
        expect:true
    },
    {
        input1:"#",
        input2:"a#",
        expect:true
    },
];
var i = 0;
testCases.forEach(function(c){
    i++;
    var r = backspaceCompare(c.input1,c.input2);
    if(r == c.expect){
        console.log(i+":pass");
    }else{
        console.log(i+" error:input1=",c.input1," input2=",c.input2,"  result= ",r,"  expect=",c.expect);
    }
});