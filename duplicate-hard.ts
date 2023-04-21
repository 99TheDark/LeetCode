/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    for(let i = 0; i < nums.length; i++) {
        let a = nums[i];
        for(let j = 0; j < nums.length; j++) {
            let b = nums[j];
            if(i == j) break;

            if(
                Math.abs(i - j) <= indexDiff &&
                Math.abs(a - b) <= valueDiff
            ) return true;
        }
    }
    return false;
};
