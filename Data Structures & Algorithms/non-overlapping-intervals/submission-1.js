class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        if (intervals.length === 0) {
            return 0;
        }
        intervals.sort((a, b) => a[1] - b[1]);

        let prevEnd = intervals[0][1];
        let count = 1;
        for (let i = 1; i < intervals.length; i++) {
            if(intervals[i][0] >= prevEnd) {
                prevEnd = intervals[i][1];
                count++;
            }
        }

        return intervals.length - count;
    }
}
