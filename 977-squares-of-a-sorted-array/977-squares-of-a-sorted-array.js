/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const arr   =  new Array(nums.length).fill(0)
    let arrIdx  =  arr.length - 1;
    
    let left    = 0;
    let right   = nums.length - 1;
    
    while(arrIdx > -1){
        if( Math.abs(nums[left]) > Math.abs(nums[right]) ){
            arr[arrIdx] = nums[left] * nums[left]
            
            left++
            arrIdx--
        }else{
            
            arr[arrIdx] = nums[right] * nums[right];
            right--
            arrIdx--
        }
    }
    return arr;
};