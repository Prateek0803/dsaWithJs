/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let low = 0,high = nums.length-1
    
    let output = [-1,-1]
    
    while(low <= high){
        let mid = low + Math.floor((high-low)/2)
        
        if(nums[mid] > target) high = mid-1
        else if(nums[mid] < target) low = mid+1
        else{
            let i=mid,j=mid
            while(nums[i] === target){
                i--
            }
            output[0] = i+1
             while(nums[j] === target){
                j++
            }
            output[1] = j-1;
            
            return output
        }
    }
    return output
};