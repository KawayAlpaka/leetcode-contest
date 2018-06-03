/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
var isNStraightHand = function(hand, W) {
    var hands = hand.sort(function(a,b){
        return a-b;
    });
    // console.log(hands);
    var len = hands.length;
    while (true) {
        var b = hands.shift();
        // console.log(b);
        if(typeof b == "number"){
            for(let i=0;i<W-1;i++){
                var index = hands.indexOf(b+1);
                if(index >= 0){
                    b = hands[index];
                    hands.splice(index,1);
                }else{
                    return false;
                }
            }
        }else{
            break;
        }
    }
    return true;
};


var testCases = [
    {
        input1:[66,75,4,37,92,87,68,65,58,100,97,42,19,66,73,1,5,44,30,29,76,31,12,35,26,93,9,36,90,16,86,15,4,9,13,98,10,14,18,90,89,3,10,65,24,31,43,25,54,55,54,81,10,80,31,12,15,14,59,27,64,93,32,26,69,79,13,32,29,24,27,91,92,82,37,101,100,61,74,30,91,62,36,92,28,23,4,63,55,3,11,11,101,22,34,25,2,75,43,72],
        input2:2,
        expect:true
    },
    {
        input1:[1,2,3,6,2,3,4,7,8],
        input2:3,
        expect:true
    },
    {
        input1:[1,2,3,4,5],
        input2:4,
        expect:false
    },
    {
        input1:[8,8,9,7,7,7,6,7,10,6],
        input2:2,
        expect:true
    },
];
var i = 0;
testCases.forEach(function(c){
    i++;
    var r = isNStraightHand(c.input1,c.input2);
    if(r == c.expect){
        console.log(i+":pass");
    }else{
        console.log(i+" error:input1=",c.input1," input2=",c.input2,"  result= ",r,"  expect=",c.expect);
    }
});