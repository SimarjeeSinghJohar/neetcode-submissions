
/**
 * const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
 */
class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let count = new Map();
        let q = new Queue();
        let time = 0
        for(let i  = 0; i < tasks.length; i++){
            if(!count.has(tasks[i])){
                count.set(tasks[i], 0)
            }
            count.set(tasks[i], count.get(tasks[i]) + 1);
        }

        let maxHeap = new MaxPriorityQueue();
        for(let val of count.values()){
            maxHeap.enqueue(val);
        }

        while(maxHeap.size() > 0 || q.size() > 0){
            time++
            if(maxHeap.size() > 0){
                let task = maxHeap.dequeue();
                let cnt = task -1;
                if(cnt !== 0){
                    q.push([cnt, time + n]);
                }
            }
            
            
            if(q.size() > 0 && q.front()[1] === time){
                maxHeap.push(q.pop()[0])
            }
            
        }
        return time;

    }
}
