class Solution {
public:
    int maxScoreSightseeingPair(vector<int>& A) {
        int res = 0, n = A.size(), mx = 0;
        for (int i = 0; i < n; ++i) {
            res = max(res, mx + A[i] - i);
            mx = max(mx, A[i] + i);
        }
        return res;
    }
};
