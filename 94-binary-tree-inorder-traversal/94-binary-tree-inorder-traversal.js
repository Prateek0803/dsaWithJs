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

const inorderHelper = (node,arr) => {
    if(!node){
        return []
    }
    
    inorderHelper(node.left,arr);
    arr.push(node.val)
    inorderHelper(node.right,arr);
    
    return arr
}

const inorderTraversal = (root) => {
    
    let arr = inorderHelper(root,[]);
    return arr
};