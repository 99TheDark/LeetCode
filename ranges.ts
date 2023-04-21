function summaryRanges(nums: number[]): string[] {
    let ranges = [];
    let initial = nums[0];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num + 1 != nums[i + 1]) {
            if (initial == num) {
                ranges.push(`${num}`)
            } else {
                ranges.push(`${initial}->${num}`);
            }
            initial = nums[i + 1];
        }
    }
    return ranges;
};
