var maxProfit = function (prices) {
  let i = 0;
  let profit = 0;
  let count = 0;
  for (let j = 1; j < prices.length; j++) {
    if (prices[i] < prices[j]) {
      count = prices[j] - prices[i];
      if (count > profit) {
        profit = count;
      }
    } else {
      i=j;
    }
  }
  return profit;
};
console.log(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9]));
