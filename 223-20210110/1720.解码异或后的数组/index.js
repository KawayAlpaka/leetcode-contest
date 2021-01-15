/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
  // 关键是要明白异或运算的规则
  // decoded[i] ^ decoded[i+1] = encoded[i]
  // decoded[i+1] = encoded[i] ^ decoded[i]
  var decoded = [first];
  for(let i=0;i<encoded.length;i++){
      decoded[i+1] = encoded[i] ^ decoded[i];
  }
  console.log(decoded);
  return decoded;
};
