class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const n = s.length;
        const count = new Array(26).fill(0);
        const idx = (c: string) => c.charCodeAt(0) - 65;
        let best = 0, left = 0, maxCount = 0;

        for (let i = 0; i < n; i++) {
            count[idx(s[i])]++;
            maxCount = Math.max(maxCount, count[idx(s[i])]);

            if ((i - left + 1) - maxCount > k) {
                count[idx(s[left])]--;
                left++;
            }

            best = Math.max(best, i - left + 1);
        }

        return best;
    }
}
