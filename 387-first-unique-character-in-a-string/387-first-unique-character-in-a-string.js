/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let tempArr = new Array(26).fill(0)
    
    for(let i=0;i<s.length;i++){
        tempArr[s.charCodeAt(i) - 97]++;
    }
    
    for(let i=0;i<s.length;i++){
        if(tempArr[s.charCodeAt(i) - 97] === 1){
            return i
        }
    }
    return -1
};