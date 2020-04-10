var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;
    var profits = 0;
    for (let i = 1; i<prices.length; i++) {
        if ((prices[i]-prices[i-1]) > 0) {
            profits += prices[i] - prices[i - 1];
        }
    }
    return profits;
};
