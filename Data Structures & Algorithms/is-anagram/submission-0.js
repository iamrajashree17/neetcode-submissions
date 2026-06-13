class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (t.length !== s.length) return false;

        let map = new Map();

        for (let c of s) {
            map.set(c, (map.get(c) || 0 ) + 1)
        }

        for (let c of t) {
            if (!map.has(c)) return false;

            map.set(c, map.get(c) - 1);
            if(map.get(c) === 0) map.delete(c);
        }

        return true;
    }
}
