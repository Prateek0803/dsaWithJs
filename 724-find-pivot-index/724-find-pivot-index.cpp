class Solution {
public:
    int pivotIndex(vector<int>& nums) {
        int n = nums.size();
        vector<int>prefix(n),postfix(n);
        
        prefix[0] = 0;
        postfix[n-1] = 0;
        
        for(int i=1;i<n;i++){
            prefix[i] = prefix[i-1] + nums[i-1];
        }
        
        for(int i=n-2;i>=0;i--){
            postfix[i] = postfix[i+1] + nums[i+1];
        }
        
        
        for(int i=0;i<n;i++){
            if(prefix[i] == postfix[i]){
                return i;
            }
        }
        return -1;
    }
};