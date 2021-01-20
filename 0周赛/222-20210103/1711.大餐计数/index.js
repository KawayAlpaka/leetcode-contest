/**
 * @param {number[]} deliciousness
 * @return {number}
 */
var countPairs = function(deliciousness) {
  var map = {};
  var sum = 0;
  var haveCalc = {};
  var ni2s = [];
  var initni2 = 1;
  for(let i=1;i<25;i++){
    ni2s.push(initni2);
    initni2 *= 2;
  }
  console.log(ni2s);
  for(let i=0;i<deliciousness.length;i++){
    if(!map[deliciousness[i]]){
      map[deliciousness[i]] = 1;
    }else{
      map[deliciousness[i]]++;
    }
  }
  // console.log(map);
  // console.log(Object.keys(map).length );

  for(let k in map){
    // console.log(i);
    let num = parseInt(k);
    for(let j =0;j<ni2s.length;j++){
      let ni2 = ni2s[j];
      let other_num;
      if(ni2 >= num){
        other_num = ni2 - num;
      }
      if(other_num && other_num>=0 && map[other_num]){
        let min = Math.min(num,other_num);
        let max = Math.max(num,other_num);
        let key = `${min}-${max}`;
        if(haveCalc[key]){
          continue;
        }
        let he = 0;
        if(other_num == num){
          he = zuhe(2,map[num]);
        }else{
          he = map[other_num] * map[num];
        }
        sum += he;
        // console.log(num,other_num,he,sum);
        haveCalc[key] = true;
      }
    }
  }
  return sum % (Math.pow(10,9) + 7);
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
    deliciousness:[1,3,5,7,9],expect:4,
  },
  {
    deliciousness:[1,1,1,3,3,3,7],expect:15,
  },
  {
    deliciousness:[149,107,1,63,0,1,6867,1325,5611,2581,39,89,46,18,12,20,22,234],expect:12,
  },
  {
    deliciousness:[64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64],expect:528,
  },
  {
    deliciousness:[1048576,1048576],expect:1,
  },
];

var runTest = function(cases){
  for(let i=0;i<cases.length;i++){
    let c = cases[i];
    let result = countPairs(c.deliciousness);
    if(result == c.expect){
      console.log(`${i}:pass`);
    }else{
      console.log(`${i}:fail。。nums:${c.deliciousness},result:${result},but expect:${c.expect}`);
    }
  }
}

runTest(testCases);
