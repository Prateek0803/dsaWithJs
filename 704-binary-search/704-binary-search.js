/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    let low     = 0;
    let high    = nums.length -1;
    let mid;
    
    while(low <= high){
         mid = low + Math.floor((high-low)/2)
        console.log(nums[mid])
        if(nums[mid] === target) return mid;
        
        if(target < nums[mid]) high = mid-1;
        else{
            low = mid+1;
        }
    }
    return -1;
};