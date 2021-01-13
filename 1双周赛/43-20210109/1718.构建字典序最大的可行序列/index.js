/**
 * @param {number} n
 * @return {number[]}
 * 
 */
var _constructDistancedSequence = function(n) {
  // 这个是非贪心算法，只找到了解，但没找到最大解
  var maxLen = 2*(n-1)+1;
  var arr = new Array(maxLen);
  var testInsert = function(arr,num){
    console.log(arr);
    if(num<=1){
      return arr;
    }
    var _arr = arr.slice();
    for(let i=0;i+num<maxLen;i++){
      if(!_arr[i] && !_arr[i+num]){
        _arr[i] = num;
        _arr[i+num] = num;
        var rArr = testInsert(_arr,num-1);
        if(rArr){
          return rArr;
        }
        _arr[i] = undefined;
        _arr[i+num] = undefined;
      }
    }
    return false;
  }
  var r = testInsert(arr,n);
  if(r){
    for(let i=0;i<r.length;i++){
      if(!r[i]){
        r[i] = 1;
        break;
      }
    }
  }
  console.log(r);
  return r;
};


/**
 * @param {number} n
 * @return {number[]}
 * 
 */
var constructDistancedSequence = function(n){
  var maxLen = 2*(n-1)+1;
  var arr = new Array(maxLen);
  var testInsert = function(arr,index,num){
    console.log(index,arr);
    if(index >= maxLen){
      return arr;
    }
    var _arr = arr.slice();
    var rArr = null;
    if(_arr[index]){ 
      rArr = testInsert(_arr,index+1,n);
      if(rArr){
        return rArr;
      }
    }
    for(;num>0;num--){
      if(_arr.includes(num)){ continue; }
      if(num == 1){
        if(!_arr[index]){
          _arr[index] = num;
          rArr = testInsert(_arr,index+1,n);
          if(rArr){
            return rArr;
          }
        }
      }else if(index+num < maxLen){
        if(!_arr[index] && !_arr[index+num]){
          _arr[index] = num;
          _arr[index+num] = num;
          rArr = testInsert(_arr,index+1,n);
          if(rArr){
            return rArr;
          }
          _arr[index] = undefined;
          _arr[index+num] = undefined;
        }
      } 
    }
    return false;
  }
  var r = testInsert(arr,0,n);
  console.log(r);
  return r;
}

// constructDistancedSequence(3);
console.log(constructDistancedSequence(5));

