/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
  var zhou_count = Math.floor(n / 7);
  var last_zhou_day = n % 7;
  var jie = function(n){
      var sum = 0;
      for(let i=1;i<=n;i++){
          sum += i;
      }
      return sum;
  }
  var zhou_total = 0;
  zhou_total = zhou_count * 21;
  zhou_total += jie(zhou_count) * 7;

  zhou_total += jie(last_zhou_day) + last_zhou_day * zhou_count;
  console.log(zhou_count);
   return zhou_total;
};