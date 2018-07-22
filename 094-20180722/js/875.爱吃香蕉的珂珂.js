/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
    var sum = 0;
    piles.forEach(function(pile){
        sum += pile;
    });
    var minSpeed = parseInt(sum/H);
    if(sum%H != 0 ){
        minSpeed++;
    }
    
    while(true){
        if(calcHours(piles,minSpeed) > H){
            minSpeed++;
        }else{
            return minSpeed;
        }

    }
};
var calcHours = function(piles,K){
    var h = 0;
    piles.forEach(function(pile){
        if(pile%K==0){
            h += parseInt(pile/K);
        }else{
            h += (parseInt(pile/K) + 1);
        }
    });
    return h;
};


var testCases = [
    {input1:[3,6,7,11],input2:8,expect:4}, 
    {input1:[30,11,23,4,20],input2:5,expect:30}, 
    {input1:[30,11,23,4,20],input2:6,expect:23}, 
];
var i = 0;
testCases.forEach(function(c){
    i++;
    var result = minEatingSpeed(c.input1,c.input2);
    if(result == c.expect){
        console.log(i+":pass");
    }else{
        console.log(i+" error:"," input",c.input1," input2",c.input2,"  result= ",result,"  expect=",c.expect);
    }
});