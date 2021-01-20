/**
 * @param {number} N
 */
var ExamRoom = function(N) {
    this.zuowei = new Array(N);
    this.zuowei.fill(0);
    return this;
};
ExamRoom.createNew = function(N){
    return new ExamRoom(N);
}

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function() {
    var index = maxDistToClosest(this.zuowei);
    this.zuowei[index] = 1;
    return index;
};

/** 
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function(p) {
    if(this.zuowei[p] == 0){
        return null;
    }
    if(this.zuowei[p] == 1){
        this.zuowei[p] = 0;
        return null;
    }
};

ExamRoom.prototype.createNew = function(N) {
    var o = new ExamRoom(N);
    return o;
};

var maxDistToClosest = function(seats) {
    var len = seats.length;
    var long = 0;
    var maxLong = 0;
    var start = 0;
    var end = 0;
    var _start = 0;
    var _end = 0;
    var seatsIndex= 0;
    var maxDistant = 0;
    for(let i=0;i<len;i++){
        if(seats[i] == 0){
            if(typeof seats[i-1] == "undefined" || seats[i-1] == 1){
                _start = i;
            }
            long++;
            var d = getDistant(_start,i,long,len);
            if( d.maxLong > maxDistant){
                
                maxDistant = d.maxLong;
                seatsIndex = d.weizhi;
                maxLong = long;
                end = i;
                start = end -long + 1;
            }
        }else{
            long=0;
        }
    }
    return seatsIndex;
};
var getDistant = function(start,end,maxLong,len){
    if(start == 0){
        return {maxLong:maxLong,weizhi:start};
    }
    if(end == len -1 ){
        return {maxLong:maxLong,weizhi:end};
    }
    if(maxLong%2 == 0){
        return {maxLong:parseInt(maxLong/2),weizhi:start + parseInt(maxLong/2) - 1};
    }else{
        return {maxLong:(maxLong + 1)/2,weizhi: start + parseInt(maxLong/2)};
    }
}


/** 
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = Object.create(ExamRoom).createNew(N)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */

var testCases = [
    {
        input1:["ExamRoom","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave","seat","leave"],
        input2:[[1000000],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0],[],[0]],
        expect:[null,0,9,4,2,null,5]
    },
    // {
    //     input1:["ExamRoom","seat","seat","seat","seat","leave","seat"],
    //     input2:[[10],[],[],[],[],[4],[]],
    //     expect:[null,0,9,4,2,null,5]
    // },
];
var i = 0;
testCases.forEach(function(c){
    var action = c.input1.shift();
    var args = c.input2.shift();
    var result = [];
    // var examRoom = new ExamRoom(...args);
    var examRoom = Object.create(ExamRoom).createNew(...args);
    result.push(null);
    while(true){
        action = c.input1.shift();
        args = c.input2.shift();
        if(!action || !args){
            break;
        }
        result.push(examRoom[action](...args));
    }
    if(result.join(",") == c.expect.join(",")){
        console.log(i+":pass");
    }else{
        console.log(i+" error:","  result= ",result,"  expect=",c.expect);
    }
});