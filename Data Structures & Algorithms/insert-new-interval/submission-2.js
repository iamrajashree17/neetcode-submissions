class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {

        const merged = [];

        let i = 0;
        let n = intervals.length;

        while (i < n && intervals[i][1] < newInterval[0]){
            merged.push(intervals[i]);
            i++;
        }

        while(i < n && intervals[i][0] <= newInterval[1] ) {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
            i++;
        }
        merged.push(newInterval);

        for(let j = i; j < intervals.length; j++) {
            merged.push(intervals[j]);
        }

        return merged;
    }
}
