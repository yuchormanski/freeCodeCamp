function checkSign(num) {
  return num > 0 ? 'positive' : num === 0 ? 'zero' : num < 0 ? 'negative' : null;
}
console.log(checkSign(10));