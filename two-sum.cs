public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        for(int i = 0; i < nums.Length; i++) {
            int a = nums[i];
            for(int j = 0; j < nums.Length; j++) {
                if(i == j) break;
                int b = nums[j];

                if(a + b == target) return new[] {i, j};
            }
        }
        return new[] {-1, -1};
    }
}
