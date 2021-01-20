/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
  // var map = {};
  // for(let v of nums){
  //   map[v] = true;
  // }
  // var bigmap = [];
  var sums = [];
  for(let i=0;i<nums.length;i++){
    // bigmap.push([]);
    for(let j=0;j<nums.length;j++){
      if(i>=j){
        // bigmap[i][j] = 0;
      }else{
        sums.push(nums[i] * nums[j]); 
        // bigmap[i][j] = nums[i] * nums[j];
      }
    }
  }
  
  sums.sort((a,b)=>{
    return a-b;
  });
  var eqs = [];
  var pVal = 0;
  var pEqCount = 1;
  for(let i=0;i<sums.length;i++){
    if(pVal == sums[i]){
      pEqCount++;
    }else if(pEqCount>1){
      eqs.push(pEqCount);
      pEqCount = 1;
    }
    pVal = sums[i];
  }
  // console.log(eqs);
  // console.log(sums);
  var res = 0;
  for(let i=0;i<eqs.length;i++){
    let eq = eqs[i];
    let zu = zuhe(2,eq);
    res += zu * 8;
  }
  return res;
};

const zuhe = function(a,n){
  if(a>n){
    return 0;
  }
  if(a == n){
    return 1;
  }
  let fenzi = 1;
  for(let i=n;i>=n-a+1;i--){
    fenzi *= i; 
  }
  let fenmu = 1;
  for(let i=1;i<=a;i++){
    fenmu *= i; 
  }
  return fenzi / fenmu;
}


var testCases = [
  {
    nums:[2,3,4,6],expect:8,
  },
  {
    nums:[1,2,4,5,10],expect:16,
  },
  {
    nums:[2,3,4,6,8,12],expect:40,
  },
  {
    nums:[2,3,5,7],expect:0,
  },
];

var runTest = function(cases){
  for(let i=0;i<cases.length;i++){
    let c = cases[i];
    let result = tupleSameProduct(c.nums);
    if(result == c.expect){
      console.log(`${i}:pass`);
    }else{
      console.log(`${i}:fail。。nums:${c.nums},result:${result},but expect:${c.expect}`);
    }
  }
}

runTest(testCases);