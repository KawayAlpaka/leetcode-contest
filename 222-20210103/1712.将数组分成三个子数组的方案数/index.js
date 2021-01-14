/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplit = function(nums) {
  // 自己写的方案，解决了问题，但在运行 全0大数组的用例 时，时间太长，放弃
  var p1 = 0,p2 = 1;
  var left = nums[p1],mid=nums[p2],right = 0;
  var sums = [];
  var n = nums.length;
  sums[0] = nums[p1];
  sums[1] = nums[p1] + nums[p2];
  var total = 0;
  for(let i=2;i<nums.length;i++){
    right += nums[i];
    sums[i] = sums[i-1] + nums[i];
  }
  // console.log(sums);
  var p2Left = 0;
  var p2Right = 0;
  for(;p1<nums.length-1;p1++){
    if(p1>0){
      p2 = p1+1;
      left += nums[p1];
      mid = nums[p2];
      right -= nums[p2];
    }
    var _left = left;
    var _mid = mid;
    var _right = right;
    if(_left> (_mid + _right)/2){
      break;
    }

    // // 传统循环方法
    // for(;p2<nums.length-1;p2++){
    //   if(_left <= _mid){
    //     if(_mid <= _right){
    //       total++;
    //       // console.log(`${total}:${_left},${_mid},${_right}`);
    //     }else{
    //       break;
    //     }
    //   }
    //   if(nums[p2+1] != 0){
    //     _mid += nums[p2+1];
    //     _right -= nums[p2+1];
    //   }else{
    //     while(nums[p2+1] == 0){
    //       p2++;
    //       total++;
    //     }
    //   }
    // }

    //二分查找法
    let indexLeft = leftBound(p1+1,nums.length-1,sums,sums[p1] * 2);
    let indexRight = rightBound(p1+1,nums.length-1,sums,sums[p1] + Math.floor((sums[n-1] - sums[p1] )/2));
    if (indexRight >= indexLeft) {
      // console.log(indexLeft,indexRight);
      total += indexRight - indexLeft + 1;
    }

    // 三指针 （自己想想的，没调通，废弃）
    // if(!p2Left || !p2Right){
    //   for(;p2<nums.length-1;p2++){
    //     if(_left <= _mid){
    //       if(_mid <= _right){
    //         if(!p2Left){
    //           p2Left = p2;
    //         }
    //         total++;
    //         // console.log(`${total}:${_left},${_mid},${_right}`);
    //       }else{
    //         if(!p2Right){
    //           p2Right = p2;
    //         }
    //         break;
    //       }
    //     }
    //     _mid += nums[p2+1];
    //     _right -= nums[p2+1];
    //   }
    // }else{
    //   console.log("start:",p2Left,p2Right);
    //   for(;sums[p2Left] < sums[p1]*2 && p2Left < n -1;p2Left++){

    //   }
    //   for(; (sums[n-1] - sums[p2Right]) < Math.floor((sums[n-1] - sums[p2Left])/2)  && p2Right <n ;p2Right++){

    //   }
    //   if (p2Right >= p2Left && p2Right < n-1) {
    //     console.log("poin:",p1,p2Left,p2Right,n);
    //      console.log('sums:',sums[p1],sums[p2Left]-sums[p1],sums[n-1]-sums[p2Right]);
    //     total += p2Right - p2Left + 1;
    //   }
    // }
  }


  // // 三指针，大佬的版本，好像没有通过.....
  // // |______|________|_______|________|
  // // 1      i        l       r        n
  // // i 表示第一刀的位置，枚举第一刀的位置，计算第二刀的可选位置数
  // let n = nums.length;
  // let sum = [];
  // for (let i = 1; i <= n; i++) {
  //     sum[i] = sum[i - 1] + nums[i - 1];
  // }

  // let MOD = 1000000000 + 7;
  // let ans = 0;
  // // |______|________|_______|________|
  // // 1      i        l       r        n
  // // i 表示第一刀的位置，枚举第一刀的位置，计算第二刀的可选位置数
  // for (let i = 1, l = 2, r = 2; i <= n - 1; i++) {
  //     l = Math.max(l, i + 1);
  //     r = Math.max(r, i + 1);
  //     // sum(right) >= sum(mid)，r最大为n-1，right保证要有一个数
  //     while (r <= n - 1 && sum[n] - sum[r] >= sum[r] - sum[i]) {
  //         r++;
  //     }
  //     // sum(mid) >= sum(left)
  //     while (l <= n - 1 && sum[l] - sum[i] < sum[i]) {
  //         l++;
  //     }
  //     if (l <= r) {
  //         ans += r - l;
  //     }
  // }
  // // return (ans % MOD);
  // var total = ans;
  return total % (Math.pow(10,9) + 7);
};


var leftBound = function(left,right,nums,target){
  var mid;
  while(left<right){
    mid = left + Math.floor((right-left)/2);
    if(nums[mid]>=target){
      right = mid;
    }else{
      left = mid + 1;
    }
  }
  return left;
}

var rightBound = function(left,right,nums,target){
  var mid;
  while(left<right){
    mid = left + Math.floor((right-left)/2);
    if(nums[mid]>target){
      right = mid;
    }else{
      left = mid + 1;
    }
  }
  return left - 1;
}

// var waysToSplit = function(nums) {
//   // 二分查找法

// };

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
  {
    nums:[1,2,2,3,1,1,3,3,3,3,5,0],expect:14,
  },
  {
    nums:[1,2,2,2,3,1,1,1,1,1,1,1,1,3,3,3,5,0],expect:34,
  },
  {
    nums:[1,2,2,3,1,1,3,3,3,3,5,0],expect:14,
  },
  // {
  //   nums:(new Array(100000)).fill(0),expect:14,
  // },
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