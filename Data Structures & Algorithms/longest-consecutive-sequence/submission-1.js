class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let best = 0;
        for (let x of set) {
            if (!set.has(x - 1)) {
                let current = x;
                let streak = 1;
                while(set.has(current + 1)) {
                    current++;
                    streak++;
                }
                best = Math.max(best, streak)
            }
        }
        return best;
    }
}
