class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        let sortedIntervals = intervals.sort((a,b) => a[0] - b[0]);
        let merged = [];

        for (let interval of sortedIntervals) {
            if (merged.length === 0 || merged[merged.length - 1][1] < interval[0] ) {
                merged.push(interval)
            } else {
                merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1])
            }
        }

        return merged;
    }
}
