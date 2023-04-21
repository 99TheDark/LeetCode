// Got a time limit exceeded error

public class Solution {
    public int[] MaxSlidingWindow(int[] nums, int k) {
        int[] maximums = new int[nums.Length - k + 1];
        for(int i = 0; i <= nums.Length - k; i++) {
            int max = Int32.MinValue;
            for(int j = i; j < i + k; j++) {
                int num = nums[j];
                if(num > max) max = num;
            }
            maximums[i] = max;
        }
        return maximums;
    }
}
