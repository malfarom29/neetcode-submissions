class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let set = new Set<number>(nums);
        let longest = 0;

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            if (!set.has(num - 1)) {
                let streak = 1;
                while (set.has(num + streak)) streak++;

                longest = Math.max(streak, longest);
            }
        }

        return longest;
    }
}
