class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const idx = (c: string) => c.charCodeAt(0) - 'a'.charCodeAt(0);

        const k = s1.length;
        const n = s2.length;
        const s1Table = new Array(26).fill(0);
        const windowTable = new Array(26).fill(0);
        const window = s2.substring(0, k);

        for (const c of s1) s1Table[idx(c)]++;
        for (const c of window) windowTable[idx(c)]++;

        if (s1Table.join(',') === windowTable.join(',')) return true;

        for (let r = k; r < n; r++) {
            windowTable[idx(s2[r])]++;
            windowTable[idx(s2[r - k])]--;
            if (s1Table.join(',') === windowTable.join(',')) return true;
        }
        
        return false;
    }
}
