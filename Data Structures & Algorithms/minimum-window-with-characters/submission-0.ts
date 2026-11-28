class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        const tMap = new Map<string, number>();
        const sMap = new Map<string, number>();
        let need = 0, have = 0;

        for (const c of t) {
            if (!tMap.has(c)) need++;
            if (!sMap.has(c)) sMap.set(c, 0);
            tMap.set(c, (tMap.get(c) ?? 0) + 1);
        }
        let bestLen = Infinity, bestStart = 0, left = 0;

        for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (tMap.has(c)) {
        sMap.set(c, sMap.get(c)! + 1);
        if (sMap.get(c) === tMap.get(c)) have++;
    }

    while (have === need) {
        if (i - left + 1 < bestLen) {
            bestLen = i - left + 1;
            bestStart = left;
        }
        const out = s[left];
        if (tMap.has(out)) {
            sMap.set(out, sMap.get(out)! - 1);
            if (sMap.get(out)! < tMap.get(out)!) have--;
        }
        left++;
    }
}

        return bestLen === Infinity ? "" : s.substring(bestStart, bestStart + bestLen);
    }
}
