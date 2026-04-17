
/**
 * const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
 */
class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new MaxPriorityQueue();

        for(const stone of stones){
            maxHeap.enqueue(stone);
        }

       while(maxHeap.size() > 1) {

        let max1 = maxHeap.dequeue();
        let max2 = maxHeap.dequeue();

        if(max1 !== max2){
            let newWeight = max1 - max2;
            maxHeap.enqueue(newWeight)
        }

       }
        return maxHeap.size() === 1 ? maxHeap.dequeue() : 0;

    }
}
