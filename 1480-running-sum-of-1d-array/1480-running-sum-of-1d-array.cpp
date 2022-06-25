class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        int runningSum = nums[0];
        int currSum = 0;
        vector<int>ans(nums.size());
        ans[0] = nums[0];
        
        for(int i=1;i<nums.size();i++){
            currSum = runningSum + nums[i];
            runningSum = currSum;
            ans[i] = currSum;
        }
        
        return ans;
    }
};