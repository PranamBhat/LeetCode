class Solution {
public:
    bool canJump(vector<int>& nums) {
        if(nums.size()==1) return true  ; 
        if(!nums.size()) return false   ;
        int maxx = 0    ; 
        bool ans = true ;
        for(int i = 0 ; i < nums.size() ; i ++ )
        {
            if( nums[i] ) maxx = max( maxx , i + nums[i] ) ;
            else 
            {
                if( maxx <= i && i != nums.size() - 1 ) {ans = false ; break ; }
            }
        }
        return ans ;
    }
};
