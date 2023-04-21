function containsNearbyDuplicate(nums: number[], k: number): boolean {
    for(let i = 0; i < nums.length; i++) {
        let a = nums[i];
        for(let j = 0; j < nums.length; j++) {
            let b = nums[j];
            if(i == j) break;
            if(a == b && Math.abs(i - j) <= k) return true;
        }
    }
    return false;
};
