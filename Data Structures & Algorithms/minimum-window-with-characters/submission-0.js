class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let start = 0;
        let l = 0;
        let count = t.length;
        let minLen = Infinity;
        let map = new Map();

        for(let c of t) {
            map.set(c, (map.get(c) || 0) + 1);
        }

        for (let r = 0; r < s.length; r++) {
            if (map.has(s[r])) {
                if(map.get(s[r]) > 0) count--;
                map.set(s[r], map.get(s[r]) - 1);
            }
            while(count === 0) {
                let len = r - l + 1;

                if(len < minLen) {
                    minLen = len;
                    start = l;
                }

                if (map.has(s[l])) {
                    map.set(s[l], map.get(s[l]) + 1)
                    if(map.get(s[l]) > 0) count++;
                }
                l++;
            }
        }
        return minLen === Infinity ? "" : s.substring(start, start + minLen)
    }
}
