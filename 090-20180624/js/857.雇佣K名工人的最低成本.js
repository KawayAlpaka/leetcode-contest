/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} K
 * @return {number}
 */
var mincostToHireWorkers = function(quality, wage, K) {
    var xinjiabis = [];
    var len = quality.length;
    for(let i= 0;i<len;i++){
        xinjiabis.push(quality[i] / wage[i]);
    }
};

var testCases = [
    {
        input1:[10,20,5],
        input2:[70,50,30],
        input3:2,
        expect:105.00000
    },

];
var i = 0;
testCases.forEach(function(c){
    i++;
    var result = mincostToHireWorkers(c.input1,c.input2);
    if(Math.abs(result - c.expect) < 0.00001 ){
        console.log(i+":pass");
    }else{
        console.log(i+" error:","  result= ",result,"  expect=",c.expect);
    }
});