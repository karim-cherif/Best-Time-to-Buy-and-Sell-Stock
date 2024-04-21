function calculateProfit() {
  const k = parseInt(document.getElementById("k").value);
  const pricesInput = document.getElementById("prices").value;
  const prices = pricesInput.split(",").map((price) => parseInt(price.trim()));

  const n = prices.length;
  if (n <= 1) {
    document.getElementById("result").textContent =
      "Insufficient stock prices provided.";
    return;
  }

  const dp = Array.from({ length: k + 1 }, () => new Array(n).fill(0));

  for (let i = 1; i <= k; i++) {
    let maxDiff = -prices[0];
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.max(dp[i][j - 1], prices[j] + maxDiff);
      maxDiff = Math.max(maxDiff, dp[i - 1][j] - prices[j]);
    }
  }

  document.getElementById("result").textContent =
    "Maximum profit: " + dp[k][n - 1];
}
