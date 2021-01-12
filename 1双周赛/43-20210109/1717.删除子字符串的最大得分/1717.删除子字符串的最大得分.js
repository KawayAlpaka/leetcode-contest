/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
  var ss = s.split(/[c-z]+/);
  // console.log(ss);
  var sum = 0;
  var aChar = "a";
  if(y>x){
    aChar = "b";
  }
  for(let i=0;i<ss.length;i++){
    if(aChar == "a"){
      sum += _maxGain(ss[i], x, y,aChar);
    }else{
      sum += _maxGain(ss[i], y, x,aChar);
    }
    
  }
  return sum;
};

var _maxGain = function(s, x, y,aChar){
  //假设 x >= y
  var _s = s;
  var a_count = 0;
  // var a_index_total = 0;
  var b_count = 0;
  // var b_index_total = 0;
  var gain = 0;

  // 消除 a
  for(let i =0;i<_s.length;i++){
    if(_s[i] == aChar){
      a_count++;
      // a_index_total += i;
      continue;
    }
    if(a_count>0){
      a_count--;
      gain += x;
    }else{
      b_count++;
      // b_index_total += i;
    }
  }
  // 消除 b
  gain += Math.min(a_count,b_count) * y;
  return gain;
}

var testCases = [
  {
    s:"aab",x:5,y:4,expect:5,
  },
  {
    s:"bababa",x:5,y:4,expect:14,
  },
  {
    s:"aababb",x:5,y:4,expect:15,
  },
  {
    s:"aababb",x:4,y:5,expect:13,
  },
  {
    s:"ababa",x:10,y:1,expect:20,
  },
  {
    s:"babbab",x:5,y:4,expect:10,
  },
  {
    s:"babbcccab",x:5,y:4,expect:10,
  },
];

var runTest = function(cases){
  for(let i=0;i<cases.length;i++){
    let c = cases[i];
    let result = maximumGain(c.s,c.x,c.y);
    if(result == c.expect){
      console.log(`${i}:pass`);
    }else{
      console.log(`${i}:fail。。s:${c.s},x:${c.x},y:${c.y},result:${result},but expect:${c.expect}`);
    }
  }
}

runTest(testCases);