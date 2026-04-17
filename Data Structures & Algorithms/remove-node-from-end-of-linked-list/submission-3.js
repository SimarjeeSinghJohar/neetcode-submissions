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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0,head);

        let first = dummy;
        let second = head;

        while(n > 0){
            second = second.next;
            n--;
        }
        while(second){
            first = first.next;
            second = second.next;
        }
        first.next = first.next.next;
        return dummy.next;

    }
}
