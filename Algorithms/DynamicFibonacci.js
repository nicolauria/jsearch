
// const memo = [];

const fibonacci1 = (n, memo) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (memo[n]) return memo[n];

  memo[n] = fibonacci1(n - 1, memo) + fibonacci1(n - 2, memo);
  return memo[n];
}

const fibonacci2 = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci2(n - 1) + fibonacci2(n - 2);
}

console.log(fibonacci1(40, []));
console.log(fibonacci2(40));
