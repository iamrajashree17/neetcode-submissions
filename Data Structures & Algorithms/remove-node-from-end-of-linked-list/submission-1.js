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
        let total = 0;
        let curr = head;
        while (curr) {
            total++;
            curr = curr.next;
        }
        const removeIndex = total - n;
        if (removeIndex === 0) return head.next;

        curr = head;
        for(let i = 0; i < total - 1; i++) {
            if (i + 1 === removeIndex) {
                curr.next = curr.next.next;
                break;
            }
            curr = curr.next;
        }
        return head;
    }
}
