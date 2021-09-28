/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

var removeElements = function(head, val) {
    if(head === null) return head;
    let current = head;
    
    while(current !== null) {
       
       if(current.next !== null && current.next.val === val) {
        		  current.next = current.next.next;  
       } else {
        current = current.next;
       }
    }
    
    if(head.val === val){
    	return head.next
    }else{
    	return head;
    }
};
