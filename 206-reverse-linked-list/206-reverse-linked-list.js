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
   let currNode  = head;
    let nextNode = null;
    let prevNode = null;
    
    while(currNode){
        nextNode = currNode.next;
        currNode.next = prevNode
        prevNode = currNode
        currNode = nextNode;
    }
    
    return prevNode
};