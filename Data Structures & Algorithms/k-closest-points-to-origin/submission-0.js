/**
 * const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
 */
class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const pq = new MaxPriorityQueue((item) => item.dist);

        for (const point of points) {
            const dist = point[0] * point[0] + point[1] * point[1];
            pq.enqueue({ point, dist });

            if (pq.size() > k) {
                pq.dequeue();
            }
        }

        const res = [];
        while (!pq.isEmpty()) {
            res.push(pq.dequeue().point);
        }

        return res;
    
    }
}
