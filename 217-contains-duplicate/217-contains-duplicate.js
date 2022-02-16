/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    let hash = {}
    
    for(let num of nums){
        
        if(!hash[num]) hash[num] = 1;
        else return true;
    }
    return false;
};