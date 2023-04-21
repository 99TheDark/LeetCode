function findKthLargest(nums: number[], k: number): number {
    let n = nums.sort((a, b) => a - b);
    return n[n.length - k];
};
