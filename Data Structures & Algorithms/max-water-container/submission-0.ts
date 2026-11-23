class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        const n = heights.length;
        let maxArea = 0;
        let i = 0;
        let j = n - 1;

        while (i < j) {
            const h = Math.min(heights[i], heights[j]);
            const w = j - i;
            maxArea = Math.max(maxArea, h * w);
            
            if (heights[i] < heights[j]) i++;
            else j--;
        }

        return maxArea;
    }
}
