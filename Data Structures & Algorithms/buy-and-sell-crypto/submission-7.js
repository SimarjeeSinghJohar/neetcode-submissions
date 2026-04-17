class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let i = 0;
        let j = 1;
        while(i < prices.length){

            if(prices[i] < prices[j]){
                let profit = prices[j] - prices[i];
                maxProfit = Math.max(profit,maxProfit);
            }else {
                i = j
            }
            j++;

        }
        return maxProfit;
    }
}
