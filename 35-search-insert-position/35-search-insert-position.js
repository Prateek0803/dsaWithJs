/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let min =0;
let max = nums.length - 1;
let pivot = 0;

    while(min <= max){
        pivot = Math.trunc((max-min)/2) + min;
        
        if(nums[pivot] === target) return pivot;
        
        if(nums[pivot]<target)
            min = pivot+1;
        else
            max = pivot-1;
    }
    return min
};