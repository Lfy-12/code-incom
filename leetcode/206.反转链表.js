/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // while(head.next) {
    //     let h = head;
    //     head = head.next;
    //     head.next = h;
    // }
    // return head

    let prev = null;
    while(head) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
};
// @lc code=end

