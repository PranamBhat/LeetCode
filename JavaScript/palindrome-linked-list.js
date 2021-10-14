/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function (head) {
    
    // Store all values from the linked list in an array
    
    let valuesFound = [];
    while (head) {
        valuesFound.push(head.val);
        head = head.next;
    }

    // Check if the list of values are a palindrome
    
    let left = 0;
    let right = valuesFound.length - 1;
    while (left <= right) {
        if (valuesFound[left] !== valuesFound[right]) {
            return false;
        }
        left++, right--;
    }

    return true;
    
};
