/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let closest = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < nums.length; i++) {
        let a = nums[i];
        for(let j = 0; j < nums.length; j++) {
            let b = nums[j];
            for(let k = 0; k < nums.length; k++) {
                let c = nums[k];

                if(i == j || i == k || j == k) break;

                let sum = a + b + c;
                
                let d1 = Math.abs(closest - target);
                let d2 = Math.abs(sum - target);
                
                if(d2 < d1) closest = sum;
            }
        }
    }
    return closest;
};
