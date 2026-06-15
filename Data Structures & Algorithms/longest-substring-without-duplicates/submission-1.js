class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let start = 0;
        let set = new Set();
        let maxLen = -Infinity;

        for (let end = 0; end < s.length; end++) {
            while (set.has(s[end])) {
                set.delete(s[start]);
                start++;
            }
            maxLen = Math.max(maxLen, end - start + 1);
            set.add(s[end])
        }
        return maxLen === -Infinity ? 0 : maxLen;
    }
}
