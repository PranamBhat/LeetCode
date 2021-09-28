class Solution {
public:
    int rob(vector<int>& nums) {
        int sz = nums.size();
        int r = 0;
        if (sz == 0) {return 0;}
        if (sz < 4) {
            for (int i=0;i<sz;i++){
                r = max(r, nums[i]);
            }
            return r;
        }
        
        // From 0 to n-1
        vector<int> res(sz,0);
        res[0] = nums[0];
        res[1] = max(nums[1],nums[0]);
        int i=2;
        while (i < sz-1){
            res[i] = max(res[i-1], res[i-2] + nums[i]);
            i++;
        }
        r = res[sz-2];
        
        // From 1 to n
        res.clear();
        res[1] = nums[1];
        res[2] = max(nums[1],nums[2]);
        i = 3;
        while (i<sz){
            res[i] = max(res[i-1], res[i-2] + nums[i]);
            i++;
        }
       
        return max(r, res[sz-1]);
    }
};
