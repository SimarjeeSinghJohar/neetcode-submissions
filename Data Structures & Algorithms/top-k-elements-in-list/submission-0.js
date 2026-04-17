class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       let map = {}
    let arr = Array.from({length: nums.length+1}, ()=> []);
    for(const i of nums){
        map[i] = (map[i] || 0) + 1
    }

    for(const n in map){
    arr[map[n]].push(parseInt(n));
    }

    let reponse = [];
    for(let m = arr.length-1; m>0 ; m--){
        for(const j of arr[m]){
            reponse.push(j)
            if(reponse.length === k){
                return reponse;
            }
        }
    }
    }
}
