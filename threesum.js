// Horrors.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let intsort = (a, b) => a - b;
    let triplets = [];
    for(let i = 0; i < nums.length; i++) {
        let a = nums[i];
        for(let j = 0; j < nums.length; j++) {
            let b = nums[j];
            for(let k = 0; k < nums.length; k++) {
                let c = nums[k];
                if(i == j || i == k || j == k) break;
                if(a + b + c == 0) {
                    let newarr = [a, b, c].sort(intsort);

                    let duplicate = false;
                    for(let arr of triplets) {
                        let problem = true;
                        arr.every((n, idx) => {
                            if(n != newarr[idx]) {
                                problem = false;
                                return false;
                            }
                            return true;
                        });
                        if(problem) {
                            duplicate = true;
                            break;
                        }
                    }
                    if(!duplicate) triplets.push(newarr);
                }
            }
        }
    }
    return triplets;
};
