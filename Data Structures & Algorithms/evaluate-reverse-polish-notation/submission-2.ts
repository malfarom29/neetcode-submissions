type OperationSign = '+' | '-' | '*' | '/';
interface OperationPayload {
    sign: OperationSign;
    firstVal: number;
    secondVal: number;
}

class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    readonly OPERATION_SIGNS: string[] = ['+', '-', '*', '/']
    evalRPN(tokens: string[]): number {
        const stack: number[] = []
        const operation = (params: OperationPayload) => {
            switch(params.sign) {
                case "*":
                    return params.firstVal * params.secondVal;
                case "+":
                    return params.firstVal + params.secondVal;
                case "-":
                    return params.firstVal - params.secondVal;
                case "/":
                    return Math.trunc(params.firstVal / params.secondVal);
            }
        }

        for (const item of tokens) {
            if(!this.OPERATION_SIGNS.includes(item)) {
                stack.push(+item);
            } else {
                const firstPop = stack.pop();
                const secondPop = stack.pop();

                stack.push(operation({
                    sign: item as OperationSign,
                    firstVal: secondPop,
                    secondVal: firstPop,
                }));
            }
        }

        return stack[0];
    }
}
