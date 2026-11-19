class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let i = 0, j = numbers.length - 1;
        const res = []

        while (i < j) {
            const sum = numbers[i] + numbers[j];

            if (sum > target) {
                j--;
            }else if(sum < target) {
                i++;
            }

            if (sum === target) {
                res[0] = i + 1;
                res[1] = j + 1;
                break;
            }
        }

        return res;
    }
}
