/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let count = 1
    let max = 1
    
    for(let i=1;i<nums.length;i++){
       count =  nums[i] > nums[i-1] ? count + 1 : 1
        
        max = Math.max(count,max)
    }
    return max
};