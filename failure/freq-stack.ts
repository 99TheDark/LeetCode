class FreqStack {
    private stack: Array<number>;

    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        this.stack.push(val);
    }

    pop(): number {
        let count: object = {};
        this.stack.forEach(el => {
            if(!(el in count)) count[el] = 0;
            count[el]++;
        });
        let max = Number.MIN_VALUE;
        let maximums = [];
        Object.entries(count).forEach(entry => {
            let key = Number(entry[0]);
            let val = entry[1];
            if(val == max) {
                maximums.push(key);
            } else if(val > max) {
                max = val;
                maximums = [key];
            }
        });
        let top = {
            idx: -1,
            val: null
        };
        maximums.forEach(val => {
            let idx = this.stack.lastIndexOf(val);
            if(top.idx < idx) {
                [top.idx, top.val] = [idx, val];
            }
        });
        this.stack.splice(top.idx, 1);
        return top.val;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
