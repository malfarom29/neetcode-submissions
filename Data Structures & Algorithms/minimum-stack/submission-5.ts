class MinStack {
    private storage: number[];
    private minValues: number[];

    constructor() {
        this.storage = []
        this.minValues = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        const currMin = this.getMin() ?? Infinity;
        this.storage.push(val);
        if (val <= currMin) {
            this.minValues.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        const val = this.storage.pop();
        if (val <= this.getMin()) {
            this.minValues.pop()
        }
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
        return this.minValues[this.minValues.length - 1];
    }
}
