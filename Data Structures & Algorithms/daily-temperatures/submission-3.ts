class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temps: number[]): number[] {
        const stack: number[] = [];
        const n = temps.length;
        const res = new Array(n).fill(0);

        for (let i = 0; i < n; i++) {
            while (stack.length && temps[stack[stack.length - 1]] < temps[i]) {
                const popped = stack.pop();
                res[popped] = i - popped;
            }
            stack.push(i);
        }

        return res
    }
}
