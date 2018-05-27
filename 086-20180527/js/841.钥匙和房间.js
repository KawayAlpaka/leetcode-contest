/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    var keys = [0];
    var map = new Map();

    var openRoom = function(i){
        keys.push(...rooms[i]);
        map[i] = 1;
    }
    while(true){
        var i = keys.shift();
        if(typeof i != "undefined"){
            if(map[i] == 1){
                continue;
            }
            openRoom(i);
        }else{
            break;
        }
    }
    var len = rooms.length;
    for(let i = 0;i<len;i++){
        if(map[i] != 1){
            return false;
        }
    }
    return true;
};




var testCases = [
    {input:[[1],[2],[3],[]],
        expect:true
    },
    {input:[[1,3],[3,0,1],[2],[0]],
        expect:false
    },
];

var i = 0;
testCases.forEach(function(c){
    i++;
    var r = canVisitAllRooms(c.input);
    if(r == c.expect){
        console.log(i+":pass");
    }else{
        console.log(i+" error:inputL=",c.input,"  result= ",r,"  expect=",c.expect);
    }
});