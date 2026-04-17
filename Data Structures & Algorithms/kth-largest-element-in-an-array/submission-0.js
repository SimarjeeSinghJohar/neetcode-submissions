/**
 * const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
 */

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let maxHeap = new MaxPriorityQueue()
        for(let i = 0; i < nums.length; i++){
            let num = nums[i]
            maxHeap.enqueue(num);
        }

        while(!maxHeap.isEmpty()){
           let val = maxHeap.dequeue();
           if(maxHeap.size() === nums.length - k){
            return val;
           }
        }
    }
}
