/**
 * @param {number[][]} matrix
 * @return {number}
 * 未完成
 */
var largestSubmatrix = function(matrix) {
  const rowLen = matrix.length;
  const colLen = matrix[0].length;
  for(let j=0;j<colLen;j++){
    for(let i=0;i<rowLen;i++){
      matrix[i][j]
    }
  }

  // const rowLen = matrix.length;
  // const colLen = matrix[0].length;
  // const rowCounts = [];
  // for(let i=0;i<rowLen;i++){
  //   let rowCount = 0;
  //   for(let j=0;j<colLen;j++){
  //     rowCount += matrix[i][j];
  //   }
  //   rowCounts.push(rowCount);
  // }
  // console.log(rowCounts);
  // var sqs1 = [];
  // for(let i=0;i<rowLen;i++){
  //   let curRowCount = rowCounts[i];
  //   let curRowNum = 1;
  //   let sq = curRowCount;
  //   for(let j=i+1;j<rowLen;j++){
  //     if(rowCounts[j] < rowCounts[i]){
  //       break;
  //     }
  //     curRowNum++;
  //   }
  //   sq = curRowCount * curRowNum;
  //   sqs1.push(sq);
  // }
  // console.log(sqs1);

  // var sqs2 = [];
  // for(let i=rowLen-1;i>=0;i--){
  //   let curRowCount = rowCounts[i];
  //   let curRowNum = 1;
  //   let sq = curRowCount;
  //   for(let j=i-1;j>=0;j--){
  //     if(rowCounts[j] < rowCounts[i]){
  //       break;
  //     }
  //     curRowNum++;
  //   }
  //   sq = curRowCount * curRowNum;
  //   sqs2.push(sq);
  // }
  // console.log(sqs2);
  // let r = Math.max(...sqs1,...sqs2)
  // console.log(r);
  // return r;
};


var testCases = [
  {
    matrix :[[0,0,1],[1,1,1],[1,0,1]],expect:4,
  },
  // {
  //   matrix :[[1,0,1,0,1]],expect:3,
  // },
  // {
  //   matrix :[[1,1,0],[1,0,1]],expect:2,
  // },
  // {
  //   matrix :[[0,0],[0,0]],expect:0,
  // },
];

var runTest = function(cases){
  for(let i=0;i<cases.length;i++){
    let c = cases[i];
    let result = largestSubmatrix(c.matrix);
    if(result == c.expect){
      console.log(`${i}:pass`);
    }else{
      console.log(`${i}:fail。。nums:${c.matrix},result:${result},but expect:${c.expect}`);
    }
  }
}

runTest(testCases);