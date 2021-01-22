/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
  let left = 0;
  let right = 0;
  // 先求出理论上的最小值和最大值
  for(let i=0;i<nums.length;i++){
    right += nums[i];
    if(left < nums[i]){
      left = nums[i];
    }
  }

  let check = function(nums,mid,m){
    let cut = 1;
    let sum = 0;
    for(let i=0;i<nums.length;i++){
      
      if(sum + nums[i] > mid){
        cut ++ 
        sum = nums[i];
      }else{
        sum += nums[i];
      }
    }
    return cut <= m;
  };
  while(left < right){
    let mid = Math.floor((right+left)/2);
    if(check(nums,mid,m)){
      right = mid;
    }else{
      left = mid + 1;
    }
  };
  return left;
};

var testCases = [
  {
    nums :[7,2,5,10,8],m:2,expect:18,
  },
  {
    nums :[1,4,4],m:3,expect:4,
  },
];


var runTest = function(cases){
  for(let i=0;i<cases.length;i++){
    let c = cases[i];
    let result = splitArray(c.nums,c.m);
    if(result == c.expect){
      console.log(`${i}:pass`);
    }else{
      console.log(`${i}:fail nums:${JSON.stringify(c.nums)},result:${result},but expect:${c.expect}`);
    }
  }
}

runTest(testCases);