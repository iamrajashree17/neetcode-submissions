class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (t.length !== s.length) return false;

        let freq = new Map();

        for (let c of s) {
            freq.set(c, (freq.get(c) || 0 ) + 1);
        }

        for (let c of t) {
            if (!freq.has(c)) return false;

            freq.set(c, freq.get(c) - 1);
            if(freq.get(c) === 0) freq.delete(c)
        }
        return true;
    }
}
