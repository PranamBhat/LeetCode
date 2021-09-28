class Solution {
public:
    int jump(vector<int>& nums) {

    int n=nums.size();
    if(n==1) return 0;
    int max_reach=nums[0],step=nums[0],jump=1;
    for(int i=1;i<n-1;i++){
        max_reach=max(max_reach,i+nums[i]);
        step--;
        if(step<0) return -1;
        if(step==0){
         jump++;
         step=max_reach-i; 
        }
    }
    if(max_reach>=n-1) return jump;
    return -1;
   
        
    }
};
