/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var minCharacters = function(a, b) {
  if(a.length > b.length){
    let _c = a;
    a = b;
    b = _c;
  }
  var len1 = a.length;
  var len2 = b.length;
  var max_val_1 = "a";
  var max_val_2 = "a";
  var min_val_1 = "z";
  var min_val_2 = "z";
  var map1 = {};
  var map2 = {};
  for(let i =0;i<len1;i++){
    if(a[i] > max_val_1){
      max_val_1 = a[i];
    }
    if(a[i] < min_val_1){
      min_val_1 = a[i];
    }
    if(map1[a[i]]){
      map1[a[i]]++;
    }else{
      map1[a[i]] = 1;
    }
  }

  for(let i =0;i<len2;i++){
    if(b[i] > max_val_2){
      max_val_2 = b[i];
    }
    if(a[i] < min_val_2){
      min_val_2 = a[i];
    }
    if(map2[b[i]]){
      map2[b[i]]++;
    }else{
      map2[b[i]] = 1;
    }
  }
  var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  console.log(letters.length);
  console.log(map1);
  console.log(map2);
  // console.log(max_val_1);
  // console.log(max_val_2);
  // console.log(min_val_1);
  // console.log(min_val_2);
  var sortfn = (a,b)=>{
    if(a>b){
      return 1;
    }else{
      return -1;
    }
  };
  var keys1 = Object.keys(map1).sort(sortfn);
  var keys2 = Object.keys(map2).sort(sortfn);
  console.log(keys1);
  console.log(keys2);
  var r1 = 0;
  var r2 = 0;
  let left1 = 0;
  let right2 = keys2.length-1;
  let more1 = 0;
  let more2 = 0;
  debugger;
  while(left1<keys1.length && right2>=0){
    if(keys1[left1] > keys2[right2]){
      more1 += map1[keys1[left1]];
      more2 += map2[keys2[right2]];
      if(more1 > more2){
        r1 += more2;
        more1 += more1 - more2;
        right2--;
      }else{
        r2 += more1;
        more2 += more2 -more1;
        left1++;
      }
    }else{
      break;
    }
  }
  console.log(r1,r2);

  // for(let i =0;i<keys1.length;i++ ){
  //   for(let j =keys2.length-1;j>=0;j-- ){
  //     // 方案1
  //     if(keys1[i] > keys2[j]){
  //       r1 += Math.min(map1[keys1[i]],map2[keys1[j]]); 
  //     }
  //     if(keys1[j] > keys2[i]){
  //       r2 += Math.min(map1[keys1[j]],map2[keys2[i]]); 
  //     }
  //   }
  // }
  console.log(r1,r2);

  // var r1 = 0;
  // var more1 = 0;
  // var more2 = 0;
  // var moreMap = {};

  // for(let c of letters){
  //   moreMap[c] = {
  //     a:more1,
  //     b:more2
  //   };
  //   if(map1[c]){
  //     more1 += map1[c];
  //   }
  //   if(map2[c]){
  //     more2 += map2[c];
  //   }
  // }
  // console.log(moreMap);

  // // 方案1
  // var r1 = 0;
  // if(min_val_2 == "a"){
  //   r1 = 10000000;
  //   // r1 无解
  // }else{
  //   for(let k in map1){
  //     if(k > min_val_2){
  //       r1 += map1[k];
  //     }
  //   }
  // }
  // console.log("r1:",r1);

  // // 方案2
  // var r2 = 0;
  // if(min_val_1 == "a"){
  //   r2 = 10000000;
  //   // r2 无解
  // }else{
  //   for(let k in map2){
  //     if(k > min_val_1){
  //       r2 += map2[k];
  //     }
  //   }
  // }
  // console.log("r2:",r2);

  return 0;
};


var testCases = [
  {
    a :"aba",b:"caa",expect:2,
  },
  {
    a :"aba",b:"cca",expect:2,
  },
  {
    a :"dabadd",b:"cda",expect:3,
  },
  {
    a :"dabaddd",b:"cda",expect:3,
  },

];

var runTest = function(cases){
  for(let i=0;i<cases.length;i++){
    let c = cases[i];
    let result = minCharacters(c.a,c.b);
    if(result == c.expect){
      console.log(`${i}:pass`);
    }else{
      console.log(`${i}:fail a:${JSON.stringify(c.a)},b:${JSON.stringify(c.b)},result:${result},but expect:${c.expect}`);
    }
  }
}

runTest(testCases);