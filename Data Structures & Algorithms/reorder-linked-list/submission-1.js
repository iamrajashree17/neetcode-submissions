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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let first = head;
        let second = this.reverse(slow.next);
        slow.next = null;

        while(second) {
            let temp = first.next;
            first.next = second;
            first = temp;

            temp = second.next;
            second.next = first;
            second = temp;
        }
    }

    reverse(head) {
        let prev = null;
        while(head) {
            let next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        return prev;
    }
}
