class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const len = s.length;
        let i = 0, j = len - 1;

        while (i < j) {
            if (!s[i].match(/[a-zA-Z0-9]/)) {
                i++;
                continue;
            }

            if (!s[j].match(/[a-zA-Z0-9]/)) {
                j--;
                continue;
            }

            if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;

            i++;
            j--;
        }

        return true;
    }
}
