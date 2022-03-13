/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let min = 0,max = nums.length-1;
    let pivot;
    
    while(min <= max){
        pivot = min + Math.floor((max-min)/2);
        
        if(nums[pivot] === target) return pivot
        
        if(nums[pivot] > target) max = pivot-1
        else{
            min = pivot+1;
        }
    }
    return min;
};