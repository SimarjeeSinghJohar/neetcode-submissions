class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i = 0;
        let j = 1;
        let maxP = 0
        while(j < prices.length){
            if(prices[i] < prices[j]){
                let profit = prices[j] - prices[i];
                maxP = Math.max(maxP,profit);
            }else{
                i=j
            }
            j++;


        }
        return maxP;
    }
}
