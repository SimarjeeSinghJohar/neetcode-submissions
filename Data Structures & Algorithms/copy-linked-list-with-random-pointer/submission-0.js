// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let oldToCopy = new Map();
        oldToCopy.set(null,null);
        let cur = head;
        while(cur){
            let copy = new Node(cur.val);
            oldToCopy.set(cur,copy);
            cur = cur.next;
        }
        cur = head;
        while(cur){
            let copy = oldToCopy.get(cur);
            copy.next = oldToCopy.get(cur.next);
            copy.random = oldToCopy.get(cur.random);
            cur = cur.next;
        }
        return oldToCopy.get(head)
    }
}
