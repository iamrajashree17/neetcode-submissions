class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let count = 0;
        for (let x of set) {
            let streak = 0;
            if (!set.has(x - 1)) {
                let current = x;
                let streak = 1;
                while(set.has(current + 1)) {
                    current++;
                    streak++;
                }
                count = Math.max(count, streak)
            }
        }
        return count;
    }
}
