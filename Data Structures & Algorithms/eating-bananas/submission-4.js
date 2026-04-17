class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let r = Math.max(...piles);
        let l  = 1;
        let res  = r;
        while(l <= r){
            let k = Math.floor((l+r)/2);
            let totalTime = 0;

            for(let i of piles){
                totalTime += Math.ceil(i/k);
            }
            
            if(totalTime <= h){
                res = k;
                r = k -1;
            }else {
                l = k + 1; 
            }

        }
        return res
     
    }
}
