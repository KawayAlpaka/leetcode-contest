/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

  if(nums2.length < nums1.length){
    let _nums = nums2;
    nums2 = nums1;
    nums1 = _nums;
  }

  let len1 = nums1.length;
  let len2 = nums2.length;
  let total = len1 + len2;
  if(total == 1){
    if(len1){
      return nums1[0];
    }else{
      return nums2[0];
    }
  }

  let leftLen = Math.ceil((len1 + len2) / 2);
  let rightLen = len1 + len2 - leftLen;

  // let left1 = Math.floor((len1 + len2) / 2);
  let left1 = 0;
  let left2 = leftLen - left1;

  let right1 = len1;
  let right2 = len2;
  // debugger;
  do{
    let mid1 = left1 + Math.floor( ( right1 - left1 ) / 2 );
    let mid2 = leftLen - mid1;
    let leftMax1 = nums1[mid1-1];
    let leftMax2 = nums2[mid2-1];
    let rightMin1 = nums1[mid1];
    let rightMin2 = nums2[mid2];
    if(
      ( (leftMax1 == undefined && rightMin2 == undefined) ||  leftMax1 <= rightMin2) 
      && ((leftMax2 == undefined && rightMin1 == undefined) ||  leftMax2 <= rightMin1 ) 
      ){
      left1 = mid1;
      break;
    }else if(leftMax1 > rightMin2){
      right1 = mid1;
    }else if(leftMax2 > rightMin1){
      left1 = mid1 + 1;
    }else{
      console.error("error");
      break;
    }
  }while(left1<right1);
  left2 = leftLen - left1;
  if((total) % 2 == 0){
    let maxLefts = [];
    let minRights = [];
    if(left1-1>=0) maxLefts.push(nums1[left1-1]);
    if(left2-1>=0) maxLefts.push(nums2[left2-1]);
    if(left1<len1) minRights.push(nums1[left1]);
    if(left2<len2) minRights.push(nums2[left2]);

    return (Math.max(...maxLefts) + Math.min(...minRights) ) / 2;
  }else{
    let maxLefts = [];
    if(left1-1>=0) maxLefts.push(nums1[left1-1]);
    if(left2-1>=0) maxLefts.push(nums2[left2-1]);
    return Math.max(...maxLefts);
  }
  
  
};


var testCases = [
  {
    nums1 :[1,3],nums2:[2,4,5],expect:3,
  },
  {
    nums1 :[1,3],nums2:[2],expect:2,
  },
  {
    nums1 :[1,2],nums2:[3,4],expect:2.5,
  },
  {
    nums1 :[3,4],nums2:[1,2],expect:2.5,
  },
  {
    nums1 :[3,4,5],nums2:[1,2],expect:3,
  },
  {
    nums1 :[1,4,5],nums2:[2,3],expect:3,
  },
  {
    nums1 :[0,0],nums2:[0,0],expect:0,
  },
  {
    nums1 :[],nums2:[1],expect:1,
  },
  {
    nums1 :[1],nums2:[],expect:1,
  },
  {
    nums1 :[2],nums2:[],expect:2,
  },
  {
    nums1 :[2],nums2:[1],expect:1.5,
  },
];

var runTest = function(cases){
  for(let i=0;i<cases.length;i++){
    let c = cases[i];
    let result = findMedianSortedArrays(c.nums1,c.nums2);
    if(result == c.expect){
      console.log(`${i}:pass`);
    }else{
      console.log(`${i}:fail nums:${JSON.stringify(c.nums1)},nums:${JSON.stringify(c.nums2)},result:${result},but expect:${c.expect}`);
    }
  }
}

runTest(testCases);