/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode()
        let cur = dummy;
        let carry = 0;
        while(l1 || l2 || carry){
            let val1 = l1 ? l1.val : 0;
            let val2 = l2 ? l2.val : 0;

            let val = val1 + val2  + carry;
            carry = Math.floor(val / 10)
            val = val % 10;
            cur.next = new ListNode(val);
            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
            cur = cur.next

        }
        return dummy.next;
    }
}
