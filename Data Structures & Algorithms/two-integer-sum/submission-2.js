class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();

        for(let i = 0; i < nums.length; i++) {
            let need = target - nums[i];

            if(map.has(need)) return [i, map.get(need)];

            map.set(nums[i], i);
        }
    }
}
