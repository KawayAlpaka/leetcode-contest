/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    var len = seats.length;
    var long = 0;
    var maxLong = 0;
    var start = 0;
    var end = 0;
    var _start = 0;
    var _end = 0;
    var maxDistant = 0;
    for(let i=0;i<len;i++){
        if(seats[i] == 0){
            if(typeof seats[i-1] == "undefined" || seats[i-1] == 1){
                _start = i;
            }
            long++;
            var d = getDistant(_start,i,long,len);
            if( d > maxDistant){
                maxDistant = d
                maxLong = long;
                end = i;
                start = end -long + 1;
            }
        }else{
            long=0;
        }
    }
    return maxDistant;
};
var getDistant = function(start,end,maxLong,len){
    if(end == len -1 ){
        return maxLong;
    }
    if(start == 0){
        return maxLong;
    }
    if(maxLong%2 == 0){
        return parseInt(maxLong/2);
    }else{
        return (maxLong + 1)/2
    }
}
var testCases = [
    {
        input1:[1,0,0,0,1,0,1],
        expect:2
    },
    {
        input1:[1,0,0,0],
        expect:3
    },
    {
        input1:[0,0,0,1],
        expect:3
    },
    {
        input1:[0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0],
        expect:3
    },
    {
        input1:[0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0],
        expect:4
    },
];
var i = 0;
testCases.forEach(function(c){
    i++;
    var r = maxDistToClosest(c.input1);
    if(r == c.expect){
        console.log(i+":pass");
    }else{
        console.log(i+" error:input1=",c.input1,"  result= ",r,"  expect=",c.expect);
    }
});