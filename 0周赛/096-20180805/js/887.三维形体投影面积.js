/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    var N = grid.length;
    if(N == 0){
        return 0;
    }
    var _bianpin = grid.join(",").split(",");
    var zCount = _bianpin.filter(function(v){
        return v>0;
    }).length;
    var xCount = 0;
    var yCount = 0;
    var max = 0;
    for(let i=0;i<N;i++){
        max = 0;
        for(let j=0;j<N;j++){
            if(grid[i][j] > max){
                max = grid[i][j];
            } 
        }
        xCount += max;
    }

    for(let i=0;i<N;i++){
        max = 0;
        for(let j=0;j<N;j++){
            if(grid[j][i] > max){
                max = grid[j][i];
            } 
        }
        yCount += max;
    }


    return zCount + xCount +yCount;
};

var testCases = [
    {input1:[[2]],expect:5}, 
    {input1:[[1,2],[3,4]],expect:17}, 
    {input1:[[1,0],[0,2]],expect:8}, 
    {input1:[[1,1,1],[1,0,1],[1,1,1]],expect:14}, 
    {input1:[[2,2,2],[2,1,2],[2,2,2]],expect:21}, 
    {input1:[[5,4,11,6,11],[12,1,14,2,5],[17,3,19,9,13],[2,20,11,1,3],[10,5,17,7,15]],expect:186}, 
];
var i = 0;
testCases.forEach(function(c){
    i++;
    var result = projectionArea(c.input1,c.input2,c.input3);
    if(result == c.expect){
        console.log(i+":pass");
    }else{
        console.log(i+" error:"," input",c.input1,"  result= ",result,"  expect=",c.expect);
    }
});