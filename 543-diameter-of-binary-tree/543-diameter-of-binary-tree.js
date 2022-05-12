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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {    
    
    let maxPath = 0;
    
    const traverse = (node) =>{
         
        if(!node) return 0;
    
        let leftCount   =  traverse(node.left)
        let rightCount  =  traverse(node.right)
        
        maxPath = Math.max(maxPath, leftCount + rightCount)
        
        return Math.max(leftCount,rightCount) + 1;
    }
    
    traverse(root)
    return maxPath
    
    
};