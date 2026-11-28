class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let best = 0; 
        const r = new Set<string>(); 
        const n = s.length; 
        let left = 0; 
        for (let i = 0; i < n; i++) { 
            while (r.has(s[i])) {
                r.delete(s[left]);
                left++;
            }
            r.add(s[i]);
            best = Math.max(best, i - left + 1);
        }

        return best;
    }
}
