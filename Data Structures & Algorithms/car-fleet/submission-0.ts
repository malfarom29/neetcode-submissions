class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const mps = new Map();
        const n = position.length;
        const fleets: number[] = [];
        
        for (let i = 0; i < n; i++) {
            mps.set(position[i], speed[i]);
        }

        position.sort((a, b) => b - a).forEach(p => {
            const time = (target - p) / mps.get(p);
            if (fleets.length === 0 || time > fleets[fleets.length - 1]) fleets.push(time);
        })

        return fleets.length;
    }
}
