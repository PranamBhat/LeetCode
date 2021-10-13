/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next && fast.next.next){
        slow = slow.next;
        
        /* Move fast pointer twice as fast as slow pointer and if there is a cycle, the fast will eventually meet slow at a node in the cycle but not necessarily the node that starts the cycle */
        
        fast = fast.next.next;
        
        // Once we determine there is a cycle we must find where the cycle starts
        
        if(slow === fast){
            
            // Move slow pointer to the head
            
            slow = head;
            
            // Move both fast and slow pointer one node at a time and they will meet at the node where the cycle starts
            
            while(slow !== fast){
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
};
