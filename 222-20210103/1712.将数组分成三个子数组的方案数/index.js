/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplit = function(nums) {
  var left = nums[0],mid=nums[1],right = 0;
  var p1 = 1,p2 = 2;
  var total = 0;
  for(let i=2;i<nums.length;i++){
    right += nums[i]
  }
  for(;p1<nums.length-1;p1++){
    p2 = p1+1;
    left += nums[p1];
    mid = nums[p2];
    right -= nums[p2];
    var _left = left;
    var _mid = mid;
    var _right = right;
    for(;p2<nums.length;p2++){
      if(_left <= _mid){
        if(_mid <= _right){
          total++;
        }else{
          break;
        }
      }
      _mid += nums[p2];
      _right -= nums[p2];
    }
  }
  return total;
};


var testCases = [
  {
    nums:[1,1,1],expect:1,
  },
  {
    nums:[1,2,2,2,5,0],expect:3,
  },
  {
    nums:[3,2,1],expect:0,
  },
];

var runTest = function(cases){
  for(let i=0;i<cases.length;i++){
    let c = cases[i];
    let result = waysToSplit(c.nums);
    if(result == c.expect){
      console.log(`${i}:pass`);
    }else{
      console.log(`${i}:fail。。nums:${c.nums},result:${result},but expect:${c.expect}`);
    }
  }
}

runTest(testCases);