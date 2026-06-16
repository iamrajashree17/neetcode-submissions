class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let start = 0;
        let char = {};
        let maxFreq = 0;
        let maxLen = 0;

        for (let end = 0; end < s.length; end++) {
            char[s[end]] = (char[s[end]] || 0 ) + 1;
            maxFreq = Math.max(maxFreq, char[s[end]]);

            if ((end - start + 1) - maxFreq > k) {
                char[s[start]]--;
                start++;
            }
            maxLen = Math.max(maxLen, end - start + 1);
        }
        return maxLen;
    }
}
