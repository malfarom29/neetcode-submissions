class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        const n = height.length;
        let i = 0;
        let j = n - 1;
        let total = 0;
        let lMax = 0, rMax = 0;

        while (i < j) {
            lMax = Math.max(lMax, height[i]);
            rMax = Math.max(rMax, height[j]);

            if (lMax < rMax) {
                total += lMax - height[i];
                i++;
            } else{
                total += rMax - height[j];
                j--;
            }
        }

        return total;
    }
}
