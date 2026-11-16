class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) {
            return 0
        }

        const setArr = new Set(nums);
    let longestSequenceLength = 1;

    for (const val of setArr) {
        let sequenceLength = 1;
        if (!setArr.has(val - 1)) {
            let n = val;
            while (setArr.has(n + 1)) {
                sequenceLength += 1;
                n += 1;
            }
        }

        if (sequenceLength > longestSequenceLength) longestSequenceLength = sequenceLength;
    }

    return longestSequenceLength;
    }
}
