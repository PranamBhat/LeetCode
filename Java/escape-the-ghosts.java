class Solution {
    boolean escapeGhosts(int[][] ghosts, int[] target) {

        if (ghosts == null || ghosts.length == 0) {
            return true;
        }
        int myDistance = getDistance(new int[]{0, 0}, target);
        int m = ghosts.length;
        for (int i = 0; i < m; i++) {
            int tmpDistance = getDistance(ghosts[i], target);
            if (tmpDistance <= myDistance) {
                return false;
            }
        }

        return true;
    }

    int getDistance(int[] source, int[] target) {
        return Math.abs(source[0] - target[0]) + Math.abs(source[1] - target[1]);
    }
    
}
