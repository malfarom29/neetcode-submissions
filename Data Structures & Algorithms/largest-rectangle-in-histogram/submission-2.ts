class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        const hsCopy = [...heights, 0];
        const stack = [];
        let maxArea = 0;

        for (let i = 0; i < hsCopy.length; i++) {
            while (stack.length != 0 && hsCopy[stack[stack.length - 1]] > hsCopy[i]) {
                const hi = stack.pop();
                const h = hsCopy[hi];
                const w = stack.length == 0 ? i : i - stack[stack.length - 1] - 1;
                maxArea = Math.max(maxArea, h * w);
            }

            stack.push(i);
        }

        return maxArea;
    }
}
