/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 2022.1.6 second

var mergeTwoLists = function(l1, l2) {
    let newList = head = new ListNode(0);
    while( l1 && l2) {
        if(l1.val > l2.val) {
            newList.next = l2;
            l2 = l2.next;
        } else {
            newList.next = l1;
            l1 = l1.next;
        }
        newList = newList.next
    }
    newList.next = l1 ? l1 : l2;
    return head.next;
};