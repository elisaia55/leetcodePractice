class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # space : O(1)
        # time: O(n)

        left, right = 0, 1 #left = buying, right = selling
        max_profit = 0

        while right < len(prices):
            if prices[left] < prices[right]:
                profit = prices[right] - prices[left]
                max_profit = max(max_profit, profit)
            else:
                left = right
            right += 1
        return max_profit