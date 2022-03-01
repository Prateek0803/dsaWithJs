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

const postorderHelper = (node,arr) =>{
    if(!node){
        return []
    }
    
    postorderHelper(node.left,  arr)
    postorderHelper(node.right, arr)
    arr.push(node.val)
    
    return arr
}

const postorderTraversal = (root) => {
    let arr = postorderHelper(root,[])
    return arr
};