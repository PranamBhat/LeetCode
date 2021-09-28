class Solution {
public:
    int deleteAndEarn(vector<int>& nums) {
        
int nums_top = nums.size();
if(nums_top == 0)
return 0;
else if(nums_top == 1)
return nums[0];

int dp[20005] = {0};
int maxn = -1;
for(int i=0; i<nums_top; i++){
dp[nums[i]] += nums[i];
if(nums[i] > maxn)
maxn = nums[i];
}
dp[1] = max(dp[0],dp[1]);
for(int i=2; i<=maxn; i++)
dp[i] = max(dp[i-2]+dp[i],dp[i-1]);
        
return dp[maxn];
}
    

};
