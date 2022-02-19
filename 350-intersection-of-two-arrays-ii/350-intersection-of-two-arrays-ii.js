/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
    let map1 = {}
    
    nums1.forEach(num =>{
        if(!map1[num]) map1[num] = 0
        map1[num] += 1;
    })
    
    const ans = []
    
    nums2.forEach(num =>{
        if(map1[num] > 0){
            map1[num] -=1
            ans.push(num)
        }
    })
    
    return ans;
};