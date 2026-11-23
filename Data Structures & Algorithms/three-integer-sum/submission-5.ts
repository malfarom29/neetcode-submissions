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
                const sum = nums[j] + nums[k];
                const target = -nums[i];
                if (sum > target) k--;
                else if (sum < target) j++;
                else {
                    res.push([nums[i], nums[j], nums[k]]);
                    k--;
                    while (j < k && nums[k] === nums[k + 1]) k--;
                }
            }
        }

        return res;
    }
}
