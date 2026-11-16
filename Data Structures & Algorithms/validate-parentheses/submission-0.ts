class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = [];
        const strMap = new Map();

        strMap.set('(', ')');
        strMap.set('{', '}');
        strMap.set('[', ']');

        if (s === '') {
            return true;
        }

        for (const c of s) {
            if (strMap.has(c)) {
                stack.push(c);
            } else if (strMap.get(stack[stack.length - 1]) === c) {
                stack.pop();
            } else {
                return false;
            }
        }

        return stack.length === 0;
    }
}
