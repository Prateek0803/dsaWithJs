/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    const ans = new Array(nums.length).fill(0)
    
    let ansIdx = ans.length - 1;
    
    let i = 0, j = nums.length-1
    
    while(ansIdx > -1){
        if(Math.abs(nums[i]) > Math.abs(nums[j])){
            ans[ansIdx] = nums[i] * nums[i]
            i++
            ansIdx --
        }else if(Math.abs(nums[i] === Math.abs(nums[j]))){
            ans[ansIdx] = nums[i] * nums[i]
            i++
            j--
            ansIdx--
        }else{
            ans[ansIdx] = nums[j] * nums[j]
            j--
            ansIdx--
        }
    }
    return ans
    
};