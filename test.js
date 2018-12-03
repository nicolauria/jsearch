function repeatedString(s, n) {
    let aCount = s.split('').filter(el => el === 'a').length;
    let times = Math.floor(n / s.length);

    let total = aCount * times;
    let remainder = s.slice(0, n % s.length);
    let remainingACount = remainder.split('').filter(el => el === 'a').length;

    return total + remainingACount;
}

console.log(
  repeatedString('a', 1000000000000)
)
