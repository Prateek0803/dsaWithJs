/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */


const preOrderHelper = (node,arr) =>{
    
    
    if(!node) {
        return []
    }
        arr.push(node.val)
     preOrderHelper(node.left,arr)
     preOrderHelper(node.right,arr)
    
    return arr
}

var preorderTraversal = function(root) {
   let ans =  preOrderHelper(root,[])
    return ans
};