/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  N = nums.length;
  if (N <= 1) return N;

  var lengths = (new Array(N)).fill(1);
  var counts = (new Array(N)).fill(1);

  for(let j=0;j<N;j++){
    for(let i=0;i<j;i++){
      if (nums[i] < nums[j]){
        if(lengths[i] >= lengths[j]){
          lengths[j] = 1 + lengths[i]
          counts[j] = counts[i]
        } else if(lengths[i] + 1 == lengths[j]) {
          counts[j] += counts[i]
        }       
      }
    }
  }

  let longest = Math.max(...lengths);
  console.log(lengths);
  console.log(counts);
  console.log(longest);
  let sum = 0;
  for(let i=0;i<N;i++){
    if(lengths[i] == longest){
      sum += counts[i];
    }
  }

  return sum;
};

var testCases = [
  {
    nums :[1,3,5,4,7],expect:2,
  },
  // {
  //   nums :[2,2,2,2,2],expect:5,
  // },
];


var runTest = function(cases){
  for(let i=0;i<cases.length;i++){
    let c = cases[i];
    let result = findNumberOfLIS(c.nums);
    if(result == c.expect){
      console.log(`${i}:pass`);
    }else{
      console.log(`${i}:fail nums:${JSON.stringify(c.nums)},result:${result},but expect:${c.expect}`);
    }
  }
}

runTest(testCases);