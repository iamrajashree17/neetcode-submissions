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

        let firstHalf = head;
        let secondHalf = this.reverse(slow.next);
        slow.next = null;

        while (secondHalf) {
            let temp = firstHalf.next;
            firstHalf.next = secondHalf;
            firstHalf = temp;

            temp = secondHalf.next;
            secondHalf.next = firstHalf;
            secondHalf = temp;
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
