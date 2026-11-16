class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) return 0;

        let set = new Set<number>(nums);
        let longest = 0;

        for (const num of set) {
            if (!set.has(num - 1)) {
                let streak = 1;
                while (set.has(num + streak)) streak++;

                longest = Math.max(streak, longest);
            }
        }

        return longest;
    }
}
