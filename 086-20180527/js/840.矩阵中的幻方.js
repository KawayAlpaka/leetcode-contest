/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    var rowLen = grid.length;
    if(rowLen < 3){
        return 0;
    }
    var colLen = grid[0].length;
    if(colLen < 3){
        return 0;
    }
    var count = 0;
    for(let i=0;i<= rowLen-3;i++){
        for(let j=0;j<= colLen-3;j++){
            if(isMagicSquare(i,j,grid)){
                count++
            }
        }
    }
    return count;
};
var isMagicSquare = function(x,y,grid){
    var xianzhi = [1,2,3,4,5,6,7,8,9];
    var initNum = 0;
    var duijiaoNum1 = 0;
    var duijiaoNum2 = 0;
    for(let i = 0;i<3;i++){
        var rowSum = 0;
        var colSum = 0;
        for(let j = 0;j<3;j++){
            var zx = x+i;
            var zy = y+j;
            var nx = x+j;
            var ny = y+i;
            var index = xianzhi.indexOf(grid[zx][zy]);
            if(index >= 0){
                xianzhi.splice(index,1);
            }else{
                return false;
            }
            if(i == j){
                duijiaoNum1 += grid[zx][zy];
            }
            if(2-i == j){
                duijiaoNum2 += grid[zx][zy];
            }
            try{
                rowSum += grid[zx][zy];
                colSum += grid[nx][ny];
            }catch(e){
                console.log(e);
                console.log("x=",x," y=",y," zx=",zx,"  zy=",zy," zx=",zx,"  ny=",ny);
            }

        }
        if(rowSum != colSum){
            return false;
        }
        if(initNum == 0){
            initNum = rowSum;
        }else if(initNum != rowSum){
            return false;
        }
    }
    if(initNum != duijiaoNum1  || duijiaoNum2 != duijiaoNum1){
        return false;
    }
    return true;
};

var testCases = [
    {input:[
        [4,3,8,4],
        [9,5,1,9],
        [2,7,6,2]],
        expect:1
    },
    {input:[
        [8,7,4,1,7,2],
        [5,8,4,2,6,9],
        [4,2,1,4,2,8],
        [6,5,9,2,7,4],
        [8,2,3,9,5,3],
        [3,9,5,6,8,1]],
        expect:1
    },
];
var i = 0;
testCases.forEach(function(c){
    i++;
    var r = numMagicSquaresInside(c.input);
    if(r == c.expect){
        console.log(i+":pass");
    }else{
        console.log(i+" error:inputL=",c.input,"  result= ",r,"  expect=",c.expect);
    }
});