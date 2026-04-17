class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i = 0;
        let j = 1;
        let max = 0;
        while(i < prices.length){
            if(prices[i] < prices[j]){
                let profit = prices[j] - prices[i];
                max = Math.max(profit,max);
            }else{
                i = j;
            }
            j++;
        }

        return max;
    }
}
