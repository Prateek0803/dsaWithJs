/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
     let map = {}
     
     for(let i=0;i<nums.length;i++){
         let num    = nums[i]
         let diff   = target-num         
         if(diff in map){
             return [map[diff], i]
         }else{
             map[nums[i]] = i
         }
     }
};