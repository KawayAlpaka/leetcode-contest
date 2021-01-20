var findMedian = function(nums){
  let mid = nums.length / 2;
  let fmid = Math.floor(mid);
  return Math.floor(mid) == mid ? (nums[mid] + nums[mid-1])/2 : nums[fmid];
};
