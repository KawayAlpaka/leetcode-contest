/**
 * @param {number[]} nums 升序数组
 * @param {number} target 目标数字
 * @param {string} type 查询类型：=:等于的target的下标；[:查找第一个target的下标；]:最后一个target的下标；(:小于target的第一个；):大于target的第一个；
 * @return {number} 返回查找到的下标，没有找到返回-1
 */
let binarySearch = function(nums,target,type="="){
  let left = 0;
  let right = nums.length;
  do{
    let mid = left + Math.floor((right-left)/2);
    // console.log("s:",left,mid,right);
    // console.log("v:",nums[left],nums[mid],nums[right]);
    if(nums[mid] == target){
        if(type == "="){
          return mid;
        }
        if(type == "[" || type == "("){
          right = mid;
        }
        if(type == "]" || type == ")"){
          left = mid + 1;
        }
    }else if(nums[mid] > target){
        right = mid;
    }else if(nums[mid] < target){
        left = mid + 1;
    }
    // console.log("e:",left,mid,right);
  }while(left<right);
  switch(type){
    case "=": return -1;
    case "[": return nums[left] == target ? left : -1;
    case "]": return nums[left-1] == target ? left-1 : -1;
    case "(": return left -1;
    case ")": return nums[left] > target ? left : -1;
    default: return -1;
  }
};


var testCases = [
  {
    nums :[],target:1,type:"=",expect:-1,
  },
  {
    nums :[1],target:1,type:"=",expect:0,
  },
  {
    nums :[5,6,7,8,9,10],target:8,type:"=",expect:3,
  },
  {
    nums :[5,7,7,8,8,10],target:8,type:"[",expect:3,
  },
  {
    nums :[8,8,10],target:8,type:"[",expect:0,
  },
  {
    nums :[8,8],target:8,type:"[",expect:0,
  },
  {
    nums :[7],target:8,type:"[",expect:-1,
  },
  {
    nums :[],target:8,type:"[",expect:-1,
  },
  {
    nums :[5,7,7,8,8,10],target:8,type:"]",expect:4,
  },
  {
    nums :[5,7,7,8,8],target:8,type:"]",expect:4,
  },
  {
    nums :[7],target:8,type:"]",expect:-1,
  },
  {
    nums :[0],target:8,type:"]",expect:-1,
  },
  {
    nums :[],target:8,type:"]",expect:-1,
  },
  {
    nums :[5,7,7,8,8,10],target:8,type:"(",expect:2,
  },
  {
    nums :[8,8,10],target:8,type:"(",expect:-1,
  },
  {
    nums :[7],target:8,type:"(",expect:0,
  },
  {
    nums :[8],target:8,type:"(",expect:-1,
  },
  {
    nums :[],target:8,type:"(",expect:-1,
  },
  {
    nums :[3,5,8,10],target:15,type:"(",expect:3,
  },
  {
    nums :[5,7,7,8,8,10],target:8,type:")",expect:5,
  },
  {
    nums :[5,7,7,8,8],target:8,type:")",expect:-1,
  },
  {
    nums :[9],target:8,type:")",expect:0,
  },
  {
    nums :[],target:8,type:")",expect:-1,
  },
  {
    nums :[3,5,8,10],target:15,type:")",expect:-1,
  },
];

var runTest = function(cases){
  for(let i=0;i<cases.length;i++){
    let c = cases[i];
    let result = binarySearch(c.nums,c.target,c.type);
    if(result == c.expect){
      console.log(`${i}:pass`);
    }else{
      console.log(`${i}:fail nums:${JSON.stringify(c.nums)},target:${c.target},type:${c.type},result:${result},but expect:${c.expect}`);
    }
  }
}

runTest(testCases);
