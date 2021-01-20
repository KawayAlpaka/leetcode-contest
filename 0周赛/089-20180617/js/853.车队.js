/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    var cars = [];
    var len = position.length;
    if(len <= 0){
        return 0;
    }
    if(len == 1){
        return 1;
    }
    for(let i=0;i<len;i++){
        var car = {
            position:position[i],
            speed:speed[i]
        };
        calcTime(car,target);
        cars.push(car);
    };
    cars.sort(function(a,b){
        return b.position - a.position;
    });
    for(let i=1;i<len;i++){
        if(cars[i].time < cars[i-1].time){
            cars[i].time = cars[i-1].time;
        }
    };
    var r = 1;
    for(let i=1;i<len;i++){
        if(cars[i].time != cars[i-1].time){
            r++;
        }
    };
    return r;
};

var calcTime = function(car,target){
    car.time = (target - car.position )/car.speed;
}



var testCases = [
    {
        input1:12,
        input2:[10,8,0,5,3],
        input3:[2,4,1,1,3],
        expect:3
    },
    {
        input1:10,
        input2:[],
        input3:[],
        expect:0
    },
    {
        input1:10,
        input2:[1],
        input3:[1],
        expect:1
    },
];
var i = 0;
testCases.forEach(function(c){
    i++;
    var r = carFleet(c.input1,c.input2,c.input3);
    if(r == c.expect){
        console.log(i+":pass");
    }else{
        console.log(i+" error:","  result= ",r,"  expect=",c.expect);
    }
});