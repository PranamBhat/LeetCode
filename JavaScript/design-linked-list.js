/**
 * Initialize your data structure here.
 */

var Node = function(val) {
    this.val = val
    this.next = null
}

var MyLinkedList = function() {
    this.head = null
    this.size = 0
    this.tail = null
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */

MyLinkedList.prototype.get = function(index) {
    if(this.size == 0 || index >= this.size || index < 0) return -1
    
    let node = this.head
    while(index > 0){
        node = node.next
        index--
    }
    return node.val
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */

MyLinkedList.prototype.addAtHead = function(val) {
    let node = new Node(val)
    node.next = this.head
    if(!this.head) this.tail = node
    this.head = node
    this.size++
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */

MyLinkedList.prototype.addAtTail = function(val) {
    let node = new Node(val)
    
    if(!this.head) {
        this.head = node
        this.tail = node
    }
    else {
        this.tail.next = node
        this.tail = node
    }
    this.size++
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */

MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.size) return
    if(index == this.size) return this.addAtTail(val)
    if(index <=0 ) return this.addAtHead(val)
    
    let node = new Node(val)
    let preNode = this.head
    while(index>1) {
        preNode = preNode.next
        index--
    }
    node.next = preNode.next
    preNode.next = node
    this.size++
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */

MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index >= this.size || index < 0) return
    if(index == 0) this.head = this.head.next
    else { 
        let preNode = this.head
        while(index>1){
            preNode = preNode.next
            index--
        }
        preNode.next = preNode.next.next ?  preNode.next.next : null
        if(!preNode.next) this.tail = preNode 
    }
    this.size--
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
