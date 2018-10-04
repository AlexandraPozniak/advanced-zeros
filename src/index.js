module.exports = function getZerosCount(number, base) {
let ans = Number.MAX_VALUE;
for (var i = 2; i <= base; i++) {
  if (base%i === 0) {
    let cnt_k1 = 0;
    while (base%i === 0) {
      cnt_k1++;
      base = base / i;
    }
    let cnt_k2 = 0;
    let z = Math.floor(number/i);
    while (z>0) {
      cnt_k2 += z;
      z = Math.floor(z / i);

    }
    ans = Math.min(ans, Math.floor((cnt_k2)/(cnt_k1)));
  }
  }
  return (ans);
}
