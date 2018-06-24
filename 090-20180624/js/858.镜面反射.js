/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var mirrorReflection = function(p, q) {
    var long = p;
    var getLuoDian = function(x,y,jiaodu){
        Math.tan(jiaodu);
        if(x != 0){
            
        }
        if(y != 0){

        }

        
    };
    getLuoDian(0,0,Math.atan(q/p));
};

var atan = function(v){
    return Math.atan(v)*180/Math.PI;
}

var testCases = [
    {
        input1:2,
        input2:1,
        expect:2
    },
];
var i = 0;
testCases.forEach(function(c){
    i++;
    var result = mirrorReflection(c.input1,c.input2);
    if(result == c.expect){
        console.log(i+":pass");
    }else{
        console.log(i+" error:","  result= ",result,"  expect=",c.expect);
    }
});