var isBalanced = function(root) {
    try{
        traverse(root,0)
    }catch(e){
        return false
    }
    
    return true;
};


const traverse = (node,depth) =>{
    if(!node) return depth;
    
    let left  = traverse(node.left, depth + 1)
    let right = traverse(node.right, depth + 1)
    
    if(Math.abs(left-right) > 1) throw "Not Balanced"
    
    return Math.max(left,right)
}