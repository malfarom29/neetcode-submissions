class MinStack {
    private storage: number[];
    private minValue: number;

    constructor() {
        this.storage = []
        this.minValue = Infinity;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.storage.push(val);
        this.minValue = Math.min(this.minValue, val)
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.storage.pop();
        this.minValue = Math.min(...this.storage);
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.storage[this.storage.length - 1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minValue;
    }
}
