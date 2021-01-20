/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function(A) {
    var len = A.length;
    var long = 0;
    var ohigh = A[0];
    var state;
    var start = 0;
    var restart = function(s){
        if(state){
            state = s;
        }else{
            state = "ping";
        }
    };

    restart("ping");
    for(let i=1;i<len;i++){
        var high = A[i];
        if(state == "ping"){
            if(high > ohigh){
                state = "up";
                ohigh = high;
                start = i - 1;
                continue;
            }
        }

        if(state == "up"){
            if(high > ohigh){

            }else if (high == ohigh){
                restart("ping");
            }else{
                state = "down";
            }
        }
        if(state == "down"){
            if(high < ohigh){
                if(i == len -1 ){
                    var end =  i;
                    var _long = end - start + 1;
                    if(_long > long){
                        long = _long;
                    }
                }
            }else if(high == ohigh){
                restart("ping");
                var end =  i - 1;
                var _long = end - start + 1;
                if(_long > long){
                    long = _long;
                }
                // console.log("start=",start," end=",end);
                // console.log(A.slice(start,end));
            }else{
                restart("up");
                var end =  i - 1;
                var _long = end - start + 1;
                if(_long > long){
                    long = _long;
                }
                // console.log("start=",start," end=",end);
                // console.log(A.slice(start,end));
                start = i - 1;
            }

        }

        ohigh = high;

    }

    return long;
};

var longestMountain2 = function(A) {
    var len = A.length;
    var longest = 0;
    var long;
    var ohigh = A[0];
    var state;
    var restart = function(s){
        long = 1;
        if(state){
            state = s;
        }else{
            state = "ping";
        }
        
    };
    var updateLongest = function(){
        if(long > longest && state == "down"){
            longest = long;
        }
    };
    restart("ping");
    for(let i=1;i<len;i++){
        var high = A[i];
        if(state == "ping"){
            if(high > ohigh){
                long++;
                state = "up";
                ohigh = high;
                continue;
            }
        }

        if(state == "up"){
            if(high > ohigh){
                long++;
            }else if (high == ohigh){
                restart("ping");
            }else{
                state = "down";
            }
        }
        if(state == "down"){
            if(high < ohigh){
                long++;
            }else if(high == ohigh){
                restart("ping");
            }else{
                restart("up");
                long ++;
            }
        }

        ohigh = high;
        updateLongest();
    }
    if(longest<3){
        return 0;
    }
    return longest;
};


var testCases = [
    {
        input:[2,1,2,2,5,7,3,2,5],
        expect:5
    },
    {
        input:[875,884,239,731,723,685],
        expect:4
    },
    {
        input:[1,2,3,4,3,2],
        expect:6
    },

    {
        input:[0,1,2,3,4,5,6,7,8,9],
        expect:0
    },
    {
        input:[0,1,2,3,4,5,6,7,8,9,9],
        expect:0
    },
    {
        input:[0,0,1,2,3,4,5,6,7,8,9],
        expect:0
    },
    {
        input:[2,1,4,7,3,2,5],
        expect:5
    },
    {
        input:[2,1,4,7,3,2,5],
        expect:5
    },
    {
        input:[2,1,2,4,5,7,3,2,5],
        expect:7
    },

    {
        input:[2,2,1,2,5,7,3,2,5],
        expect:6
    },
    {
        input:[2,2,2],
        expect:0
    },
    {
        input:[1,2,3,4,5,6,7,8],
        expect:0
    },
    {
        input:[8,7,6,5,4,3,2,1],
        expect:0
    },
    {
        input:[],
        expect:0
    },
    {
        input:[1,2,2],
        expect:0
    },
    {
        input:[1,2,1],
        expect:3
    },
];
var i = 0;
testCases.forEach(function(c){
    i++;
    var r = longestMountain(c.input);
    if(r == c.expect){
        console.log(i+":pass");
    }else{
        console.log(i+" error:input=",c.input,"  result= ",r,"  expect=",c.expect);
    }
});