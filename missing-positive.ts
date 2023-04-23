function firstMissingPositive(nums: number[]): number {
    let has = [];
    nums.forEach(num => {
        if (num > 0) {
            // Make sure 0 doesn't count, so shift over one
            has[num - 1] = true;
        }
    });
    // Index of the empty spot
    let idx = -1;
    for (let i = 0; i < has.length; i++) if (!has[i]) {
        idx = i;
        break;
    }
    if (idx == -1) idx = has.length;

    // Undo the offset
    idx++; 

    return idx;
};
