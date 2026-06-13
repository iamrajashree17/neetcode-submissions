class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set();
        for (const num of nums) {
            if(seen.has(num)) {
                return true;
            }
            seen.add(num);
        }
        return false;
    }

    // return new Set(nums).size < nums.length;
}
