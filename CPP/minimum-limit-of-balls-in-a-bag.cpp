class Solution {
public:
    int minimumSize(vector<int>& nums, int maxOperations) {
        int low = 1, high = 1000000000;
        
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (check(nums, maxOperations, mid))
                high = mid - 1;
            else
                low = mid + 1;
        }
        
        return low;
    }
    
    bool check(vector<int>& nums, int maxOperations, int penalty) {
        for (int num : nums) {
            maxOperations -= (num - 1) / penalty;
            if (maxOperations < 0)
                return false;
        }
        
        return true;
    }
};
