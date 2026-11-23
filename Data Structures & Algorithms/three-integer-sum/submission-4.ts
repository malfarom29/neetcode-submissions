class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const n = nums.length;
        const res: number[][] = [];
        nums.sort((a, b) => a - b);
        for (let i = 0; i < n; i++) {
            let j = i + 1;
            let k = n - 1;

            if (i > 0 && nums[i] === nums[i - 1]) continue;

            while (j < k) {
                if (nums[j] + nums[k] > -nums[i] || nums[k] === nums[k + 1]) k--;
                else if (nums[j] + nums[k] < -nums[i]) j++;
                else if (nums[j] + nums[k] === -nums[i]) {
                    res.push([nums[i], nums[j], nums[k]]);
                    k--;
                }
            }
        }

        return res;
    }
}
