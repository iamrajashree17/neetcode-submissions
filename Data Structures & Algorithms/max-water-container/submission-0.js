class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;

        let maxArea = 0;

        while (left < right) {
            const h = Math.min(heights[left], heights[right]);
            const w = right - left;

            const area = h * w;
            maxArea = Math.max(maxArea, area);

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxArea;
    }
}
