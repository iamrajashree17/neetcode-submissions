class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let start = 0;
        let char = new Map();
        let maxFreq = 0;
        let maxLen = 0;

        for (let end = 0; end < s.length; end++) {
            char.set(s[end], (char.get(s[end]) || 0 ) + 1 );
            maxFreq = Math.max(maxFreq, char.get(s[end]));

            while ((end - start + 1) - maxFreq > k) {
                char.set(s[start], char.get(s[start]) - 1);
                start++;
            }
            maxLen = Math.max(maxLen, end - start + 1);
        }
        return maxLen;
    }
}
