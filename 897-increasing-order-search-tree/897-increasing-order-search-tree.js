const inOrder = (node,arr) =>{
    if(!node) return 
    
    inOrder(node.left,arr)
    arr.push(node)
    node.left = null
    inOrder(node.right,arr)
    node.right = null
    return arr;
}
var increasingBST = function(root) {
    const arr = inOrder(root,[])
    
    for(let i=0; i+1<arr.length; i++){
        arr[i].right = arr[i+1]
    }
    
    return arr[0]
};