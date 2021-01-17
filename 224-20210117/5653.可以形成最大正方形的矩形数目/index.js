/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
  let preMaxMin = 0;
  let res = 1;
  for(let rectangle of rectangles){
    let maxMin = Math.min(rectangle[0],rectangle[1]);
    if(maxMin > preMaxMin){
      preMaxMin = maxMin;
      res=1;
    }else if(maxMin==preMaxMin){
      console.log(maxMin);
      res++;
    }
    
  }
  return res;
};


var testCases = [
  {
    rectangles :[[5,8],[3,9],[5,12],[16,5]],expect:3,
  },
  {
    rectangles :[[2,3],[3,7],[4,3],[3,7]],expect:3,
  },
];

var runTest = function(cases){
  for(let i=0;i<cases.length;i++){
    let c = cases[i];
    let result = countGoodRectangles(c.rectangles);
    if(result == c.expect){
      console.log(`${i}:pass`);
    }else{
      console.log(`${i}:fail。。nums:${c.rectangles},result:${result},but expect:${c.expect}`);
    }
  }
}

runTest(testCases);