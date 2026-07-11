class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // let numbers = new Set(nums);
        // return nums.length !== numbers.size;

        let set = new Set();

        for(let num of nums) {
            if (set.has(num)) return true;
            set.add(num);
        }
        return false;
    }
}
